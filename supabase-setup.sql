create table if not exists public.study_cloud_profiles (
  slug text primary key,
  display_name text,
  pin_hash text not null,
  is_public boolean not null default true,
  updated_at timestamptz not null default now()
);

create table if not exists public.study_cloud_records (
  slug text not null references public.study_cloud_profiles(slug) on delete cascade,
  record_id text not null,
  record jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (slug, record_id)
);

alter table public.study_cloud_profiles enable row level security;
alter table public.study_cloud_records enable row level security;

drop policy if exists "public can read public profiles" on public.study_cloud_profiles;
drop policy if exists "public can read public records" on public.study_cloud_records;

create policy "public can read public profiles"
on public.study_cloud_profiles
for select
using (is_public = true);

create policy "public can read public records"
on public.study_cloud_records
for select
using (
  exists (
    select 1
    from public.study_cloud_profiles p
    where p.slug = study_cloud_records.slug
      and p.is_public = true
  )
);

create or replace function public.save_study_cloud(
  p_slug text,
  p_pin text,
  p_records jsonb,
  p_display_name text default null,
  p_is_public boolean default true
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_slug text := lower(trim(p_slug));
  v_hash text := md5(coalesce(p_pin, ''));
  v_existing text;
  v_record jsonb;
  v_count integer := 0;
begin
  if v_slug !~ '^[a-z0-9][a-z0-9_-]{2,31}$' then
    raise exception 'invalid slug';
  end if;

  if length(coalesce(p_pin, '')) < 4 then
    raise exception 'pin too short';
  end if;

  if jsonb_typeof(p_records) <> 'array' then
    raise exception 'records must be an array';
  end if;

  select pin_hash into v_existing
  from public.study_cloud_profiles
  where slug = v_slug;

  if v_existing is null then
    insert into public.study_cloud_profiles (slug, display_name, pin_hash, is_public, updated_at)
    values (v_slug, nullif(trim(coalesce(p_display_name, '')), ''), v_hash, p_is_public, now());
  elsif v_existing <> v_hash then
    raise exception 'wrong pin';
  else
    update public.study_cloud_profiles
    set display_name = coalesce(nullif(trim(coalesce(p_display_name, '')), ''), display_name),
        is_public = p_is_public,
        updated_at = now()
    where slug = v_slug;
  end if;

  delete from public.study_cloud_records where slug = v_slug;

  for v_record in select * from jsonb_array_elements(p_records)
  loop
    insert into public.study_cloud_records (slug, record_id, record, updated_at)
    values (v_slug, coalesce(v_record->>'id', gen_random_uuid()::text), v_record, now());
    v_count := v_count + 1;
  end loop;

  return jsonb_build_object('ok', true, 'count', v_count, 'slug', v_slug);
end;
$$;

grant execute on function public.save_study_cloud(text, text, jsonb, text, boolean) to anon, authenticated;

create or replace function public.verify_study_cloud_pin(
  p_slug text,
  p_pin text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_slug text := lower(trim(p_slug));
  v_hash text := md5(coalesce(p_pin, ''));
  v_existing text;
begin
  if v_slug !~ '^[a-z0-9][a-z0-9_-]{2,31}$' then
    raise exception 'invalid slug';
  end if;

  if length(coalesce(p_pin, '')) < 4 then
    raise exception 'pin too short';
  end if;

  select pin_hash into v_existing
  from public.study_cloud_profiles
  where slug = v_slug;

  if v_existing is null then
    raise exception 'cloud profile not found';
  end if;

  if v_existing <> v_hash then
    raise exception 'wrong pin';
  end if;

  return jsonb_build_object('ok', true, 'slug', v_slug);
end;
$$;

grant execute on function public.verify_study_cloud_pin(text, text) to anon, authenticated;

create or replace function public.load_study_cloud(
  p_slug text,
  p_pin text default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_slug text := lower(trim(p_slug));
  v_hash text := md5(coalesce(p_pin, ''));
  v_profile public.study_cloud_profiles%rowtype;
  v_records jsonb;
begin
  if v_slug !~ '^[a-z0-9][a-z0-9_-]{2,31}$' then
    raise exception 'invalid slug';
  end if;

  select * into v_profile
  from public.study_cloud_profiles
  where slug = v_slug;

  if v_profile.slug is null then
    raise exception 'cloud profile not found';
  end if;

  if coalesce(p_pin, '') <> '' and v_profile.pin_hash <> v_hash then
    raise exception 'wrong pin';
  end if;

  if v_profile.is_public = false and (coalesce(p_pin, '') = '' or v_profile.pin_hash <> v_hash) then
    raise exception 'wrong pin';
  end if;

  select coalesce(jsonb_agg(record order by record_id), '[]'::jsonb)
  into v_records
  from public.study_cloud_records
  where slug = v_slug;

  return v_records;
end;
$$;

grant execute on function public.load_study_cloud(text, text) to anon, authenticated;

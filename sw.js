const CACHE_NAME = "wrong-question-organizer-image-audit-pwa-v7";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=20260615-images-2",
  "./app.js?v=20260615-images-2",
  "./manifest.webmanifest",
  "./question-image-audit.json",
  "./question-image-match-report.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./专升本高数错题导入_M001-M004_169题完整重整版.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async (cache) => {
        await cache.addAll(ASSETS);
        try {
          const response = await fetch("./question-image-audit.json");
          const audit = await response.json();
          await cache.addAll((audit.images || []).map((image) => `./${image.outputPath}`));
        } catch {
          // The app shell still installs if optional source images cannot be prefetched.
        }
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((key) => key !== CACHE_NAME)
        .map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: "window" }))
      .then((clients) => Promise.all(clients.map((client) => client.navigate(client.url))))
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(event.request)
        .then((response) => {
          if (response.ok && new URL(event.request.url).origin === self.location.origin) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }
          return undefined;
        });
    })
  );
});

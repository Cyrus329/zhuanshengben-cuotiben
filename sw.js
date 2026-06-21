const CACHE_NAME = "zsb-cuotiben-math-only-20260620-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=20260617-m006-detailed-2",
  "./app.js?v=20260617-m006-detailed-2",
  "./manifest.webmanifest",
  "./question-image-audit.json",
  "./question-image-match-report.json",
  "./question-image-bundle-1.js",
  "./question-image-bundle-2.js",
  "./question-image-bundle-3.js",
  "./question-image-bundle-4.js",
  "./question-image-bundle-5.js",
  "./question-image-bundle-6.js",
  "./question-image-bundle-7.js",
  "./question-image-bundle-8.js",
  "./question-image-bundle-9.js",
  "./question-image-bundle-10.js",
  "./question-image-bundle-11.js",
  "./question-image-bundle-12.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./专升本高数错题导入_M001-M004_169题完整重整版.json",
  "./专升本高数错题导入_含未分配题库.json",
  "./未分配题库_新增错题卡.json",
  "./未分配题库_未入库待核对.json",
  "./未分配题库全量核对报告.md",
  "./M系列核对报告.md",
  "./M系列核对报告.json",
  "./M005_新上传Word错题_逐题拆分.json",
  "./M005_新上传Word错题_逐题拆分报告.md",
  "./M005_新上传Word错题_逐题拆分报告.json",
  "./M005_免图片文件夹版说明.md",
  "./M006_新上传Word错题_导入.json",
  "./M006_新上传Word错题_导入报告.md",
  "./M006_新上传Word错题_导入报告.json"
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
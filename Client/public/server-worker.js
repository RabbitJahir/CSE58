const CACHE_NAME = "cse58-v1"; // 🔁 change this on every deploy
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico"
];

// 🧱 Install → cache essential files
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// 🔄 Activate → remove old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // 🧹 delete old cache
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 🌐 Fetch → network first, fallback to cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Save fresh copy in cache
        const resClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, resClone);
        });
        return response;
      })
      .catch(() => {
        // If offline → serve from cache
        return caches.match(event.request);
      })
  );
});
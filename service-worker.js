
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('nirvana-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'icon-192.png',
        'icon-512.png',
        'manifest.json'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

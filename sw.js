self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('sos-cache-v2').then((cache) => cache.addAll([
        './index.html',
        './hospitais_es.json'
      ]))
    );
});
  
self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
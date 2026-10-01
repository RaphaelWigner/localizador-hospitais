self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('sos-cache-v2').then((cache) => cache.addAll([
        './index.html',
        './hospitais_es.json'
        // Removemos o ficheiro gigante de ruas daqui. O IndexedDB tratará dele!
      ]))
    );
});
  
self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
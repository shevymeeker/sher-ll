self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('wildman-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/app.js',
        '/components/ui.js',
        '/components/module-loader.js',
        '/branding/logo.png',
        '/branding/branding.json',
        '/manifest.webmanifest',
        '/modules/sample-module/index.html',
        '/modules/sample-module/module.json'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});

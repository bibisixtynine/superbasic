/*
 * ServiceWorker to make site function as a PWA (Progressive Web App)
 *
 * Based on https://glitch.com/~pwa by https://glitch.com/@PaulKinlan
 */

// Specify what we want added to the cache for offline use
console.log('#1 coucou depuis sw.js')

self.addEventListener("install", e => {
  console.log('#3 coucou depuis sw.js')
  e.waitUntil(
    // Give the cache a name
    caches.open("esbuild69-pwa").then(cache => {
      // Cache the homepage and stylesheets - add any assets you want to cache!
      return cache.addAll([
        "/",
        "/index.js",
        "/index.css"
      ]);
    })
  );
});

// Network falling back to cache approach
self.addEventListener('fetch', function(event) {
  console.log('#2 coucou depuis sw.js')
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
// Simple service worker for offline support
self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', (event) => {
  // Basic fetch handler - optional offline caching
  event.respondWith(fetch(event.request));
});
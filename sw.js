const CACHE='inventa-v5-unico';
const FILES=['/RASTREO-DE-PEDIDOS-/','/RASTREO-DE-PEDIDOS-/index.html','/RASTREO-DE-PEDIDOS-/manifest.json','/RASTREO-DE-PEDIDOS-/logo.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.map(x=>x!==CACHE?caches.delete(x):null))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});

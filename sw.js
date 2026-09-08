/* HK → KR 2026 — offline shell + runtime tile cache */
const V     = 'hkkr26-v1';
const SHELL = V + '-shell';
const TILES = V + '-tiles';
const MAX_TILES = 700;

const ASSETS = [
  './', './index.html',
  './assets/css/app.css',
  './assets/js/data.js',
  './assets/js/app.js',
  './manifest.webmanifest',
  './assets/icons/icon.svg',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/vendor/leaflet.css',
  './assets/vendor/leaflet.js',
  './assets/icons/icon-maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(SHELL);
    await Promise.all(ASSETS.map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => !k.startsWith(V)).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

async function trim(name, max){
  const c = await caches.open(name);
  const keys = await c.keys();
  if (keys.length > max) await Promise.all(keys.slice(0, keys.length - max).map(k => c.delete(k)));
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  /* map tiles — cache first, then network, capped */
  if (/basemaps\.cartocdn\.com|tile\.openstreetmap\.org/.test(url.hostname)) {
    e.respondWith((async () => {
      const c = await caches.open(TILES);
      const hit = await c.match(req);
      if (hit) return hit;
      try {
        const res = await fetch(req);
        if (res && (res.ok || res.type === 'opaque')) { c.put(req, res.clone()); trim(TILES, MAX_TILES); }
        return res;
      } catch (err) {
        return hit || Response.error();
      }
    })());
    return;
  }

  /* app shell — network first for navigations, cache first for assets */
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const res = await fetch(req);
        const c = await caches.open(SHELL); c.put('./index.html', res.clone());
        return res;
      } catch (err) {
        return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
      }
    })());
    return;
  }

  e.respondWith((async () => {
    const hit = await caches.match(req, { ignoreVary: true });
    if (hit) return hit;
    try {
      const res = await fetch(req);
      if (res && res.ok && url.origin === location.origin) {
        const c = await caches.open(SHELL); c.put(req, res.clone());
      }
      return res;
    } catch (err) { return Response.error(); }
  })());
});

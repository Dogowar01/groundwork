/* ============================================================
   Groundwork — service worker

   Strategy:
   • HTML navigations → NETWORK-FIRST (always get the latest app
     when online; fall back to the cached copy offline).
   • Google Fonts      → stale-while-revalidate.
   • Other same-origin → cache-first.

   Bump CACHE to retire old caches on the next visit.
   ============================================================ */
"use strict";
const CACHE = "groundwork-v6";
const TILE_CACHE = "groundwork-tiles-v1";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg"];
const TILE_HOSTS = ["services.thelist.tas.gov.au", "server.arcgisonline.com"];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => Promise.all(
      SHELL.map(u => c.add(u).catch(() => {/* tolerate a missing shell entry */}))
    ))
  );
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE && k !== TILE_CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

const isDoc = req =>
  req.mode === "navigate" ||
  (req.destination === "document") ||
  (req.headers.get("accept") || "").includes("text/html");

const isFont = url =>
  url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (isDoc(req)) {
    // network-first: never let a stale app shell stick
    e.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const c = await caches.open(CACHE);
        c.put("./index.html", fresh.clone());
        return fresh;
      } catch {
        return (await caches.match("./index.html")) || Response.error();
      }
    })());
    return;
  }

  if (TILE_HOSTS.includes(url.hostname)) {
    // map tiles: cache-first — revisit your block offline
    e.respondWith((async () => {
      const c = await caches.open(TILE_CACHE);
      const cached = await c.match(req);
      if (cached) return cached;
      try {
        const fresh = await fetch(req);
        c.put(req, fresh.clone());
        return fresh;
      } catch {
        return Response.error();
      }
    })());
    return;
  }

  if (isFont(url)) {
    // stale-while-revalidate
    e.respondWith((async () => {
      const c = await caches.open(CACHE);
      const cached = await c.match(req);
      const network = fetch(req).then(res => { c.put(req, res.clone()); return res; }).catch(() => null);
      return cached || (await network) || Response.error();
    })());
    return;
  }

  if (url.origin === location.origin) {
    // cache-first for same-origin assets
    e.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const fresh = await fetch(req);
        const c = await caches.open(CACHE);
        c.put(req, fresh.clone());
        return fresh;
      } catch {
        return Response.error();
      }
    })());
  }
});

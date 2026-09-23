const CACHE="xingyinyi-v5";
const CORE=["./","./index.html","./manifest.webmanifest","./icon.svg"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE.map(u=>new Request(u,{cache:"reload"})))).catch(()=>{}));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
// 網頁本體走「網路優先」：有網路就拿最新版並更新快取，離線才用快取；其他檔案維持快取優先
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method!=="GET"||u.origin!==location.origin)return;
const isPage=e.request.mode==="navigate"||u.pathname.endsWith("/")||u.pathname.endsWith(".html");
if(isPage){e.respondWith(fetch(e.request,{cache:"no-cache"}).then(resp=>{const cp=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,cp)).catch(()=>{});return resp;}).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html"))));return;}
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const cp=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,cp)).catch(()=>{});return resp;}).catch(()=>caches.match("./index.html"))));});

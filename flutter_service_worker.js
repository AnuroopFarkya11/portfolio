'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "f76745fe9f7872e5b99ec0f1816bd2ec",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.json": "e1a5ded43fe08d3e0eca55bda4fc0d31",
"assets/outputs/gif/mobile.gif": "201990cae68f3d8d16a35a22500ab358",
"assets/outputs/gif/desktop.gif": "52e4daec50892bd8b4da1d3f4dfa1f05",
"assets/assets/svg/guy.svg": "384b0cd380b8ce087e170fe5b3dc7f6b",
"assets/assets/svg/person.svg": "00abbb5ba3e0acac159c8a7a664b7750",
"assets/assets/images/technology/flutter.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/assets/images/technology/swift.png": "6740f74615e8d2b6558d7d31fc7edb1e",
"assets/assets/images/technology/scenekit.jpeg": "dab8749c82628f14b8e5865b6a852cc3",
"assets/assets/images/technology/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/images/technology/javascript.png": "2e5de0a7d635b437db088d43f847d39c",
"assets/assets/images/technology/c++.png": "8949bfc86fc10ef1505994eb643e940b",
"assets/assets/images/technology/razorpay.png": "368b761622d88029de7be2aadff6b7d3",
"assets/assets/images/technology/php.png": "b187e3b1985b0aa738093d97ce028ab6",
"assets/assets/images/technology/firebase.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/assets/images/technology/flask.png": "8615243e0ddaab150399cf0eca65a5ff",
"assets/assets/images/social/medium.png": "276ae11521896bd9a529e02aad79ff71",
"assets/assets/images/social/linkedin-logo.png": "95e6c045dd5f8ea3ed14fc2de308d115",
"assets/assets/images/social/instagram.png": "db9e28760b4c72ee51d5c2c7b0772823",
"assets/assets/images/social/github.png": "46fd5ca3c4a5cbcad97fd9b11d845f48",
"assets/assets/images/social/email.png": "7a97194d3c075caa1a2f2fb89f793d4e",
"assets/assets/images/blog.png": "383501168390c3833d9c81843c33d566",
"assets/assets/images/develop.png": "723c47f15273f7013cacb03032b547c2",
"assets/assets/images/projects/5.jpeg": "99aa5e4c06f65c1d5ad86c9db51e57bd",
"assets/assets/images/projects/6.jpeg": "563048f821e840ebdbc7000e9c6b834a",
"assets/assets/images/projects/3.jpeg": "c9f588e4843b5cf7c6e614b4a17ee46c",
"assets/assets/images/projects/7.png": "b097bb748c0e7496f6a298d57097b1c2",
"assets/assets/images/projects/2.jpeg": "8d95c6eb176a94d08d65b66cb5fab03e",
"assets/assets/images/projects/8.png": "11a55df0433d11236c3f22fa6af1492d",
"assets/assets/images/projects/1.jpeg": "323240fb1b1bf14fa7b4ed4d28abbca4",
"assets/assets/images/projects/4.jpeg": "cce4265499da546fa4f19dafda74a277",
"assets/assets/images/learn.png": "7827c9e2366da4aaeec20a4342b76953",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "895127e0f1b5ab9bac0024f4a6e26917",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/fonts/MaterialIcons-Regular.otf": "74cb2b918f50ca3354b9768c0db4abd9",
"assets/NOTICES": "a38e723f3c6bd1c5dd694f96398c079b",
"assets/AssetManifest.bin.json": "f6ed8a67d427f1fc905bb340bd41d79b",
"assets/AssetManifest.bin": "c7b9b83460327ad1a362182f05dc8072",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"favicon.png": "22f89010599e88f26d016eac13c97dc6",
"flutter_bootstrap.js": "c5caa8f975b7f65827bfcabca4795eb3",
"index.html": "d9b6f813db37b7b85a15212dd304431b",
"/": "d9b6f813db37b7b85a15212dd304431b",
"version.json": "9b818ca9511483c901bed1545384376c",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

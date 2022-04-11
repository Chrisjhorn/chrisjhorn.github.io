'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a300f628afb315511880b3a545437d9d",
"shell_run__20220411_10_02_51.log": "dfc56194f4f7a3580d82226929849548",
"index.html": "a20cf66e1a20f4c9a42ea9688f664a81",
"/": "a20cf66e1a20f4c9a42ea9688f664a81",
"main.dart.js": "216c9f5153f40068e0ddad5657ecc4d3",
"index.html.orig": "02070cb300902b158bc803b38e666980",
"shell_run__20220407_14_39_10.log": "1b35a208308355c1ae825464f13e084e",
"shell_run__20220407_15_13_47.log": "15d25975b344216d4beb687082f2c3b4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"shell_run__20220407_15_02_01.log": "72e62176cc62147c8059902b46d43f9e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "941a5d0e3a2a707ca77f1c1dcd9b6e11",
"shell_run__20220407_15_05_55.log": "04cfab1627b75b0608d6e8e84b487aca",
"shell_run__20220411_09_45_58.log": "f2f876887b56db94c79a40a0f6eac887",
"assets/AssetManifest.json": "b1c825d63a0b7e8e54fe11832d018a7d",
"assets/NOTICES": "c224cc543a184cb177f57e2abbf60ade",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/registration/busy.png": "6e418029ee7cf33333186a4bb24d1b87",
"assets/assets/registration/celebrate.png": "0e2d523fd4804712eb1686c8c9a7c3f8",
"assets/assets/intro/wyrth_banner.png": "7967b3e6e72e9499530b1d0d09ffabcc",
"assets/assets/intro/lightbulb.png": "148d54eaf64259aa2a538aca7e86661b",
"assets/assets/users/photo8.png": "5a2b27d616ce97d39a96899809da6787",
"assets/assets/users/photo9.png": "faf913b71ca19415b244f863f942866f",
"assets/assets/users/unknown.png": "1499a6bbce2f9618fa48face4854ecc4",
"assets/assets/users/photo10.png": "0c1305763278edbc7ca77a024be5b551",
"assets/assets/users/user_crowd.png": "17b4e4d456755800d513fc5f712c49d9",
"assets/assets/users/photo4.png": "32b0cec40f0ef3a6c6987ce7a6756634",
"assets/assets/users/photo5.png": "47f25c6f2361f85811672a2675d8917c",
"assets/assets/users/photo7.png": "e0672851160bb89defd0ab6664b5efd3",
"assets/assets/users/photo6.png": "98e233f243e35d9d23e6e742f43e6505",
"assets/assets/users/photo2.png": "13eee3406248a742011ba92319ebee4c",
"assets/assets/users/photo3.png": "a1070e3fc3c581f6faef0e6649034f53",
"assets/assets/users/photo1.png": "f52c89af6b5f6c16976542e910fda2ef",
"assets/assets/graph_scribbles/graph4.png": "f66e4354d063cc4a0e70b03e11ed8b92",
"assets/assets/graph_scribbles/graph5.png": "b54837d4c28e3bbb05a51cfa1c484bc8",
"assets/assets/graph_scribbles/graph2.png": "69522eb4d3899abbe39c7d03a31e03b7",
"assets/assets/graph_scribbles/graph3.png": "fa560a47137c914fccc509d7024a15ae",
"assets/assets/graph_scribbles/graph1.png": "dfe0e53641ef902edd9e942cc3f8743c",
"assets/assets/campaigns/bike_lanes.png": "bedc4f4bcb3c157c7fc9f2f7a430c50f",
"assets/assets/campaigns/school_science.png": "b8cd6f540655d03f150e3d5cd67c4486",
"assets/assets/campaigns/job_losses.png": "e98b7d7ad9f4fb54a6e6bdc218eb2941",
"assets/assets/campaigns/residential_fires.png": "b834f60fca2db1c8bb8a1493ba7cb358",
"assets/assets/campaigns/coal.png": "85a4acdf376f34050a9ca8172b87c6dc",
"assets/assets/campaigns/wind.png": "cb18a6b9053cadc9c85e31f3dacd9fc6",
"assets/assets/campaigns/organic_garden.png": "696c9459c42225c73e64a6e92ef48ef4",
"assets/assets/campaigns/soil.png": "5c90fa52643f267b4a6da12c80a5ddbe",
"assets/assets/campaigns/food%2520bags.png": "0716f4510b4ab8e3dbde022ec0a931bb",
"assets/assets/campaigns/coastal.png": "3564fb8ef85c3ea42215d57dfbab1ab8",
"assets/assets/campaigns/floods.png": "b3fb9861b6bb3892293f8c16ff954a46",
"assets/assets/campaigns/pollution.png": "c57efae81acf52c430df13aac078eda1",
"assets/assets/campaigns/bus.png": "b5b4eb134cf4431aae961e21de479ade",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

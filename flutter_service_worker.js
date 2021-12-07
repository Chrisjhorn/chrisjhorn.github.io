'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "994a4f54fb0dc7ed42c3e96a5e29b2e1",
"index.html": "a351bfc18d609c77147b094461c75b96",
"/": "a351bfc18d609c77147b094461c75b96",
"shell_run__20211207_19_13_35.log": "f6b52ff506cb3493056a8bd6c593a561",
"shell_run__20211207_19_16_05.log": "cb71b0e9fddd7ac61bf9a7a00d271629",
"main.dart.js": "254ee994e0892f3fdfca3db461cdc76e",
"index.html.orig": "52ffd381fbeeec0177ccc7a4107144bb",
"shell_run__20211207_19_17_19.log": "cfeee863d152246510f37ea90b0eaff4",
"shell_run__20211207_19_15_22.log": "7530453027e5f77338cfa98bc44f509b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cbe605d3ab5bdd43143b8e3bd2a29b35",
"shell_run__20211207_19_12_51.log": "0195443791dcefd7a045076191125d63",
"assets/AssetManifest.json": "d6c4c0681f818040d21cfc42f9758d8a",
"assets/NOTICES": "5f9d6b84bb043dedcefc06d1bf7ebb16",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/metrics/renewable.png": "4b48acdb8e4ab911b3f115b4e0835033",
"assets/assets/metrics/cleanwater.png": "8341c42f4fe340c259e496af36f490e1",
"assets/assets/metrics/USA%2520copy.png": "e30e1b76431d9267b3e9293158cbebfd",
"assets/assets/metrics/schoolfood.png": "3672c491d932283f36a9ff5f31f85676",
"assets/assets/metrics/vocationalSkills.png": "80f981afb54280ebda596fc1717f9043",
"assets/assets/metrics/USA.png": "cf6fc1f841422abecdd8608fb66de4ca",
"assets/assets/metrics/skilledManufacturing.png": "ef44923ccaeefd0637b2c99551bc6a0f",
"assets/assets/metrics/users.png": "83fdbf59db3e600133666223a4117302",
"assets/assets/metrics/jobLosses.png": "f5d761f0c6cd43b0524aadae1bf71c2f",
"assets/assets/metrics/redBias.png": "d04848fa70159dbc120edbecc26f887d",
"assets/assets/metrics/calendar.png": "52bdbd3cbcea6c5d97ca8465f6b0c3f0",
"assets/assets/metrics/drive-steering-wheel.png": "cbff43e78a551796477a01c7883a7f04",
"assets/assets/metrics/line.png": "dcb3176db9641866b1ff74d5dd997484",
"assets/assets/metrics/blueBias.png": "9bf659945c3b432ec07be71167a8ce51",
"assets/assets/metrics/singleParent.png": "42d341bf6ef7666f43ae1110c72242e3",
"assets/assets/initiatives/school_science.png": "b8cd6f540655d03f150e3d5cd67c4486",
"assets/assets/initiatives/coal.png": "85a4acdf376f34050a9ca8172b87c6dc",
"assets/assets/initiatives/wind.png": "cb18a6b9053cadc9c85e31f3dacd9fc6",
"assets/assets/initiatives/soil.png": "5c90fa52643f267b4a6da12c80a5ddbe",
"assets/assets/initiatives/food%2520bags.png": "0716f4510b4ab8e3dbde022ec0a931bb",
"assets/assets/initiatives/coastal.png": "3564fb8ef85c3ea42215d57dfbab1ab8",
"assets/assets/initiatives/floods.png": "b3fb9861b6bb3892293f8c16ff954a46",
"assets/assets/initiatives/pollution.png": "c57efae81acf52c430df13aac078eda1",
"assets/assets/initiatives/bus.png": "b5b4eb134cf4431aae961e21de479ade",
"assets/assets/users/photo8.png": "5a2b27d616ce97d39a96899809da6787",
"assets/assets/users/photo9.png": "faf913b71ca19415b244f863f942866f",
"assets/assets/users/photo10.png": "523f2dc6efee82ab7ec16ad427e81a2a",
"assets/assets/users/users.png": "83fdbf59db3e600133666223a4117302",
"assets/assets/users/photo4.png": "32b0cec40f0ef3a6c6987ce7a6756634",
"assets/assets/users/photo5.png": "47f25c6f2361f85811672a2675d8917c",
"assets/assets/users/Transactions--985375-79203187--28-11-2021-28-11-2021.pdf": "77e8b44672689c8b73e8751c51f41dd8",
"assets/assets/users/photo7.png": "e0672851160bb89defd0ab6664b5efd3",
"assets/assets/users/photo6.png": "98e233f243e35d9d23e6e742f43e6505",
"assets/assets/users/photo2.png": "13eee3406248a742011ba92319ebee4c",
"assets/assets/users/photo3.png": "a1070e3fc3c581f6faef0e6649034f53",
"assets/assets/users/photo1.png": "f52c89af6b5f6c16976542e910fda2ef",
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
"assets/assets/campaigns/bus.png": "b5b4eb134cf4431aae961e21de479ade"
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "shell_run__20211126_13_20_09.log": "2ca8a26076f4cb1f4f79fdb95a7b57a7",
"shell_run__20211122_18_12_49.log": "ef5125eb432accebe66dba7577955041",
"shell_run__20211126_13_28_52.log": "8deaa87737eebdc82ff2ea5c84e1af30",
"shell_run__20211126_13_25_06.log": "eb9b0315df14ab420b789449a0f72a52",
"version.json": "994a4f54fb0dc7ed42c3e96a5e29b2e1",
"shell_run__20211122_18_07_43.log": "e5f97524d65f32b96da065c6054400a1",
"shell_run__20211126_12_34_25.log": "dd65a8d0c1b97718ef39aa4a6c97028b",
"index.html": "eb882c0f944ab707c84efd07ae2f49a0",
"/": "eb882c0f944ab707c84efd07ae2f49a0",
"shell_run__20211126_13_30_22.log": "a936cad2055f708e3d09e4f12bfa5ac1",
"shell_run__20211128_09_57_36.log": "66a70da61b9dd9de56835c7b5b3349e2",
"shell_run__20211126_13_10_52.log": "6a8d645736dedaff7655ff713a26f3d0",
"shell_run__20211126_13_32_24.log": "c88641a938390668afb5f2557c8fae2c",
"shell_run__20211128_10_04_42.log": "0d537d23dab610f014dd0d23af019100",
"shell_run__20211128_16_40_14.log": "f9b9f8c21ced6565c56433c80fe7ccd0",
"shell_run__20211128_09_36_31.log": "f4b037a227b7dbdd78f915f8ddb108bd",
"shell_run__20211126_12_43_21.log": "796be879e00460ee3dc9dfae49fc1c6b",
"main.dart.js": "4de3da5d0dff1a8f460a83a988a41522",
"shell_run__20211126_13_33_03.log": "9b4575261fa3988cbef907fd702e47b7",
"shell_run__20211126_12_44_01.log": "11c03c3a97a99e41b8a26669668b7d1c",
"shell_run__20211122_18_17_31.log": "b738b01eae20e90b08238bd5a4ea1c00",
"index.html.orig": "fe05712cadab5d6d0837a75a1003a6f0",
"shell_run__20211128_10_18_23.log": "2f6e8b938f7f2b3b63b62e0785d03581",
"shell_run__20211126_13_16_45.log": "cc27fa35ac4a975113d1906f532a4460",
"shell_run__20211128_09_43_21.log": "f5cbf34ee42483f7c22432e5fc7309e8",
"shell_run__20211122_18_26_28.log": "9aeb8fe93fbf8fef72050d6be537f954",
"shell_run__20211122_18_13_44.log": "c18913fdacb4608cd4ef0cf6624330ac",
"shell_run__20211128_10_01_07.log": "796be879e00460ee3dc9dfae49fc1c6b",
"shell_run__20211126_12_54_00.log": "c88641a938390668afb5f2557c8fae2c",
"shell_run__20211126_13_31_02.log": "9c11bace13b923b6c93114566b28fc5b",
"shell_run__20211128_09_48_03.log": "8bd356c6caa82c2211af6d9f55b15cff",
"shell_run__20211126_13_28_13.log": "d99dd0399150bfb29d0d18683e004f54",
"shell_run__20211129_14_28_36.log": "cfeee863d152246510f37ea90b0eaff4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"shell_run__20211128_09_46_34.log": "8250f4f6ba8e70cbea5ad6bc50cbdf22",
"shell_run__20211128_09_51_04.log": "af91c90178783500b4fedbb2459e2629",
"shell_run__20211126_13_20_48.log": "b80e4ea2336ea5abd91716f8c2883aa5",
"shell_run__20211128_09_54_08.log": "cf63b8a345f9e55b14b80d2bfc7ab424",
"shell_run__20211123_08_46_23.log": "6b23042669bef98afe1e25a81522566b",
"shell_run__20211128_09_53_28.log": "7006275d3b725361a3049cc4768694ab",
"shell_run__20211126_13_25_45.log": "070dd044a8399985fcdcd8fbab93e0da",
"shell_run__20211128_09_46_09.log": "a8b7dc8d8cc65e5939c880447cd103bd",
"shell_run__20211128_10_06_06.log": "6b23042669bef98afe1e25a81522566b",
"shell_run__20211128_16_39_24.log": "d3a3b3fe8961a99f2df8106c7dda32f7",
"shell_run__20211122_18_10_35.log": "b0e3862e0766cc15e85c114d9681a7f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"shell_run__20211126_13_17_31.log": "ea6aa683b9ce7b2f1a9b2e3741d4f20d",
"shell_run__20211128_09_42_40.log": "c18913fdacb4608cd4ef0cf6624330ac",
"manifest.json": "cbe605d3ab5bdd43143b8e3bd2a29b35",
"shell_run__20211128_10_17_40.log": "0195443791dcefd7a045076191125d63",
"shell_run__20211122_18_26_23.log": "b47cc50eede954b49dd9a7812303769a",
"shell_run__20211128_10_04_01.log": "5c0f861d8d86debfa120523227b25a99",
"shell_run__20211122_20_14_51.log": "cfeee863d152246510f37ea90b0eaff4",
"shell_run__20211126_12_33_44.log": "c1ffe9623af019cef9c0365f896968fe",
"shell_run__20211128_09_48_45.log": "5183daa54d2d89041b15e837fc0385cb",
"shell_run__20211128_09_35_46.log": "b4fedc42871b80b778e12ffb7212470e",
"shell_run__20211126_13_18_12.log": "fedcaa4041b1c48a0c97c28d892ef553",
"shell_run__20211128_09_47_16.log": "03f8bde1d489d5ab1664dda46d63f2fe",
"shell_run__20211128_10_06_49.log": "0e3e8470701dfd6a23a8eecf23802bad",
"shell_run__20211122_18_20_26.log": "d41d8cd98f00b204e9800998ecf8427e",
"shell_run__20211123_08_47_05.log": "13483494ab4b03fb2307711a5de2db3d",
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
"assets/assets/campaigns/bus.png": "b5b4eb134cf4431aae961e21de479ade",
"shell_run__20211122_18_20_22.log": "6aab00de46f2b3c291249694279a8412",
"shell_run__20211126_13_31_57.log": "cfeee863d152246510f37ea90b0eaff4",
"shell_run__20211128_09_50_22.log": "8250f4f6ba8e70cbea5ad6bc50cbdf22",
"shell_run__20211126_12_54_40.log": "b9b18a8a9876323c9d99c3eed321950d",
"shell_run__20211128_10_01_47.log": "3e40614f692eb23a885285b23a2b1e6b",
"shell_run__20211126_13_11_31.log": "5e5d66526c24b6410fc468bb4208ddf8",
"shell_run__20211126_13_16_05.log": "7006275d3b725361a3049cc4768694ab",
"shell_run__20211128_09_56_55.log": "5c0f861d8d86debfa120523227b25a99"
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

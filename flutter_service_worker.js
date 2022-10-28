'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "shell_run__20221026_15_55_59.log": "6765897c93022db5944f811cc249cd00",
"shell_run__20221026_11_55_37.log": "d29dd5c94d054f994364dcac4f43f3a7",
"version.json": "5b405fa8de3d19146972236dd02bcbd4",
"shell_run__20221026_11_45_37.log": "41fcaf5114ee828753072e2848f0273b",
"index.html": "1248538a93e3f782ed6104fd858845d5",
"/": "1248538a93e3f782ed6104fd858845d5",
"shell_run__20221026_13_43_00.log": "3c03ec056fa0847da529c2af406e0e84",
"shell_run__20221027_14_49_28.log": "b0708cd4cae2130e5d89590ccf72584f",
"shell_run__20221026_12_34_28.log": "b38ae6a7e28b6e29b249cde8243565c3",
"shell_run__20221026_11_55_18.log": "260d53897859a3d1e22e00eb7fbb3c01",
"shell_run__20221026_12_19_57.log": "ed79c3f9e88c23be695657d8c87bc07b",
"shell_run__20221028_09_54_18.log": "99358e77c90875a1a970ab2e8b2e3f0b",
"main.dart.js": "25094630e9b7b44b01bbe33f27b7227e",
"shell_run__20221027_15_02_07.log": "50a465b975e1cd42839ac699ae75344e",
"shell_run__20221026_12_54_20.log": "676ccb59284c9496f85fbb40859df1b7",
"index.html.orig": "eb8a65cab18780bbeb6ff0bc20626ec0",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"shell_run__20221027_14_16_29.log": "c5c42af2bd1d7dfa9eb041b9daaad9cf",
"shell_run__20221026_12_24_56.log": "c5c42af2bd1d7dfa9eb041b9daaad9cf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"shell_run__20221027_14_57_50.log": "9d806c4d1562a99ecf086dd2da65f581",
"shell_run__20221027_15_04_46.log": "c70439ccc6c5e6a0db4f5672fb8fc7da",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"shell_run__20221026_12_21_49.log": "9743f9fa52570ccd0f41e0495c07eb22",
"manifest.json": "c78c4a44e0ebbaa07e31c14783f6c971",
"shell_run__20221026_09_01_52.log": "8585dbefd38792baccfdab5846feb809",
"shell_run__20221028_10_11_13.log": "4d5b4e6b91b122f0ad542d6cfd4fa0dd",
"shell_run__20221026_12_02_31.log": "489edbd7322df4f1fb6789694dc52734",
"shell_run__20221026_17_17_37.log": "2521c5e35412c203553e5f07e436e1e6",
"shell_run__20221026_12_45_25.log": "d6e273265cab53f4d8f3e777290e3a8e",
"assets/AssetManifest.json": "7cd7b4c024fb9e23470f36394b052dff",
"assets/NOTICES": "77a3347f944e71266e602a39a85bc9dc",
"assets/FontManifest.json": "a029f23fad90544b9a330a6cd5ea2517",
"assets/packages/flutter_sfsymbols/fonts/sficonsets.ttf": "62c05b60f3dd4f5a9597989359e575f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "e54898cfddebc1f70246ce1997842421",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/plaid.png": "3b8f722aeba55ba82cb097aa98e248f9",
"assets/assets/gift_10.png": "6e40343346718d7d3612474f4a5bb6fd",
"assets/assets/wyrthcard.png": "ae5d4fa637d24dc01c8c473ebff80d11",
"assets/assets/microsoft.png": "b726a67fd48f96d80fe6627062199159",
"assets/assets/apple.png": "bfc76c36e403603b59b805cd02be5515",
"assets/assets/noAvatar.png": "08751880ee56808524cfe3f0275e5fb8",
"assets/assets/twitter.png": "98440e1ccc0f3cfd4a32e68f8b9c6c23",
"assets/assets/wyrth_logo.png": "2dd844cad0146ff767bb9bad49de7f7b",
"assets/assets/yahoo.png": "d7aaafbae5ffe861ff6983172ae20a42",
"assets/assets/google.png": "a8f93d2dd60521569d6ddf55e457f04f",
"assets/assets/google_fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf": "48ebb38b5445196e567f948e132230ca",
"assets/assets/google_fonts/Playfair_Display/static/PlayfairDisplay-Medium.ttf": "0f3ea302305126e3d1e2112920c4ff85",
"assets/assets/google_fonts/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf": "f99d1cf8601ad1f748da5d968a258065",
"assets/assets/google_fonts/Playfair_Display/static/PlayfairDisplay-Italic.ttf": "c1d6f318369e39a88e910b40d2d70bca",
"assets/assets/google_fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf": "a96ecd13655587d30a21265c547cd8aa",
"assets/assets/google_fonts/Playfair_Display/static/PlayfairDisplay-Black.ttf": "299c0b90ec08297dbbdaf5e486486612",
"assets/assets/google_fonts/Playfair_Display/static/PlayfairDisplay-MediumItalic.ttf": "c212a6af05a32818673bcf2526d8ebb7",
"assets/assets/google_fonts/Playfair_Display/static/PlayfairDisplay-BlackItalic.ttf": "aeb8226df0086da0c5a917826c0f2813",
"assets/assets/google_fonts/Noto_Serif/NotoSerif-BoldItalic.ttf": "dd08f86bf6b00f4ef02ea8293cf1915c",
"assets/assets/google_fonts/Noto_Serif/NotoSerif-Regular.ttf": "ceeb2cf5944c44d51fd3e6b3733e3aa5",
"assets/assets/google_fonts/Noto_Serif/NotoSerif-Italic.ttf": "718cf13c7a5f059e8b51e0b42c7cbe65",
"assets/assets/google_fonts/Noto_Serif/NotoSerif-Bold.ttf": "cd68b227ac0046292ae4975cf76ad561",
"shell_run__20221026_17_07_08.log": "10bd2bafb8f212228ddf6b69dc2413d1",
"shell_run__20221026_12_09_17.log": "c32de883d99b13c0510f04223fbaef72",
"shell_run__20221028_10_30_41.log": "bfcc7e42527078ccb39eb908dd1c6379",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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

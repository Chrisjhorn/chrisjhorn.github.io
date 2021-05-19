'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a7d9029887a274660c549c8d488979e3",
"index.html": "dc1e60a14e60dbb5820279fffce9f465",
"/": "dc1e60a14e60dbb5820279fffce9f465",
"main.dart.js": "22db2f72052053338dac17c4c7807596",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "af0e7251552fe7f462d705f6d73f556c",
".dart_tool/package_config.json": "1e3054bbaf6bda5a3f52bb26f5d6517f",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/web_service_worker.stamp": "4b03c73bf8bf0083395703fe697934f2",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/dart2js.d": "a1b18e2be6b01641be6c2cb1d1301567",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/main.dart.js.deps": "4a03bd56637fdddb8a7c5641a623725a",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/main.dart.js": "f04a6b9dca3cf55f1e0a1e4a23e5cb67",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/app.dill": "b031b74429000a9ddf0ee65ec70bf86c",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/outputs.json": "91fd58febe5cf99185cd0d3c1770cefb",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/web_release_bundle.stamp": "5067a6f03d9bf4cf3aa16ccda06308e1",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/flutter_assets.d": "c23be7ad144d3e6524c5908cb9e7f9b3",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/main.dart": "94ccc3b9765cf7f1c580ec2a5d33e6d9",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/dart2js.stamp": "6d193d51d5edaecc38cd938f0163a22a",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/service_worker.d": "835a9982f0889846059e444ebec7fc36",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/web_resources.d": "31b0c97b89f2a6c7f86c8a01daa9e97e",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/app.dill.deps": "c06d561c59700fec237b1443d90caa45",
".dart_tool/flutter_build/f2cb1c5fdc6794ee6b45912a918f74b5/web_entrypoint.stamp": "b251a79eafbac4d28928b088206b1eac",
".dart_tool/package_config_subset": "cc55df7b22aa8ba13760f2c4de19d54a",
".dart_tool/version": "637e04f2396ca85e7777a5a7d3b39f03",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "b87e7ceb9de555cb3775cbfd1db2618c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
".idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
".idea/libraries/Dart_SDK.xml": "fcb2ab6444d63c74f662b513977a877b",
".idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
".idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
".idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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

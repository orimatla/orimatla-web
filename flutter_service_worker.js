'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/images/texture_mobile_chat.png": "2a5d109bda2b701bbce01ade4a2d489b",
"assets/assets/images/otl_coin.png": "866e3228f1da426e67bc6042a10e4f93",
"assets/assets/images/orimatla_splash.png": "274367a03fe3c174cb6209a9bad2abd1",
"assets/assets/images/coins_mobile.png": "ca484f4a2dfb99d096b084f7a1f1a4b4",
"assets/assets/images/buy_otl_app.png": "39f04204e2a2b0d56b1a25c88b105aca",
"assets/assets/images/06-carrossel-intro-orimatla.jpg": "c94208205d351f327b69b7a3c4aa4fe7",
"assets/assets/images/04-carrossel-intro-orimatla.jpg": "e23b1afd1088c81fc763538a633e05f2",
"assets/assets/images/03-carrossel-intro-orimatla.jpg": "f04ba07489e3f3aa2fa6c9146a2883b0",
"assets/assets/images/orimatla_splash2.png": "1cbefdcea4e3bc4fea7efb65c7d65a9b",
"assets/assets/images/05-carrossel-intro-orimatla.jpg": "76bca21d711da40c4f8a63cc21685ca9",
"assets/assets/images/coins_desktop.png": "b731acc6873b02f0b38dc1f3929a9dc7",
"assets/assets/images/buy_otl_desktop.png": "f7ccea7e97f8bbf5da10981605c6bfdb",
"assets/assets/images/logo_orimatla_color_h.svg": "ab7c7893bc67076764bd320abd66a8e5",
"assets/assets/images/01-carrossel-intro-orimatla.jpg": "c06229855984edcd102f5582f29b8e60",
"assets/assets/images/02-carrossel-intro-orimatla.jpg": "cc6a32d16deeaf196b719abe66e932fe",
"assets/assets/images/buy_otl_desktop.jpg": "9a6ebc6f7ce8dfe7167f272f5a7d89b9",
"assets/assets/images/profile_placeholder.png": "87321b02c27fc57f4be137ddcf1586b5",
"assets/assets/icons/play.svg": "5b706e4a49e6f8fbd1cf1f9576f60c7c",
"assets/assets/icons/camera.svg": "3a3c65c336837d1da1183e7ce1290b16",
"assets/assets/icons/eye.svg": "6d7b0f3929aa278a8e16f8c9adf12f48",
"assets/assets/icons/download.svg": "ae9312237812b48c837db0fcbffc80ae",
"assets/assets/icons/user_square.svg": "d8b542d2669fe4e7870107fe96e37674",
"assets/assets/icons/settings2.svg": "99ce842b5c69256984dea854e6f2dfa4",
"assets/assets/icons/export.svg": "6a5dc7c60b85436647344e04449fabf9",
"assets/assets/icons/close.svg": "0748143c3336f113575f3fc2ce5449a9",
"assets/assets/icons/gallery.svg": "a78221ef14ff08f81704bc5613e4a1e9",
"assets/assets/icons/icon_foreground.png": "6fcf09e15ddc87739cb05242d444eb54",
"assets/assets/icons/arrow_up.svg": "af835ae1b6753a88ab9a802693b4694b",
"assets/assets/icons/arrow_back.svg": "051689194a4d24fc09e6f146a1461dbe",
"assets/assets/icons/emoji.svg": "d78c957f54692dfe4be284f531e80380",
"assets/assets/icons/message_viewed.svg": "de32564fcc3549c202203338b355cb64",
"assets/assets/icons/scan_barcode.svg": "7b56521fb3879a216d571d80f07c7b3c",
"assets/assets/icons/heart.svg": "4578257357f43d823dc219f33a02cebb",
"assets/assets/icons/arrow_front_circle.svg": "20ee7e18de191b7c739795bb53a59360",
"assets/assets/icons/open_eye.svg": "93440ccc37a89fd68862a0aa07b64d1d",
"assets/assets/icons/volume_high.svg": "0089c09129bb50ac85021e8596093b62",
"assets/assets/icons/more_vert.svg": "a82b56ab097d845804900b780ebfd672",
"assets/assets/icons/send_message.svg": "8b874a681d79977a24d5f4aa0465a572",
"assets/assets/icons/user_name_icon.svg": "851a1cf5b6c4a39e189b8e8443ecb068",
"assets/assets/icons/filled_heart.svg": "abc7bb44dd9e7f6c8ffa1f08464c3423",
"assets/assets/icons/send.svg": "a704d4cd58e499efa0eaef80b28003a4",
"assets/assets/icons/add.svg": "6b92222d7a902c42ed2045bb21f0fdbf",
"assets/assets/icons/post_remove.svg": "455ce0dfc249dba43f679b288b2ae910",
"assets/assets/icons/store.svg": "3d46c5b7832b5a4616b23afcff24dd74",
"assets/assets/icons/bnb.svg": "b71604c7801f43ae89dc650086fac65a",
"assets/assets/icons/icon_orimatla_color.svg": "ecf2fb5061bf288886ffc37826944661",
"assets/assets/icons/fullscreen_exit.svg": "3a7e43a0b9d3915b99e60ef79d4b9602",
"assets/assets/icons/convert.svg": "ac89710b25a3e8b3a3fc309083509e03",
"assets/assets/icons/transfer.svg": "61e81bb8f2db1098472fae1692ec2980",
"assets/assets/icons/deposit.svg": "653807fbce3b343f532be1e59f0e9398",
"assets/assets/icons/question.svg": "e67a05f4824e00d755c8570953ee6999",
"assets/assets/icons/fullscreen.svg": "4ce44cbcf59c1f05751c3df638ffeaae",
"assets/assets/icons/status_up.svg": "88e954d932a9a798bed90919a97f7390",
"assets/assets/icons/google.png": "30fd7383f10343833798865ac65e8c55",
"assets/assets/icons/home.svg": "489ed8f0da260f1a53d904f7d000a4cb",
"assets/assets/icons/search.svg": "8bf4e26d7f9303c60e0b0f6b5ade37bc",
"assets/assets/icons/upload.svg": "ee4b1ba945bfa5dd8a3551d533d8086b",
"assets/assets/icons/email.svg": "a2658da8e18955d463ac816b024bc9cc",
"assets/assets/icons/apple.svg": "37dd6e9999eb376b8f903135c219fbe5",
"assets/assets/icons/withdraw.svg": "9286a50e508fb124128739e85c5d7cca",
"assets/assets/icons/global.svg": "e4486212dbfffddcadc36f1b414223ce",
"assets/assets/icons/left_share_arrow.svg": "e3d0a9b37bf7ce507b8ff9c2e5e40fa4",
"assets/assets/icons/profile.svg": "4fceea0c03002561721ebd36857a5d98",
"assets/assets/icons/wallet.svg": "a4361a23739072bd3b3a767b625d4ba6",
"assets/assets/icons/chat.svg": "dc3b480228abd90af4c1d8b286177222",
"assets/assets/icons/lock.svg": "a41bf079830f3d37bee622b1808a97ca",
"assets/assets/icons/eye_close.svg": "52ea06a956ca9961285c8235a0d5d431",
"assets/assets/icons/info_circle.svg": "92d41ea7d291ce303b2bb905ef7927e6",
"assets/assets/icons/mining.svg": "d5d031d1468b8cfb1510981f61bd1f90",
"assets/assets/icons/followers.svg": "9ddb3aee1f2a7e395ab2c812bc685259",
"assets/assets/icons/redo.svg": "a3f1f46a8807b6ccc4c52a74b0158ac0",
"assets/assets/icons/ic_notification.png": "3879beefe6628af790d06ec115b57f2a",
"assets/assets/icons/facebook.svg": "8c76b53130067a63c3f680ef66df7bb6",
"assets/assets/icons/notification.svg": "2fec61bd1a078f54850962a428100483",
"assets/assets/icons/settings.svg": "e096cb1965d05be030f3d3227b85a169",
"assets/assets/icons/undo.svg": "788eddd8cfbe3d2bcdb46e6ca5fee2c5",
"assets/assets/icons/icon_orimatla_mining.svg": "46f53f96a2363a1f49c838034dea467d",
"assets/assets/icons/search_user.svg": "bd891dfeb2f5511b354d74c86ca502e1",
"assets/assets/icons/arrow_right.svg": "e85a4eb2851a4abd319dd4a52ac75fdc",
"assets/assets/icons/right_share_arrow.svg": "d1d071944bdaf6f48b3fcb7eaa1a952a",
"assets/assets/icons/icon.png": "ea862d7418e4069b348d8201ddf224c6",
"assets/assets/icons/community.svg": "31aaedb05e315d414d59e02d7bdcac7b",
"assets/assets/icons/coin_change.svg": "4ef535ae27ad9a8fa8ab2669e7356c80",
"assets/assets/icons/google.svg": "c35e0342ea35800633ec8a40396f34dc",
"assets/assets/icons/user.svg": "eceb0e43f5e299a5bb871cd5d7768012",
"assets/assets/icons/filter.svg": "4bc1c0e241a9db3815be981058986041",
"assets/assets/icons/comments.svg": "dcfb8d1470024a2b74f2b4dbed8156c6",
"assets/assets/icons/tick.svg": "73e5586f1b58a10488b21249edec0e45",
"assets/assets/icons/arrow_down.svg": "c26b84506e565f67de9854636737444f",
"assets/assets/icons/info.svg": "92d41ea7d291ce303b2bb905ef7927e6",
"assets/assets/icons/pause.svg": "1e30c8cefbbe0a64dfab201b94e1bae7",
"assets/assets/icons/logout.svg": "809c4a2582b1476c2c296eaadb815115",
"assets/assets/icons/close_eye.svg": "a5b2d432a2c845a8182d9153d9e0c99c",
"assets/assets/icons/copy.svg": "e80f960acd720d4b0874d7ad32cca2d1",
"assets/assets/icons/trash.svg": "3f418c816a23db9d89baf1361398457b",
"assets/assets/icons/arrow_forward.svg": "3c176bf45fa226b3c72fc7811868e2a7",
"assets/assets/icons/volume_mute.svg": "b8aae15ea4918f3b4f11fd11b2b84b82",
"assets/assets/icons/search_normal.svg": "be250b3216ff31efe93e58994f960049",
"assets/assets/icons/arrow_left.svg": "fcf651c8be5070674292012cfc5289e9",
"assets/assets/lang/pt_BR.json": "45dc5c00d52dbba986b3412397437608",
"assets/assets/lang/en_US.json": "74851fec3d10fc32f2df36a6f2d5d01f",
"assets/assets/lang/es_ES.json": "9016b2365300362af1b695c4a2ca8f6f",
"assets/assets/fonts/rubik/Rubik-Medium.ttf": "11f22f212ab3e9b8e241cbd69d3c43e7",
"assets/assets/fonts/rubik/Rubik-Regular.ttf": "cd619a4f068dc66cc6e58fe0a91a8a34",
"assets/assets/fonts/rubik/Rubik-Light.ttf": "a742834a58e74553d141450a7dddf5c0",
"assets/assets/fonts/rubik/Rubik-ExtraBold.ttf": "4b77292b266f2231d56f432424a86df2",
"assets/assets/fonts/rubik/Rubik-SemiBold.ttf": "75852e6bdc48c05b3c39f4b3b94d2a9c",
"assets/assets/fonts/rubik/Rubik-Italic.ttf": "25387d7be6e19cdf09b5e8b627ddeaf5",
"assets/assets/fonts/rubik/Rubik-Bold.ttf": "071fcca9ce48f336894f072bae4c2440",
"assets/AssetManifest.bin": "88d783c3611c55773d38cb370ebc7288",
"assets/AssetManifest.bin.json": "757394abfb351a2f1cdc193d7d44fcfd",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/NOTICES": "c6adb5f95ddfcdac1588d68fa305a918",
"assets/dotenv": "365b14dbea014089821475c6a5b3cd5e",
"assets/AssetManifest.json": "567d173db8bab2449aa90c7061623fb4",
"assets/fonts/MaterialIcons-Regular.otf": "dadaddf451f843548936619ad001a9c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/FontManifest.json": "f09cef026db10b84913ead4d03443292",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/img/light-2x.png": "a1c05471a3a95e6a706608f8525b6965",
"splash/img/dark-3x.png": "c976330e1a610d8f1c82f3415417a42a",
"splash/img/dark-4x.png": "fa8b9f67afa5fbfedfd63f5af5dd277c",
"splash/img/light-4x.png": "fa8b9f67afa5fbfedfd63f5af5dd277c",
"splash/img/light-3x.png": "c976330e1a610d8f1c82f3415417a42a",
"splash/img/dark-2x.png": "a1c05471a3a95e6a706608f8525b6965",
"splash/img/light-1x.png": "e41bf23510dc5a311ff8ef24f28d7215",
"splash/img/dark-1x.png": "e41bf23510dc5a311ff8ef24f28d7215",
"splash/style.css": "db6178791b6369b77311c0ae92809585",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "274367a03fe3c174cb6209a9bad2abd1",
"icons/Icon-512.png": "c4f6ed84cd519dee15e0cace03429a37",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"version.json": "25222707bde2b8bd6b8fbe0910da966c",
"favicon.png": "5710c41e0663656f5641101f4e96867f",
"firebase-messaging-sw.js": "d9e8fdd27e2dc3cf3684d3e6731c89f8",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.ico": "3859007660a1972cd7fb806ee41191a9",
"404.html": "c3a11bf01a58db409ae55f7a4a7879e0",
"manifest.json": "d225f8928f9344ad986a71632468ac75",
"index.html": "d42619e987a0435985f236be72d99f8e",
"/": "d42619e987a0435985f236be72d99f8e",
"main.dart.js": "7df3315982a9907c837e233a3af95dcc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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

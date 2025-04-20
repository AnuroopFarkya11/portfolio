'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "192b965af67491b5850f27171b2cf26b",
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
".git/logs/HEAD": "7b214bf8ac0b5186dabb639fc2aa6083",
".git/logs/refs/heads/main": "04b80d46b5d2cb2d7e4a8f1dd8dccb0a",
".git/logs/refs/remotes/origin/main": "e883252b42a6193e201118f72ee50f3e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/59/3526c00b2772374a1667b84da2b451aed60309": "dbc210caf214d13f70d4ce90e0392adf",
".git/objects/84/2dda58c24f378f30cdb9e3b5dfc5ca5dd304f0": "3664e39c51744ef27803dc2047879c9e",
".git/objects/66/f145a0e170795cc87abecb7b8f519b29d508d6": "2f3aea726da0a1f570f8697ff0504e38",
".git/objects/f0/12db336820d28b542a643e868a7573225a83cb": "d94f0a8f23812a9c84087768ea65a5d1",
".git/objects/1d/e1b4bba431e811bebac52324844e7b9532160e": "add6a64ac441586f47ca1e1d63dcfc4f",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1d/17a97245545b77c27f89299930a9c94c52a8a4": "7a74214a995e055039afd537a9fab77d",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/32/bed064afe6aaca307d7d12922d388fe66b4135": "453d412816f57dde5329613aec3f57dd",
".git/objects/2a/a53490ed2f89f464a9afc61b978143de48d1b8": "565e6f4aee75d3cd87b9482b5b43c4a7",
".git/objects/53/65e800ff6f45403cbe270ef8ea27674a715712": "5b8af0317e924f60f631f436e375133e",
".git/objects/e5/549eb2e74505a3af2cadb9892f65620338d5a6": "bc3534ec9a61b5383a6ebeb51d28015f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/79/9a0753b7f5050126532477109181ff303d5b2e": "8d4895e29420021c244182e787e663ff",
".git/objects/5a/66acdde9566f765ea05bacff11da4bc0535aa2": "23bd2d447cef8cf2e72d7f1ac906a70d",
".git/objects/10/c2f1a421fdb9d2848f11df70652de2bb564c41": "fb09a985eb66c46fe26c3e5c8e84cc1e",
".git/objects/2b/b32940209e2f70a9ee67e64656ecc1ae2909f9": "5ffc91dc62da7de65e8cd80e08f9bbe7",
".git/objects/b9/8d542440ac0996dbc5a1befcee9980763f76ef": "6afb8bcdcd4f4245d8e94d727a5ac9e8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/43/14ad3a225094f8e58b68b09fc9b6408eddac30": "4c8b0daaeb01b0905fd44906eb9a7cbe",
".git/objects/69/4bbd6b140949af8eb78928ee44859e1c87642f": "d831ed0b0848c1d1e3574622aed1c0ba",
".git/objects/01/9c5d4f2621f5cf958b4040e2f5df704dc70fe5": "0806d964968f80d2ae2fbc78b1fc2a37",
".git/objects/96/8b6278b57bff24a35327c119690632bd591440": "8918c19de5249f36f8681e61bc2c109a",
".git/objects/a2/9196d44e38cddb250876b124263d4dae31f15e": "7ef27627d6cf1a3f45117cf7591657d7",
".git/objects/ea/cb34726bc9202eff4d2ae15786ea6351cc3f89": "c8236a888d291277f8559c9b6fafb1e1",
".git/objects/73/ff1458011c643cbd39057b2aef914f9a9d0985": "f88225b574dca7c1d26070d68ff18ab1",
".git/objects/73/fc227d5a231c6b1337dd37e90dcd54373132bc": "deb0ea52c8fe7fd85d1e2b1f7a410dc1",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/df/9c61c3ee81f0584e059314e9a57c11760158eb": "b6c883c15697fed0c85263d685ff36f2",
".git/objects/d1/a14509fa2a4c23dfa1e6191c16b0f2573f7994": "af38b1e8c89ea66ad8d87088c757ef6f",
".git/objects/28/69664e9a04614c21c1629a9617583371796ff1": "ffbd23777f344b930742c357cd7bce8a",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/c8/8cc9caca68fd086a0913f4c4007442a6dcfd70": "b30775d5ac42173d3129b1b201e5c454",
".git/objects/61/6d06ad89b8a2527f51e7efbcad8a3aa2f9c4f4": "ea4d33f624360d87d8b6d3f2f6a943a4",
".git/objects/e2/6d9f229cc601eb4ce015ebf5b0752e54f5d445": "81083116610090ade216b6205b5f29e6",
".git/objects/0e/063d42575b1bc0c5fffe67f7c76f0fe1d749a3": "645340836facf1c50b7fc5dbed40fe95",
".git/objects/6c/61be342b952ef85507c5f270344ff4d025468d": "264b1e4afe99ddca0b0d8fcfcb517532",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/7f/d8e6e9d1908077057036340a46428425e2fe47": "aca04c187d8d288c091d37d780f60f26",
".git/objects/e9/d5cc04537fbe5406408aed598f8982de1f2bc0": "c0fd14ed7ce88d13786e17428a6be609",
".git/objects/a4/fd6dae3344ebd2da5848e89c3bb0a40231c4f0": "6b42497e954fc7206240aa5f140d4d5d",
".git/objects/a4/94e1b69830dd97299d53d382aef8661749a5c6": "a262cd737cb279d5bb90034976fd90e0",
".git/objects/27/0f7220a78b2c9e5586000caa76bfc9381b8a57": "757db0e1ddbdb4039a4f8f417030aecc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/f4/eaefaf7b26631339afba18ec96cf5d5fcd051e": "bbe6f7343564d184e643e013dfa33461",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/191c036d61f8ba0fd618093d88870151b28d77": "9ebf5783991e695f22b9efd2bda00342",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/ab/abb0deaaf71a54f8001da1a414cc8124d6869c": "11b47a74207123ccc8b395570c817cbf",
".git/objects/eb/a953d129fe2605f94d8fa026954606f3cc84ae": "a4db739ad30a182b891311746e6184a4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/1c/566ae38e9ae157f24e12364e5954078c7ce267": "df75ec99856bfa859eb6ecb7f7a91d32",
".git/objects/26/d1dc924afbeb6a2594b149166e33a7dc572b1e": "d3cd18a6077e6e7d072824ed48478c48",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/e3/7baafd24a324a502b15e78f008d53d3ed3b3c3": "6e6fcfb0537ffacc7538a6f429978c74",
".git/objects/21/2d0ad933c96ada41013096af4db49931ef6f02": "27e54044668afdf6195cf52531a8a195",
".git/objects/e1/0119068457cae5ca0db9776e1f7a9da25e9431": "3cd74977923fa7c8fb42d652b3d92530",
".git/objects/ac/cf7a0c834ea2372fae39360f7870745b89e9d2": "8d0eb37909fc8631d595104d16284a62",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/33/52a8c7dadd0657b54272e0c4befe7506c65a0d": "04abaab5bd0cc7b86e9b492dd91eb3fe",
".git/objects/8b/80c332f781f7b09abc5c7a57a8257a21f8795b": "bdb805691f945fed606b896acf5f78e4",
".git/objects/8b/d5c1508b092fba33a0968f23795907a4010852": "2dfe35cc2d24400399dabe2948f3e421",
".git/objects/16/14d9b8352b2a31c2836e961e59c018193ac6d0": "cb7407006e2cf0f4e566bf00c1a3ecc7",
".git/objects/51/a46648fa32a65f810dd4313640d8fb219a1827": "168e08e09aa26b0a8fe261d88341cc89",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/95/e0ef2afdd2977e180365de1e6198bc86474b94": "060113a860a61f664ca9b61161a6b07a",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f6/b33236030213e1b3c6b61f06748ef8f644c0cc": "5a3a34a2d3fca7ac2ce0cdce7c77cb57",
".git/objects/94/471771dd7d111feb8115797776d8a6d02812fe": "55eebb5dff252c0348a739d101a03f73",
".git/objects/9e/bf2e7255d84ba946aec42305e7e2e629eb0e79": "8933ead2fdf01e20714d28736e5b5eac",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/52/6bd5d3e3d05a7654baa069ea52b1b5ff69f817": "727998df55d735ec4e2c352f1b3399c5",
".git/objects/52/c47d8fe8f7e462763878d68d4af66a5960e1bf": "8cbee84d48223fcdfb4235da065d45c5",
".git/objects/bc/e293bbc5a4df8bea5ce0e5c2f016e6dc6a22a5": "d667ddd45e76e3070679d730521277c2",
".git/objects/0a/30ea4636967b3c3c78fabdc1d52eef3b4b857e": "26dbec9df260680b6dbf72355bba2d97",
".git/objects/36/2da60a92c235f1b0dba27fcc541c32c3049339": "4fdc7288aad8c2c6a5ca218e1b29a81d",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/2e/de00db2db8c8e2e511b107725e79bbd5f8cf48": "49e1b7858cc34e6468c1a80dcb86dc08",
".git/objects/e4/043f2b65c2cfb0632543ac09aa0af1bfd63636": "a90641795b27b715dfea21fd866afee5",
".git/objects/fe/e5cd112838a1a6891c1bfc162a44692119126a": "24d9f7b22da7f840396c2b7ae1179a47",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/ca6b2d2735a832763b82887a9866c2cd531a75": "77201e366037db58a41d2c4d599c0812",
".git/objects/23/f55af15abda0feddcdecd3afc398cec793957f": "5a09852bc189628a3e2e12e964f9740e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/heads/main": "95c390493a1a04826b698636f7e3bc75",
".git/refs/remotes/origin/main": "95c390493a1a04826b698636f7e3bc75",
".git/index": "faa2a6056fbeeffa4d74696faad9ecc6",
".git/config": "42c4207f8032ed8af988bc4dedd105c9",
".git/COMMIT_EDITMSG": "ec97dcc0c41d13948761afa1c54042b2",
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
"flutter_bootstrap.js": "e47c1f901f5005a1351b3993fb17cca9",
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

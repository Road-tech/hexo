if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const s=e=>a(e,r),b={module:{uri:r},exports:n,require:s};i[r]=Promise.all(c.map((e=>b[e]||s(e)))).then((e=>(d(...e),n)))}}define(["./workbox-a69a5c93"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about/index.html",revision:"051aa6cb50ca21ee23c0258033a73cc3"},{url:"archives/2020/01/index.html",revision:"8979722c9050814fa52849567d3260ac"},{url:"archives/2020/04/index.html",revision:"54362f851a893676cb6b46010a875abc"},{url:"archives/2020/05/index.html",revision:"fa06667f448920639bbcdc7f0305516d"},{url:"archives/2020/12/index.html",revision:"327e16b2af6d300ea2e3dc05dc491d3c"},{url:"archives/2020/index.html",revision:"cc76e893aa4f800f12126db9f47e7213"},{url:"archives/2021/03/index.html",revision:"5c14356e336251736c7d0ac10122147e"},{url:"archives/2021/04/index.html",revision:"8a21370653c9b84d3bba3c578ddc538a"},{url:"archives/2021/12/index.html",revision:"cdf094ff85b15e824088c1788d2a17a4"},{url:"archives/2021/index.html",revision:"1e1e886cf7e56644f5064e005eb9175b"},{url:"archives/2022/01/index.html",revision:"bd808510dd525b0212f267b6d961a060"},{url:"archives/2022/index.html",revision:"1e4a9ad03585451a09112c6a5f4d53cf"},{url:"archives/index.html",revision:"98d87604359a637ab4946cc5c252b4c6"},{url:"archives/page/2/index.html",revision:"a3d2afc1979cf6cfd47c730d5aa661e0"},{url:"ASUS_H110S1+QL2X+hackintosh(OC+Catalina)/index.html",revision:"7f76446f03406d88565bd7e426fa9e19"},{url:"ASUS_H110S1+QL2XtoI3-8100/index.html",revision:"7915a1be5b79d50708fcfd6e0c999737"},{url:"buildAV/index.html",revision:"5fd386cf4311c0b71a66b3faaef280d6"},{url:"categories/index.html",revision:"e28fb6dfbfd89df37c721fa9996273bd"},{url:"categories/mini主机/index.html",revision:"1b414cfab952ff98b01d5a307466768c"},{url:"categories/软件技巧/index.html",revision:"c927a0d0e2eba3ba0caeb2a426ffe6b1"},{url:"css/index.css",revision:"c047160abe02ba4849c6009a3df7c1ad"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"DIYMacmini+Hackintosh/index.html",revision:"7da3acf96c8423c0269155f1211c24ce"},{url:"Hackintosh_HP-800G1_I7-4770hq_OC/index.html",revision:"a6d1906beb3c02c9a10d47d433e76fb3"},{url:"Hackintosh_LenovoM910X_8100B_RX460_OC/index.html",revision:"20e0776105347105808475db6fe1dcf1"},{url:"Hackintosh-AsusH110T-QNVH-I7-8850H-DW1820A-OC/index.html",revision:"bbc4084cd98df0459dca7ecf2b5fca39"},{url:"hello-world/index.html",revision:"64deee651f75fcabb2189418361e5a5a"},{url:"images/100.png",revision:"7f4d2863ba49a2fe5a7319ba5b005fcc"},{url:"images/404-bg.jpg",revision:"5be8fb9d9ba411f16f537df30e7fdff9"},{url:"images/about-bg-walle.jpg",revision:"7cb6b55faedc609db81e4064c51a5cc4"},{url:"images/about-bg.jpg",revision:"12ddb45072a7eac5c82688848d798ca7"},{url:"images/apple-touch-icon.png",revision:"93a4eeb1b844c1dbf615ebb16fc74792"},{url:"images/Asus-H110s1.webp",revision:"859be9142a97d5d47d6fcea17b4d6dd7"},{url:"images/AV-tidy.png",revision:"8c3a87607bc1cb40a04fbd4a062e935b"},{url:"images/AV-tidy.webp",revision:"31f898e04461c464e1ce0d2a3aec1d29"},{url:"images/contact-bg.jpg",revision:"ba2c158502206077c2867d876c18c086"},{url:"images/diy-mac-mini.jpg",revision:"7a60c0e7a168cd621cfb8342af28979f"},{url:"images/diy-mac-mini.webp",revision:"3db37ec80bbb43a137c9b3bcdc1c392d"},{url:"images/h110s1.png",revision:"fcc25da64f2c7f66adc93b96b375952a"},{url:"images/h110s1.webp",revision:"ed18b09ff8e40eaae6b96ca0f88d625a"},{url:"images/H110T.png",revision:"cfb776856deb06c63bbc28c7e567c2d0"},{url:"images/H110T.webp",revision:"648d9ba8b0704e4b154f054675d423b0"},{url:"images/home-bg-art.jpg",revision:"dc13f0744e2991e1172a4adaefce19c5"},{url:"images/home-bg-geek.jpg",revision:"fc1b7dce62a3c70a04666de24956fe09"},{url:"images/home-bg-o.jpg",revision:"244e3c5b571578b33744633a2b7b6296"},{url:"images/home-bg.jpg",revision:"fe2bd92219ca92c53798fe260b12082a"},{url:"images/hp_800_g1.png",revision:"086307b8334862a69f5e7877104c96b1"},{url:"images/hp_800_g1.webp",revision:"2b2df97688b5816ebbe5768a1285d335"},{url:"images/hp800g1.png",revision:"49ce0b0a359d92a437fad00563fab67d"},{url:"images/hp800g1.webp",revision:"a3151535fbac65ae78b18a751d273b22"},{url:"images/ico-512.png",revision:"bfb3218dab6d7baaa3f918818d0a2177"},{url:"images/ilmwIH.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"images/iOSOneButtonNavigation&play-05.webp",revision:"de3a8371220a6709ab0bc39e41079e2c"},{url:"images/jekyll.jpg",revision:"06ba638c58da73fb4cdbccc58b97ab30"},{url:"images/jekyll.webp",revision:"6e79d45ea897feca6e86a617d0fd52b6"},{url:"images/lenovo-thinkCentre-M910x-tiny-hero.png",revision:"aef434995d470f5cfbad46006aa9a971"},{url:"images/lenovo-thinkCentre-M910x-tiny-hero.webp",revision:"bd570eef947bb5122ac30ad688da4d66"},{url:"images/MK1VS.jpg",revision:"aeb66632b96dffa5c48f4db4adf9b60b"},{url:"images/MK1VS.webp",revision:"39cd73c79aadbde5477832f98d5b269a"},{url:"images/OpenCore_with_text_Large.png",revision:"af5abffb562a59c564e6589c531a0082"},{url:"images/OpenCore_with_text_Large.webp",revision:"80bd19941f0e5d39980fcde5a0004d55"},{url:"images/openwrt.jpg",revision:"fa0fa7253c22378f86341fdc3ba71897"},{url:"images/openwrt.webp",revision:"ffbd782a0e39211c9db1f929dda8542c"},{url:"images/pwaicons/144.png",revision:"c4dd38c842bd1f699d9112baad89fec2"},{url:"images/pwaicons/192.png",revision:"154db2ac0f8f88f4c3a4776a7110e7f1"},{url:"images/pwaicons/36.png",revision:"2b5c2e40b6a6d21999a7af63d6d00605"},{url:"images/pwaicons/48.png",revision:"b07ff75b00b3e6a8744bb55a611bf528"},{url:"images/pwaicons/512.png",revision:"af27f867303e863856845869452e973a"},{url:"images/pwaicons/72.png",revision:"e1e509a322d8e0cf5e27ba31486c6d3f"},{url:"images/pwaicons/96.png",revision:"1b3fbb1a101a07ab0e579828958a8785"},{url:"images/safari-pinned-tab.svg",revision:"f045ac1b429583251e2b3c077bedadc4"},{url:"images/tag-bg.jpg",revision:"785d4959e79a71b1ee6e16cf4860b486"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"75c002fac60309f755a86183c1f87c42"},{url:"JekyllConfigurationRecord/index.html",revision:"2a6b1c7f6218df5a441607313c52bf96"},{url:"js/main.js",revision:"bf04ec801f8fae3c4d2f4f74cd9e1301"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"64e071c53161915e23d55d47235843b2"},{url:"link/index.html",revision:"38411aca816ee38619ea79e217435275"},{url:"Onekeytoplay/index.html",revision:"318430ee148d3e898a5ccd40a0abc5c0"},{url:"OnekeytoplayPlus/index.html",revision:"690d1f0350d080facc5953761abbd0af"},{url:"OpenwrtConfigurationRecord/index.html",revision:"b32ea0fa4f88edd71e45e347339ade32"},{url:"page/2/index.html",revision:"f6c888546035e21d54489c7e33029394"},{url:"tags/1L小主机/index.html",revision:"8d55473ca24a4dfa8b97459c6ccd2115"},{url:"tags/3D打印/index.html",revision:"03cee0636e9e7bf859df74a98b25f55c"},{url:"tags/4770hq/index.html",revision:"ec32508d4c4918b51d8cef7d38fd5818"},{url:"tags/8100/index.html",revision:"f99c625bec4594794e9ee4746d27bcb6"},{url:"tags/8100B/index.html",revision:"00e014da0a8142e4cea15b7c9bece85c"},{url:"tags/AV-Data-Capture/index.html",revision:"13e911fb4f0374fd2e97f7facad30fcd"},{url:"tags/CarPlay/index.html",revision:"fe95c8d90fe294d222938144dbe0e582"},{url:"tags/Diy-Mac-mini/index.html",revision:"53f2cbe697446c0f2f61b4ecae597985"},{url:"tags/Hackintosh/index.html",revision:"e412e16ab1931ac0fce4b7960457d885"},{url:"tags/Home-Server/index.html",revision:"af66db2121a58dbf78b0f2be6f2f597e"},{url:"tags/HP-800G1/index.html",revision:"08a59ce718c73f625fb76e3c939c0546"},{url:"tags/index.html",revision:"a6b32eb58c75f47d951e5c9884cac386"},{url:"tags/Jekyll/index.html",revision:"8f35a9af516ae914f0053038dc9574ac"},{url:"tags/Jellyfin/index.html",revision:"a57114b0ee9f6cd3e7a35fab6f592a28"},{url:"tags/M910X/index.html",revision:"9c069030edfddfbde27f58c4b5b9f8f8"},{url:"tags/MK1/index.html",revision:"a99d56554791ce75a3e272b4c75ef53b"},{url:"tags/Nginx/index.html",revision:"6785c32bad0f7e5942f0cd181f53921b"},{url:"tags/NodeJS/index.html",revision:"42b13bf35bce0b5915a78a1b03e5ce4b"},{url:"tags/Opencore/index.html",revision:"ad254bc50661ee67a90b1b8bce9410a1"},{url:"tags/OpenWrt/index.html",revision:"e6baaed0b152c72c4410e45285e57d39"},{url:"tags/QL2X/index.html",revision:"d9ef19eb7d6527dbdec301e66b3d825a"},{url:"tags/QNVH/index.html",revision:"cf949cb3057441fe056c387dcaa5f47c"},{url:"tags/Ruby/index.html",revision:"38257a9515039e94adea42d06ff9655d"},{url:"tags/stx/index.html",revision:"3e9dfb57917e42ed9599c7293c4b1634"},{url:"tags/STX/index.html",revision:"232e6702cbfda077dd95ffbe52d4806a"},{url:"tags/thin-itx/index.html",revision:"17cc81c4fe4f37cafd1b5de430343921"},{url:"tags/一键导航/index.html",revision:"413b58e2ee7a7b084f9e8051aefe2b6b"},{url:"tags/快捷指令/index.html",revision:"9cc15dc90f64647959fb5a7ec337853e"},{url:"tags/捷径/index.html",revision:"c7dbdc82d906bb38043804615352ee92"},{url:"tags/片库管理/index.html",revision:"6389c2a33a9cbf7a2c68e08e8a3236c8"},{url:"tags/电影/index.html",revision:"543fcc1364371f293a1eec26697911cb"},{url:"tags/装机/index.html",revision:"2c1106da306764c60020cb4fb7c703da"},{url:"tags/迷你主机/index.html",revision:"bb3718767a17255e6433032589f25b87"},{url:"tags/配置记录/index.html",revision:"5b7c56167176d13942b4030214bb2847"},{url:"ThinItxCaseMK1/index.html",revision:"65d951bb0c153a93d4f737d5e652b37d"},{url:"timeline/index.html",revision:"81627762463656d0b60dbe1c8de40ec8"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
"use strict";function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}var precacheConfig=[["/react-chat/index.html","522be04e2c5ac4d5f8e1b63a2aa8014b"],["/react-chat/static/css/main.ed60dc81.css","d624ecf38fcb508cd439b34eaa367367"],["/react-chat/static/images/icon-avatar0.svg","120883ea0b5b51a37d202d30bb687965"],["/react-chat/static/images/icon-avatar1.svg","6689f535041fef5a18392a94da3b539b"],["/react-chat/static/images/icon-avatar10.svg","272e3bd5bc64f419794eba6021879f02"],["/react-chat/static/images/icon-avatar11.svg","304f6579e150fe02f30215e7978164cd"],["/react-chat/static/images/icon-avatar12.svg","29b012b1be5e6da6560834775dc8ef63"],["/react-chat/static/images/icon-avatar13.svg","ab237fbb17eff38b4cc50202c8275532"],["/react-chat/static/images/icon-avatar14.svg","1da7871bbe0b5da67b3e4720ac93be2f"],["/react-chat/static/images/icon-avatar15.svg","5775d20c1778cdca5043c42f3fe87ddf"],["/react-chat/static/images/icon-avatar16.svg","45790b1004313f8efdf2a60bb4190b26"],["/react-chat/static/images/icon-avatar17.svg","45be4f67ef5dc29a48eb89a0ebb6e297"],["/react-chat/static/images/icon-avatar18.svg","335615927e17445b21ac803338e939aa"],["/react-chat/static/images/icon-avatar19.svg","7b94f63752f9c1b0ccdab63685e66ee3"],["/react-chat/static/images/icon-avatar2.svg","4094a5306e416d39a2c84b7bba32d34a"],["/react-chat/static/images/icon-avatar20.svg","c8b20f54c34f736fda1e5490acb8d4d3"],["/react-chat/static/images/icon-avatar3.svg","9b4ac6cd066c2f954906420115c44aa8"],["/react-chat/static/images/icon-avatar4.svg","31c8fa55d6d407d7ab3a11374def631e"],["/react-chat/static/images/icon-avatar5.svg","a93b09aa6e4d5623a25debe5e2173f77"],["/react-chat/static/images/icon-avatar6.svg","0aeaf9e46c93e1c908253ce8d85d182a"],["/react-chat/static/images/icon-avatar7.svg","a9d095090fa47d63e7f6dce799bc8866"],["/react-chat/static/images/icon-avatar8.svg","380d838c0cfe03046150b6cf0ef4b448"],["/react-chat/static/images/icon-avatar9.svg","72bdd52751dcf3b89e4eeceb6c1cdcc4"],["/react-chat/static/js/Chatting.36c36a32.chunk.js","7a84f362913c10b16cd37adde278dd54"],["/react-chat/static/js/Login.27c476ba.chunk.js","58083ba1c6f51e10024d4df9f3a75250"],["/react-chat/static/js/main.d6230ae0.js","02feb1561fcc955e1430258f51b9bbb9"],["/react-chat/static/media/icon-ai.7ffbbc95.svg","7ffbbc959f34bc0b8a7654c970c876c7"],["/react-chat/static/media/icon-ai2.fe1911a0.svg","fe1911a0bee740669dab93117bc3aef4"],["/react-chat/static/media/icon-chat.f6df3ac2.svg","f6df3ac274a2c1ea4ea96d21f98bbc09"],["/react-chat/static/media/icon-emoji.4afdadc5.svg","4afdadc539caec740927861c30e7f6ea"],["/react-chat/static/media/icon-group.afaf0a7b.svg","afaf0a7bc0571d096673ac70962688c3"],["/react-chat/static/media/icon-index.962ce947.svg","962ce947d2fcfa50177d820eb7446315"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var t=new URL(a);return"/"===t.pathname.slice(-1)&&(t.pathname+=e),t.toString()},cleanResponse=function(a){if(!a.redirected)return Promise.resolve(a);return("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})})},createCacheKey=function(a,e,t,c){var r=new URL(a);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var t=new URL(e).pathname;return a.some(function(a){return t.match(a)})},stripIgnoredUrlParameters=function(a,e){var t=new URL(a);return t.hash="",t.search=t.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return e.every(function(e){return!e.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],t=a[1],c=new URL(e,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(e){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!e.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var e=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(t){return Promise.all(t.map(function(t){if(!e.has(t.url))return a.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var r="/react-chat/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(t)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
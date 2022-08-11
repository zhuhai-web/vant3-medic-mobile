(function(){"use strict";var e={921:function(e,t,n){var r=n(963),o=n(252);const a={id:"app"};function i(e,t,n,i,u,c){const l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[e.$route.meta.keepAlive?((0,o.wg)(),(0,o.j4)(l,{key:0},{default:(0,o.w5)((({Component:e})=>[(0,o.Wm)(r.uT,{name:"van-fade"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)(o.Ob,null,[((0,o.wg)(),(0,o.j4)((0,o.LL)(e)))],1024))])),_:2},1024)])),_:1})):(0,o.kq)("",!0),e.$route.meta.keepAlive?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(l,{key:1},{default:(0,o.w5)((({Component:e})=>[(0,o.Wm)(r.uT,{name:"van-fade"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e)))])),_:2},1024)])),_:1}))])}var u={name:"app"},c=n(744);const l=(0,c.Z)(u,[["render",i],["__scopeId","data-v-11000b5e"]]);var f=l,s=n(201);const d=()=>Promise.all([n.e(887),n.e(501)]).then(n.bind(n,501)),m=()=>Promise.all([n.e(887),n.e(910)]).then(n.bind(n,910)),p=()=>n.e(302).then(n.bind(n,302)),h=()=>n.e(235).then(n.bind(n,235)),v=()=>n.e(283).then(n.bind(n,283)),g=()=>n.e(673).then(n.bind(n,673)),b=()=>n.e(796).then(n.bind(n,796)),y=[{path:"/:pathMatch(.*)*",redirect:"SplashPage"},{name:"SplashPage",component:d},{name:"main",redirect:"/main/home",component:m,children:[{name:"home",path:"home",component:p,meta:{keepAlive:!0,title:"首页"}},{name:"doctor",path:"doctor",component:h,meta:{keepAlive:!0,title:"问医生"}},{name:"message",path:"message",component:v,meta:{keepAlive:!0,title:"消息"}},{name:"mine",path:"mine",component:g,meta:{keepAlive:!0,title:"我的"}}],meta:{keepAlive:!0}},{name:"FactoryMain",component:b}];y.forEach((e=>{e.path=e.path||"/"+(e.name||"")}));const w=(0,s.p7)({routes:y,history:(0,s.r5)()});w.beforeEach(((e,t,n)=>{localStorage.setItem("fromPage",t.name),n()})),w.afterEach(((e,t)=>{e.meta.title?document.title=e.meta.title:document.title="就医挂号(让健康更简单)",window.scrollTo(0,0)}));var k={methods:{_routeReplace(e,t){this.$router.replace({name:e,params:t})},_routePush(e,t){this.$router.push({name:e,params:t})}}},_=n(98);const O={app_name:["160","160"],tab_home:["首页","HOME"],tab_doctor:["问医生","DOCTOR"],tab_message:["消息","MAIL"],tab_mine:["我的","MINE"],settings:["设置","Settings"],version:["版本","Version"],language:["语言","Language"],english:["英文","English"],chinese:["中文","Chinese"],"":["",""]};var j=O,C=n(192),E=n(900),A=n.n(E),S=n(120),P=n.n(S);function T(){let e={zh:{},en:{}};return Object.keys(j).forEach((function(t){e.zh[t]=j[t][0],e.en[t]=j[t][1]})),e}const L=(0,_.o)({messages:T(),locale:"zh"});L.reload=()=>{let e="zh";"en"===window.localStorage.getItem("language")?(e="en",C.g.use("en-US",A())):C.g.use("zh-CN",P()),L.locale=e},L.reload();var N=L;const M=(0,r.ri)(f);M.use(w),M.use(N),M.mixin(k),M.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],a=e[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(f--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{235:"8e14df36",283:"e62adcf4",302:"50786006",501:"a4a478d3",673:"24abff9c",796:"39ebfd3c",887:"e814e0f9",910:"cef7442a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{501:"3963aa89",887:"3baf9108",910:"2db93f3e"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vant3-medic-mobile:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+a){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={501:1,887:1,910:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(887!=t){var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var f=c(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},r=self["webpackChunkvant3_medic_mobile"]=self["webpackChunkvant3_medic_mobile"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(921)}));r=n.O(r)})();
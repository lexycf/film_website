import{f as s,g as e}from"./index-c890a064.js";import{b as i}from"./vue-router-f3ea9d25.js";import{u as a}from"./commonStore-0ea4b9b3.js";import{d as t,r as l,c as r,a as o,u as v,K as n,a9 as p,S as c,o as d,L as m}from"./@vue-6a01272b.js";import"./axios-5ad415d9.js";import"./qs-5194407c.js";import"./call-bind-e93463e9.js";import"./get-intrinsic-176af07e.js";import"./es-errors-c8ed318b.js";import"./has-symbols-456daba2.js";import"./has-proto-c2a23985.js";import"./function-bind-afbcd6f2.js";import"./hasown-c3b72c9b.js";import"./set-function-length-964994ac.js";import"./define-data-property-80a6b8d7.js";import"./es-define-property-c2edbfb6.js";import"./gopd-991ce5b0.js";import"./has-property-descriptors-52e43c9d.js";import"./side-channel-3f093b15.js";import"./object-inspect-168ffad1.js";import"./index-b6aa06be.js";import"./element-plus-541e5fc9.js";import"./@vueuse-b7f20252.js";import"./@element-plus-82c0506e.js";import"./@ctrl-91de2ec7.js";import"./lodash-es-ca3d6383.js";import"./@popperjs-b78c3215.js";import"./pinia-903e051d.js";import"./pinia-plugin-persistedstate-35ef556e.js";import"./swiper-062f36c9.js";function u(s,e,i="list"){if(!e)return s;for(var a=[],t=[],l=0;l<s.length;l++){var r=s[l];if(-1===a.indexOf(r[e])){var o={};o[i]=[r],o[e]=r[e],t.push(o),a.push(r[e])}else{t[a.indexOf(r[e])][i].push(r)}}return t}const j={class:"playerPage"},f={class:"playerWrap"},h={class:"videoBox"},g=["src"],b=o("div",{class:"videoNotice"},"If current server dosen't work please try other version below.",-1),w={class:"subTitle"},x={class:"titLabel"},y={class:"titleVals"},k=["onClick"],C={class:"videoIntroduce"},S={class:"imgShow"},I=["src"],L={class:"videoIntro"},N={class:"videoName"},B={class:"videoSei"},V={class:"videoDesc"},q={class:"videoGenre"},G={class:"videoSeiBox"},O=o("div",{class:"titLabel"},"Seasons：",-1),_={class:"titleVals"},z=["onClick"],D={class:"videoSeiBox"},F=o("div",{class:"titLabel"},"Chapters：",-1),K={class:"titleVals"},P=["onClick"],T=t({__name:"index",setup(t){let T=i().query.id,W=l([]),$=l([]),A=l([]),E=l({name:"",aired:"",overview:"",genres:""});E.value=a().$state.playerInfo;(async()=>{let e=u(await s({itemId:T}),"seasonNums");var i;e.map((s=>{s.active=!1})),e[0].active=!0,$.value=e,i=0,A.value=$.value[i].list,A.value.map((s=>{s.active=!1})),A.value[0].active=!0,A.value[0].id,M(A.value[0].id)})();let H=l("");const J=(s,e)=>{W.value.map(((s,e)=>{s.list.map(((s,e)=>{s.active=!1}))})),W.value[s].list[e].active=!0,H.value=W.value[s].list[e].url},M=async s=>{let i=u(await e({episodeId:s}),"language");W.value=i,J(0,0)};return(s,e)=>(d(),r("div",j,[o("div",f,[o("div",h,[o("iframe",{src:v(H),frameborder:"0",width:"100%",height:"400"},null,8,g)]),b]),(d(!0),r(n,null,p(v(W),((s,e)=>(d(),r("div",w,[o("div",x,c(s.language)+"：",1),o("div",y,[(d(!0),r(n,null,p(s.list,((s,i)=>(d(),r("span",{class:m([s.active?"active":""]),onClick:s=>J(e,i)},c("url-"+(i+1)),11,k)))),256))])])))),256)),o("div",C,[o("div",S,[o("img",{src:v(E).imagen,alt:""},null,8,I)]),o("div",L,[o("div",N,c(v(E).name),1),o("div",B,c(v(E).aired),1),o("div",V,c(v(E).overview),1),o("div",q,c(v(E).genres),1)])]),o("div",G,[O,o("div",_,[(d(!0),r(n,null,p(v($),((s,e)=>(d(),r("span",{class:m([s.active?"active":""]),onClick:s=>((s,e)=>{$.value.map((s=>{s.active=!1})),$.value[s].active=!0})(e)},c(s.seasonNums),11,z)))),256))])]),o("div",D,[F,o("div",K,[(d(!0),r(n,null,p(v(A),((s,e)=>(d(),r("span",{class:m([s.active?"active":""]),onClick:s=>((s,e)=>{A.value.map((s=>{s.active=!1})),A.value[s].active=!0,M(A.value[s].id)})(e)},c(s.nums),11,P)))),256))])])]))}});export{T as default};

import{c as e,i as a}from"./element-plus-541e5fc9.js";import{b as s,u as o}from"./vue-router-f3ea9d25.js";import{c as i}from"./index-c890a064.js";import{u as r}from"./commonStore-0ea4b9b3.js";import{d as t,r as n,c as p,a as l,S as m,u as d,Q as c,K as u,a9 as g,t as v,o as j}from"./@vue-6a01272b.js";import"./@vueuse-b7f20252.js";import"./@element-plus-82c0506e.js";import"./@ctrl-91de2ec7.js";import"./lodash-es-ca3d6383.js";import"./@popperjs-b78c3215.js";import"./axios-5ad415d9.js";import"./qs-5194407c.js";import"./call-bind-e93463e9.js";import"./get-intrinsic-176af07e.js";import"./es-errors-c8ed318b.js";import"./has-symbols-456daba2.js";import"./has-proto-c2a23985.js";import"./function-bind-afbcd6f2.js";import"./hasown-c3b72c9b.js";import"./set-function-length-964994ac.js";import"./define-data-property-80a6b8d7.js";import"./es-define-property-c2edbfb6.js";import"./gopd-991ce5b0.js";import"./has-property-descriptors-52e43c9d.js";import"./side-channel-3f093b15.js";import"./object-inspect-168ffad1.js";import"./index-b6aa06be.js";import"./pinia-903e051d.js";import"./pinia-plugin-persistedstate-35ef556e.js";import"./swiper-062f36c9.js";const y={class:"categoryPage"},h={class:"categoryPageTit"},f={class:"searchWrap"},b={class:"categoryList"},I=["onClick"],x={class:"moviesImgs"},C=["src"],w={class:"moviesName"},q=l("div",{class:"clears"},null,-1),k=t({__name:"index",setup(t){const k=r(),S=s(),U=o(),A=S.query.genre,F=S.query.type,L=S.query.tag;let O=n("ACTIONS");A&&(O.value=A),L&&(O.value=L);let D=[],E=n([{itemId:1,episodeId:159408,name:"Los campeones",overview:"Un equipo de baloncesto entrena y compite en las Olimpiadas Especiales bajo la guía de un entrenador imperfecto pero dedicado, Marcus. Remake de la exitosa película de Javier Fesser 'Campeones' (2018).",imagen:"https://pelisimg.online/cover/los-campeones-933419.jpg",genres:"Comedia,  Drama",aired:"2023",createdAt:"2024-01-27 09:30:14"},{itemId:1,episodeId:159408,name:"Los campeones",overview:"Un equipo de baloncesto entrena y compite en las Olimpiadas Especiales bajo la guía de un entrenador imperfecto pero dedicado, Marcus. Remake de la exitosa película de Javier Fesser 'Campeones' (2018).",imagen:"https://pelisimg.online/cover/los-campeones-933419.jpg",genres:"Comedia,  Drama",aired:"2023",createdAt:"2024-01-27 09:30:14"},{itemId:1,episodeId:159408,name:"Los campeones",overview:"Un equipo de baloncesto entrena y compite en las Olimpiadas Especiales bajo la guía de un entrenador imperfecto pero dedicado, Marcus. Remake de la exitosa película de Javier Fesser 'Campeones' (2018).",imagen:"https://pelisimg.online/cover/los-campeones-933419.jpg",genres:"Comedia,  Drama",aired:"2023",createdAt:"2024-01-27 09:30:14"},{itemId:1,episodeId:159408,name:"Los campeones",overview:"Un equipo de baloncesto entrena y compite en las Olimpiadas Especiales bajo la guía de un entrenador imperfecto pero dedicado, Marcus. Remake de la exitosa película de Javier Fesser 'Campeones' (2018).",imagen:"https://pelisimg.online/cover/los-campeones-933419.jpg",genres:"Comedia,  Drama",aired:"2023",createdAt:"2024-01-27 09:30:14"},{itemId:1,episodeId:159408,name:"Los campeones",overview:"Un equipo de baloncesto entrena y compite en las Olimpiadas Especiales bajo la guía de un entrenador imperfecto pero dedicado, Marcus. Remake de la exitosa película de Javier Fesser 'Campeones' (2018).",imagen:"https://pelisimg.online/cover/los-campeones-933419.jpg",genres:"Comedia,  Drama",aired:"2023",createdAt:"2024-01-27 09:30:14"}]),J=1,M=1,R=n(1),P=n(1);const z=async()=>{let e={genres:A,tag:L,type:F,startId:M,pageSize:24};const a=await i(e);E.value=a.list,M=a.startId,D=[...D,...a.list],24==a.list.length&&(R.value++,J++)};z();const V=e=>{var a;e<J?(a=e,E.value=D.slice(24*(a-1),24*a)):z()};return(s,o)=>{const i=e,r=a;return j(),p("div",y,[l("div",h,[l("span",null,m(d(O)),1),l("div",f,[c(i,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=e=>s.value=e),class:"w-50 m-2",placeholder:"Search","prefix-icon":s.Search},null,8,["modelValue","prefix-icon"])])]),l("div",b,[(j(!0),p(u,null,g(d(E),(e=>(j(),p("div",{class:"categoryItem moviesShow",onClick:a=>(e=>{k.set_playerInfo(e),U.push({path:"playerPage",query:{id:e.id}})})(e)},[l("div",x,[l("img",{src:e.imagen,alt:"",class:"image"},null,8,C)]),l("div",w,m(e.name),1)],8,I)))),256))]),c(r,{background:"",layout:"prev, pager, next","current-page":d(P),"onUpdate:currentPage":o[1]||(o[1]=e=>v(P)?P.value=e:P=e),"page-size":36,"page-count":d(R),onChange:V,class:"mt-4"},null,8,["current-page","page-count"]),q])}}});export{k as default};
import{V as s,h as e}from"./index.dfd2f67a.js";import{c as n,o as i,a as t,f as a,u as o,p as r,b as l,i as c,e as d,t as v,h as p,v as u,F as m,x as g,d as h,w as f,l as w,m as y}from"./vendor.5336ed79.js";const j={name:"IntroOverlay"},b={class:"intro-overlay"},C=[t('<div class="top"><div class="overlay-top"></div><div class="overlay-top"></div><div class="overlay-top"></div></div><div class="bottom"><div class="overlay-bottom"></div><div class="overlay-bottom"></div><div class="overlay-bottom"></div></div>',2)];j.render=function(s,e,t,a,o,r){return i(),n("div",b,C)};const x={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},k=[a("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1),a("polyline",{points:"12 5 19 12 12 19"},null,-1)];function T(s,e){return i(),n("svg",x,k)}const D={name:"CircleTransition",props:{active:{type:Boolean,default:!1}},computed:{isActive(){return this.active}},methods:{onTransitionEnd(){this.isActive&&this.$emit("transition-finished")}}};D.render=function(s,e,t,a,r,l){return i(),n("div",{class:o(["circle-transition",{active:l.isActive}]),onTransitionend:e[0]||(e[0]=(...s)=>l.onTransitionEnd&&l.onTransitionEnd(...s))},null,34)},D.__scopeId="data-v-5c14154c";const I={name:"Banner",components:{RightArrow:T,CircleTransition:D},setup(){const e=s.line1Desc,n=s.line2Desc,i=c(!1);return{line1Desc:e,line2Desc:n,circleActive:i,animateCircle:function(){i.value=!0},onTransitionFinished:function(){router.push("/case-studies")}}}};r("data-v-1d1ba37a");const A={class:"main"},_={class:"container"},B={class:"row"},E={class:"line"},F={class:"line"},O={class:"btn-row"},R=u(" En savoir plus ");l(),I.render=function(s,e,t,o,r,l){const c=d("circle-transition"),u=d("RightArrow");return i(),n("section",A,[a("div",_,[a("div",B,[a("h2",null,[a("div",E,[a("span",null,v(o.line1Desc),1)]),a("div",F,[a("span",null,v(o.line2Desc),1)])]),p(c,{active:o.circleActive,onTransitionFinished:o.onTransitionFinished},null,8,["active","onTransitionFinished"]),a("div",O,[a("button",{onClick:e[0]||(e[0]=(...s)=>o.animateCircle&&o.animateCircle(...s))},[R,p(u)])])])])])},I.__scopeId="data-v-1d1ba37a";const $={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-left"},P=[a("line",{x1:"19",y1:"12",x2:"5",y2:"12"},null,-1),a("polyline",{points:"12 19 5 12 12 5"},null,-1)];const H={name:"Cases",components:{CasesPrev:function(s,e){return i(),n("svg",$,P)},CasesNext:T},setup:()=>({projectDesc:s.projectDesc,dynamicImport:s=>new URL({"../assets/img1.jpeg":"/assets/img1.44288af9.jpeg","../assets/img2.jpeg":"/assets/img2.f4f690b0.jpeg","../assets/img3.jpeg":"/assets/img3.64700606.jpeg","../assets/oldimg1.jpeg":"/assets/oldimg1.31c3113e.jpeg","../assets/oldimg2.jpeg":"/assets/oldimg2.f9c2535c.jpeg","../assets/oldimg3.jpeg":"/assets/oldimg3.05baa478.jpeg"}[`../assets/${s}.jpeg`],window.location).href})};r("data-v-2d690c8b");const L={class:"cases"},N={class:"container-fluid"},U=a("div",{class:"cases-navigation"},[a("div",{class:"cases-arrow prev disabled"}),a("div",{class:"cases-arrow next"})],-1),V={class:"row"},q=["href"],z={class:"case-details"},G={class:"case-image"},J=["src","alt"];l(),H.render=function(s,e,t,o,r,l){return i(),n("section",L,[a("div",N,[U,a("div",V,[(i(!0),n(m,null,g(o.projectDesc,(s=>(i(),n("div",{class:"case",key:s.id},[a("a",{href:s.url,target:"_blank"},[a("div",z,[a("span",null,v(s.subtitle),1),a("h2",null,v(s.title),1)]),a("div",G,[a("img",{src:o.dynamicImport(s.img),alt:s.title},null,8,J)])],8,q)])))),128))])])])},H.__scopeId="data-v-2d690c8b";const K={name:"Home",components:{IntroOverlay:j,Banner:I,Cases:H},props:{dimensions:{type:Object}},setup(s){const n=c(!1),i=()=>{n.value=!0};return h((()=>{e(i)})),f((()=>s.dimensions.width),(()=>{const e=.01*s.dimensions.height;document.documentElement.style.setProperty("--vh",`${e}px`)})),{animationComplete:n}}};K.render=function(s,e,t,a,o,r){const l=d("IntroOverlay"),c=d("Banner"),v=d("Cases");return i(),n(m,null,[!1===a.animationComplete?(i(),w(l,{key:0})):y("",!0),p(c),p(v)],64)};export{K as default};
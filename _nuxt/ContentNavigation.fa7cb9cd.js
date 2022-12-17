import{a as d,s as v,l as P,A as I,B as S,C as y,D as E,h as p,E as D,j as O,d as r,_ as i,t as b,F as R,G as V,k as B,b as j,H as k,I as N}from"./entry.0184f530.js";import{u as x}from"./asyncData.89989738.js";import"./helper.403413da.js";import"./ContentDoc.3a662158.js";import"./ContentList.950d30de.js";import"./ContentQuery.183fbc11.js";import"./ContentRenderer.55ca1505.js";import"./ContentRendererMarkdown.714df064.js";import"./ContentSlot.f79208aa.js";import"./DocumentDrivenEmpty.5440593b.js";import"./DocumentDrivenNotFound.521fae99.js";import"./Markdown.54bc54bc.js";import"./ProseCode.f2c02139.js";import"./layout.a49da267.js";import{u as $}from"./composables.ea42aef0.js";import"./head.7fdded18.js";import"./_commonjsHelpers.fed2a411.js";const M=d({emits:{error(t){return!0}},setup(t,{slots:e,emit:n}){const a=v(null),l=P();return I(o=>{if(!l.isHydrating)return n("error",o),a.value=o,!1}),()=>{var o,_;return a.value?(o=e.error)==null?void 0:o.call(e,{error:a}):(_=e.default)==null?void 0:_.call(e)}}}),z=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),C=d({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:n}){const a=v(!1);return S(()=>{a.value=!0}),l=>{var u;if(a.value)return(u=e.default)==null?void 0:u.call(e);const o=e.fallback||e.placeholder;if(o)return o();const _=l.fallback||l.placeholder||"",m=l.fallbackTag||l.placeholderTag||"span";return y(m,n,_)}}}),g=new WeakMap;function q(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(n,...a)=>{var l;if(n.mounted$){const o=t.render(n,...a);return o.children===null||typeof o.children=="string"?E(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):p(o)}else return p("div",(l=n.$attrs)!=null?l:n._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(n,a)=>{var o;const l=v(!1);return S(()=>{l.value=!0}),Promise.resolve(((o=t.setup)==null?void 0:o.call(t,n,a))||{}).then(_=>typeof _!="function"?{..._,mounted$:l}:(...m)=>{if(l.value){const u=_(...m);return u.children===null||typeof u.children=="string"?E(u.type,u.props,u.children,u.patchFlag,u.dynamicProps,u.shapeFlag):p(u)}else return p("div",a.attrs)})},g.set(t,e),e}const H=Object.freeze(Object.defineProperty({__proto__:null,default:C,createClientOnly:q},Symbol.toStringTag,{value:"Module"})),F=d({name:"DevOnly",setup(t,e){return()=>null}}),w=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),U=d({name:"ServerPlaceholder",render(){return y("div")}}),G=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),W=d({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const n=J({duration:t.duration,throttle:t.throttle}),a=P();return a.hook("page:start",n.start),a.hook("page:finish",n.finish),D(()=>n.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${n.progress.value}%`,height:`${t.height}px`,opacity:n.isLoading.value?1:0,background:t.color,backgroundSize:`${100/n.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function J(t){const e=v(0),n=v(!1),a=O(()=>1e4/t.duration);let l=null,o=null;function _(){u(),e.value=0,n.value=!0,t.throttle?o=setTimeout(c,t.throttle):c()}function m(){e.value=100,A()}function u(){clearInterval(l),clearTimeout(o),l=null,o=null}function T(L){e.value=Math.min(100,e.value+L)}function A(){u(),setTimeout(()=>{n.value=!1,setTimeout(()=>{e.value=0},400)},500)}function c(){l=setInterval(()=>{T(a.value)},100)}return{progress:e,isLoading:n,start:_,finish:m,clear:u}}const K=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),Q=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(n,a)=>($(()=>t({...Q(n),...a.attrs},a)),()=>{var l,o;return e?(o=(l=a.slots).default)==null?void 0:o.call(l):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},X=d({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var l;const n={...t},a=(((l=e.default)==null?void 0:l.call(e))||[]).filter(({children:o})=>o).map(({children:o})=>o).join("");return a&&(n.children=a),{noscript:[n]}})}),Y=d({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),Z=d({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),tt=d({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var a,l,o;return{title:((o=(l=(a=e.default)==null?void 0:a.call(e))==null?void 0:l[0])==null?void 0:o.children)||null}})}),et=d({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),rt=d({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var l,o,_;const n={...t},a=(_=(o=(l=e.default)==null?void 0:l.call(e))==null?void 0:o[0])==null?void 0:_.children;return a&&(n.children=a),{style:[n]}})}),it=d({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,a;return(a=(n=e.slots).default)==null?void 0:a.call(n)}}),nt=d({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),ot=d({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),s=Object.freeze(Object.defineProperty({__proto__:null,NoScript:X,Link:Y,Base:Z,Title:tt,Meta:et,Style:rt,Head:it,Html:nt,Body:ot},Symbol.toStringTag,{value:"Module"}));r(()=>i(()=>import("./NavBar.f1936aba.js"),["./NavBar.f1936aba.js","./helper.403413da.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ContentDoc.3a662158.js"),["./ContentDoc.3a662158.js","./entry.0184f530.js","./entry.9c97e57b.css","./head.7fdded18.js","./composables.ea42aef0.js","./ContentRenderer.55ca1505.js","./ContentRendererMarkdown.714df064.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.183fbc11.js","./asyncData.89989738.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ContentList.950d30de.js"),["./ContentList.950d30de.js","./ContentQuery.183fbc11.js","./entry.0184f530.js","./entry.9c97e57b.css","./asyncData.89989738.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>Promise.resolve().then(()=>lt),void 0,import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ContentQuery.183fbc11.js"),["./ContentQuery.183fbc11.js","./entry.0184f530.js","./entry.9c97e57b.css","./asyncData.89989738.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ContentRenderer.55ca1505.js"),["./ContentRenderer.55ca1505.js","./ContentRendererMarkdown.714df064.js","./entry.0184f530.js","./entry.9c97e57b.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ContentRendererMarkdown.714df064.js"),["./ContentRendererMarkdown.714df064.js","./entry.0184f530.js","./entry.9c97e57b.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ContentSlot.f79208aa.js"),["./ContentSlot.f79208aa.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./DocumentDrivenEmpty.5440593b.js"),["./DocumentDrivenEmpty.5440593b.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./DocumentDrivenNotFound.521fae99.js"),["./DocumentDrivenNotFound.521fae99.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./Markdown.54bc54bc.js"),["./Markdown.54bc54bc.js","./ContentSlot.f79208aa.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseA.694766c7.js"),["./ProseA.694766c7.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseBlockquote.a5838f35.js"),["./ProseBlockquote.a5838f35.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseCode.f2c02139.js"),["./ProseCode.f2c02139.js","./entry.0184f530.js","./entry.9c97e57b.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseCodeInline.5e3f318d.js"),["./ProseCodeInline.5e3f318d.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseEm.98b44a65.js"),["./ProseEm.98b44a65.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseH1.525ae465.js"),["./ProseH1.525ae465.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseH2.ef236bc5.js"),["./ProseH2.ef236bc5.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseH3.a7f02f63.js"),["./ProseH3.a7f02f63.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseH4.89df4e4f.js"),["./ProseH4.89df4e4f.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseH5.66e8f345.js"),["./ProseH5.66e8f345.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseH6.abf27617.js"),["./ProseH6.abf27617.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseHr.a10627ef.js"),["./ProseHr.a10627ef.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseImg.35920185.js"),["./ProseImg.35920185.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseLi.4e2fd0a7.js"),["./ProseLi.4e2fd0a7.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseOl.7627e11f.js"),["./ProseOl.7627e11f.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseP.9436791d.js"),["./ProseP.9436791d.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseStrong.59da1a26.js"),["./ProseStrong.59da1a26.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseTable.bb174b13.js"),["./ProseTable.bb174b13.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseTbody.d1ee9f6e.js"),["./ProseTbody.d1ee9f6e.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseTd.962b6d54.js"),["./ProseTd.962b6d54.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseTh.72daaae2.js"),["./ProseTh.72daaae2.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseThead.fd25ceec.js"),["./ProseThead.fd25ceec.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseTr.a09a9c21.js"),["./ProseTr.a09a9c21.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseUl.d2a81792.js"),["./ProseUl.d2a81792.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./welcome.2cf43f37.js"),["./welcome.2cf43f37.js","./composables.ea42aef0.js","./entry.0184f530.js","./entry.9c97e57b.css","./asyncData.89989738.js","./helper.403413da.js","./ContentDoc.3a662158.js","./head.7fdded18.js","./ContentRenderer.55ca1505.js","./ContentRendererMarkdown.714df064.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.183fbc11.js","./ContentList.950d30de.js","./ContentSlot.f79208aa.js","./DocumentDrivenEmpty.5440593b.js","./DocumentDrivenNotFound.521fae99.js","./Markdown.54bc54bc.js","./ProseCode.f2c02139.js","./ProseCode.e63e49c6.css","./layout.a49da267.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./layout.a49da267.js"),["./layout.a49da267.js","./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>Promise.resolve().then(()=>z),void 0,import.meta.url).then(t=>t.default||t));r(()=>i(()=>Promise.resolve().then(()=>H),void 0,import.meta.url).then(t=>t.default||t));r(()=>i(()=>Promise.resolve().then(()=>w),void 0,import.meta.url).then(t=>t.default||t));r(()=>i(()=>Promise.resolve().then(()=>G),void 0,import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./entry.0184f530.js").then(t=>t.ab),["./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>Promise.resolve().then(()=>K),void 0,import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./entry.0184f530.js").then(t=>t.ac),["./entry.0184f530.js","./entry.9c97e57b.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.NoScript));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Link));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Base));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Title));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Meta));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Style));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Head));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Html));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Body));const at=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=b(t),n=O(()=>{var l;return typeof((l=e.value)==null?void 0:l.params)=="function"?e.value.params():e.value});if(!n.value&&R("dd-navigation").value){const{navigation:l}=V();return{navigation:l}}const{data:a}=await x(`content-navigation-${B(n.value)}`,()=>k(n.value));return{navigation:a}},render(t){const e=j(),{navigation:n}=t,a=_=>p(N,{to:_._path},()=>_.title),l=(_,m)=>p("ul",m?{"data-level":m}:null,_.map(u=>u.children?p("li",null,[a(u),l(u.children,m+1)]):p("li",null,a(u)))),o=_=>l(_,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):o(n)}}),lt=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"}));export{at as default};

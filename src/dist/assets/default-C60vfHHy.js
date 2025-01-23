import{p as L,m as X,g as O,u as z,c as n,a as ce,t as W,b as ve,d as de,s as E,e as m,f as me,h as Y,r as Z,i as Me,w as M,o as G,j as J,k as fe,l as ge,n as A,q as he,v as j,x as ye,C as Ie,y as Ne,z as De,A as Re,T as Le,F as K,B as Ye,D as be,E as we,G as P,H as Ae,I as We,J as Oe}from"./index-Bw7Zh_WL.js";import{V as ze,u as Q,m as $e,a as Fe,b as Xe,c as qe,d as N,e as je}from"./VTextField-C1Kv9Van.js";import{m as q,a as Se,b as xe,c as Te,u as U,d as Ve,e as _e,f as pe,V as ke,g as F,h as Ue,i as Ze,t as Ge,j as Je,k as Ke,l as ie,n as Qe,o as et,p as tt}from"./VDivider-BI-TK8u_.js";const at=L({text:String,...X(),...q()},"VToolbarTitle"),lt=O()({name:"VToolbarTitle",props:at(),setup(e,r){let{slots:t}=r;return z(()=>{const y=!!(t.default||t.text||e.text);return n(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[y&&n("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),nt=[null,"prominent","default","comfortable","compact"],Be=L({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>nt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Se(),...X(),...xe(),...Te(),...q({tag:"header"}),...ce()},"VToolbar"),ue=O()({name:"VToolbar",props:Be(),setup(e,r){var h;let{slots:t}=r;const{backgroundColorClasses:y,backgroundColorStyles:a}=U(W(e,"color")),{borderClasses:l}=Ve(e),{elevationClasses:o}=_e(e),{roundedClasses:u}=pe(e),{themeClasses:T}=ve(e),{rtlClasses:x}=de(),s=E(!!(e.extended||(h=t.extension)!=null&&h.call(t))),c=m(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),g=m(()=>s.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return me({VBtn:{variant:"text"}}),z(()=>{var C;const i=!!(e.title||t.title),w=!!(t.image||e.image),B=(C=t.extension)==null?void 0:C.call(t);return s.value=!!(e.extended||B),n(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},y.value,l.value,o.value,u.value,T.value,x.value,e.class],style:[a.value,e.style]},{default:()=>[w&&n("div",{key:"image",class:"v-toolbar__image"},[t.image?n(F,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(ke,{key:"image-img",cover:!0,src:e.image},null)]),n(F,{defaults:{VTabs:{height:Y(c.value)}}},{default:()=>{var v,p,H;return[n("div",{class:"v-toolbar__content",style:{height:Y(c.value)}},[t.prepend&&n("div",{class:"v-toolbar__prepend"},[(v=t.prepend)==null?void 0:v.call(t)]),i&&n(lt,{key:"title",text:e.title},{text:t.title}),(p=t.default)==null?void 0:p.call(t),t.append&&n("div",{class:"v-toolbar__append"},[(H=t.append)==null?void 0:H.call(t)])])]}}),n(F,{defaults:{VTabs:{height:Y(g.value)}}},{default:()=>[n(ze,null,{default:()=>[s.value&&n("div",{class:"v-toolbar__extension",style:{height:Y(g.value)}},[B])]})]})]})}),{contentHeight:c,extensionHeight:g}}}),ot=L({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function it(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=r;let y=0,a=0;const l=Z(null),o=E(0),u=E(0),T=E(0),x=E(!1),s=E(!1),c=m(()=>Number(e.scrollThreshold)),g=m(()=>Me((c.value-o.value)/c.value||0)),h=()=>{const i=l.value;if(!i||t&&!t.value)return;y=o.value,o.value="window"in i?i.pageYOffset:i.scrollTop;const w=i instanceof Window?document.documentElement.scrollHeight:i.scrollHeight;if(a!==w){a=w;return}s.value=o.value<y,T.value=Math.abs(o.value-c.value)};return M(s,()=>{u.value=u.value||o.value}),M(x,()=>{u.value=0}),G(()=>{M(()=>e.scrollTarget,i=>{var B;const w=i?document.querySelector(i):window;w&&w!==l.value&&((B=l.value)==null||B.removeEventListener("scroll",h),l.value=w,l.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),J(()=>{var i;(i=l.value)==null||i.removeEventListener("scroll",h)}),t&&M(t,h,{immediate:!0}),{scrollThreshold:c,currentScroll:o,currentThreshold:T,isScrollActive:x,scrollRatio:g,isScrollingUp:s,savedScroll:u}}const ut=L({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Be(),...fe(),...ot(),height:{type:[Number,String],default:64}},"VAppBar"),rt=O()({name:"VAppBar",props:ut(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:t}=r;const y=Z(),a=ge(e,"modelValue"),l=m(()=>{var p;const v=new Set(((p=e.scrollBehavior)==null?void 0:p.split(" "))??[]);return{hide:v.has("hide"),fullyHide:v.has("fully-hide"),inverted:v.has("inverted"),collapse:v.has("collapse"),elevate:v.has("elevate"),fadeImage:v.has("fade-image")}}),o=m(()=>{const v=l.value;return v.hide||v.fullyHide||v.inverted||v.collapse||v.elevate||v.fadeImage||!a.value}),{currentScroll:u,scrollThreshold:T,isScrollingUp:x,scrollRatio:s}=it(e,{canScroll:o}),c=m(()=>l.value.hide||l.value.fullyHide),g=m(()=>e.collapse||l.value.collapse&&(l.value.inverted?s.value>0:s.value===0)),h=m(()=>e.flat||l.value.fullyHide&&!a.value||l.value.elevate&&(l.value.inverted?u.value>0:u.value===0)),i=m(()=>l.value.fadeImage?l.value.inverted?1-s.value:s.value:void 0),w=m(()=>{var H,I;if(l.value.hide&&l.value.inverted)return 0;const v=((H=y.value)==null?void 0:H.contentHeight)??0,p=((I=y.value)==null?void 0:I.extensionHeight)??0;return c.value?u.value<T.value||l.value.fullyHide?v+p:v:v+p});A(m(()=>!!e.scrollBehavior),()=>{ye(()=>{c.value?l.value.inverted?a.value=u.value>T.value:a.value=x.value||u.value<T.value:a.value=!0})});const{ssrBootStyles:B}=Q(),{layoutItemStyles:C}=he({id:e.name,order:m(()=>parseInt(e.order,10)),position:W(e,"location"),layoutSize:w,elementSize:E(void 0),active:a,absolute:W(e,"absolute")});return z(()=>{const v=ue.filterProps(e);return n(ue,j({ref:y,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...C.value,"--v-toolbar-image-opacity":i.value,height:void 0,...B.value},e.style]},v,{collapse:g.value,flat:h.value}),t)}),{}}}),st=Ue("v-spacer","div","VSpacer");function ct(e){let{rootEl:r,isSticky:t,layoutItemStyles:y}=e;const a=E(!1),l=E(0),o=m(()=>{const x=typeof a.value=="boolean"?"top":a.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[x]:Y(l.value)}:{top:y.value.top}]});G(()=>{M(t,x=>{x?window.addEventListener("scroll",T,{passive:!0}):window.removeEventListener("scroll",T)},{immediate:!0})}),J(()=>{window.removeEventListener("scroll",T)});let u=0;function T(){const x=u>window.scrollY?"up":"down",s=r.value.getBoundingClientRect(),c=parseFloat(y.value.top??0),g=window.scrollY-Math.max(0,l.value-c),h=s.height+Math.max(l.value,c)-window.scrollY-window.innerHeight,i=parseFloat(getComputedStyle(r.value).getPropertyValue("--v-body-scroll-y"))||0;s.height<window.innerHeight-c?(a.value="top",l.value=c):x==="up"&&a.value==="bottom"||x==="down"&&a.value==="top"?(l.value=window.scrollY+s.top-i,a.value=!0):x==="down"&&h<=0?(l.value=0,a.value="bottom"):x==="up"&&g<=0&&(i?a.value!=="top"&&(l.value=-g+i+c,a.value="top"):(l.value=s.top+g,a.value="top")),u=window.scrollY}return{isStuck:a,stickyStyles:o}}const vt=100,dt=20;function re(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function se(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let r=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const y=re(r),a=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);r+=(a-y)*Math.abs(a),t===e.length-1&&(r*=.5)}return re(r)*1e3}function mt(){const e={};function r(a){Array.from(a.changedTouches).forEach(l=>{(e[l.identifier]??(e[l.identifier]=new Ie(dt))).push([a.timeStamp,l])})}function t(a){Array.from(a.changedTouches).forEach(l=>{delete e[l.identifier]})}function y(a){var x;const l=(x=e[a])==null?void 0:x.values().reverse();if(!l)throw new Error(`No samples for touch id ${a}`);const o=l[0],u=[],T=[];for(const s of l){if(o[0]-s[0]>vt)break;u.push({t:s[0],d:s[1].clientX}),T.push({t:s[0],d:s[1].clientY})}return{x:se(u),y:se(T),get direction(){const{x:s,y:c}=this,[g,h]=[Math.abs(s),Math.abs(c)];return g>h&&s>=0?"right":g>h&&s<=0?"left":h>g&&c>=0?"down":h>g&&c<=0?"up":ft()}}}return{addMovement:r,endTouch:t,getVelocity:y}}function ft(){throw new Error}function gt(e){let{el:r,isActive:t,isTemporary:y,width:a,touchless:l,position:o}=e;G(()=>{window.addEventListener("touchstart",v,{passive:!0}),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",H,{passive:!0})}),J(()=>{window.removeEventListener("touchstart",v),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",H)});const u=m(()=>["left","right"].includes(o.value)),{addMovement:T,endTouch:x,getVelocity:s}=mt();let c=!1;const g=E(!1),h=E(0),i=E(0);let w;function B(d,f){return(o.value==="left"?d:o.value==="right"?document.documentElement.clientWidth-d:o.value==="top"?d:o.value==="bottom"?document.documentElement.clientHeight-d:R())-(f?a.value:0)}function C(d){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const b=o.value==="left"?(d-i.value)/a.value:o.value==="right"?(document.documentElement.clientWidth-d-i.value)/a.value:o.value==="top"?(d-i.value)/a.value:o.value==="bottom"?(document.documentElement.clientHeight-d-i.value)/a.value:R();return f?Math.max(0,Math.min(1,b)):b}function v(d){if(l.value)return;const f=d.changedTouches[0].clientX,b=d.changedTouches[0].clientY,S=25,_=o.value==="left"?f<S:o.value==="right"?f>document.documentElement.clientWidth-S:o.value==="top"?b<S:o.value==="bottom"?b>document.documentElement.clientHeight-S:R(),V=t.value&&(o.value==="left"?f<a.value:o.value==="right"?f>document.documentElement.clientWidth-a.value:o.value==="top"?b<a.value:o.value==="bottom"?b>document.documentElement.clientHeight-a.value:R());(_||V||t.value&&y.value)&&(w=[f,b],i.value=B(u.value?f:b,t.value),h.value=C(u.value?f:b),c=i.value>-20&&i.value<80,x(d),T(d))}function p(d){const f=d.changedTouches[0].clientX,b=d.changedTouches[0].clientY;if(c){if(!d.cancelable){c=!1;return}const _=Math.abs(f-w[0]),V=Math.abs(b-w[1]);(u.value?_>V&&_>3:V>_&&V>3)?(g.value=!0,c=!1):(u.value?V:_)>3&&(c=!1)}if(!g.value)return;d.preventDefault(),T(d);const S=C(u.value?f:b,!1);h.value=Math.max(0,Math.min(1,S)),S>1?i.value=B(u.value?f:b,!0):S<0&&(i.value=B(u.value?f:b,!1))}function H(d){if(c=!1,!g.value)return;T(d),g.value=!1;const f=s(d.changedTouches[0].identifier),b=Math.abs(f.x),S=Math.abs(f.y);(u.value?b>S&&b>400:S>b&&S>3)?t.value=f.direction===({left:"right",right:"left",top:"down",bottom:"up"}[o.value]||R()):t.value=h.value>.5}const I=m(()=>g.value?{transform:o.value==="left"?`translateX(calc(-100% + ${h.value*a.value}px))`:o.value==="right"?`translateX(calc(100% - ${h.value*a.value}px))`:o.value==="top"?`translateY(calc(-100% + ${h.value*a.value}px))`:o.value==="bottom"?`translateY(calc(100% - ${h.value*a.value}px))`:R(),transition:"none"}:void 0);return A(g,()=>{var b,S;const d=((b=r.value)==null?void 0:b.style.transform)??null,f=((S=r.value)==null?void 0:S.style.transition)??null;ye(()=>{var _,V,D,$;(V=r.value)==null||V.style.setProperty("transform",((_=I.value)==null?void 0:_.transform)||"none"),($=r.value)==null||$.style.setProperty("transition",((D=I.value)==null?void 0:D.transition)||null)}),Ne(()=>{var _,V;(_=r.value)==null||_.style.setProperty("transform",d),(V=r.value)==null||V.style.setProperty("transition",f)})}),{isDragging:g,dragProgress:h,dragStyles:I}}function R(){throw new Error}const ht=["start","end","left","right","top","bottom"],yt=L({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>ht.includes(e)},sticky:Boolean,...Se(),...X(),...$e(),...De({mobile:null}),...xe(),...fe(),...Te(),...q({tag:"nav"}),...ce()},"VNavigationDrawer"),bt=O()({name:"VNavigationDrawer",props:yt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,r){let{attrs:t,emit:y,slots:a}=r;const{isRtl:l}=de(),{themeClasses:o}=ve(e),{borderClasses:u}=Ve(e),{backgroundColorClasses:T,backgroundColorStyles:x}=U(W(e,"color")),{elevationClasses:s}=_e(e),{displayClasses:c,mobile:g}=Re(e),{roundedClasses:h}=pe(e),i=Ze(),w=ge(e,"modelValue",null,k=>!!k),{ssrBootStyles:B}=Q(),{scopeId:C}=Fe(),v=Z(),p=E(!1),{runOpenDelay:H,runCloseDelay:I}=Xe(e,k=>{p.value=k}),d=m(()=>e.rail&&e.expandOnHover&&p.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),f=m(()=>Ge(e.location,l.value)),b=m(()=>e.persistent),S=m(()=>!e.permanent&&(g.value||e.temporary)),_=m(()=>e.sticky&&!S.value&&f.value!=="bottom");A(()=>e.expandOnHover&&e.rail!=null,()=>{M(p,k=>y("update:rail",!k))}),A(()=>!e.disableResizeWatcher,()=>{M(S,k=>!e.permanent&&Ye(()=>w.value=!k))}),A(()=>!e.disableRouteWatcher&&!!i,()=>{M(i.currentRoute,()=>S.value&&(w.value=!1))}),M(()=>e.permanent,k=>{k&&(w.value=!0)}),e.modelValue==null&&!S.value&&(w.value=e.permanent||!g.value);const{isDragging:V,dragProgress:D}=gt({el:v,isActive:w,isTemporary:S,width:d,touchless:W(e,"touchless"),position:f}),$=m(()=>{const k=S.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):d.value;return V.value?k*D.value:k}),Ee=m(()=>["top","bottom"].includes(e.location)?0:d.value),{layoutItemStyles:ee,layoutItemScrimStyles:Ce}=he({id:e.name,order:m(()=>parseInt(e.order,10)),position:f,layoutSize:$,elementSize:Ee,active:m(()=>w.value||V.value),disableTransitions:m(()=>V.value),absolute:m(()=>e.absolute||_.value&&typeof te.value!="string")}),{isStuck:te,stickyStyles:He}=ct({rootEl:v,isSticky:_,layoutItemStyles:ee}),ae=U(m(()=>typeof e.scrim=="string"?e.scrim:null)),Pe=m(()=>({...V.value?{opacity:D.value*.2,transition:"none"}:void 0,...Ce.value}));return me({VList:{bgColor:"transparent"}}),z(()=>{const k=a.image||e.image;return n(K,null,[n(e.tag,j({ref:v,onMouseenter:H,onMouseleave:I,class:["v-navigation-drawer",`v-navigation-drawer--${f.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":p.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":S.value,"v-navigation-drawer--persistent":b.value,"v-navigation-drawer--active":w.value,"v-navigation-drawer--sticky":_.value},o.value,T.value,u.value,c.value,s.value,h.value,e.class],style:[x.value,ee.value,B.value,He.value,e.style,["top","bottom"].includes(f.value)?{height:"auto"}:{}]},C,t),{default:()=>{var le,ne,oe;return[k&&n("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?n(F,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},a.image):n(ke,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),a.prepend&&n("div",{class:"v-navigation-drawer__prepend"},[(le=a.prepend)==null?void 0:le.call(a)]),n("div",{class:"v-navigation-drawer__content"},[(ne=a.default)==null?void 0:ne.call(a)]),a.append&&n("div",{class:"v-navigation-drawer__append"},[(oe=a.append)==null?void 0:oe.call(a)])]}}),n(Le,{name:"fade-transition"},{default:()=>[S.value&&(V.value||w.value)&&!!e.scrim&&n("div",j({class:["v-navigation-drawer__scrim",ae.backgroundColorClasses.value],style:[Pe.value,ae.backgroundColorStyles.value],onClick:()=>{b.value||(w.value=!1)}},C),null)]})])}),{isStuck:te}}}),wt={__name:"AppBar",setup(e){return(r,t)=>(be(),we(K,null,[n(bt,{color:"primary",rail:"rail"},{default:P(()=>[n(qe,{nav:""},{default:P(()=>[n(N,{"prepend-icon":"mdi-view-dashboard",to:"/dashboard"}),n(N,{"prepend-icon":"mdi-account-box"}),n(N,{"prepend-icon":"mdi-wallet-bifold"}),n(N,{"prepend-icon":"mdi-cash"}),n(N,{"prepend-icon":"mdi-bullseye-arrow"}),n(N,{"prepend-icon":"mdi-account"}),n(N,{"prepend-icon":"mdi-finance"}),n(N,{"prepend-icon":"mdi-face-agent"})]),_:1})]),_:1}),n(rt,{flat:""},{default:P(()=>[n(Je,null,{default:P(()=>[n(Ke,null,{default:P(()=>[n(ie,{cols:"12",md:"8",lg:"4",class:"d-flex align-center justify-end"},{default:P(()=>[n(je,{"append-inner-icon":"mdi-magnify",density:"compact",variant:"solo",placeholder:"Search Here"})]),_:1}),n(st),n(ie,{class:"d-flex align-center justify-end"},{default:P(()=>[n(Qe,null,{default:P(()=>t[0]||(t[0]=[Ae("mdi-account")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64))}},St=L({scrollable:Boolean,...X(),...et(),...q({tag:"main"})},"VMain"),xt=O()({name:"VMain",props:St(),setup(e,r){let{slots:t}=r;const{dimensionStyles:y}=tt(e),{mainStyles:a}=We(),{ssrBootStyles:l}=Q();return z(()=>n(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[a.value,l.value,y.value,e.style]},{default:()=>{var o,u;return[e.scrollable?n("div",{class:"v-main__scroller"},[(o=t.default)==null?void 0:o.call(t)]):(u=t.default)==null?void 0:u.call(t)]}})),{}}}),pt={__name:"default",setup(e){return(r,t)=>{const y=wt,a=Oe("router-view");return be(),we(K,null,[n(y),n(xt,null,{default:P(()=>[n(a)]),_:1})],64)}}};export{pt as default};

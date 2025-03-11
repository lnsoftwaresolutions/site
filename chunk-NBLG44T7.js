import{$ as J1,G as X1,Ga as a2,L as $1,S as K1,T as w,V as L1,W as J,Wa as e2,X as Q1,la as c2,oa as l2,pa as s2,u as m1,v as K,y as Y1,z as Q}from"./chunk-XBZCRXJ3.js";function k3(c,l,s){return(l=A3(l))in c?Object.defineProperty(c,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[l]=s,c}function n2(c,l){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);l&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})),s.push.apply(s,a)}return s}function i(c){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?n2(Object(s),!0).forEach(function(a){k3(c,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):n2(Object(s)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(s,a))})}return c}function w3(c,l){if(typeof c!="object"||!c)return c;var s=c[Symbol.toPrimitive];if(s!==void 0){var a=s.call(c,l||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function A3(c){var l=w3(c,"string");return typeof l=="symbol"?l:l+""}var o2=()=>{},D1={},P2={},F2=null,T2={mark:o2,measure:o2};try{typeof window<"u"&&(D1=window),typeof document<"u"&&(P2=document),typeof MutationObserver<"u"&&(F2=MutationObserver),typeof performance<"u"&&(T2=performance)}catch{}var{userAgent:i2=""}=D1.navigator||{},V=D1,C=P2,f2=F2,c1=T2,W0=!!V.document,y=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",q2=~i2.indexOf("MSIE")||~i2.indexOf("Trident/"),V3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,P3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,D2={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},F3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},B2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],p="classic",o1="duotone",T3="sharp",q3="sharp-duotone",R2=[p,o1,T3,q3],D3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},B3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},R3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),E3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},I3=["fak","fa-kit","fakd","fa-kit-duotone"],t2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},O3=["kit"],Z3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},U3=["fak","fakd"],W3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},r2={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},l1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},G3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],j3=["fak","fa-kit","fakd","fa-kit-duotone"],_3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Y3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},X3={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},d1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},$3=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],x1=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...G3,...$3],K3=["solid","regular","light","thin","duotone","brands"],E2=[1,2,3,4,5,6,7,8,9,10],Q3=E2.concat([11,12,13,14,15,16,17,18,19,20]),J3=[...Object.keys(X3),...K3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",l1.GROUP,l1.SWAP_OPACITY,l1.PRIMARY,l1.SECONDARY].concat(E2.map(c=>"".concat(c,"x"))).concat(Q3.map(c=>"w-".concat(c))),c4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},S="___FONT_AWESOME___",N1=16,I2="fa",O2="svg-inline--fa",D="data-fa-i2svg",g1="data-fa-pseudo-element",l4="data-fa-pseudo-element-pending",B1="data-prefix",R1="data-icon",z2="fontawesome-i2svg",s4="async",a4=["HTML","HEAD","STYLE","SCRIPT"],Z2=(()=>{try{return!0}catch{return!1}})();function X(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[p]}})}var U2=i({},D2);U2[p]=i(i(i(i({},{"fa-duotone":"duotone"}),D2[p]),t2.kit),t2["kit-duotone"]);var e4=X(U2),b1=i({},E3);b1[p]=i(i(i(i({},{duotone:"fad"}),b1[p]),r2.kit),r2["kit-duotone"]);var m2=X(b1),v1=i({},d1);v1[p]=i(i({},v1[p]),W3.kit);var E1=X(v1),S1=i({},Y3);S1[p]=i(i({},S1[p]),Z3.kit);var G0=X(S1),n4=V3,W2="fa-layers-text",o4=P3,i4=i({},D3),j0=X(i4),f4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],M1=F3,t4=[...O3,...J3],G=V.FontAwesomeConfig||{};function r4(c){var l=C.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function z4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}C&&typeof C.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,a]=l,e=z4(r4(s));e!=null&&(G[a]=e)});var G2={styleDefault:"solid",familyDefault:p,cssPrefix:I2,replacementClass:O2,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};G.familyPrefix&&(G.cssPrefix=G.familyPrefix);var Z=i(i({},G2),G);Z.autoReplaceSvg||(Z.observeMutations=!1);var t={};Object.keys(G2).forEach(c=>{Object.defineProperty(t,c,{enumerable:!0,set:function(l){Z[c]=l,j.forEach(s=>s(t))},get:function(){return Z[c]}})});Object.defineProperty(t,"familyPrefix",{enumerable:!0,set:function(c){Z.cssPrefix=c,j.forEach(l=>l(t))},get:function(){return Z.cssPrefix}});V.FontAwesomeConfig=t;var j=[];function m4(c){return j.push(c),()=>{j.splice(j.indexOf(c),1)}}var A=N1,g={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function L4(c){if(!c||!y)return;let l=C.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let s=C.head.childNodes,a=null;for(let e=s.length-1;e>-1;e--){let n=s[e],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=n)}return C.head.insertBefore(l,a),c}var M4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _(){let c=12,l="";for(;c-- >0;)l+=M4[Math.random()*62|0];return l}function U(c){let l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function I1(c){return c.classList?U(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function j2(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function C4(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(j2(c[s]),'" '),"").trim()}function i1(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function O1(c){return c.size!==g.size||c.x!==g.x||c.y!==g.y||c.rotate!==g.rotate||c.flipX||c.flipY}function p4(c){let{transform:l,containerWidth:s,iconWidth:a}=c,e={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),f="rotate(".concat(l.rotate," 0 0)"),z={transform:"".concat(n," ").concat(o," ").concat(f)},r={transform:"translate(".concat(a/2*-1," -256)")};return{outer:e,inner:z,path:r}}function h4(c){let{transform:l,width:s=N1,height:a=N1,startCentered:e=!1}=c,n="";return e&&q2?n+="translate(".concat(l.x/A-s/2,"em, ").concat(l.y/A-a/2,"em) "):e?n+="translate(calc(-50% + ".concat(l.x/A,"em), calc(-50% + ").concat(l.y/A,"em)) "):n+="translate(".concat(l.x/A,"em, ").concat(l.y/A,"em) "),n+="scale(".concat(l.size/A*(l.flipX?-1:1),", ").concat(l.size/A*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var u4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function _2(){let c=I2,l=O2,s=t.cssPrefix,a=t.replacementClass,e=u4;if(s!==c||a!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(l),"g");e=e.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(f,".".concat(a))}return e}var L2=!1;function C1(){t.autoAddCss&&!L2&&(L4(_2()),L2=!0)}var d4={mixout(){return{dom:{css:_2,insertCss:C1}}},hooks(){return{beforeDOMElementCreation(){C1()},beforeI2svg(){C1()}}}},H=V||{};H[S]||(H[S]={});H[S].styles||(H[S].styles={});H[S].hooks||(H[S].hooks={});H[S].shims||(H[S].shims=[]);var b=H[S],Y2=[],X2=function(){C.removeEventListener("DOMContentLoaded",X2),e1=1,Y2.map(c=>c())},e1=!1;y&&(e1=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),e1||C.addEventListener("DOMContentLoaded",X2));function x4(c){y&&(e1?setTimeout(c,0):Y2.push(c))}function $(c){let{tag:l,attributes:s={},children:a=[]}=c;return typeof c=="string"?j2(c):"<".concat(l," ").concat(C4(s),">").concat(a.map($).join(""),"</").concat(l,">")}function M2(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var N4=function(l,s){return function(a,e,n,o){return l.call(s,a,e,n,o)}},p1=function(l,s,a,e){var n=Object.keys(l),o=n.length,f=e!==void 0?N4(s,e):s,z,r,m;for(a===void 0?(z=1,m=l[n[0]]):(z=0,m=a);z<o;z++)r=n[z],m=f(m,l[r],r,l);return m};function g4(c){let l=[],s=0,a=c.length;for(;s<a;){let e=c.charCodeAt(s++);if(e>=55296&&e<=56319&&s<a){let n=c.charCodeAt(s++);(n&64512)==56320?l.push(((e&1023)<<10)+(n&1023)+65536):(l.push(e),s--)}else l.push(e)}return l}function H1(c){let l=g4(c);return l.length===1?l[0].toString(16):null}function b4(c,l){let s=c.length,a=c.charCodeAt(l),e;return a>=55296&&a<=56319&&s>l+1&&(e=c.charCodeAt(l+1),e>=56320&&e<=57343)?(a-55296)*1024+e-56320+65536:a}function C2(c){return Object.keys(c).reduce((l,s)=>{let a=c[s];return!!a.icon?l[a.iconName]=a.icon:l[s]=a,l},{})}function y1(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=s,e=C2(l);typeof b.hooks.addPack=="function"&&!a?b.hooks.addPack(c,C2(l)):b.styles[c]=i(i({},b.styles[c]||{}),e),c==="fas"&&y1("fa",l)}var{styles:Y,shims:v4}=b,$2=Object.keys(E1),S4=$2.reduce((c,l)=>(c[l]=Object.keys(E1[l]),c),{}),Z1=null,K2={},Q2={},J2={},c3={},l3={};function H4(c){return~t4.indexOf(c)}function y4(c,l){let s=l.split("-"),a=s[0],e=s.slice(1).join("-");return a===c&&e!==""&&!H4(e)?e:null}var s3=()=>{let c=a=>p1(Y,(e,n,o)=>(e[o]=p1(n,a,{}),e),{});K2=c((a,e,n)=>(e[3]&&(a[e[3]]=n),e[2]&&e[2].filter(f=>typeof f=="number").forEach(f=>{a[f.toString(16)]=n}),a)),Q2=c((a,e,n)=>(a[n]=n,e[2]&&e[2].filter(f=>typeof f=="string").forEach(f=>{a[f]=n}),a)),l3=c((a,e,n)=>{let o=e[2];return a[n]=n,o.forEach(f=>{a[f]=n}),a});let l="far"in Y||t.autoFetchSvg,s=p1(v4,(a,e)=>{let n=e[0],o=e[1],f=e[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(a.names[n]={prefix:o,iconName:f}),typeof n=="number"&&(a.unicodes[n.toString(16)]={prefix:o,iconName:f}),a},{names:{},unicodes:{}});J2=s.names,c3=s.unicodes,Z1=f1(t.styleDefault,{family:t.familyDefault})};m4(c=>{Z1=f1(c.styleDefault,{family:t.familyDefault})});s3();function U1(c,l){return(K2[c]||{})[l]}function k4(c,l){return(Q2[c]||{})[l]}function q(c,l){return(l3[c]||{})[l]}function a3(c){return J2[c]||{prefix:null,iconName:null}}function w4(c){let l=c3[c],s=U1("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function P(){return Z1}var e3=()=>({prefix:null,iconName:null,rest:[]});function A4(c){let l=p,s=$2.reduce((a,e)=>(a[e]="".concat(t.cssPrefix,"-").concat(e),a),{});return R2.forEach(a=>{(c.includes(s[a])||c.some(e=>S4[a].includes(e)))&&(l=a)}),l}function f1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:s=p}=l,a=e4[s][c];if(s===o1&&!c)return"fad";let e=m2[s][c]||m2[s][a],n=c in b.styles?c:null;return e||n||null}function V4(c){let l=[],s=null;return c.forEach(a=>{let e=y4(t.cssPrefix,a);e?s=e:a&&l.push(a)}),{iconName:s,rest:l}}function p2(c){return c.sort().filter((l,s,a)=>a.indexOf(l)===s)}function t1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:s=!1}=l,a=null,e=x1.concat(j3),n=p2(c.filter(M=>e.includes(M))),o=p2(c.filter(M=>!x1.includes(M))),f=n.filter(M=>(a=M,!B2.includes(M))),[z=null]=f,r=A4(n),m=i(i({},V4(o)),{},{prefix:f1(z,{family:r})});return i(i(i({},m),q4({values:c,family:r,styles:Y,config:t,canonical:m,givenPrefix:a})),P4(s,a,m))}function P4(c,l,s){let{prefix:a,iconName:e}=s;if(c||!a||!e)return{prefix:a,iconName:e};let n=l==="fa"?a3(e):{},o=q(a,e);return e=n.iconName||o||e,a=n.prefix||a,a==="far"&&!Y.far&&Y.fas&&!t.autoFetchSvg&&(a="fas"),{prefix:a,iconName:e}}var F4=R2.filter(c=>c!==p||c!==o1),T4=Object.keys(d1).filter(c=>c!==p).map(c=>Object.keys(d1[c])).flat();function q4(c){let{values:l,family:s,canonical:a,givenPrefix:e="",styles:n={},config:o={}}=c,f=s===o1,z=l.includes("fa-duotone")||l.includes("fad"),r=o.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!f&&(z||r||m)&&(a.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(a.prefix="fab"),!a.prefix&&F4.includes(s)&&(Object.keys(n).find(L=>T4.includes(L))||o.autoFetchSvg)){let L=R3.get(s).defaultShortPrefixId;a.prefix=L,a.iconName=q(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||e==="fa")&&(a.prefix=P()||"fas"),a}var k1=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),a=0;a<l;a++)s[a]=arguments[a];let e=s.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]=i(i({},this.definitions[n]||{}),e[n]),y1(n,e[n]);let o=E1[p][n];o&&y1(o,e[n]),s3()})}reset(){this.definitions={}}_pullDefinitions(l,s){let a=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(a).map(e=>{let{prefix:n,iconName:o,icon:f}=a[e],z=f[2];l[n]||(l[n]={}),z.length>0&&z.forEach(r=>{typeof r=="string"&&(l[n][r]=f)}),l[n][o]=f}),l}},h2=[],I={},O={},D4=Object.keys(O);function B4(c,l){let{mixoutsTo:s}=l;return h2=c,I={},Object.keys(O).forEach(a=>{D4.indexOf(a)===-1&&delete O[a]}),h2.forEach(a=>{let e=a.mixout?a.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(s[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=e[n][o]})}),a.hooks){let n=a.hooks();Object.keys(n).forEach(o=>{I[o]||(I[o]=[]),I[o].push(n[o])})}a.provides&&a.provides(O)}),s}function w1(c,l){for(var s=arguments.length,a=new Array(s>2?s-2:0),e=2;e<s;e++)a[e-2]=arguments[e];return(I[c]||[]).forEach(o=>{l=o.apply(null,[l,...a])}),l}function B(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),a=1;a<l;a++)s[a-1]=arguments[a];(I[c]||[]).forEach(n=>{n.apply(null,s)})}function F(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return O[c]?O[c].apply(null,l):void 0}function A1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,s=c.prefix||P();if(l)return l=q(s,l)||l,M2(n3.definitions,s,l)||M2(b.styles,s,l)}var n3=new k1,R4=()=>{t.autoReplaceSvg=!1,t.observeMutations=!1,B("noAuto")},E4={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return y?(B("beforeI2svg",c),F("pseudoElements2svg",c),F("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;t.autoReplaceSvg===!1&&(t.autoReplaceSvg=!0),t.observeMutations=!0,x4(()=>{O4({autoReplaceSvgRoot:l}),B("watch",c)})}},I4={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:q(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=f1(c[0]);return{prefix:s,iconName:q(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(t.cssPrefix,"-"))>-1||c.match(n4))){let l=t1(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||P(),iconName:q(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=P();return{prefix:l,iconName:q(l,c)||c}}}},d={noAuto:R4,config:t,dom:E4,parse:I4,library:n3,findIconDefinition:A1,toHtml:$},O4=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=C}=c;(Object.keys(b.styles).length>0||t.autoFetchSvg)&&y&&t.autoReplaceSvg&&d.dom.i2svg({node:l})};function r1(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>$(s))}}),Object.defineProperty(c,"node",{get:function(){if(!y)return;let s=C.createElement("div");return s.innerHTML=c.html,s.children}}),c}function Z4(c){let{children:l,main:s,mask:a,attributes:e,styles:n,transform:o}=c;if(O1(o)&&s.found&&!a.found){let{width:f,height:z}=s,r={x:f/z/2,y:.5};e.style=i1(i(i({},n),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:e,children:l}]}function U4(c){let{prefix:l,iconName:s,children:a,attributes:e,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(t.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},e),{},{id:o}),children:a}]}]}function W1(c){let{icons:{main:l,mask:s},prefix:a,iconName:e,transform:n,symbol:o,title:f,maskId:z,titleId:r,extra:m,watchable:M=!1}=c,{width:L,height:h}=s.found?s:l,k=U3.includes(a),T=[t.replacementClass,e?"".concat(t.cssPrefix,"-").concat(e):""].filter(E=>m.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(m.classes).join(" "),x={children:[],attributes:i(i({},m.attributes),{},{"data-prefix":a,"data-icon":e,class:T,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(h)})},v=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(L/h*16*.0625,"em")}:{};M&&(x.attributes[D]=""),f&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(r||_())},children:[f]}),delete x.attributes.title);let u=i(i({},x),{},{prefix:a,iconName:e,main:l,mask:s,maskId:z,transform:n,symbol:o,styles:i(i({},v),m.styles)}),{children:N,attributes:R}=s.found&&l.found?F("generateAbstractMask",u)||{children:[],attributes:{}}:F("generateAbstractIcon",u)||{children:[],attributes:{}};return u.children=N,u.attributes=R,o?U4(u):Z4(u)}function u2(c){let{content:l,width:s,height:a,transform:e,title:n,extra:o,watchable:f=!1}=c,z=i(i(i({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});f&&(z[D]="");let r=i({},o.styles);O1(e)&&(r.transform=h4({transform:e,startCentered:!0,width:s,height:a}),r["-webkit-transform"]=r.transform);let m=i1(r);m.length>0&&(z.style=m);let M=[];return M.push({tag:"span",attributes:z,children:[l]}),n&&M.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),M}function W4(c){let{content:l,title:s,extra:a}=c,e=i(i(i({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")}),n=i1(a.styles);n.length>0&&(e.style=n);let o=[];return o.push({tag:"span",attributes:e,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}var{styles:h1}=b;function V1(c){let l=c[0],s=c[1],[a]=c.slice(4),e=null;return Array.isArray(a)?e={tag:"g",attributes:{class:"".concat(t.cssPrefix,"-").concat(M1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(t.cssPrefix,"-").concat(M1.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(t.cssPrefix,"-").concat(M1.PRIMARY),fill:"currentColor",d:a[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:l,height:s,icon:e}}var G4={found:!1,width:512,height:512};function j4(c,l){!Z2&&!t.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function P1(c,l){let s=l;return l==="fa"&&t.styleDefault!==null&&(l=P()),new Promise((a,e)=>{if(s==="fa"){let n=a3(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&h1[l]&&h1[l][c]){let n=h1[l][c];return a(V1(n))}j4(c,l),a(i(i({},G4),{},{icon:t.showMissingIcons&&c?F("missingIconAbstract")||{}:{}}))})}var d2=()=>{},F1=t.measurePerformance&&c1&&c1.mark&&c1.measure?c1:{mark:d2,measure:d2},W='FA "6.7.2"',_4=c=>(F1.mark("".concat(W," ").concat(c," begins")),()=>o3(c)),o3=c=>{F1.mark("".concat(W," ").concat(c," ends")),F1.measure("".concat(W," ").concat(c),"".concat(W," ").concat(c," begins"),"".concat(W," ").concat(c," ends"))},G1={begin:_4,end:o3},s1=()=>{};function x2(c){return typeof(c.getAttribute?c.getAttribute(D):null)=="string"}function Y4(c){let l=c.getAttribute?c.getAttribute(B1):null,s=c.getAttribute?c.getAttribute(R1):null;return l&&s}function X4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(t.replacementClass)}function $4(){return t.autoReplaceSvg===!0?a1.replace:a1[t.autoReplaceSvg]||a1.replace}function K4(c){return C.createElementNS("http://www.w3.org/2000/svg",c)}function Q4(c){return C.createElement(c)}function i3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:s=c.tag==="svg"?K4:Q4}=l;if(typeof c=="string")return C.createTextNode(c);let a=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){a.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){a.appendChild(i3(n,{ceFn:s}))}),a}function J4(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var a1={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(i3(s),l)}),l.getAttribute(D)===null&&t.keepOriginalSource){let s=C.createComment(J4(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){let l=c[0],s=c[1];if(~I1(l).indexOf(t.replacementClass))return a1.replace(c);let a=new RegExp("".concat(t.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){let n=s[0].attributes.class.split(" ").reduce((o,f)=>(f===t.replacementClass||f.match(a)?o.toSvg.push(f):o.toNode.push(f),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let e=s.map(n=>$(n)).join(`
`);l.setAttribute(D,""),l.innerHTML=e}};function N2(c){c()}function f3(c,l){let s=typeof l=="function"?l:s1;if(c.length===0)s();else{let a=N2;t.mutateApproach===s4&&(a=V.requestAnimationFrame||N2),a(()=>{let e=$4(),n=G1.begin("mutate");c.map(e),n(),s()})}}var j1=!1;function t3(){j1=!0}function T1(){j1=!1}var n1=null;function g2(c){if(!f2||!t.observeMutations)return;let{treeCallback:l=s1,nodeCallback:s=s1,pseudoElementsCallback:a=s1,observeMutationsRoot:e=C}=c;n1=new f2(n=>{if(j1)return;let o=P();U(n).forEach(f=>{if(f.type==="childList"&&f.addedNodes.length>0&&!x2(f.addedNodes[0])&&(t.searchPseudoElements&&a(f.target),l(f.target)),f.type==="attributes"&&f.target.parentNode&&t.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&x2(f.target)&&~f4.indexOf(f.attributeName))if(f.attributeName==="class"&&Y4(f.target)){let{prefix:z,iconName:r}=t1(I1(f.target));f.target.setAttribute(B1,z||o),r&&f.target.setAttribute(R1,r)}else X4(f.target)&&s(f.target)})}),y&&n1.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function c0(){n1&&n1.disconnect()}function l0(c){let l=c.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce((a,e)=>{let n=e.split(":"),o=n[0],f=n.slice(1);return o&&f.length>0&&(a[o]=f.join(":").trim()),a},{})),s}function s0(c){let l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",e=t1(I1(c));return e.prefix||(e.prefix=P()),l&&s&&(e.prefix=l,e.iconName=s),e.iconName&&e.prefix||(e.prefix&&a.length>0&&(e.iconName=k4(e.prefix,c.innerText)||U1(e.prefix,H1(c.innerText))),!e.iconName&&t.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function a0(c){let l=U(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),s=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return t.autoA11y&&(s?l["aria-labelledby"]="".concat(t.replacementClass,"-title-").concat(a||_()):(l["aria-hidden"]="true",l.focusable="false")),l}function e0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:g,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function b2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:s,prefix:a,rest:e}=s0(c),n=a0(c),o=w1("parseNodeAttributes",{},c),f=l.styleParser?l0(c):[];return i({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:g,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:f,attributes:n}},o)}var{styles:n0}=b;function r3(c){let l=t.autoReplaceSvg==="nest"?b2(c,{styleParser:!1}):b2(c);return~l.extra.classes.indexOf(W2)?F("generateLayersText",c,l):F("generateSvgReplacementMutation",c,l)}function o0(){return[...I3,...x1]}function v2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!y)return Promise.resolve();let s=C.documentElement.classList,a=m=>s.add("".concat(z2,"-").concat(m)),e=m=>s.remove("".concat(z2,"-").concat(m)),n=t.autoFetchSvg?o0():B2.concat(Object.keys(n0));n.includes("fa")||n.push("fa");let o=[".".concat(W2,":not([").concat(D,"])")].concat(n.map(m=>".".concat(m,":not([").concat(D,"])"))).join(", ");if(o.length===0)return Promise.resolve();let f=[];try{f=U(c.querySelectorAll(o))}catch{}if(f.length>0)a("pending"),e("complete");else return Promise.resolve();let z=G1.begin("onTree"),r=f.reduce((m,M)=>{try{let L=r3(M);L&&m.push(L)}catch(L){Z2||L.name==="MissingIcon"&&console.error(L)}return m},[]);return new Promise((m,M)=>{Promise.all(r).then(L=>{f3(L,()=>{a("active"),a("complete"),e("pending"),typeof l=="function"&&l(),z(),m()})}).catch(L=>{z(),M(L)})})}function i0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;r3(c).then(s=>{s&&f3([s],l)})}function f0(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(l||{}).icon?l:A1(l||{}),{mask:e}=s;return e&&(e=(e||{}).icon?e:A1(e||{})),c(a,i(i({},s),{},{mask:e}))}}var t0=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=g,symbol:a=!1,mask:e=null,maskId:n=null,title:o=null,titleId:f=null,classes:z=[],attributes:r={},styles:m={}}=l;if(!c)return;let{prefix:M,iconName:L,icon:h}=c;return r1(i({type:"icon"},c),()=>(B("beforeDOMElementCreation",{iconDefinition:c,params:l}),t.autoA11y&&(o?r["aria-labelledby"]="".concat(t.replacementClass,"-title-").concat(f||_()):(r["aria-hidden"]="true",r.focusable="false")),W1({icons:{main:V1(h),mask:e?V1(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:L,transform:i(i({},g),s),symbol:a,title:o,maskId:n,titleId:f,extra:{attributes:r,styles:m,classes:z}})))},r0={mixout(){return{icon:f0(t0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=v2,c.nodeCallback=i0,c}}},provides(c){c.i2svg=function(l){let{node:s=C,callback:a=()=>{}}=l;return v2(s,a)},c.generateSvgReplacementMutation=function(l,s){let{iconName:a,title:e,titleId:n,prefix:o,transform:f,symbol:z,mask:r,maskId:m,extra:M}=s;return new Promise((L,h)=>{Promise.all([P1(a,o),r.iconName?P1(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[T,x]=k;L([l,W1({icons:{main:T,mask:x},prefix:o,iconName:a,transform:f,symbol:z,maskId:m,title:e,titleId:n,extra:M,watchable:!0})])}).catch(h)})},c.generateAbstractIcon=function(l){let{children:s,attributes:a,main:e,transform:n,styles:o}=l,f=i1(o);f.length>0&&(a.style=f);let z;return O1(n)&&(z=F("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),s.push(z||e.icon),{children:s,attributes:a}}}},z0={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:s=[]}=l;return r1({type:"layer"},()=>{B("beforeDOMElementCreation",{assembler:c,params:l});let a=[];return c(e=>{Array.isArray(e)?e.map(n=>{a=a.concat(n.abstract)}):a=a.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(t.cssPrefix,"-layers"),...s].join(" ")},children:a}]})}}}},m0={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:s=null,classes:a=[],attributes:e={},styles:n={}}=l;return r1({type:"counter",content:c},()=>(B("beforeDOMElementCreation",{content:c,params:l}),W4({content:c.toString(),title:s,extra:{attributes:e,styles:n,classes:["".concat(t.cssPrefix,"-layers-counter"),...a]}})))}}}},L0={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=g,title:a=null,classes:e=[],attributes:n={},styles:o={}}=l;return r1({type:"text",content:c},()=>(B("beforeDOMElementCreation",{content:c,params:l}),u2({content:c,transform:i(i({},g),s),title:a,extra:{attributes:n,styles:o,classes:["".concat(t.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(l,s){let{title:a,transform:e,extra:n}=s,o=null,f=null;if(q2){let z=parseInt(getComputedStyle(l).fontSize,10),r=l.getBoundingClientRect();o=r.width/z,f=r.height/z}return t.autoA11y&&!a&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,u2({content:l.innerHTML,width:o,height:f,transform:e,title:a,extra:n,watchable:!0})])}}},M0=new RegExp('"',"ug"),S2=[1105920,1112319],H2=i(i(i(i({},{FontAwesome:{normal:"fas",400:"fas"}}),B3),c4),_3),q1=Object.keys(H2).reduce((c,l)=>(c[l.toLowerCase()]=H2[l],c),{}),C0=Object.keys(q1).reduce((c,l)=>{let s=q1[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function p0(c){let l=c.replace(M0,""),s=b4(l,0),a=s>=S2[0]&&s<=S2[1],e=l.length===2?l[0]===l[1]:!1;return{value:H1(e?l[0]:l),isSecondary:a||e}}function h0(c,l){let s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(l),e=isNaN(a)?"normal":a;return(q1[s]||{})[e]||C0[s]}function y2(c,l){let s="".concat(l4).concat(l.replace(":","-"));return new Promise((a,e)=>{if(c.getAttribute(s)!==null)return a();let o=U(c.children).filter(L=>L.getAttribute(g1)===l)[0],f=V.getComputedStyle(c,l),z=f.getPropertyValue("font-family"),r=z.match(o4),m=f.getPropertyValue("font-weight"),M=f.getPropertyValue("content");if(o&&!r)return c.removeChild(o),a();if(r&&M!=="none"&&M!==""){let L=f.getPropertyValue("content"),h=h0(z,m),{value:k,isSecondary:T}=p0(L),x=r[0].startsWith("FontAwesome"),v=U1(h,k),u=v;if(x){let N=w4(k);N.iconName&&N.prefix&&(v=N.iconName,h=N.prefix)}if(v&&!T&&(!o||o.getAttribute(B1)!==h||o.getAttribute(R1)!==u)){c.setAttribute(s,u),o&&c.removeChild(o);let N=e0(),{extra:R}=N;R.attributes[g1]=l,P1(v,h).then(E=>{let H3=W1(i(i({},N),{},{icons:{main:E,mask:e3()},prefix:h,iconName:u,extra:R,watchable:!0})),z1=C.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(z1,c.firstChild):c.appendChild(z1),z1.outerHTML=H3.map(y3=>$(y3)).join(`
`),c.removeAttribute(s),a()}).catch(e)}else a()}else a()})}function u0(c){return Promise.all([y2(c,"::before"),y2(c,"::after")])}function d0(c){return c.parentNode!==document.head&&!~a4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(g1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function k2(c){if(y)return new Promise((l,s)=>{let a=U(c.querySelectorAll("*")).filter(d0).map(u0),e=G1.begin("searchPseudoElements");t3(),Promise.all(a).then(()=>{e(),T1(),l()}).catch(()=>{e(),T1(),s()})})}var x0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=k2,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:s=C}=l;t.searchPseudoElements&&k2(s)}}},w2=!1,N0={mixout(){return{dom:{unwatch(){t3(),w2=!0}}}},hooks(){return{bootstrap(){g2(w1("mutationObserverCallbacks",{}))},noAuto(){c0()},watch(c){let{observeMutationsRoot:l}=c;w2?T1():g2(w1("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},A2=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((s,a)=>{let e=a.toLowerCase().split("-"),n=e[0],o=e.slice(1).join("-");if(n&&o==="h")return s.flipX=!0,s;if(n&&o==="v")return s.flipY=!0,s;if(o=parseFloat(o),isNaN(o))return s;switch(n){case"grow":s.size=s.size+o;break;case"shrink":s.size=s.size-o;break;case"left":s.x=s.x-o;break;case"right":s.x=s.x+o;break;case"up":s.y=s.y-o;break;case"down":s.y=s.y+o;break;case"rotate":s.rotate=s.rotate+o;break}return s},l)},g0={mixout(){return{parse:{transform:c=>A2(c)}}},hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-transform");return s&&(c.transform=A2(s)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:s,transform:a,containerWidth:e,iconWidth:n}=l,o={transform:"translate(".concat(e/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),z="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),r="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(f," ").concat(z," ").concat(r)},M={transform:"translate(".concat(n/2*-1," -256)")},L={outer:o,inner:m,path:M};return{tag:"g",attributes:i({},L.outer),children:[{tag:"g",attributes:i({},L.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:i(i({},s.icon.attributes),L.path)}]}]}}}},u1={x:0,y:0,width:"100%",height:"100%"};function V2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function b0(c){return c.tag==="g"?c.children:[c]}var v0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-mask"),a=s?t1(s.split(" ").map(e=>e.trim())):e3();return a.prefix||(a.prefix=P()),c.mask=a,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:s,attributes:a,main:e,mask:n,maskId:o,transform:f}=l,{width:z,icon:r}=e,{width:m,icon:M}=n,L=p4({transform:f,containerWidth:m,iconWidth:z}),h={tag:"rect",attributes:i(i({},u1),{},{fill:"white"})},k=r.children?{children:r.children.map(V2)}:{},T={tag:"g",attributes:i({},L.inner),children:[V2(i({tag:r.tag,attributes:i(i({},r.attributes),L.path)},k))]},x={tag:"g",attributes:i({},L.outer),children:[T]},v="mask-".concat(o||_()),u="clip-".concat(o||_()),N={tag:"mask",attributes:i(i({},u1),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,x]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:u},children:b0(M)},N]};return s.push(R,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(u,")"),mask:"url(#".concat(v,")")},u1)}),{children:s,attributes:a}}}},S0={provides(c){let l=!1;V.matchMedia&&(l=V.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let s=[],a={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:i(i({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=i(i({},e),{},{attributeName:"opacity"}),o={tag:"circle",attributes:i(i({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:i(i({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(o),s.push({tag:"path",attributes:i(i({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:i(i({},n),{},{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:i(i({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},H0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-symbol"),a=s===null?!1:s===""?!0:s;return c.symbol=a,c}}}},y0=[d4,r0,z0,m0,L0,x0,N0,g0,v0,S0,H0];B4(y0,{mixoutsTo:d});var _0=d.noAuto,z3=d.config,m3=d.library,L3=d.dom,M3=d.parse,Y0=d.findIconDefinition,X0=d.toHtml,C3=d.icon,$0=d.layer,k0=d.text,w0=d.counter;var V0=["*"],P0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},F0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},h3=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),T0=c=>{let l=h3(c.rotate),s={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:l,"fa-rotate-by":c.rotate!=null&&!l,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(s).map(a=>s[a]?a:null).filter(a=>a)},_1=new WeakSet,p3="fa-auto-css";function q0(c,l){if(!l.autoAddCss||_1.has(c))return;if(c.getElementById(p3)!=null){l.autoAddCss=!1,_1.add(c);return}let s=c.createElement("style");s.setAttribute("type","text/css"),s.setAttribute("id",p3),s.innerHTML=L3.css();let a=c.head.childNodes,e=null;for(let n=a.length-1;n>-1;n--){let o=a[n],f=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(e=o)}c.head.insertBefore(s,e),l.autoAddCss=!1,_1.add(c)}var D0=c=>c.prefix!==void 0&&c.iconName!==void 0,B0=(c,l)=>D0(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},R0=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(s){z3.autoAddCss=s,this._autoAddCss=s}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275prov=m1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),E0=(()=>{class c{constructor(){this.definitions={}}addIcons(...s){for(let a of s){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let e of a.icon[2])typeof e=="string"&&(this.definitions[a.prefix][e]=a)}}addIconPacks(...s){for(let a of s){let e=Object.keys(a).map(n=>a[n]);this.addIcons(...e)}}getIconDefinition(s,a){return s in this.definitions&&a in this.definitions[s]?this.definitions[s][a]:null}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275prov=m1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),I0=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(s){if("size"in s)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275dir=Q1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[Q]})}}return c})(),O0=(()=>{class c{constructor(s,a){this.renderer=s,this.elementRef=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(s){"size"in s&&(s.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${s.size.currentValue}`),s.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${s.size.previousValue}`))}static{this.\u0275fac=function(a){return new(a||c)(w(K1),w(X1))}}static{this.\u0275cmp=L1({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},features:[Q],ngContentSelectors:V0,decls:1,vars:0,template:function(a,e){a&1&&(l2(),s2(0))},encapsulation:2})}}return c})(),m6=(()=>{class c{constructor(s,a,e,n,o){this.sanitizer=s,this.config=a,this.iconLibrary=e,this.stackItem=n,this.document=Y1(a2),o!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(s){if(this.icon==null&&this.config.fallbackIcon==null){F0();return}if(s){let a=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(a!=null){let e=this.buildParams();q0(this.document,this.config);let n=C3(a,e);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(s){let a=B0(s,this.config.defaultPrefix);if("icon"in a)return a;let e=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return e??(P0(a),null)}buildParams(){let s={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},a=typeof this.transform=="string"?M3.transform(this.transform):this.transform,e={};return s.rotate!=null&&!h3(s.rotate)&&(e["--fa-rotate-angle"]=`${s.rotate}`),{title:this.title,transform:a,classes:T0(s),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:e}}static{this.\u0275fac=function(a){return new(a||c)(w(e2),w(R0),w(E0),w(I0,8),w(O0,8))}}static{this.\u0275cmp=L1({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,e){a&2&&(c2("innerHTML",e.renderedIconHTML,$1),J1("title",e.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[Q],decls:0,vars:0,template:function(a,e){},encapsulation:2})}}return c})();var u3=(()=>{class c{static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275mod=J({type:c})}static{this.\u0275inj=K({})}}return c})();var Z0={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},d3=Z0;var x3={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};var N3={prefix:"fas",iconName:"angles-right",icon:[512,512,[187,"angle-double-right"],"f101","M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]};var U0={prefix:"fas",iconName:"location-pin",icon:[384,512,["map-marker"],"f041","M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"]},g3=U0;var b3={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var v3={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};m3.add(g3,v3,b3,x3,N3,d3);var S3=class c{static \u0275fac=function(s){return new(s||c)};static \u0275mod=J({type:c});static \u0275inj=K({imports:[u3]})};export{N3 as a,g3 as b,b3 as c,v3 as d,m6 as e,d3 as f,x3 as g,S3 as h};

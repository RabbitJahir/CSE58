(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={formatUrl:function(){return l},formatWithValidation:function(){return d},urlObjectKeys:function(){return s}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let n=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,i=e.protocol||"",o=e.pathname||"",l=e.hash||"",s=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:r&&(d=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(d+=":"+e.port)),s&&"object"==typeof s&&(s=String(n.urlQueryToSearchParams(s)));let u=e.search||s&&`?${s}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||a.test(i))&&!1!==d?(d="//"+(d||""),o&&"/"!==o[0]&&(o="/"+o)):d||(d=""),l&&"#"!==l[0]&&(l="#"+l),u&&"?"!==u[0]&&(u="?"+u),o=o.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${i}${d}${o}${u}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return l(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let i=e.r(71645);function o(e,t){let r=(0,i.useRef)(null),o=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=n(e,i)),t&&(o.current=n(t,i))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return n}});let i=e.r(18967),o=e.r(52817);function n(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return b},useLinkStatus:function(){return x}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let n=e.r(90809),a=e.r(43476),l=n._(e.r(71645)),s=e.r(95057),d=e.r(8372),u=e.r(18581),c=e.r(18967),p=e.r(5550);e.r(33525);let f=e.r(88540),h=e.r(91949),m=e.r(73668),g=e.r(9396);function b(t){var r,i;let o,n,b,[x,v]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),w=(0,l.useRef)(null),{href:_,as:j,children:P,prefetch:S=null,passHref:C,replace:O,shallow:k,scroll:E,onClick:R,onMouseEnter:M,onTouchStart:T,legacyBehavior:I=!1,onNavigate:N,transitionTypes:z,ref:D,unstable_dynamicOnHover:L,...B}=t;o=P,I&&("string"==typeof o||"number"==typeof o)&&(o=(0,a.jsx)("a",{children:o}));let $=l.default.useContext(d.AppRouterContext),U=!1!==S,A=!1!==S?null===(i=S)||"auto"===i?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,F="string"==typeof(r=j||_)?r:(0,s.formatUrl)(r);if(I){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=l.default.Children.only(o)}let W=I?n&&"object"==typeof n&&n.ref:D,q=l.default.useCallback(e=>(null!==$&&(w.current=(0,h.mountLinkInstance)(e,F,$,A,U,v)),()=>{w.current&&((0,h.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,h.unmountPrefetchableInstance)(e)}),[U,F,$,A,v]),H={ref:(0,u.useMergedRef)(q,W),onClick(t){I||"function"!=typeof R||R(t),I&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!$||t.defaultPrevented||function(t,r,i,o,n,a,s){if("u">typeof window){let d,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:c}=e.r(99781);l.default.startTransition(()=>{c(r,o?"replace":"push",!1===n?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,i.current,s)})}}(t,F,w,O,E,N,z)},onMouseEnter(e){I||"function"!=typeof M||M(e),I&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),$&&U&&(0,h.onNavigationIntent)(e.currentTarget,!0===L)},onTouchStart:function(e){I||"function"!=typeof T||T(e),I&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),$&&U&&(0,h.onNavigationIntent)(e.currentTarget,!0===L)}};return(0,c.isAbsoluteUrl)(F)?H.href=F:I&&!C&&("a"!==n.type||"href"in n.props)||(H.href=(0,p.addBasePath)(F)),b=I?l.default.cloneElement(n,H):(0,a.jsx)("a",{...B,...H,children:o}),(0,a.jsx)(y.Provider,{value:x,children:b})}e.r(84508);let y=(0,l.createContext)(h.IDLE_LINK_STATUS),x=()=>(0,l.useContext)(y);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},88143,(e,t,r)=>{"use strict";function i({widthInt:e,heightInt:t,blurWidth:r,blurHeight:o,blurDataURL:n,objectFit:a}){let l=r?40*r:e,s=o?40*o:t,d=l&&s?`viewBox='0 0 ${l} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return a}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let n=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(33525);let i=e.r(43369),o=e.r(88143),n=e.r(87690),a=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:r=!1,priority:u=!1,preload:c=!1,loading:p,className:f,quality:h,width:m,height:g,fill:b=!1,style:y,overrideSrc:x,onLoad:v,onLoadingComplete:w,placeholder:_="empty",blurDataURL:j,fetchPriority:P,decoding:S="async",layout:C,objectFit:O,objectPosition:k,lazyBoundary:E,lazyRoot:R,...M},T){var I;let N,z,D,{imgConf:L,showAltText:B,blurComplete:$,defaultLoader:U}=T,A=L||n.imageConfigDefault;if("allSizes"in A)N=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t),r=A.qualities?.sort((e,t)=>e-t);N={...A,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===U)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let F=M.loader||U;delete M.loader,delete M.srcSet;let W="__next_img_default"in F;if(W){if("custom"===N.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=F;F=t=>{let{config:r,...i}=t;return e(i)}}if(C){"fill"===C&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(y={...y,...e});let r={responsive:"100vw",fill:"100vw"}[C];r&&!t&&(t=r)}let q="",H=s(m),G=s(g);if((I=e)&&"object"==typeof I&&(l(I)||void 0!==I.src)){let t=l(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(z=t.blurWidth,D=t.blurHeight,j=j||t.blurDataURL,q=t.src,!b)if(H||G){if(H&&!G){let e=H/t.width;G=Math.round(t.height*e)}else if(!H&&G){let e=G/t.height;H=Math.round(t.width*e)}}else H=t.width,G=t.height}let K=!u&&!c&&("lazy"===p||void 0===p);(!(e="string"==typeof e?e:q)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,K=!1),N.unoptimized&&(r=!0),W&&!N.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let X=s(h),V=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:k}:{},B?{}:{color:"transparent"},y),J=$||"empty"===_?null:"blur"===_?`url("data:image/svg+xml;charset=utf-8,${(0,o.getImageBlurSvg)({widthInt:H,heightInt:G,blurWidth:z,blurHeight:D,blurDataURL:j||"",objectFit:V.objectFit})}")`:`url("${_}")`,Q=a.includes(V.objectFit)?"fill"===V.objectFit?"100% 100%":"cover":V.objectFit,Y=J?{backgroundSize:Q,backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},Z=function({config:e,src:t,unoptimized:r,width:o,quality:n,sizes:a,loader:l}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,i.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let i=new URLSearchParams(t.slice(r+1));i.get("dpl")||(i.append("dpl",e),t=t.slice(0,r)+"?"+i.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:s,kind:d}=function({deviceSizes:e,allSizes:t},r,i){if(i){let r=/(^|\s)(1?\d?\d)vw/g,o=[];for(let e;e=r.exec(i);)o.push(parseInt(e[2]));if(o.length){let r=.01*Math.min(...o);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,o,a),u=s.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:s.map((r,i)=>`${l({config:e,src:t,quality:n,width:r})} ${"w"===d?r:i+1}${d}`).join(", "),src:l({config:e,src:t,quality:n,width:s[u]})}}({config:N,src:e,unoptimized:r,width:H,quality:X,sizes:t,loader:F}),ee=K?"lazy":p;return{props:{...M,loading:ee,fetchPriority:P,width:H,height:G,decoding:S,className:f,style:{...V,...Y},sizes:Z.sizes,srcSet:Z.srcSet,src:x||Z.src},meta:{unoptimized:r,preload:c||u,placeholder:_,fill:b}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});let i=e.r(71645),o="u"<typeof window,n=o?()=>{}:i.useLayoutEffect,a=o?()=>{}:i.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let e=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return o&&(t?.mountedInstances?.add(e.children),l()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return m},defaultHead:function(){return c}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let n=e.r(55682),a=e.r(90809),l=e.r(43476),s=a._(e.r(71645)),d=n._(e.r(98879)),u=e.r(42732);function c(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let f=["name","httpEquiv","charSet","itemProp"];function h(e){let t,r,i,o;return e.reduce(p,[]).reverse().concat(c().reverse()).filter((t=new Set,r=new Set,i=new Set,o={},e=>{let n=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?n=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?n=!1:r.add(e.type);break;case"meta":for(let t=0,r=f.length;t<r;t++){let r=f[t];if(e.props.hasOwnProperty(r))if("charSet"===r)i.has(r)?n=!1:i.add(r);else{let t=e.props[r],i=o[r]||new Set;("name"!==r||!a)&&i.has(t)?n=!1:(i.add(t),o[r]=i)}}}return n})).reverse().map((e,t)=>{let r=e.key||t;return s.default.cloneElement(e,{key:r})})}let m=function({children:e}){let t=(0,s.useContext)(u.HeadManagerContext);return(0,l.jsx)(d.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let i=e.r(55682)._(e.r(71645)),o=e.r(87690),n=i.default.createContext(o.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return i}});let i=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function i(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return i}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return a}});let i=e.r(70965),o=e.r(43369);function n({config:e,src:t,width:r,quality:a}){let l=(0,o.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),i=r.get("dpl");if(i){l=i,r.delete("dpl");let o=r.toString();t=t.slice(0,e)+(o?"?"+o:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let s=(0,i.findClosestQuality)(a,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}n.__next_img_default=!0;let a=n},5500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return v}});let i=e.r(55682),o=e.r(90809),n=e.r(43476),a=o._(e.r(71645)),l=i._(e.r(74080)),s=i._(e.r(25633)),d=e.r(8927),u=e.r(87690),c=e.r(18556);e.r(33525);let p=e.r(65856),f=i._(e.r(1948)),h=e.r(18581),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,i,o,n,a){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}i?.current&&i.current(e)}}))}function b(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,a.forwardRef)(({src:e,srcSet:t,sizes:r,height:i,width:o,decoding:l,className:s,style:d,fetchPriority:u,placeholder:c,loading:p,unoptimized:f,fill:m,onLoadRef:y,onLoadingCompleteRef:x,setBlurComplete:v,setShowAltText:w,sizesInput:_,onLoad:j,onError:P,...S},C)=>{let O=(0,a.useCallback)(e=>{e&&(P&&(e.src=e.src),e.complete&&g(e,c,y,x,v,f,_))},[e,c,y,x,v,P,f,_]),k=(0,h.useMergedRef)(C,O);return(0,n.jsx)("img",{...S,...b(u),loading:p,width:o,height:i,decoding:l,"data-nimg":m?"fill":"1",className:s,style:d,sizes:r,srcSet:t,src:e,ref:k,onLoad:e=>{g(e.currentTarget,c,y,x,v,f,_)},onError:e=>{w(!0),"empty"!==c&&v(!0),P&&P(e)}})});function x({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...b(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,r),null):(0,n.jsx)(s.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let v=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(p.RouterContext),i=(0,a.useContext)(c.ImageConfigContext),o=(0,a.useMemo)(()=>{let e=m||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),o=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:o,localPatterns:"u"<typeof window?i?.localPatterns:e.localPatterns}},[i]),{onLoad:l,onLoadingComplete:s}=e,h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let g=(0,a.useRef)(s);(0,a.useEffect)(()=>{g.current=s},[s]);let[b,v]=(0,a.useState)(!1),[w,_]=(0,a.useState)(!1),{props:j,meta:P}=(0,d.getImgProps)(e,{defaultLoader:f.default,imgConf:o,blurComplete:b,showAltText:w});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{...j,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:v,setShowAltText:_,sizesInput:e.sizes,ref:t}),P.preload?(0,n.jsx)(x,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return u},getImageProps:function(){return d}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let n=e.r(55682),a=e.r(8927),l=e.r(5500),s=n._(e.r(1948));function d(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=l.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},91018,e=>{"use strict";var t=e.i(43476),r=e.i(22016),i=e.i(57688);e.s(["default",0,function({links:e=[]}){return(0,t.jsxs)("header",{className:"s12header flex justify-between items-center p-4 bg-gray-900 text-white",children:[(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)(i.default,{src:"/favicon.ico",alt:"logo",width:32,height:32})}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:e.map(({href:e,label:i,className:o},n)=>(0,t.jsx)(r.default,{href:e,className:o||"px-4 py-2 rounded bg-gray-700 hover:bg-gray-600",children:i},n))})]})}])},30864,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(91018);let o=[{id:1,title:"Form1.html",description:"Classwork 3",code:`
      <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="style.css" />
    <link rel="shortcut icon" href="kali.ico" type="image/x-icon">
    <title>Document</title>
  </head>
  <body>
    <form>
      <!------------------------------------------------->
      <div class="top3">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder=" Enter username" />

        <label for="password">Password</label>
        <input type="password" id="password" />

        <label for="input">Input Text Label</label>
        <input type="text" id="input" />
      </div>
      <!------------------------------------------------->
       <label class="outer">
        <input type="checkbox">
        <span class="innercircle"></span>
      </label><br>
      <!------------------------------------------------->
      <input type="checkbox" id="remember_me" />
      <label for="remember_me">Remember me</label><br />
      <!------------------------------------------------->
      <div class="radio">
        <input type="radio" id="radio_1" name="select" />
        <label for="radio_1">Radio selection 1</label><br />
        <input type="radio" id="radio_2" name="select" />
        <label for="radio_2">Radio selection 2</label><br />
        <input type="radio" id="radio_3" name="select" />
        <label for="radio_3">Radio selection 3</label><br />
      </div>
      <!------------------------------------------------->
      <label for="dropdown" id="dropdown">Dropdown Title</label>
      <div class="dropdown">
        <select>
          <option value="option1" id="dropdown">Dropdown option 1</option>
          <option value="option2" id="dropdown">Dropdown option 2</option>
          <option value="option3" id="dropdown">Dropdown option 3</option>
        </select>
      </div>
      <!------------------------------------------------->
    </form>
  </body>
</html>

  `},{id:2,title:"Form1.css",description:"Classwork 3",code:`
      body {
  background-color: pink;
  margin: 0;  
}

/*---------------------------------------------------*/

form {
  background-color: white;
  margin: 0 auto;
  width: 500px;
  max-width:80%;
  padding: 30px 50px;
  min-height:100vh; 
  box-sizing: border-box;
}

input:focus, select:focus {
    outline: none;
    border: 5px solid purple;
}

/*---------------------------------------------------*/
input {
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
}

form .top3 input {
  width: 100%;
  box-sizing: border-box;
}

/*---------------------------------------------------*/

form .radio {
  padding: 15px 0;
}

form .radio #radio_1 select{
  background-color: purple;
}

/*---------------------------------------------------*/
form .dropdown #dropdown {
  background-color: purple;
}

form select {
  width: 100%;
  padding: 10px 10px;
  margin: 5px 0;/*  */
  font-size: 18px;
}

/*---------------------------------------------------*/
label.outer{
  background-color: gray;
  width: 50px;
  height: 30px;
  border-radius: 50px;
  position: relative;
  display: inline-block;
}

span.innercircle{
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  left: 1px;
  top: 2px;
  position: absolute;
  cursor: pointer;
}

label.outer input{
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  transition: 0.3;

  cursor: pointer;
}

.outer input:checked + .innercircle{
  left: 25px;
}
  
.outer:has(input:checked){
  background-color: green;
}
/*---------------------------------------------------*/
    `},{id:3,title:"Boxes.html",description:"Classwork 4",code:`
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <title>Task 4 By Rabbit</title>
  </head>
  <body>
    <div class="BigBox">
      <div class="LittleBox">
        <div class="pink_circle"></div>
        <div class="green_circle"></div>
        <div><img src="kali.png" class="image"></div>
        <span>Hello!!</span>
      </div>
      <pre>
Welcome

  To 
  Our
Website
    </pre
      >
    </div>
  </body>
</html>
    `},{id:3,title:"Boxes.css",description:"Classwork 4",code:`
    body {
  margin: 0;
}
.BigBox {
  margin: 40px 40px;
  width: 550px;
  height: 550px;
  background-color: steelblue;
  border: 1px solid black;
  position: relative;
}
.BigBox pre {
  position: reative;
  margin-left: 35px;
  margin-top: -80px;
  font-size: 50px;
}

.LittleBox {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: pink;
  border: 1px solid black;
  margin-left: 250px;
  margin-top: 80px;
}
.pink_circle {
  background-color: rgb(175, 12, 12);
  border-radius: 50%;
  height: 60px; width: 60px;
  position: absolute;
  margin-left: 100px; margin-top: -20px;
}

.green_circle{
  height: 40px; width: 40px; background-color: green;
  border-radius: 50%;
  margin-left: 150px; margin-top: 50px;
  position: absolute;
}

.LittleBox span {
  background-color: blue;
  padding: 6px;
  margin-top: -165px;
  margin-left: 40px;
  position: absolute;
}

.image{
  width: 90px; height: 90px; 
  border-radius: 50%;
  margin-left: 130px; margin-top: 130px;
}
    `}],n=[{href:"/",label:"Home",className:"HeaderButton"},{href:"/S2",label:"S2 Page",className:"HeaderButton"},{href:"/S2/wad",label:"WAD Page",className:"HeaderButton"}];e.s(["default",0,function(){let[e,a]=(0,r.useState)(null),[l,s]=(0,r.useState)("");return(0,t.jsxs)("div",{children:[(0,t.jsx)(i.default,{links:n}),(0,t.jsx)("main",{className:"main-box"}),(0,t.jsx)("h1",{className:"page-header",children:"HTML Codes"}),(0,t.jsx)("input",{type:"number",placeholder:"Search by ID",className:"w-full p-2 rounded border border-gray-400 mb-4 text-black",value:l,onChange:e=>s(e.target.value)}),o.filter(e=>""===l||e.id===Number(l)).map(r=>(0,t.jsxs)("div",{className:"bg-black/20 p-4 rounded-lg text-white backdrop-blur-sm",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold",children:r.title}),(0,t.jsx)("pre",{className:"text-gray-300 mt-2 whitespace-pre-wrap",children:r.description}),(0,t.jsx)("button",{className:"HeaderButton mt-3",onClick:()=>{let t;return a(e===(t=r.id)?null:t)},children:e===r.id?"Hide Solution ▲":"Show Solution ▼"}),e===r.id&&(0,t.jsxs)("div",{className:"mt-3 bg-black/40 p-3 rounded",children:[(0,t.jsx)("h4",{className:"font-semibold text-yellow-400 mb-2",children:"Solution"}),(0,t.jsx)("pre",{className:"whitespace-pre-wrap text-gray-200",children:r.code}),(0,t.jsx)("button",{className:"mt-2 bg-yellow-500 text-black px-2 py-1 rounded hover:bg-yellow-400",onClick:()=>{var e;return e=r.code,void(navigator.clipboard.writeText(e),alert("Code copied!"))},children:"Copy"})]})]},r.id))]})}],30864)}]);
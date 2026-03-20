(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return l},formatWithValidation:function(){return u},urlObjectKeys:function(){return s}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",l=e.hash||"",s=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(u+=":"+e.port)),s&&"object"==typeof s&&(s=String(a.urlQueryToSearchParams(s)));let c=e.search||s&&`?${s}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||o.test(n))&&!1!==u?(u="//"+(u||""),i&&"/"!==i[0]&&(i="/"+i)):u||(u=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),i=i.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${u}${i}${c}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return l(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=e.r(71645);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=a(e,n)),t&&(i.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(18967),i=e.r(52817);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return y},useLinkStatus:function(){return v}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=e.r(90809),o=e.r(43476),l=a._(e.r(71645)),s=e.r(95057),u=e.r(8372),c=e.r(18581),d=e.r(18967),f=e.r(5550);e.r(33525);let p=e.r(88540),m=e.r(91949),h=e.r(73668),g=e.r(9396);function y(t){var r,n;let i,a,y,[v,S]=(0,l.useOptimistic)(m.IDLE_LINK_STATUS),_=(0,l.useRef)(null),{href:w,as:x,children:j,prefetch:P=null,passHref:O,replace:C,shallow:E,scroll:R,onClick:M,onMouseEnter:k,onTouchStart:I,legacyBehavior:N=!1,onNavigate:T,transitionTypes:L,ref:z,unstable_dynamicOnHover:$,...D}=t;i=j,N&&("string"==typeof i||"number"==typeof i)&&(i=(0,o.jsx)("a",{children:i}));let A=l.default.useContext(u.AppRouterContext),U=!1!==P,B=!1!==P?null===(n=P)||"auto"===n?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,F="string"==typeof(r=x||w)?r:(0,s.formatUrl)(r);if(N){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=l.default.Children.only(i)}let q=N?a&&"object"==typeof a&&a.ref:z,W=l.default.useCallback(e=>(null!==A&&(_.current=(0,m.mountLinkInstance)(e,F,A,B,U,S)),()=>{_.current&&((0,m.unmountLinkForCurrentNavigation)(_.current),_.current=null),(0,m.unmountPrefetchableInstance)(e)}),[U,F,A,B,S]),H={ref:(0,c.useMergedRef)(W,q),onClick(t){N||"function"!=typeof M||M(t),N&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!A||t.defaultPrevented||function(t,r,n,i,a,o,s){if("u">typeof window){let u,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);l.default.startTransition(()=>{d(r,i?"replace":"push",!1===a?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,n.current,s)})}}(t,F,_,C,R,T,L)},onMouseEnter(e){N||"function"!=typeof k||k(e),N&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),A&&U&&(0,m.onNavigationIntent)(e.currentTarget,!0===$)},onTouchStart:function(e){N||"function"!=typeof I||I(e),N&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),A&&U&&(0,m.onNavigationIntent)(e.currentTarget,!0===$)}};return(0,d.isAbsoluteUrl)(F)?H.href=F:N&&!O&&("a"!==a.type||"href"in a.props)||(H.href=(0,f.addBasePath)(F)),y=N?l.default.cloneElement(a,H):(0,o.jsx)("a",{...D,...H,children:i}),(0,o.jsx)(b.Provider,{value:v,children:y})}e.r(84508);let b=(0,l.createContext)(m.IDLE_LINK_STATUS),v=()=>(0,l.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},88143,(e,t,r)=>{"use strict";function n({widthInt:e,heightInt:t,blurWidth:r,blurHeight:i,blurDataURL:a,objectFit:o}){let l=r?40*r:e,s=i?40*i:t,u=l&&s?`viewBox='0 0 ${l} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={VALID_LOADERS:function(){return a},imageConfigDefault:function(){return o}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return u}}),e.r(33525);let n=e.r(43369),i=e.r(88143),a=e.r(87690),o=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u({src:e,sizes:t,unoptimized:r=!1,priority:c=!1,preload:d=!1,loading:f,className:p,quality:m,width:h,height:g,fill:y=!1,style:b,overrideSrc:v,onLoad:S,onLoadingComplete:_,placeholder:w="empty",blurDataURL:x,fetchPriority:j,decoding:P="async",layout:O,objectFit:C,objectPosition:E,lazyBoundary:R,lazyRoot:M,...k},I){var N;let T,L,z,{imgConf:$,showAltText:D,blurComplete:A,defaultLoader:U}=I,B=$||a.imageConfigDefault;if("allSizes"in B)T=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t),r=B.qualities?.sort((e,t)=>e-t);T={...B,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===U)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let F=k.loader||U;delete k.loader,delete k.srcSet;let q="__next_img_default"in F;if(q){if("custom"===T.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(O){"fill"===O&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(b={...b,...e});let r={responsive:"100vw",fill:"100vw"}[O];r&&!t&&(t=r)}let W="",H=s(h),G=s(g);if((N=e)&&"object"==typeof N&&(l(N)||void 0!==N.src)){let t=l(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(L=t.blurWidth,z=t.blurHeight,x=x||t.blurDataURL,W=t.src,!y)if(H||G){if(H&&!G){let e=H/t.width;G=Math.round(t.height*e)}else if(!H&&G){let e=G/t.height;H=Math.round(t.width*e)}}else H=t.width,G=t.height}let K=!c&&!d&&("lazy"===f||void 0===f);(!(e="string"==typeof e?e:W)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,K=!1),T.unoptimized&&(r=!0),q&&!T.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let X=s(m),V=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:E}:{},D?{}:{color:"transparent"},b),J=A||"empty"===w?null:"blur"===w?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:H,heightInt:G,blurWidth:L,blurHeight:z,blurDataURL:x||"",objectFit:V.objectFit})}")`:`url("${w}")`,Q=o.includes(V.objectFit)?"fill"===V.objectFit?"100% 100%":"cover":V.objectFit,Y=J?{backgroundSize:Q,backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},Z=function({config:e,src:t,unoptimized:r,width:i,quality:a,sizes:o,loader:l}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,n.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let n=new URLSearchParams(t.slice(r+1));n.get("dpl")||(n.append("dpl",e),t=t.slice(0,r)+"?"+n.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:s,kind:u}=function({deviceSizes:e,allSizes:t},r,n){if(n){let r=/(^|\s)(1?\d?\d)vw/g,i=[];for(let e;e=r.exec(n);)i.push(parseInt(e[2]));if(i.length){let r=.01*Math.min(...i);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,i,o),c=s.length-1;return{sizes:o||"w"!==u?o:"100vw",srcSet:s.map((r,n)=>`${l({config:e,src:t,quality:a,width:r})} ${"w"===u?r:n+1}${u}`).join(", "),src:l({config:e,src:t,quality:a,width:s[c]})}}({config:T,src:e,unoptimized:r,width:H,quality:X,sizes:t,loader:F}),ee=K?"lazy":f;return{props:{...k,loading:ee,fetchPriority:j,width:H,height:G,decoding:P,className:p,style:{...V,...Y},sizes:Z.sizes,srcSet:Z.srcSet,src:v||Z.src},meta:{unoptimized:r,preload:d||c,placeholder:w,fill:y}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});let n=e.r(71645),i="u"<typeof window,a=i?()=>{}:n.useLayoutEffect,o=i?()=>{}:n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return i&&(t?.mountedInstances?.add(e.children),l()),a(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),a(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return h},defaultHead:function(){return d}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=e.r(55682),o=e.r(90809),l=e.r(43476),s=o._(e.r(71645)),u=a._(e.r(98879)),c=e.r(42732);function d(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let p=["name","httpEquiv","charSet","itemProp"];function m(e){let t,r,n,i;return e.reduce(f,[]).reverse().concat(d().reverse()).filter((t=new Set,r=new Set,n=new Set,i={},e=>{let a=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?a=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?a=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)n.has(r)?a=!1:n.add(r);else{let t=e.props[r],n=i[r]||new Set;("name"!==r||!o)&&n.has(t)?a=!1:(n.add(t),i[r]=n)}}}return a})).reverse().map((e,t)=>{let r=e.key||t;return s.default.cloneElement(e,{key:r})})}let h=function({children:e}){let t=(0,s.useContext)(c.HeadManagerContext);return(0,l.jsx)(u.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let n=e.r(55682)._(e.r(71645)),i=e.r(87690),a=n.default.createContext(i.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return n}});let n=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function n(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return n}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let n=e.r(70965),i=e.r(43369);function a({config:e,src:t,width:r,quality:o}){let l=(0,i.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),n=r.get("dpl");if(n){l=n,r.delete("dpl");let i=r.toString();t=t.slice(0,e)+(i?"?"+i:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let s=(0,n.findClosestQuality)(o,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}a.__next_img_default=!0;let o=a},5500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return S}});let n=e.r(55682),i=e.r(90809),a=e.r(43476),o=i._(e.r(71645)),l=n._(e.r(74080)),s=n._(e.r(25633)),u=e.r(8927),c=e.r(87690),d=e.r(18556);e.r(33525);let f=e.r(65856),p=n._(e.r(1948)),m=e.r(18581),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,n,i,a,o){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}n?.current&&n.current(e)}}))}function y(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,o.forwardRef)(({src:e,srcSet:t,sizes:r,height:n,width:i,decoding:l,className:s,style:u,fetchPriority:c,placeholder:d,loading:f,unoptimized:p,fill:h,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:S,setShowAltText:_,sizesInput:w,onLoad:x,onError:j,...P},O)=>{let C=(0,o.useCallback)(e=>{e&&(j&&(e.src=e.src),e.complete&&g(e,d,b,v,S,p,w))},[e,d,b,v,S,j,p,w]),E=(0,m.useMergedRef)(O,C);return(0,a.jsx)("img",{...P,...y(c),loading:f,width:i,height:n,decoding:l,"data-nimg":h?"fill":"1",className:s,style:u,sizes:r,srcSet:t,src:e,ref:E,onLoad:e=>{g(e.currentTarget,d,b,v,S,p,w)},onError:e=>{_(!0),"empty"!==d&&S(!0),j&&j(e)}})});function v({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...y(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,r),null):(0,a.jsx)(s.default,{children:(0,a.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let S=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(f.RouterContext),n=(0,o.useContext)(d.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=h||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),i=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:i,localPatterns:"u"<typeof window?n?.localPatterns:e.localPatterns}},[n]),{onLoad:l,onLoadingComplete:s}=e,m=(0,o.useRef)(l);(0,o.useEffect)(()=>{m.current=l},[l]);let g=(0,o.useRef)(s);(0,o.useEffect)(()=>{g.current=s},[s]);let[y,S]=(0,o.useState)(!1),[_,w]=(0,o.useState)(!1),{props:x,meta:j}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:y,showAltText:_});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{...x,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:S,setShowAltText:w,sizesInput:e.sizes,ref:t}),j.preload?(0,a.jsx)(v,{isAppRouter:!r,imgAttributes:x}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return c},getImageProps:function(){return u}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=e.r(55682),o=e.r(8927),l=e.r(5500),s=a._(e.r(1948));function u(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=l.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},91018,e=>{"use strict";var t=e.i(43476),r=e.i(22016),n=e.i(57688);e.s(["default",0,function({links:e=[]}){return(0,t.jsxs)("header",{className:"s12header flex justify-between items-center p-4 bg-gray-900 text-white",children:[(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)(n.default,{src:"/favicon.ico",alt:"logo",width:32,height:32})}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:e.map(({href:e,label:n,className:i},a)=>(0,t.jsx)(r.default,{href:e,className:i||"px-4 py-2 rounded bg-gray-700 hover:bg-gray-600",children:n},a))})]})}])},94472,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(91018);let i=[{id:1,title:"Basic understanding",description:"understanding the entry line of java",code:`
public class basic1 {
  public static void main(String[] args){
    // class: name and file name must be exact.
    // public: is a type of class, anyone can access it .
    // static: is a type of class too that does not need any type of calling, runs on it's own.
    // void: returns nothing.
    // main: the word java looks for, to start it's code.  
    //main(): anything with open and close parenthesis is a method.
    //java runs bottom to top.

    System.out.println("printing");
    System.out.print("printing");

    //println prints a new line after printing.
    
  }
}`},{id:2,title:"Input",description:"Basic Input",code:`
import java.util.Scanner;

public class basic_input {
  public static void main(String[] args){

    Scanner input = new Scanner(System.in); 
    //Scanner is the class
    //input: a varibale for the class.
    //new: a keyword that makes memory for
    //Scanner(): constructor.
    //System.in: The work this class does. System.input, takes input.

    float num = input.nextFloat();
    input.nextLine(); //To consume 

    String name = input.nextLine();

    System.out.println("when using a num : " + num + " before string : "+name+", better to use a scanner, because int and float tends to leak the 
 after that lingers to the next String.");

    System.out.print(500/2+"
");
    System.out.printf("%d
", 50+60);

    input.close(); //!!!!!!!! MUST be CLOSED!!!!!!!!!!!!
  }
}
    `},{id:3,title:"Copy constructor",description:"one constructor being called in another",code:`
class copy_main{
  String name;
  int id;

  copy_main(String n, int roll){
    name = n;
    id = roll;
  }

  copy_main(copy_main first){
    this.id = first.id;
    this.name = first.name; // this is to define this scopes. first calls the id and name provided in first variable.
  }

  void display(){
    System.out.println(name + id);
  }
  public static void main(String[] args){

    copy_main first = new copy_main("Rabbit", 1006);
    copy_main second = new copy_main(first); 

    first.display();
    second.display();
  }
}
    `},{id:4,title:"Constructor Overloading",description:"same constructor different parameter list",code:`
//overloading is using one class to print different methods, through different arguements or parameters
//this is constructor overloading.
class Room {
  float length, breadth;

  Room(float x, float y){ 
    length = x;
    breadth = x;
  }

  Room(float x){
    length = breadth = x;
  }

  float area(){
    return (length*breadth);
  }
}

public class overloading_1 {
  public static void main(String[] args){
    float length = 5, breadth = 7;

    Room room1 = new Room(length, breadth); //using more than one constructor in same class
    Room room2 = new Room(length);

    System.out.println(room1.area());
    System.out.println(room2.area());

  }
}
    `},{id:5,title:"private",description:"showing how to call private method, simple if and switch functions",code:`
import java.util.Scanner;

class Student_details{
  String name;
  String mail;
  private int number; //privated, so cant show normally

  Student_details(String n, String m, int num){
    name =n;
    mail =m;
    number =num;
  }

   void showNumber(){
    System.out.println(number); //need to use method to show
  }
}

public class modifier1 {
  public static void main(String[] args){
    
    Scanner input = new Scanner(System.in);

    System.out.print("Enter your name: ");
      String name = input.nextLine();
    System.out.print("Enter your mail: ");
      String mail = input.nextLine();
    System.out.print("Enter your number: ");
      int number = input.nextInt();

    Student_details student1 = new Student_details(name, mail, number); //sending to class

    System.out.println(student1.name);
    System.out.println(student1.mail);

    System.out.print("
Only teachers are allowed to see student numbers. 
Enter 1 if you are a teacher, 0 if you are not: ");
    
    int teacher = input.nextInt();
    input.nextLine();

    switch (teacher){
      case 1: 
        System.out.print("Enter password: ");
        String password = input.nextLine();

          if(("helo").equals(password)) //String .equals input
            student1.showNumber(); //calls the method
          else 
            System.out.println("seriously?");
        break;

      case 0: 
        System.out.println("alright");
        break;
    
    default: // if any of the case does not match
      System.out.println("dumb much?");
      break;
    }


    input.close();
  }
}
    `}],a=[{href:"/",label:"Home",className:"HeaderButton"},{href:"/S2",label:"S2 Page",className:"HeaderButton"},{href:"/S2/oop",label:"Oop Page",className:"HeaderButton"}];e.s(["default",0,function(){let[e,o]=(0,r.useState)(null),[l,s]=(0,r.useState)("");return(0,t.jsxs)("div",{children:[(0,t.jsx)(n.default,{links:a}),(0,t.jsxs)("main",{className:"main-box",children:[(0,t.jsx)("h1",{className:"page-header",children:"Java Codes"}),(0,t.jsx)("input",{type:"number",placeholder:"Search by ID",className:"w-full p-2 rounded border border-gray-400 mb-4 text-black",value:l,onChange:e=>s(e.target.value)}),i.filter(e=>""===l||e.id===Number(l)).map(r=>(0,t.jsxs)("div",{className:"bg-black/20 p-4 rounded-lg text-white backdrop-blur-sm",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold",children:r.title}),(0,t.jsx)("pre",{className:"text-gray-300 mt-2 whitespace-pre-wrap",children:r.description}),(0,t.jsx)("button",{className:"HeaderButton mt-3",onClick:()=>{let t;return o(e===(t=r.id)?null:t)},children:e===r.id?"Hide Solution ▲":"Show Solution ▼"}),e===r.id&&(0,t.jsxs)("div",{className:"mt-3 bg-black/40 p-3 rounded",children:[(0,t.jsx)("h4",{className:"font-semibold text-yellow-400 mb-2",children:"Solution"}),(0,t.jsx)("pre",{className:"whitespace-pre-wrap text-gray-200",children:r.code}),(0,t.jsx)("button",{className:"mt-2 bg-yellow-500 text-black px-2 py-1 rounded hover:bg-yellow-400",onClick:()=>{var e;return e=r.code,void(navigator.clipboard.writeText(e),alert("Code copied!"))},children:"Copy"})]})]},r.id))]})]})}],94472)}]);
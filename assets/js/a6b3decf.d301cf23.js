"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[2575],{3905:(t,e,o)=>{o.d(e,{Zo:()=>g,kt:()=>v});var r=o(7294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function u(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var l=r.createContext({}),c=function(t){var e=r.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},g=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},f="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,a=t.originalType,l=t.parentName,g=u(t,["components","mdxType","originalType","parentName"]),f=c(o),p=n,v=f["".concat(l,".").concat(p)]||f[p]||s[p]||a;return o?r.createElement(v,i(i({ref:e},g),{},{components:o})):r.createElement(v,i({ref:e},g))}));function v(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=o.length,i=new Array(a);i[0]=p;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u[f]="string"==typeof t?t:n,i[1]=u;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6136:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:30},i="Converting from RF1 to RF2",u={unversionedId:"Tutorial - Quickstart/Converting from RF1 to RF2",id:"Tutorial - Quickstart/Converting from RF1 to RF2",title:"Converting from RF1 to RF2",description:"It is really important that a Rotorflight 1 backup/dump file is not loaded to the Rotorflight 2 controller.",source:"@site/docs/Tutorial - Quickstart/Converting from RF1 to RF2.md",sourceDirName:"Tutorial - Quickstart",slug:"/Tutorial - Quickstart/Converting from RF1 to RF2",permalink:"/docs/Tutorial - Quickstart/Converting from RF1 to RF2",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial - Quickstart/Converting from RF1 to RF2.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"What board should I get?",permalink:"/docs/Tutorial - Quickstart/What Board"},next:{title:"Hardware?",permalink:"/docs/Tutorial - Quickstart/Quickstart 3"}},l={},c=[],g={toc:c},f="wrapper";function s(t){let{components:e,...a}=t;return(0,n.kt)(f,(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"converting-from-rf1-to-rf2"},"Converting from RF1 to RF2"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"It is really important that a Rotorflight 1 backup/dump file is not loaded to the Rotorflight 2 controller.   ")),(0,n.kt)("p",null,"Backing up the hardware\nThere have been a huge number of changes between versions of Rotorflight. The backup/dump file is not compatable with the new version. Ultimately this means all of the tuning and configuration has to be done again starting from the Rotorflight 2 defaults. If you have already done custom remapping these can be transferred by using the dump hardware and saving this to a file.  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Converting",src:o(856).Z,width:"431",height:"215"})))}s.isMDXComponent=!0},856:(t,e,o)=>{o.d(e,{Z:()=>r});const r="data:image/png;base64,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"}}]);
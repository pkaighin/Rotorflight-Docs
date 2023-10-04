"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[5587],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,f=u["".concat(s,".").concat(d)]||u[d]||h[d]||n;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const n={sidebar_position:140},o="Rates",l={unversionedId:"Tutorial - Setup/Rates",id:"Tutorial - Setup/Rates",title:"Rates",description:"The purpose of rates are to change in flight sensitivity and rotation rates. The aim is usually to have several 'rates' that you can switch between during flight to change flight performance. Please see the profile switching example",source:"@site/docs/Tutorial - Setup/Rates.md",sourceDirName:"Tutorial - Setup",slug:"/Tutorial - Setup/Rates",permalink:"/docs/Tutorial - Setup/Rates",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial - Setup/Rates.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{sidebar_position:140},sidebar:"tutorialSidebar",previous:{title:"Modes",permalink:"/docs/Tutorial - Setup/Modes"},next:{title:"Profiles",permalink:"/docs/Tutorial - Setup/Profiles"}},s={},c=[{value:"Understanding Actual Rates",id:"understanding-actual-rates",level:2},{value:"Center Sensitivity",id:"center-sensitivity",level:3},{value:"Max Rate",id:"max-rate",level:3},{value:"Expo",id:"expo",level:3},{value:"Understanding Raceflight Rates",id:"understanding-raceflight-rates",level:2},{value:"Rate",id:"rate",level:3},{value:"Acro+",id:"acro",level:3},{value:"Expo",id:"expo-1",level:3},{value:"Copy Rate Profile",id:"copy-rate-profile",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rates"},"Rates"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The purpose of rates are to change in flight sensitivity and rotation rates. The aim is usually to have several 'rates' that you can switch between during flight to change flight performance. Please see the ",(0,i.kt)("a",{parentName:"p",href:"../Tutorial%20-%20Walkthroughs/Profile%20switching%20example"},"profile switching example"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rates",src:a(8996).Z,width:"1705",height:"749"})),(0,i.kt)("p",null,"Rotorflight offers a total of five rate systems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Actual Rates"),(0,i.kt)("li",{parentName:"ul"},"Betaflight Rates"),(0,i.kt)("li",{parentName:"ul"},"Raceflight Rates"),(0,i.kt)("li",{parentName:"ul"},"KISS Rates"),(0,i.kt)("li",{parentName:"ul"},"Quick Rates")),(0,i.kt)("p",null,"However, the most widely adopted is Actual Rates."),(0,i.kt)("h2",{id:"understanding-actual-rates"},"Understanding Actual Rates"),(0,i.kt)("p",null,"\u201cActual Rates\u201d are the default rates in Rotorflight, providing a straightforward approach to setting maximum rotational velocity (e.g., entering 1000 corresponds to 1000deg/sec) and center sensitivity values."),(0,i.kt)("p",null,"There are 3 values in Actual Rates: Center Sensitivity, Max Rate, Expo."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rates",src:a(4222).Z,width:"840",height:"561"})),(0,i.kt)("h3",{id:"center-sensitivity"},"Center Sensitivity"),(0,i.kt)("p",null,"Center Sensitivity relates to the responsiveness around the center stick position. A lower value offers finer, smoother control, while a higher value results in a more reactive heli to stick movement."),(0,i.kt)("h3",{id:"max-rate"},"Max Rate"),(0,i.kt)("p",null,"Max Rate defines the heli's rotation speed at full stick deflection. The value entered represents the exact maximum rotational velocity. For example, entering 300 means your heli will attempt to rotate at 300 degrees/sec at full stick."),(0,i.kt)("p",null,"However, keep in mind that the maximum angular velocity can be limited by your heli mechanics. When the heli reaches its physical limitation and cannot flip any faster, the maximum angular velocity is capped, regardless of the higher value set in Rotorflight."),(0,i.kt)("h3",{id:"expo"},"Expo"),(0,i.kt)("p",null,"Expo flattens the curve between center stick and full stick. To achieve a more linear rate, keep Expo low. For a broader center stick region with finer control, increase Expo. Keep in mind that increasing Expo also reduces center sensitivity. "),(0,i.kt)("p",null,"While Expo can be as high as 1.0, excessive Expo might cause decreased center stick sensitivity and make the heli\u2019s response more unpredictable towards full stick (more jumpy)."),(0,i.kt)("h2",{id:"understanding-raceflight-rates"},"Understanding Raceflight Rates"),(0,i.kt)("p",null,"Actual Rates can be a little bit tricky for someone that does not have Betaflight knowledge and experience. So if you are coming from a different FBL system then Raceflight Rates might make more sense for you."),(0,i.kt)("p",null,"There are 3 values in Raceflight Rates: Rate, Acro+, Expo."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rates",src:a(9831).Z,width:"847",height:"605"})),(0,i.kt)("h3",{id:"rate"},"Rate"),(0,i.kt)("p",null,"Rate defines the heli's rotation speed at full stick deflection. The value entered represents the exact maximum rotational velocity. For example, entering 300 means your heli will attempt to rotate at 300 degrees/sec at full stick."),(0,i.kt)("h3",{id:"acro"},"Acro+"),(0,i.kt)("p",null,"For the sake of simplicity, always keep Acro+ at 0."),(0,i.kt)("h3",{id:"expo-1"},"Expo"),(0,i.kt)("p",null,"Expo flattens the curve between center stick and full stick. To achieve a more linear rate, keep Expo low. For a broader center stick region with finer control, increase Expo."),(0,i.kt)("p",null,"While Expo can be as high as 100, excessive Expo might cause decreased center stick sensitivity and make the heli\u2019s response more unpredictable towards full stick (more jumpy)."),(0,i.kt)("h2",{id:"copy-rate-profile"},"Copy Rate Profile"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("em",{parentName:"p"},"Copy rateprofile")," button at the upper right corner to copy the values of the current profile to another one."))}h.isMDXComponent=!0},4222:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rates-actual-2de3bfa1cc2ce947cd4d8b182fb87547.png"},8996:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rates-main-91f6e23a14559c611100920aa4ec1124.png"},9831:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rates-raceflight-a4ee5239ce52aff851b9b498b2efe676.png"}}]);
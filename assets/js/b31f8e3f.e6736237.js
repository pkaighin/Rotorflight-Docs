"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4325],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>m});var l=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function A(e,t){if(null==e)return{};var i,l,r=function(e,t){if(null==e)return{};var i,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var n=l.createContext({}),c=function(e){var t=l.useContext(n),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=c(e.components);return l.createElement(n.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,n=e.parentName,s=A(e,["components","mdxType","originalType","parentName"]),d=c(i),h=r,m=d["".concat(n,".").concat(h)]||d[h]||p[h]||a;return i?l.createElement(m,o(o({ref:t},s),{},{components:i})):l.createElement(m,o({ref:t},s))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=h;var A={};for(var n in t)hasOwnProperty.call(t,n)&&(A[n]=t[n]);A.originalType=e,A[d]="string"==typeof e?e:r,o[1]=A;for(var c=2;c<a;c++)o[c]=i[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,i)}h.displayName="MDXCreateElement"},9595:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>n,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>A,toc:()=>c});var l=i(7462),r=(i(7294),i(3905));const a={sidebar_position:70},o="Mixer",A={unversionedId:"Tutorial - Setup/Mixer",id:"Tutorial - Setup/Mixer",title:"Mixer",description:"This section will describe the configuration of the mixer and calibrate the rotor blade angles",source:"@site/docs/Tutorial - Setup/Mixer.md",sourceDirName:"Tutorial - Setup",slug:"/Tutorial - Setup/Mixer",permalink:"/docs/Tutorial - Setup/Mixer",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial - Setup/Mixer.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Servos",permalink:"/docs/Tutorial - Setup/Servos"},next:{title:"Motor and ESC",permalink:"/docs/Tutorial - Setup/Motor and ESC"}},n={},c=[{value:"Main Rotor Settings",id:"main-rotor-settings",level:3},{value:"Swashplate type",id:"swashplate-type",level:4},{value:"Rotor direction",id:"rotor-direction",level:4},{value:"Elevator Control direction",id:"elevator-control-direction",level:4},{value:"Aileron Control direction",id:"aileron-control-direction",level:4},{value:"Collective Control direction",id:"collective-control-direction",level:4},{value:"Swashplate Link Trims",id:"swashplate-link-trims",level:2},{value:"Main Rotor Geometry",id:"main-rotor-geometry",level:2},{value:"Cyclic and Collective calibration",id:"cyclic-and-collective-calibration",level:4},{value:"Cyclic and Collective blade pitch limits",id:"cyclic-and-collective-blade-pitch-limits",level:4},{value:"Total blade pitch limit",id:"total-blade-pitch-limit",level:4},{value:"Swashplate phase angle",id:"swashplate-phase-angle",level:4},{value:"Tail Rotor Settings",id:"tail-rotor-settings",level:2},{value:"Tail rotor type",id:"tail-rotor-type",level:4},{value:"Calibrating The mixer",id:"calibrating-the-mixer",level:2},{value:"Mixer override",id:"mixer-override",level:3},{value:"Collective Calibration",id:"collective-calibration",level:3},{value:"Cyclic Calibration",id:"cyclic-calibration",level:3},{value:"Variable pitch Yaw Calibration",id:"variable-pitch-yaw-calibration",level:3}],s={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mixer"},"Mixer"),(0,r.kt)("p",null,"This section will describe the configuration of the mixer and calibrate the rotor blade angles"),(0,r.kt)("h3",{id:"main-rotor-settings"},"Main Rotor Settings"),(0,r.kt)("h4",{id:"swashplate-type"},"Swashplate type"),(0,r.kt)("p",null,"Choose the swash type that suits your helicopter."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mixer Tab",src:i(8833).Z,width:"824",height:"259"})),(0,r.kt)("h4",{id:"rotor-direction"},"Rotor direction"),(0,r.kt)("p",null,"Choose the direction of rotation for the main rotor. This is looking down from on the top of the rotor."),(0,r.kt)("h4",{id:"elevator-control-direction"},"Elevator Control direction"),(0,r.kt)("p",null,"With the helicopter servos powered, push the elevator stick forward (pitch down). The swash should now pitch down towards the nose of the helicopter. If this is not the case, change the control direction from ",(0,r.kt)("strong",{parentName:"p"},"[NORMAL]")," to ",(0,r.kt)("strong",{parentName:"p"},"[REVERSE]"),"."),(0,r.kt)("h4",{id:"aileron-control-direction"},"Aileron Control direction"),(0,r.kt)("p",null,"Push the Aileron stick to the right (right Aileron). The swash should also pitch towards the right. If this is not the case, change the control direction from ",(0,r.kt)("strong",{parentName:"p"},"[NORMAL]")," to ",(0,r.kt)("strong",{parentName:"p"},"[REVERSE]"),"."),(0,r.kt)("h4",{id:"collective-control-direction"},"Collective Control direction"),(0,r.kt)("p",null,"Push the collective stick forward (Increasing collective). The swash should now rise up towards the rotor head (to increase collective). If the swash goes down change the control direction from ",(0,r.kt)("strong",{parentName:"p"},"[NORMAL]")," to ",(0,r.kt)("strong",{parentName:"p"},"[REVERSE]"),"."),(0,r.kt)("h2",{id:"swashplate-link-trims"},"Swashplate Link Trims"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mixer Tab",src:i(684).Z,width:"819",height:"178"})),(0,r.kt)("p",null,"Ideally the swashplate should be set with all 3 Collective servos at 90 deg while the blade angle is at 0 degrees. Some helicopters have fixed length swash links which means in order to get 0 degrees for blade centre the servo arms need to be raised or lowered. Use these link trims to provide that function."),(0,r.kt)("p",null,"For helicopters with adjustable swash links this should remain at 0 and the links adjusted to get a 0 degree blade angle."),(0,r.kt)("h2",{id:"main-rotor-geometry"},"Main Rotor Geometry"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mixer Tab",src:i(5381).Z,width:"811",height:"287"})),(0,r.kt)("h4",{id:"cyclic-and-collective-calibration"},"Cyclic and Collective calibration"),(0,r.kt)("p",null,"These settings are used to calibrate the mixer so that the blade angle matches the commanded angle for both the cyclic and collective. See the ",(0,r.kt)("a",{parentName:"p",href:"#calibrating-the-mixer"},"calibration procedure")," for details."),(0,r.kt)("h4",{id:"cyclic-and-collective-blade-pitch-limits"},"Cyclic and Collective blade pitch limits"),(0,r.kt)("p",null,"These limits the maximum pitch limits that can be set by the Flight controller. As a guide these could be in the range of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"9-11 deg - scale"),(0,r.kt)("li",{parentName:"ul"},"10-12 deg - sport "),(0,r.kt)("li",{parentName:"ul"},"11-14 deg - 3D ")),(0,r.kt)("h4",{id:"total-blade-pitch-limit"},"Total blade pitch limit"),(0,r.kt)("h4",{id:"swashplate-phase-angle"},"Swashplate phase angle"),(0,r.kt)("p",null,"Swashplate phase angle settings "),(0,r.kt)("h2",{id:"tail-rotor-settings"},"Tail Rotor Settings"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mixer Tab",src:i(6770).Z,width:"809",height:"254"})),(0,r.kt)("h4",{id:"tail-rotor-type"},"Tail rotor type"),(0,r.kt)("p",null,"This is either Variable (for a servo controlled tail) or Motorized."),(0,r.kt)("h2",{id:"calibrating-the-mixer"},"Calibrating The mixer"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The purpose of the mixer calibration is to set the helicopters physical blade angle to the angle commanded by the FC")),(0,r.kt)("h3",{id:"mixer-override"},"Mixer override"),(0,r.kt)("p",null,"Set the mixer override at the bottom of the pages to ",(0,r.kt)("strong",{parentName:"p"},"ON"),". This will open the override window."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mixer Tab",src:i(7762).Z,width:"1599",height:"531"})),(0,r.kt)("h3",{id:"collective-calibration"},"Collective Calibration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Confirm with a blade pitch tool that with collective mixer at 0 deg the blades are also at 0 deg.  "),(0,r.kt)("li",{parentName:"ul"},"Set the collective mixer override to 9 deg. Measure the blade angle.   "),(0,r.kt)("li",{parentName:"ul"},"If the Blade angle is different from the Override angle, increase or dectease ",(0,r.kt)("a",{parentName:"li",href:"#cyclic-and-collective-calibration"},"Collective Calibration %")," until the bade angle matches.  "),(0,r.kt)("li",{parentName:"ul"},"Set collective back to 0 deg.")),(0,r.kt)("h3",{id:"cyclic-calibration"},"Cyclic Calibration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set the pitch override to 9 deg.  "),(0,r.kt)("li",{parentName:"ul"},"Measure the blade pitch  "),(0,r.kt)("li",{parentName:"ul"},"Increase or decrease the ",(0,r.kt)("a",{parentName:"li",href:"#cyclic-and-collective-calibration"},"Cyclic Calibration %"))),(0,r.kt)("h3",{id:"variable-pitch-yaw-calibration"},"Variable pitch Yaw Calibration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set YAW override to 0 deg.  "),(0,r.kt)("li",{parentName:"ul"},"Adjust linkage to get the tail blades to 0 degrees  "),(0,r.kt)("li",{parentName:"ul"},"Set the Override to a value (e.g. 14 deg)  "),(0,r.kt)("li",{parentName:"ul"},"Measure the tail blade angle  "),(0,r.kt)("li",{parentName:"ul"},"Adjust the ",(0,r.kt)("a",{parentName:"li",href:"#tail-rotor-settings"},"Yaw Calibration %")," so that the tail blade angle matches the commanded angle.")))}p.isMDXComponent=!0},8833:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/mixer-1-3ead8022007c74617807bd77f31c62cd.png"},684:(e,t,i)=>{i.d(t,{Z:()=>l});const l="data:image/png;base64,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"},5381:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/mixer-3-6e27674e486aed02c6e1b0ee0386d698.png"},6770:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/mixer-4-0cf7d853797c9d9d9359a69bff20a983.png"},7762:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/mixer-5-bfaf5b1212284be7c0691a11edd582f0.png"}}]);
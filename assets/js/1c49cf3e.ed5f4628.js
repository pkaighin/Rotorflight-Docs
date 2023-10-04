"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[5057],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var r=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(i),u=o,f=p["".concat(s,".").concat(u)]||p[u]||h[u]||n;return i?r.createElement(f,a(a({ref:t},d),{},{components:i})):r.createElement(f,a({ref:t},d))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<n;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},2655:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=i(7462),o=(i(7294),i(3905));const n={sidebar_position:150},a="Profiles",l={unversionedId:"Tutorial - Setup/Profiles",id:"Tutorial - Setup/Profiles",title:"Profiles",description:"The purpose of profiles are to store in flight tuning parameters. The aim is usually to have several 'profiles' that you can switch between during flight to change flight performance. Things like different headspeeds, tuning, rescue settings etc can be 'tuned' for the individual flight mode. Please see the profile switching example",source:"@site/docs/Tutorial - Setup/Profiles.md",sourceDirName:"Tutorial - Setup",slug:"/Tutorial - Setup/Profiles",permalink:"/docs/Tutorial - Setup/Profiles",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial - Setup/Profiles.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{sidebar_position:150},sidebar:"tutorialSidebar",previous:{title:"Rates",permalink:"/docs/Tutorial - Setup/Rates"},next:{title:"LUA Scripts",permalink:"/docs/Tutorial - Setup/LUA Scripts"}},s={},c=[{value:"Main Tuning Parameters",id:"main-tuning-parameters",level:2},{value:"Proportional",id:"proportional",level:4},{value:"Integral",id:"integral",level:4},{value:"Derivative",id:"derivative",level:4},{value:"Feedforward",id:"feedforward",level:4},{value:"Boost",id:"boost",level:4},{value:"Advanced Settings",id:"advanced-settings",level:2},{value:"Error Rotation",id:"error-rotation",level:4},{value:"Error Decay",id:"error-decay",level:4},{value:"Error Limits",id:"error-limits",level:4},{value:"I-term Relax Type",id:"i-term-relax-type",level:4},{value:"I-term Relax Cutoff Point",id:"i-term-relax-cutoff-point",level:4},{value:"Error Limits",id:"error-limits-1",level:4},{value:"Offset Gains",id:"offset-gains",level:4},{value:"Offset Limits",id:"offset-limits",level:4},{value:"Yaw Settings",id:"yaw-settings",level:2},{value:"CW/CCW Stop Gain",id:"cwccw-stop-gain",level:4},{value:"Cyclic Feedforward Gain",id:"cyclic-feedforward-gain",level:4},{value:"Collective Feedforward Gain",id:"collective-feedforward-gain",level:4},{value:"Collective Impulse Feedforward Gain",id:"collective-impulse-feedforward-gain",level:4},{value:"Pitch Settings",id:"pitch-settings",level:2},{value:"Collective Feedforward Gain",id:"collective-feedforward-gain-1",level:4},{value:"PID Controller Bandwidth",id:"pid-controller-bandwidth",level:2},{value:"Row/Pitch/Yaw Bandwidth",id:"rowpitchyaw-bandwidth",level:4},{value:"Row/Pitch/Yaw D-term cutoff",id:"rowpitchyaw-d-term-cutoff",level:4},{value:"B-Term Cut-off",id:"b-term-cut-off",level:4},{value:"Copy Profile",id:"copy-profile",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"profiles"},"Profiles"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The purpose of profiles are to store in flight tuning parameters. The aim is usually to have several 'profiles' that you can switch between during flight to change flight performance. Things like different headspeeds, tuning, rescue settings etc can be 'tuned' for the individual flight mode. Please see the ",(0,o.kt)("a",{parentName:"p",href:"../Tutorial%20-%20Walkthroughs/Profile%20switching%20example"},"profile switching example"))),(0,o.kt)("h2",{id:"main-tuning-parameters"},"Main Tuning Parameters"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Profiles",src:i(7591).Z,width:"818",height:"230"})),(0,o.kt)("h4",{id:"proportional"},"Proportional"),(0,o.kt)("p",null,"The gain factor that is proportional to the rate error. High proportional gain increase response speed of the helicopter. Low proportional gain results in overall slow system response. Too high results in fast oscillation (~20hz). It also helps reduce the slow oscillation due to high Integral gain."),(0,o.kt)("h4",{id:"integral"},"Integral"),(0,o.kt)("p",null,'The gain factor that is proportional to the accumulated error. Low integral gain results in drift when hovering, and uneven roll or flip rate during continuous roll / flips. It also results in the helicopter not "wanting" to finish maneuvers. Integral too high results in slow oscillation (1-3hz) during cyclic input stops and/or during high disturbance scenarios such as stops of (piro) pitch pumps and tick-tock stops.'),(0,o.kt)("h4",{id:"derivative"},"Derivative"),(0,o.kt)("p",null,'The gain factor proportional to the change of error. It is responsible for "dampening" the overshoot caused by proportional gain. The Derivative gain is particularly sensitive to noise. Ideally, high derivative gain dampens the system too much results in slow response. However, in practice, noise-induced fast oscillation would occur first. Too low results in fast oscillation during stops due to high proportional gain. '),(0,o.kt)("h4",{id:"feedforward"},"Feedforward"),(0,o.kt)("p",null,"The gain factor proportional to the input. In practice, feedforward gain is used to eliminate I-term windup, which occurs after continuous flips and rolls. If the helicopter does not stop immediately and continue moving in the rolling / flipping direction, feedforward gain needs to be increased. If FF gain is set to be too high, the helicopter may overshoot during such maneuver. Thus it is advised to start tuning from low."),(0,o.kt)("h4",{id:"boost"},"Boost"),(0,o.kt)("p",null,"The setpoint boost - or B-term will increase the stick reaction speed. In case the heli is not reacting fast enough, the reaction can be boosted with this new B-gain on each axis separately. This seems to be in the range of 20..50"),(0,o.kt)("p",null,"This provides a rapid short term increase in your command. This parameter is used in conjunction with the time ",(0,o.kt)("a",{parentName:"p",href:"./Profiles#b-term-cut-off"},"B-Cutoff"),"."),(0,o.kt)("h2",{id:"advanced-settings"},"Advanced Settings"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Profiles",src:i(2119).Z,width:"807",height:"396"})),(0,o.kt)("h4",{id:"error-rotation"},"Error Rotation"),(0,o.kt)("p",null,"If turned on, the I-term can transfer between pitch and roll axis during pirouetting. Increase the performance of overall piro related maneuvers. This is sometimes referred to as Piro compensation.  "),(0,o.kt)("h4",{id:"error-decay"},"Error Decay"),(0,o.kt)("p",null,"A safety feature. This is to prevent the helicopter from tilting during takeoff."),(0,o.kt)("h4",{id:"error-limits"},"Error Limits"),(0,o.kt)("p",null,"The limit of how much I-term can be charged. During normal flights, it would not reach this limit. (More info needed)"),(0,o.kt)("h4",{id:"i-term-relax-type"},"I-term Relax Type"),(0,o.kt)("p",null,"The axis that I-term relax is applied to. Generally this is Roll, Pitch and Yaw (RPY)"),(0,o.kt)("h4",{id:"i-term-relax-cutoff-point"},"I-term Relax Cutoff Point"),(0,o.kt)("p",null,"The I-term relax corresponds to the speed of control input for a given axis. When the control input exceed a certain speed, I-term would stop charging. This partially solved the slow overshoot at cyclic input stops due to I-gain charging at fast stick input. The cutoff value corresponds to the input FREQUENCY. A lower value gives more I-term relax, and a higher value provides less I-term relax. It is advised to start high and decrease until bounce back disappears."),(0,o.kt)("h4",{id:"error-limits-1"},"Error Limits"),(0,o.kt)("p",null,"This is a hard limit for the Error to limit I-term. "),(0,o.kt)("h4",{id:"offset-gains"},"Offset Gains"),(0,o.kt)("p",null,"The offset gains are used for the ",(0,o.kt)("a",{parentName:"p",href:"../Tuning/High%20Speed%20Integral"},"High Speed Integral")," feature.\nOffset gain or O-Gain is still being tested. It is currently only available if PID mode is set to 3 from the CLI"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"set pid_mode = 3")),(0,o.kt)("h4",{id:"offset-limits"},"Offset Limits"),(0,o.kt)("p",null,"This is a hard limit for the O-gain. "),(0,o.kt)("h2",{id:"yaw-settings"},"Yaw Settings"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Profiles",src:i(1094).Z,width:"787",height:"257"})),(0,o.kt)("h4",{id:"cwccw-stop-gain"},"CW/CCW Stop Gain"),(0,o.kt)("p",null,"The increase of yaw (what) gain during stops. Higher gain results in crisper stops. Too high may cause fast oscillations."),(0,o.kt)("h4",{id:"cyclic-feedforward-gain"},"Cyclic Feedforward Gain"),(0,o.kt)("p",null,"Since cyclic input creates more torque on the main rotor, this gain aims to pre-compensate the tail motion due to cyclic inputs. a high cyclic value results CW motion on tail when starting pitching/rolling, a low value results CCW motion. (for CW main rotor)"),(0,o.kt)("h4",{id:"collective-feedforward-gain"},"Collective Feedforward Gain"),(0,o.kt)("p",null,"The pre-compensation due to the increase of collective pitch. It is advised to tune it based on the immediate response after a the beginning of a climb up. Higher gain results in CW response, lower gain results in CCW response. It is advised to use a lower value since it may affect tail performance during other maneuvers."),(0,o.kt)("h4",{id:"collective-impulse-feedforward-gain"},"Collective Impulse Feedforward Gain"),(0,o.kt)("p",null,"The pre-compensation due to the sudden change of collective. Ideally it is designed to clean up any tail movement in small pitch pumps, however, the compensation is generally overcompensating. Thus it is suggested to turn it off for now."),(0,o.kt)("h2",{id:"pitch-settings"},"Pitch Settings"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Profiles",src:i(1236).Z,width:"788",height:"182"})),(0,o.kt)("h4",{id:"collective-feedforward-gain-1"},"Collective Feedforward Gain"),(0,o.kt)("p",null,"The pre-compensation for pitch axis when collective is high. Since there is drag-induced pitching motion (there is more drag on the tail thus the helicopter would want to have nose-up tendency when climbing), increasing this gain would compensate that. High gain push the nose down during climb ups. However, it is also advised to select a relatively low value to be conservative."),(0,o.kt)("h2",{id:"pid-controller-bandwidth"},"PID Controller Bandwidth"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Profiles",src:i(8601).Z,width:"768",height:"355"})),(0,o.kt)("h4",{id:"rowpitchyaw-bandwidth"},"Row/Pitch/Yaw Bandwidth"),(0,o.kt)("p",null,"An extra low pass filter for each axis. It is specifically designed to preserve a weaker filter on the yaw axis to increase tail performance. High value corresponding to weaker filter. Too high may cause wobbles. Too low may cause delay and even instability in the control loop."),(0,o.kt)("h4",{id:"rowpitchyaw-d-term-cutoff"},"Row/Pitch/Yaw D-term cutoff"),(0,o.kt)("p",null,"An extra first order low pass filter just for the D-gain to further reduce the sensitivity to noise. A high value decreases the effectiveness but may potentially increase the D-gain performance. A low value increase the filter effect but may hinder D-term effectiveness. It is advised to keep it around 20Hz to prevent oscillation."),(0,o.kt)("h4",{id:"b-term-cut-off"},"B-Term Cut-off"),(0,o.kt)("p",null,'This is controlling how "quick" or "twitchy" the boost is. This works exactly the same as D-cutoff, but on setpoint.\nIt is safe to start with the same cutoffs as used with D. Usually in the range of 10..20. This is used in conjunction with ',(0,o.kt)("a",{parentName:"p",href:"./Profiles#boost"},"Boost")," or ",(0,o.kt)("a",{parentName:"p",href:"./Profiles#boost"},"B-gain")),(0,o.kt)("h2",{id:"copy-profile"},"Copy Profile"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("em",{parentName:"p"},"Copy profile")," button at the upper right corner to copy the values of the current profile to another one."))}h.isMDXComponent=!0},7591:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/profiles-1-e48a5d1612d63c3bc6b6755945b26e29.png"},2119:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/profiles-2-5ffb300380e6f943d4cd109012ec02a6.png"},8601:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/profiles-3-ebaf3e547102c6beeca38ffe11f489bf.png"},1094:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/profiles-4-dde7d72aae28c9d264b9c790ba3c4801.png"},1236:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/profiles-5-7908365250b88ab370fbec2adc8bc412.png"}}]);
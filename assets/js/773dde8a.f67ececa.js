"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[8028],{63237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var s=n(74848),o=n(28453);const r={title:"snapshot 2.0.0-20240218",authors:{name:"Rotorflight",image_url:"https://github.com/rotorflight.png"}},i=void 0,l={permalink:"/Rotorflight-Docs/announcement/2024/02/18/snapshot 2.0.0",source:"@site/announcement/2024-02-18-snapshot 2.0.0.md",title:"snapshot 2.0.0-20240218",description:"Rotorflight snapshot 2.0.0-20240218 is ready",date:"2024-02-18T00:00:00.000Z",tags:[],readingTime:2.29,hasTruncateMarker:!1,authors:[{name:"Rotorflight",image_url:"https://github.com/rotorflight.png",imageURL:"https://github.com/rotorflight.png",key:null,page:null}],frontMatter:{title:"snapshot 2.0.0-20240218",authors:{name:"Rotorflight",image_url:"https://github.com/rotorflight.png",imageURL:"https://github.com/rotorflight.png"}},unlisted:!1,prevItem:{title:"Release Candidate 1 2.0.0 20240329",permalink:"/Rotorflight-Docs/announcement/2024/02/29/RC1-2.0.0"},nextItem:{title:"snapshot 2.0.0-20240128",permalink:"/Rotorflight-Docs/announcement/2024/01/28/snapshot 2.0.0"}},a={authorsImageUrls:[void 0]},h=[{value:"Download The Configurator here.",id:"download-the-configurator-here",level:4},{value:"Download Blackbox here.",id:"download-blackbox-here",level:4},{value:"OpenTX/EdgeTX LUA Scripts",id:"opentxedgetx-lua-scripts",level:4},{value:"Ethos LUA Scripts",id:"ethos-lua-scripts",level:4},{value:"Changes from 2.0.0-20240128",id:"changes-from-200-20240128",level:3},{value:"Changes to the Firmware:",id:"changes-to-the-firmware",level:4},{value:"Changes to the Configurator:",id:"changes-to-the-configurator",level:4},{value:"Changes to the BlackBox:",id:"changes-to-the-blackbox",level:4},{value:"Changes to the LUA Scripts:",id:"changes-to-the-lua-scripts",level:4},{value:"A few notes about the 20240218 snapshot",id:"a-few-notes-about-the-20240218-snapshot",level:3},{value:"CRSF Reuse",id:"crsf-reuse",level:4},{value:"OpenYGE ESC Telemetry",id:"openyge-esc-telemetry",level:4},{value:"Default values in the Firmware",id:"default-values-in-the-firmware",level:4}];function d(e){const t={a:"a",admonition:"admonition",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Rotorflight snapshot 2.0.0-20240218 is ready"}),"\n",(0,s.jsxs)(t.p,{children:["If you wish to become involved in testing these snapshots please contact us on the ",(0,s.jsx)(t.a,{href:"https://discord.gg/6QUySXdEvd",children:"Discord"})]}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"This snapshot is not suitable for end-users. It is intended for beta-testers. Please realize that this software is under heavy development and as such there may be bugs or unintended control issues. Please test with care."})}),"\n",(0,s.jsxs)(t.admonition,{title:"Downloads",type:"tip",children:[(0,s.jsxs)(t.h4,{id:"download-the-configurator-here",children:[(0,s.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20240218",children:"Download The Configurator here"}),"."]}),(0,s.jsxs)(t.h4,{id:"download-blackbox-here",children:[(0,s.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-blackbox/releases/tag/snapshot%2F2.0.0-20240218",children:"Download Blackbox here"}),"."]}),(0,s.jsx)(t.h4,{id:"opentxedgetx-lua-scripts",children:(0,s.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20240218",children:"OpenTX/EdgeTX LUA Scripts"})}),(0,s.jsx)(t.h4,{id:"ethos-lua-scripts",children:(0,s.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-lua-ethos/releases/tag/snapshot%2F2.0.0-20240218",children:"Ethos LUA Scripts"})})]}),"\n",(0,s.jsxs)(t.p,{children:["Please also read the ",(0,s.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight/wiki/Snapshots",children:"Snapshots Wiki page"})," for general information about snapshots."]}),"\n",(0,s.jsx)(t.h3,{id:"changes-from-200-20240128",children:"Changes from 2.0.0-20240128"}),"\n",(0,s.jsx)(t.h4,{id:"changes-to-the-firmware",children:"Changes to the Firmware:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"More CRSF reuse options"}),"\n",(0,s.jsx)(t.li,{children:"Fix CRSF headspeed reuse with EdgeTx >= 2.9.3"}),"\n",(0,s.jsx)(t.li,{children:"Fix governor autorotation timeout limits"}),"\n",(0,s.jsx)(t.li,{children:"Fix battery cell count detection with 10S and 12S"}),"\n",(0,s.jsx)(t.li,{children:"Add OpenYGE ESC telemetry"}),"\n",(0,s.jsx)(t.li,{children:"Add lowpass filter to governor feedforward"}),"\n",(0,s.jsx)(t.li,{children:"Refactor MSP_BATTERY_CONFIG"}),"\n",(0,s.jsxs)(t.li,{children:["Improved defaults","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Stick deadband and deflection"}),"\n",(0,s.jsx)(t.li,{children:"Rescue gains and collective levels"}),"\n",(0,s.jsx)(t.li,{children:"Governor filter cutoffs"}),"\n",(0,s.jsx)(t.li,{children:"Cross-coupling gain"}),"\n",(0,s.jsx)(t.li,{children:"PID error limits"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"changes-to-the-configurator",children:"Changes to the Configurator:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Add OpenYGE ESC protocol"}),"\n",(0,s.jsx)(t.li,{children:"Add Battery Cell Count to Power tag"}),"\n",(0,s.jsx)(t.li,{children:"Add Governor Precomp Bandwidth to Motors tab"}),"\n",(0,s.jsx)(t.li,{children:"Relax servo parameter checks"}),"\n",(0,s.jsx)(t.li,{children:"Increase max yaw to 60\xb0 in Mixer"}),"\n",(0,s.jsx)(t.li,{children:"Improved code in Status page"}),"\n",(0,s.jsx)(t.li,{children:"Refactor MSP_BATTERY_CONFIG"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"changes-to-the-blackbox",children:"Changes to the BlackBox:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Add friendly names for RESCUE_ALTHOLD debug"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"changes-to-the-lua-scripts",children:"Changes to the LUA Scripts:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Aligned with the firmware changes"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"a-few-notes-about-the-20240218-snapshot",children:"A few notes about the 20240218 snapshot"}),"\n",(0,s.jsx)(t.h4,{id:"crsf-reuse",children:"CRSF Reuse"}),"\n",(0,s.jsx)(t.p,{children:"EdgeTx 2.9.3 broke the CRSF sensor reuse by changing the sensor scaling.\nThe CRSF reuse has now been refactored for better support for different EdgeTx versions."}),"\n",(0,s.jsx)(t.p,{children:"There are now more sensors that can be reused. The reusable sensors in the GPS frame are altitude, heading, ground speed, and satellite count."}),"\n",(0,s.jsx)(t.p,{children:"The reuse options are now selected based on the original sensor scaling, so that the reused value can be expressed correctly."}),"\n",(0,s.jsx)(t.p,{children:'For most reuse options, the "ratio" in EdgeTx is a variation of 255.\nE.g. 25.5, 255, 2550, 25500. (including RPM!)'}),"\n",(0,s.jsx)(t.p,{children:"The voltage sensors use 20 or 200."}),"\n",(0,s.jsx)(t.h4,{id:"openyge-esc-telemetry",children:"OpenYGE ESC Telemetry"}),"\n",(0,s.jsx)(t.p,{children:"There is now telemetry support for YGE ESCs (thanks Bob!). This is a brand new protocol implemented by YGE especially for Rotorflight. It will be available in the next ESC firmware update from YGE."}),"\n",(0,s.jsx)(t.h4,{id:"default-values-in-the-firmware",children:"Default values in the Firmware"}),"\n",(0,s.jsx)(t.p,{children:"Many defaults have been improved. Please note that you won't get any new defaults if you load a dump all from the previous snapshot. Probably better to use a diff all, which will apply only the parameter values that are not on default values."}),"\n",(0,s.jsx)(t.p,{children:"Next one will be a Release Candidate, so please report any issues promptly!"}),"\n",(0,s.jsx)(t.p,{children:"Happy tuning (and maybe even flying)!"})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(96540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
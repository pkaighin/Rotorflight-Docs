"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[2232],{68799:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>A,default:()=>a,frontMatter:()=>r,metadata:()=>h,toc:()=>c});var t=i(74848),s=i(28453);const r={sidebar_position:70},A=void 0,h={id:"Tutorial-Setup/Receiver",title:"Receiver",description:"One of the first things you should do is to connect a receiver to the FC. Your FC has several UARTs, and each UART has a TX and an RX. A receiver needs to be connected to an RX and/or TX pad, depending on the type of receiver.",source:"@site/docs/Tutorial-Setup/Receiver.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Receiver",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Setup/Receiver",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaighin/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/Receiver.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Setup/Configuration"},next:{title:"ELRS Custom Telemetry",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Setup/ELRS Custom Telemetry"}},o={},c=[{value:"Receiver Configuration",id:"receiver-configuration",level:2},{value:"Receiver Options",id:"receiver-options",level:2},{value:"Receiver Type",id:"receiver-type",level:2},{value:"Receiver Channels",id:"receiver-channels",level:2},{value:"Receiver Settings",id:"receiver-settings",level:2},{value:"Telemetry Sensors",id:"telemetry-sensors",level:2}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"One of the first things you should do is to connect a receiver to the FC. Your FC has several UARTs, and each UART has a TX and an RX. A receiver needs to be connected to an RX and/or TX pad, depending on the type of receiver."}),"\n",(0,t.jsx)(n.h2,{id:"receiver-configuration",children:"Receiver Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["First activate ",(0,t.jsx)(n.code,{children:"Serial Rx"})," on the UART you have connected your receiver."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Receiver Tab",src:i(55659).A+"",width:"836",height:"150"})}),"\n",(0,t.jsx)(n.h2,{id:"receiver-options",children:"Receiver Options"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Receiver Tab",src:i(92363).A+"",width:"803",height:"107"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"One Wire Communication -"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The following options are only available on ",(0,t.jsx)(n.strong,{children:"F7/H7"})," and ",(0,t.jsx)(n.strong,{children:"G4"})," MCUs"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Inverted serial signaling - Some protoculs such as SBUS and FPORT"}),"\n",(0,t.jsx)(n.li,{children:"Pin Swap - This feature can be"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"receiver-type",children:"Receiver Type"}),"\n",(0,t.jsxs)(n.p,{children:["There are many receiver protocols supported in Rotorflight, SBUS in the one of the most known receiver protocols, however it is not telemetry capable. On the Other hand FrSky F.Port and ELRS are the most used protocols because they support ",(0,t.jsx)(n.em,{children:"telemetry"})," and thus allow you to use the ",(0,t.jsx)(n.a,{href:"/Rotorflight-Docs/docs/next/Tutorial-Setup/LUA-Scripts",children:"Rotorflight LUA app"})," to perform tuning using you radio."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.expresslrs.org/2.0/quick-start/receivers/wiring-up/",children:"CRSF/ELRS"})," needs an RX and a TX on the same UART."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Receiver Tab",src:i(90105).A+"",width:"788",height:"224"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SBUS needs to be connected to an RX pad."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Receiver Tab",src:i(46406).A+"",width:"794",height:"225"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SBUS2 needs to be connected to an TX pad."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Receiver Tab",src:i(70342).A+"",width:"793",height:"225"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://oscarliang.com/sbus-smartport-telemetry-naze32/",children:"SBUS with S.Port"}),": the SBUS pin needs to be connected to a free UART RX, and the S.Port pin needs to be connected to a free UART TX (of ",(0,t.jsx)(n.em,{children:"another free UART"}),"), and you activate ",(0,t.jsx)(n.code,{children:"Telemetry: FrSky SmartPort"})," on that UART."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Receiver Tab",src:i(46406).A+"",width:"794",height:"225"}),"\n",(0,t.jsx)(n.img,{alt:"Receiver Tab",src:i(29112).A+"",width:"835",height:"151"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["F.Port needs be connected to a TX pad, with ",(0,t.jsx)(n.code,{children:"Inverted Serial Signaling"})," activated ,and ",(0,t.jsx)(n.code,{children:"Half-Duplex"})," activated."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Receiver Tab",src:i(43866).A+"",width:"790",height:"224"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Inverted Serial Signaling"})," option will work only on ",(0,t.jsx)(n.strong,{children:"F7/H7"})," or ",(0,t.jsx)(n.strong,{children:"G4"})," type mcu, if you are using an ",(0,t.jsx)(n.strong,{children:"F4"})," mcu, then you need to use and external signal inverter, or hack your receiver to get an Un-Inverted signal for SBUS, S.Port, and F.Port.\nfor more info check ",(0,t.jsx)(n.a,{href:"https://oscarliang.com/uninverted-sbus-smart-port-frsky-receivers/",children:"Uninverted SBUS and Smart Port on Frsky Receivers"})]})}),"\n",(0,t.jsx)(n.p,{children:"Please see the documentation for your FC for more details on how to connect your receiver."}),"\n",(0,t.jsx)(n.h2,{id:"receiver-channels",children:"Receiver Channels"}),"\n",(0,t.jsx)(n.p,{children:"Select the corresponding channels order based on the selected receiver type."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Receiver Tab",src:i(29737).A+"",width:"832",height:"167"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For FrSky receivers, set the channels in your radio as per the below order."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Receiver Tab",src:i(90641).A+"",width:"785",height:"702"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For ELRS receivers, set the channels in your radio as per the below order."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.strong,{children:"CRSF/ELRS"})," always set ",(0,t.jsx)(n.a,{href:"/Rotorflight-Docs/docs/next/Tutorial-Setup/Modes#arm",children:(0,t.jsx)(n.em,{children:"ARM"})})," switch to ",(0,t.jsx)(n.em,{children:"CH5/AUX1"})," on the radio, also set ",(0,t.jsx)(n.em,{children:"THR"})," to ",(0,t.jsx)(n.em,{children:"CH6"})]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Receiver Tab",src:i(96838).A+"",width:"804",height:"709"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reverse channels on your transmitter if a channel responds the wrong way around. Stick to the right should move the bar to the right. Push stick forward and bar should move to the right."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"receiver-settings",children:"Receiver Settings"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Receiver Tab",src:i(23994).A+"",width:"808",height:"310"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Stick Center"})," - adjust as required by your radio to achieve 0% when the ",(0,t.jsx)(n.em,{children:"ROLL, PITCH, YAW"})," sticks are centered."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Stick Maximum Travel"})," - adjust achieve 100% at the sticks limits."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Throttle Channel value for arming"})," - channel value under which arming is allowed.Throttle must be below this limit prior to ARM mode being selected."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Throttle Channel value for 0% throttle"})," - The channel value (in \xb5S) for the channel to be considered 0%."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Throttle Channel value for 100% throttle"})," - The channel value (in \xb5S) for the channel to be considered 100%."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cyclic Deadband"})," and ",(0,t.jsx)(n.strong,{children:"Yaw Deadband"})," - adjust to the smallest possible value that doesn't make your model drift in the ",(0,t.jsx)(n.em,{children:"Rates Preview"})," window."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Calibrating Stability Mode\nThe stability modes (Angle, Horizon or Rescue) can be calibrated so that the heli doesn't drift much when using such a mode. This can only be done via the ",(0,t.jsx)(n.a,{href:"/Rotorflight-Docs/docs/next/Tutorial-Walkthroughs/Using-StabilityModes",children:"accelerometer trims"}),".\n",(0,t.jsx)(n.strong,{children:"Do not use trim on your transmitter"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["You should end up with something similar to this:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{alt:"Receiver tab",src:i(11920).A+"",width:"520",height:"131"})]}),"\n",(0,t.jsx)(n.h2,{id:"telemetry-sensors",children:"Telemetry Sensors"}),"\n",(0,t.jsx)(n.p,{children:"Use the below switch to enable/disable the telemetry stream sent to your radio. Each sensor can then be enabled or disabled individual depending on your requirement."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Receiver Tab",src:i(72018).A+"",width:"834",height:"424"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For ELRS receivers, follow the ",(0,t.jsx)(n.a,{href:"/Rotorflight-Docs/docs/next/Tutorial-Walkthroughs/ELRS-telemetry-reuse",children:"ELRS Telemetry Reuse WalkTrough"})," for a practical example on ELRS sensors Reuse and Setup."]})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},29737:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/receiver-channels-cd0d0741ee9f476dc2b7d209cb14b1c9.png"},90105:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/receiver-crsf-e3ffbc36ab13ef9adcb87d11e9dbe02d.png"},43866:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/receiver-fport-1c9188ae432de7effb57cff6541246e8.png"},92363:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/receiver-options-9da08f53dc8d053101f1ea706a14492d.png"},96838:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/receiver-order-elrs-7e0977d25dcb161cd60ac0346b075129.png"},90641:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/receiver-order-frsky-fee54db712d76708af52e107a4409004.png"},46406:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/receiver-sbus-5bc1a2817336468219e671f75aa42d95.png"},70342:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/receiver-sbus2-d0392ab8ec9de97a1c0db58227ff0cc5.png"},23994:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/receiver-settings-e0d73e0cb1548e15948870191a39d171.png"},72018:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/receiver-telem-sensors-8eddbfa15e126f73e2ccb8c03ceee296.png"},29112:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,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"},55659:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,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"},11920:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/tx-output-calibrated-24f660212880e31d7b3fcc7f09a49801.gif"},28453:(e,n,i)=>{i.d(n,{R:()=>A,x:()=>h});var t=i(96540);const s={},r=t.createContext(s);function A(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:A(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
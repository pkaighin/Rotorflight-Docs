"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[593],{42395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var n=r(74848),i=r(28453);const s={sidebar_position:110},l="ESC Telemetry",o={id:"Tutorial-Setup/ESC-Telemetry",title:"ESC Telemetry",description:"The purpose of ESC telemetry is to provide a method of reading the values provided by the ESC. These are things such as RPM, Temperature, Voltage, Current and mAh consumed. This is accomplished by connecting the ESC telemetry wire to the flight controller with a spare UART.",source:"@site/docs/Tutorial-Setup/ESC-Telemetry.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/ESC-Telemetry",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Setup/ESC-Telemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaighin/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/ESC-Telemetry.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110},sidebar:"tutorialSidebar",previous:{title:"Governor",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Setup/Governor"},next:{title:"Servos",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Setup/Servos"}},d={},h=[{value:"Select Serial Port",id:"select-serial-port",level:3},{value:"Select the Protocol",id:"select-the-protocol",level:3},{value:"Power Config",id:"power-config",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"esc-telemetry",children:"ESC Telemetry"})}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"The purpose of ESC telemetry is to provide a method of reading the values provided by the ESC. These are things such as RPM, Temperature, Voltage, Current and mAh consumed. This is accomplished by connecting the ESC telemetry wire to the flight controller with a spare UART."}),(0,n.jsx)(t.p,{children:"ESC Telemetry currently supported are :"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"BLHELI32"}),": BLheli and KISS"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"HOBBYWING V4"}),":  Platinum PRO V4, V4.1,& FLYFUN V5"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"HOBBYWING V5"}),": Platinum V5"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"SCORPION"}),": Unsc Telem"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"KONTRONIK"}),": Kosmik & Kolibri"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"OMPHOBBY"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ZTW"}),": Skyhawk"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"APD"}),": HV Pro UART telemetry"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"YGE"}),": OpenYGE - Note - The ESC must have firmware V1.03547 or above. At the moment this is in beta and has not been released. Please use the contact form to request the updated firmware. ",(0,n.jsx)(t.a,{href:"https://www.yge.de/en/contact/",children:"YGE: Contact Us"})]}),"\n"]})]}),"\n",(0,n.jsx)(t.h3,{id:"select-serial-port",children:"Select Serial Port"}),"\n",(0,n.jsx)(t.p,{children:"The ESC telemetry pin TX needs to be connected to a spare UART RX."}),"\n",(0,n.jsx)(t.p,{children:"Select the UART from the Configuration page."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ESC Telemetry",src:r(72287).A+"",width:"802",height:"341"})}),"\n",(0,n.jsx)(t.h3,{id:"select-the-protocol",children:"Select the Protocol"}),"\n",(0,n.jsx)(t.p,{children:"Select the correct ESC telemetry protocol based on the one you are using."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ESC Telemetry",src:r(71476).A+"",width:"844",height:"392"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"For Hobbywing V4"}),"\nAdditional parameters are provided for the voltage and current gains, and zero offsets."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"set esc_sensor_hw4_voltage_gain = 0"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"set esc_sensor_hw4_current_gain = 0"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"set esc_sensor_hw4_current_offset = 0"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"These parameters are set to zero by default to enable the Auto-Calculation within the firmware.\nIf you wish to fine tune the voltage and current you can use the below values as a starting point."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Model"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Voltage gain"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Current gain"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Current offset"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Platinum LV 60A"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"109"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Platinum LV 80A"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"109"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"146"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"409"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Platinum LV 120A"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"109"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"110"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"377"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Platinum HV 130A"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"210"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"157"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Platinum HV 200A"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"210"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"157"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"477"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"FlyFun HV 160A"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"210"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"66"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"381"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"power-config",children:"Power Config"}),"\n",(0,n.jsxs)(t.p,{children:["Enable the Voltage and Current from the ",(0,n.jsx)(t.code,{children:"Power"})," Tab."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ESC Telemetry",src:r(95344).A+"",width:"844",height:"259"})})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},95344:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/esc-telem-power-24c16005f8352b8e9867374cad743c11.png"},71476:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/esc-telem-sel-p-dbf8fe22e688bba5b19189480aecc06b.png"},72287:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/esc-telem-uart-5dcfad44c9144abe4bc3d17e186a00fe.png"},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(96540);const i={},s=n.createContext(i);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
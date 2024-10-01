"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[9106],{33264:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>h,toc:()=>c});var s=t(74848),r=t(28453);const n={sidebar_position:10},o="Radiomaster NEXUS",h={id:"Controllers/rm-nexus",title:"Radiomaster NEXUS",description:"Nexus",source:"@site/docs/Controllers/rm-nexus.md",sourceDirName:"Controllers",slug:"/Controllers/rm-nexus",permalink:"/Rotorflight-Docs/docs/next/Controllers/rm-nexus",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaighin/Rotorflight-Docs/tree/main/docs/Controllers/rm-nexus.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"ControllerSidebar",previous:{title:"Controllers",permalink:"/Rotorflight-Docs/docs/next/Controllers/intro"},next:{title:"Flydragon V2.2",permalink:"/Rotorflight-Docs/docs/next/Controllers/flydragon2.2"}},a={},c=[{value:"Release Video",id:"release-video",level:2},{value:"Hardware Specifications\uff1a",id:"hardware-specifications",level:3},{value:"Rotorflight Target",id:"rotorflight-target",level:3},{value:"Matching RP3-H ELRS receiver",id:"matching-rp3-h-elrs-receiver",level:3},{value:"F-Port",id:"f-port",level:3},{value:"Motorised Tail",id:"motorised-tail",level:3},{value:"Wiring",id:"wiring",level:3},{value:"UART ports",id:"uart-ports",level:3},{value:"Manuals",id:"manuals",level:3}];function d(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"radiomaster-nexus",children:"Radiomaster NEXUS"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Nexus",src:t(13839).A+"",width:"1024",height:"575"})}),"\n",(0,s.jsx)(i.h2,{id:"release-video",children:"Release Video"}),"\n",(0,s.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/G9lQ2TzKDRA?si=iZwL1pnlucgEwzXM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,s.jsxs)(i.admonition,{title:"Specifications",type:"info",children:[(0,s.jsx)(i.h3,{id:"hardware-specifications",children:"Hardware Specifications\uff1a"}),(0,s.jsxs)(i.p,{children:["NEXUS Heli Flight Controller",(0,s.jsx)(i.br,{}),"\n","MCU: STM32F722RET6",(0,s.jsx)(i.br,{}),"\n","Gyro (IMU): ICM-42688-P",(0,s.jsx)(i.br,{}),"\n","Flash Memory (Black Box. IC): 128MB (W25N01GVZEIG)",(0,s.jsx)(i.br,{}),"\n","Barometer: SPL06-001",(0,s.jsx)(i.br,{}),"\n","Uart: 6 - DSM[UART1], S.BUS[UART2], A-CRSF[UART4], PORT-B[UART6], PORT-C[UART3]",(0,s.jsx)(i.br,{}),"\n","Servo: 4 - S1, S2, S3, TAIL",(0,s.jsx)(i.br,{}),"\n","Rpm Sensor: 1 - FROM ESC FREQUENCY SENSOR",(0,s.jsx)(i.br,{}),"\n","Receiver Support: CRSF, ELRS, GHOST, S.BUS, SUMD, IBUS, XBUS, EXBUS, PPM, MSP, DSM2, DSMX",(0,s.jsx)(i.br,{}),"\n","Voltage Supply(DC): 5 - 12.6V",(0,s.jsx)(i.br,{}),"\n","A-B-C Serial Port Power Output: 5V - 2.0A",(0,s.jsx)(i.br,{}),"\n","DSM Serial Port Power Output: 3.3V - 0.5A",(0,s.jsx)(i.br,{}),"\n","Telemetry: S.BUS, HoTT, S.Port, MSP, EDGETX, ELRS",(0,s.jsx)(i.br,{}),"\n","ESC: PWM, Oneshot, Multishot, Dshot",(0,s.jsx)(i.br,{}),"\n","Support Tail ESC: 760\u03bcs/1520\u03bcs Servo",(0,s.jsx)(i.br,{}),"\n","Support Tail Motor: Yes",(0,s.jsx)(i.br,{}),"\n","Demensions: 41.3 X 25.4 X 13.1mm",(0,s.jsx)(i.br,{}),"\n","Weight: 16.8g"]})]}),"\n",(0,s.jsx)(i.h3,{id:"rotorflight-target",children:"Rotorflight Target"}),"\n",(0,s.jsx)(i.p,{children:"When updating Rotorflight firmware. Please use the NEXUS_F7."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Radiomaster Nexus",src:t(27937).A+"",width:"567",height:"181"})}),"\n",(0,s.jsx)(i.h3,{id:"matching-rp3-h-elrs-receiver",children:"Matching RP3-H ELRS receiver"}),"\n",(0,s.jsx)(i.p,{children:"Any of the Rotorflight receiver protocols can be used with the NEXUS. Radiomaster does have the RP3-H receiver which is a direct plug and play ELRS receiver."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Radiomaster RP3-H",src:t(72730).A+"",width:"767",height:"486"})}),"\n",(0,s.jsx)(i.h3,{id:"f-port",children:"F-Port"}),"\n",(0,s.jsxs)(i.p,{children:["Nexus supports F.Port on:\nThe 'TX' pin of Port A, B or C or by remapping the SBUS to a TX for F.Port.",(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.img,{alt:"F.PORT",src:t(63499).A+"",width:"573",height:"194"})]}),"\n",(0,s.jsxs)(i.p,{children:["F.Port is an Unverted protocol over a single wire so must configured with both of these options enabled.",(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.img,{alt:"Remap SBUS to F.PORT",src:t(19959).A+"",width:"704",height:"275"})]}),"\n",(0,s.jsx)(i.h3,{id:"motorised-tail",children:"Motorised Tail"}),"\n",(0,s.jsx)(i.p,{children:"To use the NEXUS with a motorised tail the Servo 4 needs to be remapped to Motor 2. This can be done in the CLI using the following command (just copy and past this into the CLI then push [ENTER])."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"resource SERVO 4 none"}),(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.code,{children:"resource MOTOR 2 B03"}),(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.code,{children:"save"})]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Nexus Target",src:t(34152).A+"",width:"556",height:"217"})}),"\n",(0,s.jsx)(i.h3,{id:"wiring",children:"Wiring"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Nexus wiring",src:t(85960).A+"",width:"1313",height:"898"})}),"\n",(0,s.jsx)(i.h3,{id:"uart-ports",children:"UART ports"}),"\n",(0,s.jsx)(i.p,{children:"All the UARTS on the NEXUS are labeled to match each port. Just enter the function you wish to use for each port such as SerialRx (receiver), ESC Telemetry, blackbox, GPS etc."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Nexus UARTS",src:t(56095).A+"",width:"811",height:"273"})}),"\n",(0,s.jsx)(i.h3,{id:"manuals",children:"Manuals"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://www.radiomasterrc.com/products/nexus-helicopter-flight-controller",children:"Radiomaster NEXUS website"})})]})}function l(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},63499:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/nexus-fport-e6ab8272f0739a3da4b280da43ed4f73.png"},34152:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/nexus-motorised-57820bfff794402783b2d5407a1fa531.png"},13839:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/nexus-radiomaster-8f575a5bb9610e4a9c01a00cfea40dea.png"},19959:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/nexus-remap-89e5b28d84acf5b21a5ee9797c30bfbd.png"},72730:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/nexus-rp3-h-247f07639a0c8286aaeb98528b24c017.png"},27937:(e,i,t)=>{t.d(i,{A:()=>s});const s="data:image/png;base64,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"},56095:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/nexus-uarts-416b6794c72fd39c8d51f30fd0dc3315.png"},85960:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/nexus-wiring-218c5231c8b5882aec43c8021d7573af.png"},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>h});var s=t(96540);const r={},n=s.createContext(r);function o(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function h(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);
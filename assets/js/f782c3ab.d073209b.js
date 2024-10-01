"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[3579],{59977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=n(74848),r=n(28453);const o={sidebar_position:30},s=void 0,a={id:"Tutorial-Setup/Remapping",title:"Remapping",description:"Rotorflight is based on Betaflight which is generally used to control drones. Unfortunately, drones do not have servos and have more motors than we need for a helicopter. In order to use servos we must remap our boards so that we have a pad to connect the servos to.",source:"@site/docs/Tutorial-Setup/Remapping.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Remapping",permalink:"/docs/next/Tutorial-Setup/Remapping",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaighin/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/Remapping.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Flashing the firmware",permalink:"/docs/next/Tutorial-Setup/Flashing-the-firmware"},next:{title:"Status",permalink:"/docs/next/Tutorial-Setup/Status"}},c={},h=[{value:"Key concepts",id:"key-concepts",level:2},{value:"Custom defaults remapping spreadsheet",id:"custom-defaults-remapping-spreadsheet",level:2},{value:"Rotorflight Hardware config and remapping video",id:"rotorflight-hardware-config-and-remapping-video",level:2},{value:"Importing new targets",id:"importing-new-targets",level:2},{value:"Configuring a Motor output",id:"configuring-a-motor-output",level:2},{value:"Configuring a Frequency input",id:"configuring-a-frequency-input",level:2},{value:"The lines which configure the frequency signal",id:"the-lines-which-configure-the-frequency-signal",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsx)(t.p,{children:"Rotorflight is based on Betaflight which is generally used to control drones. Unfortunately, drones do not have servos and have more motors than we need for a helicopter. In order to use servos we must remap our boards so that we have a pad to connect the servos to."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"If using a commercial Rotorflight controllers (NEXUS, Flydragon, Flywing, MatekG474 etc). This step is not required as these controllers are supplied with servos already configured"})}),(0,i.jsx)(t.p,{children:"Disclaimer"}),(0,i.jsx)(t.p,{children:"The pin labeling on commercial flight controllers refers to what the manufacturer has assigned as a function to that pin, in reality these pins are connected to the mcu, and with the power of RF, we can reassign these pins to other functions depending on the available resources on that pin, (you can consult the mcu data sheet STM32 alternate function mapping table to view all the available resources on a particular pin)."})]}),"\n",(0,i.jsx)(t.h2,{id:"key-concepts",children:"Key concepts"}),"\n",(0,i.jsx)(t.p,{children:"Before you start remapping your drone FC to be used with Rotorflight, keep in mind the following."}),"\n",(0,i.jsx)(t.p,{children:"1- Although it is not necessary, but it is advised to keep your cyclic servos on the same Timer."}),"\n",(0,i.jsx)(t.p,{children:"2- If you wish to use a narrow band tail servo, then assign that servo to separate timer."}),"\n",(0,i.jsx)(t.p,{children:"3- Main motor esc output should on a separate timer."}),"\n",(0,i.jsx)(t.p,{children:"4- In case you are using a PWM controlled esc then Rotorflight will require an rpm signal\nfor governor and RPM Filtering, RPM input should be on a 32bit separate timer (TIM2 or TIM5)."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Mixer Tab",src:n(87976).A+"",width:"1694",height:"1024"})}),"\n",(0,i.jsx)(t.h2,{id:"custom-defaults-remapping-spreadsheet",children:"Custom defaults remapping spreadsheet"}),"\n",(0,i.jsx)(t.p,{children:"Spreadsheet for remapping Betaflight targets for use with Rotorflight. The spreadsheet re-allocates features for motors and servos and configures associated timers and dma."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Please 'make a copy'."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/1m-DhCcTTKnMhXicMjBQc5EqCSAowDk0TqXpZUyZq--A/edit?usp=drivesdk",children:"Rotorflight remapping spreadsheet v1.4.1"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/1HyrgZuycS6S4s6TsFGkf90Z2PnO5yLcSx2tpa1-f1Vs/edit?usp=sharing",children:"Rotorflight remapping spreadsheet v2.0"})}),"\n",(0,i.jsx)(t.h2,{id:"rotorflight-hardware-config-and-remapping-video",children:"Rotorflight Hardware config and remapping video"}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/TNAeDaAjzfQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,i.jsx)(t.h2,{id:"importing-new-targets",children:"Importing new targets"}),"\n",(0,i.jsxs)(t.p,{children:["Some targets in the betaflight target repository have additional #define lines above board_name. Please do not chose them. In the example below copy only from board_name down. The ",(0,i.jsx)(t.code,{children:"Board_name"})," MUST be the first line in the spreadsheet."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Mixer Tab",src:n(49955).A+"",width:"907",height:"606"})}),"\n",(0,i.jsx)(t.h2,{id:"configuring-a-motor-output",children:"Configuring a Motor output"}),"\n",(0,i.jsx)(t.h2,{id:"configuring-a-frequency-input",children:"Configuring a Frequency input"}),"\n",(0,i.jsxs)(t.p,{children:["The frequency input pin ",(0,i.jsx)(t.em,{children:"must"})," be connected to a timer with exclusive access.\nIn other words, there must be a free timer, not used by anything else, and one of its positive channels must be available\non a pin that is connected to the FC's solder pads. Negative channels, like CH3N, can't be used as inputs. Once we know which timer and pin we can use, it can be configured for\nfrequency sensor use."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"We recommend that Freq inputs are allocated to pins that have Timer 2 or Timer 5 available. If 2 Freq inputs are required (e.g. Motorized tail) then both inputs can share the same timer. In the remapping spreadsheet these pins are indicated by the green box marked Freq."})}),"\n",(0,i.jsx)(t.p,{children:"In this example, we have chosen to use the LED_STRIP pin as our frequency input. We see there is only one option (Timer1) on AF1. We can use this pin but must not allocate any of the Servos or Motors to Timer1. Only the motor pins share this timer so we can choose either AF2 (timer3) or AF3 (timer8)."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"frequency_1",src:n(46771).A+"",width:"1190",height:"1058"})}),"\n",(0,i.jsx)(t.h3,{id:"the-lines-which-configure-the-frequency-signal",children:"The lines which configure the frequency signal"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"resource LED_STRIP 1 NONE\nresource Freq  1 A09\ntimer A09 AF1 # Freq - pin A09: TIM1 CH2 (AF1)\ndma pin A09 0 # Freq - 0: DMA2 Stream 6 Channel 0\n\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},46771:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/frequency_1-fee92965b2dc819dc007a9ddbbaa9177.png"},87976:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/remapping-1-03ea9d64f2a9cb3c4f22340d53fedcc7.png"},49955:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/remapping-2-626682e0cc3b714810a23985f931637b.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
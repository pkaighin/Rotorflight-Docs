"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[1312],{69367:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var r=t(74848),s=t(28453);const n={sidebar_position:20},i="What board should I get?",l={id:"Tutorial-Quickstart/What-Board",title:"What board should I get?",description:"There are lots of different flight controller boards designed for Betaflight. Most of these are compatible with Rotorflight; however, there are some issues to be aware of before you make a purchase.",source:"@site/docs/Tutorial-Quickstart/What-Board.md",sourceDirName:"Tutorial-Quickstart",slug:"/Tutorial-Quickstart/What-Board",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Quickstart/What-Board",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaighin/Rotorflight-Docs/tree/main/docs/Tutorial-Quickstart/What-Board.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Quickstart/Introduction"},next:{title:"Help - Frequent questions?",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Quickstart/Help-Common-Questions"}},a={},h=[{value:"Such as:",id:"such-as",level:4},{value:"Processors",id:"processors",level:2},{value:"Gyros",id:"gyros",level:2},{value:"Size",id:"size",level:2},{value:"How many pads are available?",id:"how-many-pads-are-available",level:2}];function c(e){const o={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"what-board-should-i-get",children:"What board should I get?"})}),"\n",(0,r.jsx)(o.p,{children:"There are lots of different flight controller boards designed for Betaflight. Most of these are compatible with Rotorflight; however, there are some issues to be aware of before you make a purchase."}),"\n",(0,r.jsxs)(o.admonition,{type:"info",children:[(0,r.jsx)(o.p,{children:"There are currently three ways to get a controller suitable for Rotorflight."}),(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"Build a DIY controller based on a Drone flight controller."}),"\n",(0,r.jsxs)(o.li,{children:["Purchase a 'Wing' controller ",(0,r.jsx)(o.strong,{children:"Must have a Betaflight Target. Not just iNav or Ardupilot"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["Purchase one of the ready built ",(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"/Rotorflight-Docs/docs/next/Controllers/intro",children:"Rotorflight Controllers"})}),"."]}),"\n"]}),(0,r.jsx)(o.h4,{id:"such-as",children:"Such as:"}),(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/Rotorflight-Docs/docs/next/Controllers/rm-nexus",children:"Radiomaster NEXUS"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/Rotorflight-Docs/docs/next/Controllers/flydragon2.2",children:"FlyDragon F722 V2"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/Rotorflight-Docs/docs/next/Controllers/flywingf405heli",children:"FLYWING Heli 405 3D"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/Rotorflight-Docs/docs/next/Controllers/matek_heli",children:"MATEKSYS G474-HELI"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/Rotorflight-Docs/docs/next/Controllers/matek_hlite",children:"MATEKSYS G474-HLITE"})}),"\n"]})]}),"\n",(0,r.jsx)(o.h2,{id:"processors",children:"Processors"}),"\n",(0,r.jsx)(o.p,{children:"We recommend use of a board that has an H743, F7 (F745, F722 etc) or F405 processor for best results. An F411 can (and has) been used but may not be able to run all of the newer features. The newest H7 processors are yet to be supported/fully tested. Please avoid these (or help us with the testing!!)"}),"\n",(0,r.jsx)(o.h2,{id:"gyros",children:"Gyros"}),"\n",(0,r.jsx)(o.p,{children:"Rotorflight 2.xx is built on the Betaflight 4.3 platform. This is several releases behind the current Betaflight version so as a result there may be some new hardware additions that are not yet supported.\nCurrently the gyros on all common boards designed for Betaflight are supported. These include:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"MPU6000, MPU6050, MPU6500"}),"\n",(0,r.jsx)(o.li,{children:"BMI270"}),"\n",(0,r.jsx)(o.li,{children:"ICM42688"}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"size",children:"Size"}),"\n",(0,r.jsx)(o.p,{children:"How large is the space available for the flight controller? The amount of space may affect the size of boards you choose to use. Standard sizes are 16mmx16mm, 20mmx20mm, 25.5mm.25.5mm (whoop), 30.5mmx30.5mm. There are also AIO (All in one) boards which contain the flight controller and 4x ESC's on the one board."}),"\n",(0,r.jsx)(o.h2,{id:"how-many-pads-are-available",children:"How many pads are available?"}),"\n",(0,r.jsx)(o.p,{children:"We need to have pads available on the board to connect to our devices such as Servos, Motors, Frequency input, External logger, Receiver etc (GPS in the future)."}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Receiver:"})," This will require a UART RX and TX if we want to use telemetry (this will be documented by the manufacturer)"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Servos, Motor, Frequency:"})," These items can be allocated to any free UART RX, UART TX, SDA, SCL, LED or Motor pad."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Logger:"})," OpenLager requires one free UART TX"]}),"\n",(0,r.jsx)(o.p,{children:"You will need to choose a board that has enough pins to enable all of your connections."})]})}function d(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>l});var r=t(96540);const s={},n=r.createContext(s);function i(e){const o=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);
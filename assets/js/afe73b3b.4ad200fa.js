"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4418],{61108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(74848),o=t(28453);const r={sidebar_position:50},a="Tune the Governor",s={id:"Tuning/Tune-Governor",title:"Tune the Governor",description:"If using the governor you must first enable the RPM Measurement and configure the Governor",source:"@site/docs/Tuning/Tune-Governor.md",sourceDirName:"Tuning",slug:"/Tuning/Tune-Governor",permalink:"/docs/next/Tuning/Tune-Governor",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaighin/Rotorflight-Docs/tree/main/docs/Tuning/Tune-Governor.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tuningSidebar",previous:{title:"High Speed Integral",permalink:"/docs/next/Tuning/High-Speed-Integral"},next:{title:"Cyclic Cross Coupling",permalink:"/docs/next/Tuning/Cyclic-Cross-Coupling"}},h={},l=[{value:"Preparation",id:"preparation",level:2},{value:"Tuning steps",id:"tuning-steps",level:2},{value:"1. Tune the F-gain",id:"1-tune-the-f-gain",level:3},{value:"2. Tune I-gain",id:"2-tune-i-gain",level:3},{value:"3. Tune P-gain",id:"3-tune-p-gain",level:3},{value:"4. Tune D-gain",id:"4-tune-d-gain",level:3},{value:"The result",id:"the-result",level:2}];function d(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"tune-the-governor",children:"Tune the Governor"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If using the governor you must first enable the ",(0,i.jsx)(n.a,{href:"/docs/next/Tutorial-Setup/Rpm-Measurement",children:"RPM Measurement"})," and configure the ",(0,i.jsx)(n.a,{href:"/docs/next/Tutorial-Setup/Governor",children:"Governor"})]})}),"\n",(0,i.jsx)(n.p,{children:"Our goal here is to have a more or less constant headspeed, without any motor oscillations. Ideally the feedforward term should do most of the work, while the P-term is only used for quick corrections. The I-term should maintain the headspeed over time."}),"\n",(0,i.jsx)(n.p,{children:"But beware: a well tuned governor might generate too much torque for the tail to counteract. If that's the case, you might want to decrease torque by detuning the governor a bit, or reducing the collective range, for example. Alternatively you could try to increase tail authority by using different (bigger) tail rotor blades, or a higher tail rotor speed, for example."}),"\n",(0,i.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you're using TTA, disable it by setting ",(0,i.jsx)(n.em,{children:"TTA gain"})," to 0 on the ",(0,i.jsx)(n.em,{children:"Profiles"})," tab. You can enable it again once you're done tuning the governor."]}),"\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.em,{children:"Blackbox debug mode"})," to ",(0,i.jsx)(n.em,{children:"Governor"})," and ",(0,i.jsx)(n.em,{children:"Blackbox logging rate"})," to ",(0,i.jsx)(n.em,{children:"1kHz"})," on the ",(0,i.jsx)(n.em,{children:"Blackbox"})," tab."]}),"\n",(0,i.jsxs)(n.li,{children:["Start with governor ",(0,i.jsx)(n.em,{children:"P-gain"})," and ",(0,i.jsx)(n.em,{children:"I-gain"})," really low, e.g. 10 for P and 20 for I. Spool up might now take a bit longer."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tuning-steps",children:"Tuning steps"}),"\n",(0,i.jsxs)(n.p,{children:["When you're using the ",(0,i.jsx)(n.a,{href:"/docs/next/Tutorial-Setup/LUA-Scripts",children:"Rotorflight Lua scripts"}),", you can change all gain values on the field. My routine is to make logs of 3 or 4 different values around the default value for one specific gain. Example: the governor F-gain has a default value of 15, so try 10, 15, 20 and 25. Start with 10, do some pitch pumps (give it full collective for a short period of time) and disarm. Change the value to 15 and save, arm, do some pitch pumps, and so on. The result will be one log file with 4 partial logs, which you can select with the dropdown in the upper-right corner of the Blackbox Explorer. Then look in the Blackbox Explorer to see what gain value works best. If you think you might need higher or lower values for a specific gain, make a new log with adjusted values."]}),"\n",(0,i.jsx)(n.p,{children:"Try increments of 10 for the F-gain, increments of 25 for the I-gain and increments of 10 for the P-gain."}),"\n",(0,i.jsx)(n.h3,{id:"1-tune-the-f-gain",children:"1. Tune the F-gain"}),"\n",(0,i.jsx)(n.p,{children:"The F-gain determines the feedforward term, together with cyclic and collective precompensation. As stated, the better the F-gain is tuned, the less the PID-loop has to correct. Here's an example where the F-gain is too low, since the headspeed drops quite a bit when doing pitch pumps."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"f-gain too low",src:t(53941).A+"",width:"1076",height:"560"})}),"\n",(0,i.jsx)(n.p,{children:"If the F-gain is too high, the headspeed will be temporarily too high."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"f-gain too high",src:t(65311).A+"",width:"1075",height:"561"})}),"\n",(0,i.jsx)(n.h3,{id:"2-tune-i-gain",children:"2. Tune I-gain"}),"\n",(0,i.jsx)(n.p,{children:"After you have found and set the best value for F-gain you can increase the I-gain until it starts playing up, then reduce it with 1/3. Here you can see an I-gain value which is too high, since there are some slow oscillations during and/or after the pitch pump."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"i-gain too high",src:t(53892).A+"",width:"1074",height:"559"})}),"\n",(0,i.jsx)(n.h3,{id:"3-tune-p-gain",children:"3. Tune P-gain"}),"\n",(0,i.jsx)(n.p,{children:"After setting the optimal value for I-gain start increasing the P-gain till there are slight oscillations, then reduce it with 1/3. Here is an example of a P-gain that is clearly too high and introduces fast oscillations."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"p-gain too high",src:t(56737).A+"",width:"1075",height:"564"})}),"\n",(0,i.jsx)(n.h3,{id:"4-tune-d-gain",children:"4. Tune D-gain"}),"\n",(0,i.jsx)(n.p,{children:"Unless you're flying a 500+ heli you probably won't need D, since there's hardly any momentum in the rotor."}),"\n",(0,i.jsx)(n.h2,{id:"the-result",children:"The result"}),"\n",(0,i.jsx)(n.p,{children:"This is the result of tuning a Scorpion HKII-2208 3600KV motor in a Gaui X2."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Result",src:t(64923).A+"",width:"1079",height:"562"})}),"\n",(0,i.jsx)(n.p,{children:"And these are the gain values found for this heli:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Result",src:t(27408).A+"",width:"532",height:"282"})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},65311:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/gov-f-gain-too-high-06f6413f243a7d7f13c67ff8b0eda391.png"},53941:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/gov-f-gain-too-low-eedc6cacd93d560fce9ad34e288c874f.png"},53892:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/gov-i-gain-too-high-48ddc97721353f494a76ec48653f61e0.png"},56737:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/gov-p-gain-too-high-6d366d1c9ad63068b6a5f2000dba6d33.png"},64923:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/gov-result-graph-c9effeac87d21537524157a41006b285.png"},27408:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/gov-result-b9be2510b8dea1fb9b81139139aa3c9c.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(96540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
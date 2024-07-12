"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[7161],{74483:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=i(74848),n=i(28453);const s={sidebar_position:130},o="RPM Filters",a={id:"Tutorial-Setup/RPM-Filters",title:"RPM Filters",description:"Introduction",source:"@site/docs/Tutorial-Setup/RPM-Filters.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/RPM-Filters",permalink:"/Rotorflight-Docs/docs/Tutorial-Setup/RPM-Filters",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/RPM-Filters.md",tags:[],version:"current",sidebarPosition:130,frontMatter:{sidebar_position:130},sidebar:"tutorialSidebar",previous:{title:"Mixer",permalink:"/Rotorflight-Docs/docs/Tutorial-Setup/Mixer"},next:{title:"Rates",permalink:"/Rotorflight-Docs/docs/Tutorial-Setup/Rates"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Basic RPM Filters Settings",id:"basic-rpm-filters-settings",level:2},{value:"Filter Tuning",id:"filter-tuning",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"rpm-filters",children:"RPM Filters"}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"RPM filters clean up the gyro signals by filtering out vibrations that are coming from the rotating parts in a helicopter: the main rotor, tail rotor and motor(s)."}),"\n",(0,r.jsx)(t.p,{children:"The difference between an unfiltered and filtered signal is significant. Here's an example of filtered and unfiltered gyro signals:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Gyro signals",src:i(57921).A+"",width:"1393",height:"940"})}),"\n",(0,r.jsx)(t.p,{children:"RPM filtered gyro signals enable you to tune the helicopter better, for example by being able to use higher gains."}),"\n",(0,r.jsxs)(t.p,{children:["The RPM filters require real time motor speed information to be available to the flight controller. This can be obtained with a ",(0,r.jsx)(t.a,{href:"Rpm-Measurement#frequency-sensor",children:"Frequency Sensor"})," or by using ",(0,r.jsx)(t.a,{href:"RPM-Measurement#bidirectional-dshot",children:"Bidirectional DSHOT"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Once the FC knows the motor speed, it can calculate the main and tail rotor speeds. For this it needs to know the ",(0,r.jsx)(t.em,{children:"Main Rotor Gear Ratio"})," and the ",(0,r.jsx)(t.em,{children:"Tail Rotor Gear Ratio"}),", which you can specify in the ",(0,r.jsx)(t.em,{children:"Motors"})," tab."]}),"\n",(0,r.jsx)(t.p,{children:"For example, here are the ratios for my Gaui X3."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Gear ratios",src:i(55890).A+"",width:"803",height:"407"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Direct drive motors have a ratio of 1:1."})}),"\n",(0,r.jsxs)(t.p,{children:["In order to use RPM filters, proceed to the ",(0,r.jsx)(t.em,{children:"Gyro"})," tab, and enable the filters as shown below."]}),"\n",(0,r.jsx)(t.h2,{id:"basic-rpm-filters-settings",children:"Basic RPM Filters Settings"}),"\n",(0,r.jsx)(t.p,{children:"These settings should be ok for a first flight."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"RPM Filters",src:i(16385).A+"",width:"838",height:"557"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"RPM Filters",src:i(67402).A+"",width:"835",height:"836"})}),"\n",(0,r.jsx)(t.p,{children:"Filters introduce latency. More filters mean more latency. So try to keep the number of filters low."}),"\n",(0,r.jsx)(t.p,{children:"Double filters provide heavier filtering than single filters, but are also slower. They are sometimes needed on the 1st and/or 2nd harmonic."}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"The Q factor defines how wide the filter is:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Lower Q values make the filter wider"}),"\n",(0,r.jsx)(t.li,{children:"Higher Q values make the filter smaller"}),"\n"]})]}),"\n",(0,r.jsx)(t.p,{children:"Wider filters are slower than narrow filters, so try to make the filters as small as possible without it being ineffective."}),"\n",(0,r.jsx)(t.h2,{id:"filter-tuning",children:"Filter Tuning"}),"\n",(0,r.jsxs)(t.p,{children:["Make a blackbox log of a short flight with constant headspeed. Scroll to the point where the heli has spooled up and is hovering. Mark that point with the ",(0,r.jsx)(t.code,{children:"I"})," key. Scroll near the end and mark that with the ",(0,r.jsx)(t.code,{children:"O"})," key. Now bring up the ",(0,r.jsx)(t.em,{children:"Analyzer Display"})," and enlarge it. It might look like:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Missing filters",src:i(24759).A+"",width:"1393",height:"940"})}),"\n",(0,r.jsx)(t.p,{children:"This log was made with only a double fundamental filter. As you can see there's some noise around 144Hz. Since the headspeed is 4200 RPM, that must be near the second harmonic (4200/60 = 70*2 = 140Hz). Also note that the gyro signal in the background is also a bit noisy."}),"\n",(0,r.jsx)(t.p,{children:"Now let's add some single filters for the 2nd (140Hz) and 3rd (210Hz) harmonic. Suddenly the log looks a lot cleaner:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Added filters",src:i(86897).A+"",width:"1393",height:"940"})})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},55890:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/motors-gear-ratios-e78d5d9f7edfdfa808e39ec7459b55d8.png"},86897:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/rpm-filters-added-e59278055fba570a444e245705faac94.png"},24759:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/rpm-filters-missing-636f4c3a9a935c4644dea41490fb2cae.png"},16385:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/rpm-filters-set-1-1ed77e515775eb8c4c0f469c416f7a9c.png"},67402:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/rpm-filters-set-2-e7ed76de18502bfa21152b083b9a00c9.png"},57921:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/rpm-unfiltered-20b6697aa790a2143f27566f94663ca7.png"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var r=i(96540);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
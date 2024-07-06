"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4231],{14321:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(74848),s=t(28453);const r={sidebar_position:30},i="Help - Frequent questions?",l={id:"Tutorial-Quickstart/Help-Common-Questions",title:"Help - Frequent questions?",description:"A list of common config issues and the solutions?",source:"@site/docs/Tutorial-Quickstart/Help-Common-Questions.md",sourceDirName:"Tutorial-Quickstart",slug:"/Tutorial-Quickstart/Help-Common-Questions",permalink:"/docs/Tutorial-Quickstart/Help-Common-Questions",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Quickstart/Help-Common-Questions.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"What board should I get?",permalink:"/docs/Tutorial-Quickstart/What-Board"},next:{title:"Getting Started",permalink:"/docs/Tutorial-Setup/Getting-Started"}},a={},d=[{value:"Motor won&#39;t start",id:"motor-wont-start",level:2},{value:"Servo don&#39;t respond",id:"servo-dont-respond",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"help---frequent-questions",children:"Help - Frequent questions?"}),"\n",(0,o.jsx)(n.p,{children:"A list of common config issues and the solutions?"}),"\n",(0,o.jsx)(n.h2,{id:"motor-wont-start",children:"Motor won't start"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Is ARM mode configured?","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Please check your Arm Mode has been enabled. See details in the ",(0,o.jsx)(n.a,{href:"../Tutorial-Setup/Modes#arm",children:"Modes"})]}),"\n",(0,o.jsx)(n.li,{children:"Note!! Arm and Throttle hold need to be on different switches. The FC must see minimum throttle before Arm is enabled; therefore, if Arm activates at the same time as throttle hold is removed, it will fail the minimum check."}),"\n",(0,o.jsx)(n.li,{children:"Check status page for Arming disables"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Using a Governor?","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Does the Motor spool in Governor 'passthrough'. If not this could indicate a pin or timer allocation issue. Also please check your Receiver is connected and has the correct channel order."}),"\n",(0,o.jsx)(n.li,{children:"Does the Motor spool in Governor 'Mode 1'. Please confirm you have either Frequency input or Bi-directional Dshot enabled and functioning. Using the Motor override run the motor at minimum speed and confirm there an RPM signal present"}),"\n",(0,o.jsx)(n.li,{children:"Governor mode 'Mode 2'. If the motor is able to spool in the other modes but not Mode 2 it means the Battery Voltage is not available. Please update this in the Power tab."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"servo-dont-respond",children:"Servo don't respond"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Are servos visible in the servo Tab?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Review the ",(0,o.jsx)(n.a,{href:"/docs/Tutorial-Setup/Remapping",children:"remapping"})," and add servos"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"From the servo override does the servo move?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Confirm connection of the servos"}),"\n",(0,o.jsx)(n.li,{children:"Confirm servos are powered"}),"\n",(0,o.jsx)(n.li,{children:"Check all servos."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Servo moves in override but not"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Confirm miser has been chosen from the ",(0,o.jsx)(n.a,{href:"/docs/Tutorial-Setup/Mixer",children:"Mixer"})," tab."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
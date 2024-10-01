"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[8409],{58628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(74848),o=t(28453);const s={sidebar_position:2},r="CLI Profile (Bank) switching",l={id:"Tutorial-Walkthroughs/CLI-Profile-switching-example",title:"CLI Profile (Bank) switching",description:"Until the Adjustments tab has been re-implemented in RF2, you can use the below command to switch profiles using an Aux channel in your radio.",source:"@site/docs/Tutorial-Walkthroughs/CLI-Profile-switching-example.md",sourceDirName:"Tutorial-Walkthroughs",slug:"/Tutorial-Walkthroughs/CLI-Profile-switching-example",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Walkthroughs/CLI-Profile-switching-example",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaighin/Rotorflight-Docs/tree/main/docs/Tutorial-Walkthroughs/CLI-Profile-switching-example.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Profile (Bank) switching example",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Walkthroughs/Profile-switching-example"},next:{title:"Tuning using Adjustments",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Walkthroughs/Tuning-using-Adjustments"}},c={},a=[];function h(e){const n={code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cli-profile-bank-switching",children:"CLI Profile (Bank) switching"})}),"\n",(0,i.jsxs)(n.p,{children:["Until the ",(0,i.jsx)(n.strong,{children:"Adjustments"})," tab has been re-implemented in RF2, you can use the below command to switch profiles using an ",(0,i.jsx)(n.em,{children:"Aux"})," channel in your radio."]}),"\n",(0,i.jsx)(n.p,{children:"The CLI command format is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"adjfunc <index> <func> <enable channel> <start> <end>\n        <value channel> <dec start> <dec end> <inc start> <inc end>\n        <step size> <value min> <value max>\n"})}),"\n",(0,i.jsx)(n.p,{children:"For a simple three profile switching using a three position Aux Channel use the below command."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"adjfunc [index] [function] [n] 900 2100 [n] 975 2025 975 2025 0 0 3"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"index: this is the adjustment index, it should be unique for each adjustment command."}),"\n",(0,i.jsx)(n.li,{children:"function: function number, use 1 for Rate Profile, 2 for PID Profile."}),"\n",(0,i.jsx)(n.li,{children:"n: Aux channel number -1, for Aux2 use 1, for Aux3 use 2."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Use the below example to switch between three PID Profiles using Aux2."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"adjfunc 0 2 1 900 2100 1 975 2025 975 2025 0 0 3\n"})}),"\n",(0,i.jsx)(n.p,{children:"Also you can use the below example to switch between three Rate Profiles using Aux2."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"adjfunc 1 1 1 900 2100 1 975 2025 975 2025 0 0 3\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
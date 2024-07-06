"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[1854],{8830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(74848),r=n(28453);const s={sidebar_position:10},i="Adding an extra servo",a={id:"Tutorial-Walkthroughs/Extra-servo",title:"Adding an extra servo",description:"Add an extra servo controlled by an AUX channel.",source:"@site/docs/Tutorial-Walkthroughs/Extra-servo.md",sourceDirName:"Tutorial-Walkthroughs",slug:"/Tutorial-Walkthroughs/Extra-servo",permalink:"/Rotorflight-Docs/docs/Tutorial-Walkthroughs/Extra-servo",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Walkthroughs/Extra-servo.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Rotorflight Generic Radio Setup",permalink:"/Rotorflight-Docs/docs/Tutorial-Walkthroughs/Rotorflight-Generic-Radio-Setup"},next:{title:"Getting started with LEDs",permalink:"/Rotorflight-Docs/docs/Tutorial-Walkthroughs/led-strip-quick-start"}},c={},d=[{value:"Add an extra servo controlled by an AUX channel.",id:"add-an-extra-servo-controlled-by-an-aux-channel",level:2}];function l(e){const t={admonition:"admonition",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"adding-an-extra-servo",children:"Adding an extra servo"}),"\n",(0,o.jsx)(t.h2,{id:"add-an-extra-servo-controlled-by-an-aux-channel",children:"Add an extra servo controlled by an AUX channel."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Sometimes we may wish to add an extra servo to our helicopter to be controlled by our Tx for something like retracts on a scale machine or a camera etc. This can be done using the remapping spreadsheet. In the example below we will add Servo 5 to be controlled by the AUX 3 channel."})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 1:"})," Assign the servo to your chosen pin. In the pic below we have assigned Servo 5 to Serial Rx 2."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Adding Servo",src:n(61990).A+"",width:"899",height:"288"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 2:"})," Assign the timer to your new servo. This timer cannot clash with motors, frequency or LED_STRIP. They can be assigned to the same timer as one of your other servos; however, it then will need to be set to the same frequency (e.g. if one is set to 333Hz they will both need to be set to 333Hz). If it can be assigned to a totally different timer then you can assign whatever frequency you like."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Adding Servo",src:n(26604).A+"",width:"1745",height:"461"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 3:"})," In the 'Advanced' section assign your AUX channel to servo 5 and then select and copy the mixer config displayed."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Adding Servo",src:n(13740).A+"",width:"718",height:"438"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Step 4:"})," Open the configurator and go to the CLI page. Paste the config from the mixer into the command line and click [ENTER]. Type save and click [ENTER]."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Adding Servo",src:n(8265).A+"",width:"784",height:"465"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},61990:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/remapping-servo-1-44ea0e54c2a85eba885811d15d93c38c.png"},8265:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/remapping-servo-cli-1f4e0ca3cf391148b7c5a28306cfd988.png"},13740:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/remapping-servo-mixer-36b484595746284c36686737d8f04dba.png"},26604:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/remapping-servo-timer-f89810dc3ab28ebb49b3afbcfd04cddb.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);
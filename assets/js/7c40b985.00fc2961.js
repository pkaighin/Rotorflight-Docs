"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4207],{46388:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var s=i(74848),n=i(28453);const r={sidebar_position:4},o="Using Stability Modes",l={id:"Tutorial-Walkthroughs/Using-StabilityModes",title:"Using Stability Modes",description:"Purpose",source:"@site/docs/Tutorial-Walkthroughs/Using-StabilityModes.md",sourceDirName:"Tutorial-Walkthroughs",slug:"/Tutorial-Walkthroughs/Using-StabilityModes",permalink:"/Rotorflight-Docs/docs/Tutorial-Walkthroughs/Using-StabilityModes",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Walkthroughs/Using-StabilityModes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Tuning using Adjustments",permalink:"/Rotorflight-Docs/docs/Tutorial-Walkthroughs/Tuning-using-Adjustments"},next:{title:"Flashing Blheli_S ESC to Bluejay firmware",permalink:"/Rotorflight-Docs/docs/Tutorial-Walkthroughs/Blheli_s-to-Bluejay"}},d={},h=[{value:"Purpose",id:"purpose",level:2},{value:"Aim",id:"aim",level:2},{value:"Configure the Tx",id:"configure-the-tx",level:3},{value:"Configure flight controller",id:"configure-flight-controller",level:3},{value:"Calibrating stability modes",id:"calibrating-stability-modes",level:3},{value:"## Warning ## - do not use your transmitter trims!!",id:"-warning----do-not-use-your-transmitter-trims",level:4},{value:"Calibration using Lua Scripts",id:"calibration-using-lua-scripts",level:4},{value:"Calibration using Stick Commands",id:"calibration-using-stick-commands",level:4}];function a(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"using-stability-modes",children:"Using Stability Modes"}),"\n",(0,s.jsx)(t.h2,{id:"purpose",children:"Purpose"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"6G modes provide self stabilization/leveling of the helicopter when the sticks are moved to the centre. This is the opposite to the standard Acro mode (used for aerobatics and 3D) which will not self level after sticks are centered and thus is inherently unstable. These modes are generally used for beginners or those wanting more of a drone feel to their helicopter. 6G modes do not provide position fixing as found with GPS systems so the heli will drift around in the wind."})}),"\n",(0,s.jsx)(t.h2,{id:"aim",children:"Aim"}),"\n",(0,s.jsxs)(t.p,{children:["In this example we will configure a 3 position switch (SwC) to select between Stability modes. With the SwC fully down we will have ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Acro"})})," mode, SwC in the centre will be ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Horizon"})})," Mode and in the fully up position we will enable ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Angle"})})," mode."]}),"\n",(0,s.jsx)(t.h3,{id:"configure-the-tx",children:"Configure the Tx"}),"\n",(0,s.jsx)(t.p,{children:"We need to assign a spare channel to your 3 position switch (SwC) (can be any channel or switch)."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"NOTE"})," This example shows the process for EdgeTx (same for OpenTX) but is really the same process for any transmitter."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Step 1:"})," Assign Ch8 to the SwC in the ",(0,s.jsx)(t.strong,{children:"Mixers"})," tab"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Stability Mode",src:i(20274).A+"",width:"949",height:"450"})}),"\n",(0,s.jsx)(t.h3,{id:"configure-flight-controller",children:"Configure flight controller"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Step 2:"})," looking at the channels in the ",(0,s.jsx)(t.strong,{children:"receiver"})," tab we can see that Aux3 is the eight channel. This matches our TX assignment from step 1.  Confirm the 3 position switch changes the value seen on Aux3,"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Stability Mode",src:i(69065).A+"",width:"1138",height:"420"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 3:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Go to the ",(0,s.jsx)(t.strong,{children:"Modes"})," tab. Disable hide unused modes if nothing is visible."]}),"\n",(0,s.jsx)(t.li,{children:"Chose the Horizon Mode. Enter AUX3 in the channel and adjust the range to cover the middle section of the control channel as shown in the picture below."}),"\n",(0,s.jsx)(t.li,{children:"Chose the Angle Mode. Enter Aux3 in the channel and adjust the range to cover the top section of the control range as shown in the pic below."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Stability Mode",src:i(14240).A+"",width:"1122",height:"482"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Step 4:"})," Test and confirm the switch position enables and disables modes as required These values are added to the Profile so will result in (e.g. SwC down = No mode active = Acro, SwC middle = Horizon Mode, SwC up = Angle Mode)."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Stability Mode",src:i(72895).A+"",width:"1576",height:"636"})}),"\n",(0,s.jsx)(t.h3,{id:"calibrating-stability-modes",children:"Calibrating stability modes"}),"\n",(0,s.jsx)(t.h4,{id:"-warning----do-not-use-your-transmitter-trims",children:"## Warning ## - do not use your transmitter trims!!"}),"\n",(0,s.jsx)(t.p,{children:"Your Roll, Pitch and Yaw should all be trimmed to the stick centre configured in the receiver tab. This will be 1500 or 1520 depending on your radio."}),"\n",(0,s.jsx)(t.p,{children:"Stability modes will try to stabilize to the calibrated flight controller level. This is rarely perfectly aligned with the actual helicopters attitude where there is no drift (least drift... there will always be some due to wind etc). In order to calibrate this in-flight we have 2 methods:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Using the ",(0,s.jsx)(t.a,{href:"/Rotorflight-Docs/docs/Tutorial-Setup/LUA-Scripts",children:"Rotorflight Lua Scripts"})]}),"\n",(0,s.jsx)(t.li,{children:"Stick controls"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Note that it's also possible to adjust accelerometer trim values in the ",(0,s.jsx)(t.em,{children:"Configuration"})," tab of the Configurator."]}),"\n",(0,s.jsx)(t.h4,{id:"calibration-using-lua-scripts",children:"Calibration using Lua Scripts"}),"\n",(0,s.jsxs)(t.p,{children:["Select ",(0,s.jsx)(t.em,{children:"Accelerometer Trims"})," from the Rotorflight main menu. Test fly the heli tail-in in either Angle or Horizon mode, with sticks at centre. If the heli drifts left, increase roll trim. If it drifts backwards, increase pitch trim. Each time you make a change to the trims long press the wheel/roller. The Page menu should now pop up. Select Save page. Adjust trims until the heli flies hands off without any pronounced drift in any direction."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Stability Mode",src:i(94806).A+"",width:"1013",height:"272"})}),"\n",(0,s.jsx)(t.h4,{id:"calibration-using-stick-commands",children:"Calibration using Stick Commands"}),"\n",(0,s.jsxs)(t.p,{children:["Standard 'Betaflight' stick commands work with Rotorflight. The accelerometer trims can be calibrated using these commands. To do this you must have ",(0,s.jsx)(t.strong,{children:"Angle or Horizon"})," Modes enabled."]}),"\n",(0,s.jsxs)(t.p,{children:["You will also need to enable this in the CLI",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.code,{children:"set enable_stick_commands = ON"})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Function"}),(0,s.jsx)(t.th,{children:"Collective"}),(0,s.jsx)(t.th,{children:"Yaw"}),(0,s.jsx)(t.th,{children:"Pitch"}),(0,s.jsx)(t.th,{children:"Roll"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Calibrate Gyro"}),(0,s.jsx)(t.td,{children:"LOW"}),(0,s.jsx)(t.td,{children:"LOW"}),(0,s.jsx)(t.td,{children:"LOW"}),(0,s.jsx)(t.td,{children:"CENTER"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Calibrate Acc"}),(0,s.jsx)(t.td,{children:"HIGH"}),(0,s.jsx)(t.td,{children:"LOW"}),(0,s.jsx)(t.td,{children:"LOW"}),(0,s.jsx)(t.td,{children:"CENTER"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trim Acc Left"}),(0,s.jsx)(t.td,{children:"HIGH"}),(0,s.jsx)(t.td,{children:"CENTER"}),(0,s.jsx)(t.td,{children:"CENTER"}),(0,s.jsx)(t.td,{children:"LOW"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trim Acc Right"}),(0,s.jsx)(t.td,{children:"HIGH"}),(0,s.jsx)(t.td,{children:"CENTER"}),(0,s.jsx)(t.td,{children:"CENTER"}),(0,s.jsx)(t.td,{children:"HIGH"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trim Acc Forwards"}),(0,s.jsx)(t.td,{children:"HIGH"}),(0,s.jsx)(t.td,{children:"CENTER"}),(0,s.jsx)(t.td,{children:"HIGH"}),(0,s.jsx)(t.td,{children:"CENTER"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trim Acc Backwards"}),(0,s.jsx)(t.td,{children:"HIGH"}),(0,s.jsx)(t.td,{children:"CENTER"}),(0,s.jsx)(t.td,{children:"LOW"}),(0,s.jsx)(t.td,{children:"CENTER"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Stick Commands",src:i(28200).A+"",width:"1376",height:"491"})}),"\n",(0,s.jsxs)(t.p,{children:["For more details of the stick commands. See the ",(0,s.jsx)(t.a,{href:"https://betaflight.com/docs/development/Controls#Yaw%20Control%E2%80%8B",children:"Betaflight Wiki here."})]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},20274:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Stability_1-ffa682b3fa035b7df24959c066740a6f.png"},69065:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Stability_2-036b7c5d0fb74b4a10c69db3c24dfe8f.png"},14240:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Stability_3-f307411be80469651e0a4a30d28dd02b.png"},72895:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Stability_4-b1a098cc439e2b317e1c96686ad2c1d8.png"},94806:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Stability_5-7481c6e6d5f19af31252f51f8cc8abac.png"},28200:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/stick-commands-e499ed6a74ab2297e634ca5ccc8fddf1.png"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var s=i(96540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
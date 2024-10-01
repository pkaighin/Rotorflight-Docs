"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[8513],{30750:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var t=o(74848),n=o(28453);const r={sidebar_position:60},s="Modeling Cross Coupling",l={id:"Contributing/Modeling-Cross-Coupling",title:"Modeling Cross Coupling",description:"By Etocii",source:"@site/versioned_docs/version-2.0.0/Contributing/Modeling-Cross-Coupling.md",sourceDirName:"Contributing",slug:"/Contributing/Modeling-Cross-Coupling",permalink:"/docs/Contributing/Modeling-Cross-Coupling",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaighin/Rotorflight-Docs/tree/main/versioned_docs/version-2.0.0/Contributing/Modeling-Cross-Coupling.md",tags:[],version:"2.0.0",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"developSidebar",previous:{title:"Adding a Blog Post",permalink:"/docs/Contributing/Adding-a-Blog"},next:{title:"Flow charts/Diagrams",permalink:"/docs/Contributing/Flow-Charts"}},d={},h=[{value:"The problem",id:"the-problem",level:2},{value:"To explain the coupling",id:"to-explain-the-coupling",level:2},{value:"Theory 1",id:"theory-1",level:3},{value:"Theory 2",id:"theory-2",level:3},{value:"Theory 3",id:"theory-3",level:3},{value:"To explain the different magnitudes",id:"to-explain-the-different-magnitudes",level:2},{value:"Theory 1",id:"theory-1-1",level:3},{value:"Theory 2",id:"theory-2-1",level:3},{value:"Proposed controller design",id:"proposed-controller-design",level:2},{value:"Theory 3",id:"theory-3-1",level:3}];function a(e){const i={br:"br",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"modeling-cross-coupling",children:"Modeling Cross Coupling"})}),"\n",(0,t.jsx)(i.p,{children:"By Etocii"}),"\n",(0,t.jsx)(i.p,{children:"An Initial Attempt in Theorizing Cross-Coupling Oscillation Between Roll and Pitch Axis on Miniature Radio Controlled Helicopters"}),"\n",(0,t.jsx)(i.h1,{id:"how-to-model-the-cross-coupling",children:"How to model the Cross Coupling"}),"\n",(0,t.jsx)(i.h2,{id:"the-problem",children:"The problem"}),"\n",(0,t.jsx)(i.p,{children:"When the helicopter experience high disturbance in the pitch axis, it would wobble to the roll axis. Similarly, when the helicopter experience disturbance in the roll axis, it would transfer to the pitch axis, but to a lesser degree."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"The Coupling Effect",src:o(31498).A+"",width:"2028",height:"826"}),(0,t.jsx)(i.br,{}),"\n","(Thanks to Jonas for the picture)"]}),"\n",(0,t.jsx)(i.h2,{id:"to-explain-the-coupling",children:"To explain the coupling"}),"\n",(0,t.jsx)(i.h3,{id:"theory-1",children:"Theory 1"}),"\n",(0,t.jsx)(i.p,{children:"It might be due to the fact that the rotor and motors are spinning disks. Due to gyroscopic precession, there must be some coupling between pitch and roll axis. (Not true, perfect spinning disks does not have coupling)\nInstead, if theory 3 dominates, conventional motor would provide the same motion. However, direct drive motor would actually counter the tilting motion."}),"\n",(0,t.jsx)(i.h3,{id:"theory-2",children:"Theory 2"}),"\n",(0,t.jsx)(i.p,{children:"The transient coupling is likely due to the change of phase lag of the main rotor during sudden change of roll/pitch rate. At high acceleration, the blades flex and introduce a much smaller phase lag ( < 90 degrees)."}),"\n",(0,t.jsx)(i.h3,{id:"theory-3",children:"Theory 3"}),"\n",(0,t.jsx)(i.p,{children:'The rotor and body can be modeled as a rigid spinning disk and a body coupled by a spring and a damper. When commanded to pitch forward, the disk tilts forward first and the body stays the same attitude. Since there is a difference in angles, the spring loads up, giving the body a torque in positive pitch. However, by Newton\'s third law, the disk would "feel" a positive pitch force, which turns 90 degree and gives a torque on the roll axis.'}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Disk Body Model",src:o(73213).A+"",width:"4000",height:"3000"})}),"\n",(0,t.jsx)(i.h2,{id:"to-explain-the-different-magnitudes",children:"To explain the different magnitudes"}),"\n",(0,t.jsx)(i.h3,{id:"theory-1-1",children:"Theory 1"}),"\n",(0,t.jsx)(i.p,{children:"There is a large difference in inertia between pitch and roll axis."}),"\n",(0,t.jsx)(i.h3,{id:"theory-2-1",children:"Theory 2"}),"\n",(0,t.jsx)(i.p,{children:"Tennis Racket theorem. The pitch axis is the second principal axis which is unstable."}),"\n",(0,t.jsx)(i.h2,{id:"proposed-controller-design",children:"Proposed controller design"}),"\n",(0,t.jsx)(i.h3,{id:"theory-3-1",children:"Theory 3"}),"\n",(0,t.jsx)(i.p,{children:"If theory 3 is the main contributor of the coupling effect, one simple idea is to make the disk rolling forward at all time. To know that the disk has a force on it, we need to take derivative of the gyro signal (i.e. D-term) and add that to the roll axis. There is no need for this on the Roll-to-pitch since there is not much coupling."})]})}function c(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},73213:(e,i,o)=>{o.d(i,{A:()=>t});const t=o.p+"assets/images/Disk_Body_Model-d98c499effdce8d30c99fbfcf36dce74.jpg"},31498:(e,i,o)=>{o.d(i,{A:()=>t});const t=o.p+"assets/images/the-coupling-effect-02dbcc7a902cc4312e053c9d4bcd38ec.png"},28453:(e,i,o)=>{o.d(i,{R:()=>s,x:()=>l});var t=o(96540);const n={},r=t.createContext(n);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);
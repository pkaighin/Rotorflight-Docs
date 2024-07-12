"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[6703],{69662:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>h,toc:()=>l});var n=i(74848),o=i(28453);const a={sidebar_position:40},s="High Speed Integral",h={id:"Tuning/High-Speed-Integral",title:"High Speed Integral",description:"TL;DR",source:"@site/docs/Tuning/High-Speed-Integral.md",sourceDirName:"Tuning",slug:"/Tuning/High-Speed-Integral",permalink:"/Rotorflight-Docs/docs/Tuning/High-Speed-Integral",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tuning/High-Speed-Integral.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tuningSidebar",previous:{title:"Tune Feedforward",permalink:"/Rotorflight-Docs/docs/Tuning/Tune-Feedforward"},next:{title:"Tune the Governor",permalink:"/Rotorflight-Docs/docs/Tuning/Tune-Governor"}},r={},l=[{value:"What is it?",id:"what-is-it",level:2},{value:"How to tune it?",id:"how-to-tune-it",level:2},{value:"(Advanced Topic) Tick tock Optimization",id:"advanced-topic-tick-tock-optimization",level:2},{value:"(Advanced Topic) HSI Charging Rate",id:"advanced-topic-hsi-charging-rate",level:2}];function c(e){const t={h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"high-speed-integral",children:"High Speed Integral"}),"\n",(0,n.jsx)(t.p,{children:"TL;DR\nThe high speed integral fixes bobbling problems during fast-moving maneuvers. Higher O-gain resulting in fast reaction to high airspeed. Too high might result in bobble during stops since it behaves like integral gain at constant collective position."}),"\n",(0,n.jsx)(t.h2,{id:"what-is-it",children:"What is it?"}),"\n",(0,n.jsx)(t.p,{children:'This is one of the core features of most advanced FBL systems (Vbar, CGY760R, Spirit .etc) The problem it is solving is maiinly due to the difference in lift from high airspeed in the x and y directions. For example, as the helicoper is moving forward while having a constant positive collective pitch, the helicopter tends to pull up. If the collective pitch is negaive, the imbalance of lift is reversed, and the heli would tend to push down. This is usually not a problem if the collective stays constant because the integral gain will compensate this constant "trim". However, when changing collective while moving at a high speed (for example, fast moving side tick tocks) the heli would not move axially. It would behave in a snake shape because the I term is constantly charging and discharging in the opposite direction.'}),"\n",(0,n.jsx)(t.p,{children:'The High Speed Integral (HSI) resembles another integral term. However, its output is proportional to the collecive input, which reverses when the collective is negative. This is the "arching" effect you might see on FBLs like a vbar, where if one tilt the helicotper at high collective, and move the collective up and down, the swash plate would resemble one side of a seesaw.'}),"\n",(0,n.jsx)(t.h2,{id:"how-to-tune-it",children:"How to tune it?"}),"\n",(0,n.jsx)(t.p,{children:"To properly tune the HSI, one has to be able to fly maneuvers comfortably at a relatively high speed. The best maneuver is the fast moving ticktocks. It is advised to start low (about 30) and see if theres snaking at the first few tick tocks. The higher O-gain you use, the faster it reacts to high speed, meaning the amount of time ticktock becomes axial is lowered. Ideally, the O-gain should be just high enough to havo no snaking. Too high might result in bobbling during stationary tick tocks because it is essentially an I gain at constant collective."}),"\n",(0,n.jsx)(t.h2,{id:"advanced-topic-tick-tock-optimization",children:"(Advanced Topic) Tick tock Optimization"}),"\n",(0,n.jsx)(t.p,{children:'The problem of naively implementing the HSI is repeated maneuvers like tick tocks. The HSI works the best when the heli needs reversed "trim" when collective is reversed. However, there is another scenario that this could happen: during ticktocks. Assume there\'s some error that reverses at each stops of the ticktocks, then the HSI would tend to charge up little by little at each end, resuling unwanted bobbling right after each collective change.'}),"\n",(0,n.jsx)(t.p,{children:'Currently, there seems to be three ways to solve this problem. The simplest way is to not deal with the problem at all and use a very fast I-term decay on the normal integral gain to "soothe" the effect. However, the fast I-term decay creates significant drifting problem in other scenarios, making the heli less predictable.'}),"\n",(0,n.jsx)(t.p,{children:'A much more sophisicated way to deal with this issue. From behavior of the pilots, we know that when the cyclic inputs are high, theres a very low chance that the heli would keep the same airspeed at the input direction. Therefore, the HSI would be added to the normal I term (in the input direction) at some cyclic threshold. This preserves the HSI in the orthogonal direction but "deletes" them in the parallel direction.'}),"\n",(0,n.jsx)(t.p,{children:'RF2 follows the previous logic. However, instead of "deleting" the HSI, it "decays" HSI in a set speed (dictated by the offset_bleed_rate_curve and offset_bleed_limit_curve parameter) into the normal-I. Therefore, a extremely fast impulse on the stick would not result in a complete deletion of the HSI.'}),"\n",(0,n.jsx)(t.h2,{id:"advanced-topic-hsi-charging-rate",children:"(Advanced Topic) HSI Charging Rate"}),"\n",(0,n.jsx)(t.p,{children:'Another problem with HSI is that it behaves like integral gain at constant collective with higher collective having a higher "equivalent I-gain." This problem could affect the PID balance greatly especially at high collectives. One way to solve this problem is to lower the HSI charging rate at high collective (offset_charge_curve). It effectly lowers the equivalent I-gain at high collective which helps maintain the PID balance. However, the adverse effect is that this assumes no significant airspeed change when collective is high, which in some extreme cases might not be true. Also, snaking migh occur if one prefer to use high collective during fast moving ticktocks. Therefore, it is advised to have the charge rate as high as possible at high collective to minimize the effect.'})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>h});var n=i(96540);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
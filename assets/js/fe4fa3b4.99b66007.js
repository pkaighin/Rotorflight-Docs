"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4256],{75448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>_,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(74848),i=t(28453);const a={sidebar_position:170},o="Adjustments",r={id:"Tutorial-Setup/Adjustments",title:"Adjustments",description:"There are total 32 adjustment slots, each assigning an AUX channel to a configuration parameter or a special function. An adjustment slot consist of an enabling condition, an adjustment function, and parameter limits.",source:"@site/docs/Tutorial-Setup/Adjustments.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Adjustments",permalink:"/Rotorflight-Docs/docs/Tutorial-Setup/Adjustments",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/Adjustments.md",tags:[],version:"current",sidebarPosition:170,frontMatter:{sidebar_position:170},sidebar:"tutorialSidebar",previous:{title:"Modes",permalink:"/Rotorflight-Docs/docs/Tutorial-Setup/Modes"},next:{title:"LED Strip",permalink:"/Rotorflight-Docs/docs/Tutorial-Setup/LED-Strip"}},l={},c=[{value:"Example - Select a Profile In-Flight",id:"example---select-a-profile-in-flight",level:2},{value:"Simple example",id:"simple-example",level:3},{value:"Adjustment Types",id:"adjustment-types",level:2},{value:"Step Adjustment",id:"step-adjustment",level:3},{value:"Continuous Adjustment",id:"continuous-adjustment",level:3},{value:"Adjustment Functions",id:"adjustment-functions",level:2},{value:"Parameter Change Functions",id:"parameter-change-functions",level:3},{value:"Profile Change Functions",id:"profile-change-functions",level:3}];function T(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"adjustments",children:"Adjustments"}),"\n",(0,s.jsx)(n.p,{children:"There are total 32 adjustment slots, each assigning an AUX channel to a configuration parameter or a special function. An adjustment slot consist of an enabling condition, an adjustment function, and parameter limits."}),"\n",(0,s.jsx)(n.p,{children:"The enabling condition is an AUX channel, which must be within the configured range for the slot to be active. Once active, a control AUX channel will cause a parameter value adjustment, based on the selected adjustment function."}),"\n",(0,s.jsx)(n.p,{children:"Any changes are taking effect immediately, and are saved in the configuration."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Adjustments",src:t(73591).A+"",width:"953",height:"697"})}),"\n",(0,s.jsx)(n.h2,{id:"example---select-a-profile-in-flight",children:"Example - Select a Profile In-Flight"}),"\n",(0,s.jsx)(n.p,{children:"Being able to switch between profiles in-flight allows you to use different headspeeds with differently tuned PIDs. It can also help with PID tuning, since it makes A/B testing possible with the flick of a switch."}),"\n",(0,s.jsx)(n.h3,{id:"simple-example",children:"Simple example"}),"\n",(0,s.jsxs)(n.p,{children:["Here we use only one channel -AUX4- for ",(0,s.jsx)(n.em,{children:"PID"})," and ",(0,s.jsx)(n.em,{children:"Rates"})," Profiles Selection. Assign AUX4 to a 3-position switch on the TX, so that the switch outputs 1000/1500/2000us. ",(0,s.jsx)(n.a,{href:"/Rotorflight-Docs/docs/Tutorial-Walkthroughs/Profile-switching-example",children:"Profile Switching Example"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"adjustment-types",children:"Adjustment Types"}),"\n",(0,s.jsx)(n.p,{children:"There are two ways the how the control AUX channel is affecting the configuration parameter."}),"\n",(0,s.jsx)(n.h3,{id:"step-adjustment",children:"Step Adjustment"}),"\n",(0,s.jsx)(n.p,{children:"The control AUX channel can be a three position switch or a trim switch on the transmitter. While in up position, it will cause the adjustment to increase by step size, and vice versa. The min and max limits are adhered."}),"\n",(0,s.jsx)(n.p,{children:"Step adjustment is enabled by setting the step size to non-zero value."}),"\n",(0,s.jsx)(n.h3,{id:"continuous-adjustment",children:"Continuous Adjustment"}),"\n",(0,s.jsx)(n.p,{children:"The control AUX channel is a full resolution RC channel, and is controlling the configuration parameter directly. The RC channel range 1000us..2000us is stretched to cover the parameter range min..max."}),"\n",(0,s.jsx)(n.p,{children:"Continuous adjustment is enabled by setting the step size to zero."}),"\n",(0,s.jsx)(n.h2,{id:"adjustment-functions",children:"Adjustment Functions"}),"\n",(0,s.jsx)(n.p,{children:"The adjustment function assigns the control AUX channel to a configuration parameter or a special function. The supported functions are listed below."}),"\n",(0,s.jsx)(n.p,{children:"// Profile change\nADJUSTMENT_RATE_PROFILE             = 1,\nADJUSTMENT_PID_PROFILE              = 2,\nADJUSTMENT_LED_PROFILE              = 3,\nADJUSTMENT_OSD_PROFILE              = 4,"}),"\n",(0,s.jsx)(n.p,{children:"// Rates\nADJUSTMENT_PITCH_RATE               = 5,\nADJUSTMENT_ROLL_RATE                = 6,\nADJUSTMENT_YAW_RATE                 = 7,\nADJUSTMENT_PITCH_RC_RATE            = 8,\nADJUSTMENT_ROLL_RC_RATE             = 9,\nADJUSTMENT_YAW_RC_RATE              = 10,\nADJUSTMENT_PITCH_RC_EXPO            = 11,\nADJUSTMENT_ROLL_RC_EXPO             = 12,\nADJUSTMENT_YAW_RC_EXPO              = 13,"}),"\n",(0,s.jsx)(n.p,{children:"// PID\nADJUSTMENT_PITCH_P_GAIN             = 14,\nADJUSTMENT_PITCH_I_GAIN             = 15,\nADJUSTMENT_PITCH_D_GAIN             = 16,\nADJUSTMENT_PITCH_F_GAIN             = 17,\nADJUSTMENT_ROLL_P_GAIN              = 18,\nADJUSTMENT_ROLL_I_GAIN              = 19,\nADJUSTMENT_ROLL_D_GAIN              = 20,\nADJUSTMENT_ROLL_F_GAIN              = 21,\nADJUSTMENT_YAW_P_GAIN               = 22,\nADJUSTMENT_YAW_I_GAIN               = 23,\nADJUSTMENT_YAW_D_GAIN               = 24,\nADJUSTMENT_YAW_F_GAIN               = 25,"}),"\n",(0,s.jsx)(n.p,{children:"ADJUSTMENT_YAW_CW_GAIN              = 26,\nADJUSTMENT_YAW_CCW_GAIN             = 27,\nADJUSTMENT_YAW_CYCLIC_FF            = 28,\nADJUSTMENT_YAW_COLLECTIVE_FF        = 29,\nADJUSTMENT_YAW_COLLECTIVE_DYN       = 30,\nADJUSTMENT_YAW_COLLECTIVE_DECAY     = 31,\nADJUSTMENT_PITCH_COLLECTIVE_FF      = 32,"}),"\n",(0,s.jsx)(n.p,{children:"// Gyro cutoffs\nADJUSTMENT_PITCH_GYRO_CUTOFF        = 33,\nADJUSTMENT_ROLL_GYRO_CUTOFF         = 34,\nADJUSTMENT_YAW_GYRO_CUTOFF          = 35,"}),"\n",(0,s.jsx)(n.p,{children:"// Dterm cutoffs\nADJUSTMENT_PITCH_DTERM_CUTOFF       = 36,\nADJUSTMENT_ROLL_DTERM_CUTOFF        = 37,\nADJUSTMENT_YAW_DTERM_CUTOFF         = 38,"}),"\n",(0,s.jsx)(n.p,{children:"// Rescue\nADJUSTMENT_RESCUE_CLIMB_COLLECTIVE  = 39,\nADJUSTMENT_RESCUE_HOVER_COLLECTIVE  = 40,\nADJUSTMENT_RESCUE_HOVER_ALTITUDE    = 41,\nADJUSTMENT_RESCUE_ALT_P_GAIN        = 42,\nADJUSTMENT_RESCUE_ALT_I_GAIN        = 43,\nADJUSTMENT_RESCUE_ALT_D_GAIN        = 44,"}),"\n",(0,s.jsx)(n.p,{children:"// Leveling\nADJUSTMENT_ANGLE_LEVEL_GAIN         = 45,\nADJUSTMENT_HORIZON_LEVEL_GAIN       = 46,\nADJUSTMENT_ACRO_TRAINER_GAIN        = 47,"}),"\n",(0,s.jsx)(n.p,{children:"// Governor\nADJUSTMENT_GOV_GAIN                 = 48,\nADJUSTMENT_GOV_P_GAIN               = 49,\nADJUSTMENT_GOV_I_GAIN               = 50,\nADJUSTMENT_GOV_D_GAIN               = 51,\nADJUSTMENT_GOV_F_GAIN               = 52,\nADJUSTMENT_GOV_TTA_GAIN             = 53,\nADJUSTMENT_GOV_CYCLIC_FF            = 54,\nADJUSTMENT_GOV_COLLECTIVE_FF        = 55,"}),"\n",(0,s.jsx)(n.p,{children:"// Boost gains\nADJUSTMENT_PITCH_B_GAIN             = 56,\nADJUSTMENT_ROLL_B_GAIN              = 57,\nADJUSTMENT_YAW_B_GAIN               = 58,"}),"\n",(0,s.jsx)(n.p,{children:"// Offset gains\nADJUSTMENT_PITCH_O_GAIN             = 59,\nADJUSTMENT_ROLL_O_GAIN              = 60,"}),"\n",(0,s.jsx)(n.p,{children:"// Cross-coupling\nADJUSTMENT_CROSS_COUPLING_GAIN      = 61,\nADJUSTMENT_CROSS_COUPLING_RATIO     = 62,\nADJUSTMENT_CROSS_COUPLING_CUTOFF    = 63,"}),"\n",(0,s.jsx)(n.h3,{id:"parameter-change-functions",children:"Parameter Change Functions"}),"\n",(0,s.jsx)(n.p,{children:"The parameter change functions are adjusting the associated configuration parameters, taking effect immediately. This allows changing the fundamental tuning parameter inflight."}),"\n",(0,s.jsx)(n.p,{children:"Each parameter has a min and max limit that the user can set to safeguard against unreasonable or unsafe values. In addition, the system has absolute limits for each parameter."}),"\n",(0,s.jsx)(n.h3,{id:"profile-change-functions",children:"Profile Change Functions"}),"\n",(0,s.jsx)(n.p,{children:"The special functions to change configuration profiles works exactly the same as the parameter functions, except that the possible values are limited to the number of profiles. Both step and continuous adjustments can be used."}),"\n",(0,s.jsx)(n.p,{children:"For example, there are six Rate Profiles available, thus the parameter limits should be min = 0 and max = 5. Narrower range is also possible, if so desired."})]})}function _(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(T,{...e})}):T(e)}},73591:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/adjustments-main-b5ac78a9c4650fd2f15adb375156e928.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
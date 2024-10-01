"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[2398],{26638:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var n=i(74848),o=i(28453);const r={sidebar_position:105},s="RPM Measurement",a={id:"Tutorial-Setup/Rpm-Measurement",title:"RPM Measurement",description:"In order to use the Governor or RPM filters (and why wouldn't you!!) you must measure the RPM. There are two options for this:",source:"@site/versioned_docs/version-2.0.0/Tutorial-Setup/Rpm-Measurement.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Rpm-Measurement",permalink:"/docs/Tutorial-Setup/Rpm-Measurement",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaighin/Rotorflight-Docs/tree/main/versioned_docs/version-2.0.0/Tutorial-Setup/Rpm-Measurement.md",tags:[],version:"2.0.0",sidebarPosition:105,frontMatter:{sidebar_position:105},sidebar:"tutorialSidebar",previous:{title:"Motor and ESC",permalink:"/docs/Tutorial-Setup/Motor-and-Esc"},next:{title:"Governor",permalink:"/docs/Tutorial-Setup/Governor"}},l={},h=[{value:"Frequency Sensor",id:"frequency-sensor",level:2},{value:"Connection",id:"connection",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Bidirectional DSHOT",id:"bidirectional-dshot",level:2},{value:"Supported ESC Firmware",id:"supported-esc-firmware",level:3},{value:"BLHeli_32",id:"blheli_32",level:4},{value:"BLHeli_S",id:"blheli_s",level:4},{value:"Bluejay",id:"bluejay",level:4},{value:"More information",id:"more-information",level:2}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"rpm-measurement",children:"RPM Measurement"})}),"\n",(0,n.jsx)(t.p,{children:"In order to use the Governor or RPM filters (and why wouldn't you!!) you must measure the RPM. There are two options for this:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Frequency sensor"}),"\n",(0,n.jsx)(t.li,{children:"Bidirectional DSHOT"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["RPM can sometimes also be read via ESC telemetry. However, this is at a refresh frequency that is ",(0,n.jsx)(t.strong,{children:"too slow to be used for filtering of governing"}),"."]})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"RPM filtering is used to remove frequencies related to the rotating components. This allows a much higher tune; HOWEVER!! If the helicopter is flown in an OverSpeed condition the rotation of the one way bearing means that the RPM measurement will not be correct. If the helicopter is tuned too critically this could mean the helicopter could become out of tune resulting in unwanted oscillations."})}),"\n",(0,n.jsx)(t.h2,{id:"frequency-sensor",children:"Frequency Sensor"}),"\n",(0,n.jsx)(t.p,{children:"Typically it is used when the RPM is not available via ESC telemetry. Only BLHeli_32, some BLHeli_S and APD F3 ESCs support Dshot/KISS telemetry, so this feature is needed with a wide range of traditional ESCs."}),"\n",(0,n.jsx)(t.p,{children:"The RPM signal is used in multiple places in the FC, e.g. in the PID control, the governor and the RPM-filter. If these features are not needed, then there is no need for the frequency sensor either."}),"\n",(0,n.jsx)(t.p,{children:"An electrical frequency signal is provided by some ESCs, e.g. Hobbywing with the \"yellow\" wire. Or it can come from an RPM sensor, which is converting the motor three-phase voltages into a frequency signal - e.g. Hobbywing RPM sensor. Please refer to your ESC's or sensor's manuals how to connect them correctly."}),"\n",(0,n.jsx)(t.p,{children:"Note about the Hobbywing RPM sensor: it's safest to power it with 3.3V, as the input voltage of the sensor is also the output voltage of the RPM signal it generates. All inputs on a STM32 MCU tolerate 3.3V, and some will also accept 5V. But if you're using a 8.4V BEC to power the sensor, you'll likely damage the MCU."}),"\n",(0,n.jsx)(t.p,{children:"Up to two frequency sensors are supported, for acquiring motor #1 and motor #2 speed."}),"\n",(0,n.jsx)(t.p,{children:"If both Frequency Sensor and telemetry RPM signals are available, the Frequency Sensor has precedence."}),"\n",(0,n.jsx)(t.h3,{id:"connection",children:"Connection"}),"\n",(0,n.jsx)(t.p,{children:"Plug the ESC RPM wire (often yellow wire) or separate RPM sensor (Hobbywing RPM etc) into the FC RPM input."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Frequency input",src:i(20784).A+"",width:"859",height:"341"})}),"\n",(0,n.jsx)(t.h3,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["Then the frequency sensor can be turned ON with the feature flag located on the ",(0,n.jsx)(t.a,{href:"/docs/Tutorial-Setup/Motor-and-Esc#pwm-protocol",children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Motors"})})})," tab."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"frequency_2",src:i(20038).A+"",width:"835",height:"395"})}),"\n",(0,n.jsx)(t.h2,{id:"bidirectional-dshot",children:"Bidirectional DSHOT"}),"\n",(0,n.jsx)(t.p,{children:"Several features of Rotorflight require telemetry data for the motor speed such as the Govenor and RPM Filtering. One method for the FC to get this motor speed is via Bidirectional DSHOT. Bidirectional DSHOT is an ESC protocol which enables communications in both directions between the FC and the ESC. The speed command can be sent by the FC to the ESC and the ESC responds by sending the current motor eRPM (electrical RPM)."}),"\n",(0,n.jsxs)(t.p,{children:["From the ",(0,n.jsx)(t.strong,{children:"Motors"})," tab in Rotorflight Configurator select an DSHOT ESC protocol (DSHOT150-DSHOT600) and enable Bidirectional DSHOT. This requires ESC firmware that supports Bidirectional DSHOT."]}),"\n",(0,n.jsx)(t.h3,{id:"supported-esc-firmware",children:"Supported ESC Firmware"}),"\n",(0,n.jsx)(t.h4,{id:"blheli_32",children:"BLHeli_32"}),"\n",(0,n.jsx)(t.p,{children:"Bidirectional DSHOT is fully supported from firmware version 32.7.0 onward. ESCs with earlier firmware will have to be updated before speed telemetry will operate."}),"\n",(0,n.jsx)(t.h4,{id:"blheli_s",children:"BLHeli_S"}),"\n",(0,n.jsx)(t.p,{children:"BLHeli_S ESCs do not support Bidirectional DSHOT. In order to access this functionality with a BLheli_S ESC, the firmware must be upgraded to Bluejay."}),"\n",(0,n.jsx)(t.h4,{id:"bluejay",children:"Bluejay"}),"\n",(0,n.jsxs)(t.p,{children:["Bluejay is an open source firmware for BLheli_S ESCs which supports Bidirectional DSHOT, see ",(0,n.jsx)(t.a,{href:"https://github.com/mathiasvr/bluejay",children:"BlueJay"}),". This firmware has been used successfully for several Rotorflight builds. Bluejay is capable of flashing individual settings to each ESC (tail and main) which is important when using an all in one (AIO) board. Bluejay v0.15 and later also supports disabling ",(0,n.jsx)(t.em,{children:"damped light"})," (regenerative breaking), a must if your helicopter doesn't have a one way bearing. For example, a K110 will yaw/spin rapidly on throttle hold if ",(0,n.jsx)(t.em,{children:"damped light"})," is enabled. Please follow the ",(0,n.jsx)(t.a,{href:"/docs/Tutorial-Walkthroughs/Blheli_s-to-Bluejay",children:"Blheli_S to Bluejay"})," walkthrough."]}),"\n",(0,n.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,n.jsxs)(t.p,{children:["More details on Bidirectional DSHOT and RPM filtering at ",(0,n.jsx)(t.a,{href:"https://betaflight.com/docs/wiki/guides/current/DSHOT-RPM-Filtering",children:"Betaflight"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},20784:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/frequency-connection-d2f0270e40e73c9547ea2acbfeac515b.png"},20038:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/frequency_2-6a55dfd504f87303dd3ad4054ddcf8e3.png"},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(96540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
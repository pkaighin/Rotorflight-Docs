"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[358],{60030:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=i(74848),r=i(28453);const o={sidebar_position:20},s="Flashing the firmware",a={id:"Tutorial-Setup/Flashing-the-firmware",title:"Flashing the firmware",description:"Install Rotorflight Configurator",source:"@site/docs/Tutorial-Setup/Flashing-the-firmware.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Flashing-the-firmware",permalink:"/docs/next/Tutorial-Setup/Flashing-the-firmware",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaighin/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/Flashing-the-firmware.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Backup and restore",permalink:"/docs/next/Tutorial-Setup/Backup-and-restore"},next:{title:"Remapping",permalink:"/docs/next/Tutorial-Setup/Remapping"}},l={},h=[{value:"Install Rotorflight Configurator",id:"install-rotorflight-configurator",level:2},{value:"Install Drivers",id:"install-drivers",level:2},{value:"Back up Betaflight Config",id:"back-up-betaflight-config",level:2},{value:"Flash Firmware to FC",id:"flash-firmware-to-fc",level:2},{value:"Step 1.",id:"step-1",level:3},{value:"Step 2.",id:"step-2",level:3},{value:"Step 3.",id:"step-3",level:3},{value:"Step 4.",id:"step-4",level:3},{value:"Step 5.",id:"step-5",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"flashing-the-firmware",children:"Flashing the firmware"})}),"\n",(0,n.jsx)(t.h2,{id:"install-rotorflight-configurator",children:"Install Rotorflight Configurator"}),"\n",(0,n.jsxs)(t.p,{children:["Start by downloading and installing the latest ",(0,n.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-configurator/releases",children:"Rotorflight Configurator release"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"This walk-through uses Windows, but it should also work on Linux or macOS."}),"\n",(0,n.jsx)(t.h2,{id:"install-drivers",children:"Install Drivers"}),"\n",(0,n.jsxs)(t.p,{children:["On Windows, install the ",(0,n.jsx)(t.strong,{children:"STM USB VCP Drivers"})," from the links on the Rotorflight Configurator page."]}),"\n",(0,n.jsx)(t.h2,{id:"back-up-betaflight-config",children:"Back up Betaflight Config"}),"\n",(0,n.jsx)(t.p,{children:"Rotorflight is based on Betaflight and uses the Betaflight configuration as its base. You should make a copy of the configuration that the flight controller (FC) shipped with. Back up the Betaflight configuration as shown in Back up and restore."}),"\n",(0,n.jsx)(t.h2,{id:"flash-firmware-to-fc",children:"Flash Firmware to FC"}),"\n",(0,n.jsx)(t.p,{children:"Connect the FC to your computer with an USB data cable. Now you are ready to install the Rotorflight firmware to your FC. There are five different versions of the firmware, each version targeting a specific microprocessor: F405, F411, F7X2, F745, and H743. Your FC must use one of those processors. Besides firmware, each FC has it's own configuration. The configuration specifies the FC board, e.g. what pads are used for what."}),"\n",(0,n.jsx)(t.h3,{id:"step-1",children:"Step 1."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Identify the Betaflight target. This can be found in the dump file specified by board_name saved in your backup or on the manufacturers website."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Flashing",src:i(70397).A+"",width:"956",height:"287"})}),"\n",(0,n.jsx)(t.h3,{id:"step-2",children:"Step 2."}),"\n",(0,n.jsxs)(t.p,{children:["Open the Rotorflight configurator and click on ",(0,n.jsx)(t.strong,{children:"Update Firmware"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Choose ",(0,n.jsx)(t.strong,{children:"All release and Snapshots"})," from the dropdown. ",(0,n.jsx)(t.strong,{children:"Note:"})," ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:'Snapshots are for development and testing purposes. They may contain bugs!! We recommend using snapshot firmware with care and to assist the project with testing. Choose "Releases" if you would rather use the latest stable firmware'})})]}),"\n",(0,n.jsx)(t.li,{children:'Select the Target you identified in Step 1. You can also click on the "detect" buton to auto detect the target.'}),"\n",(0,n.jsx)(t.li,{children:"Select Full chip Erase, this will remove all previous configurations."}),"\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.strong,{children:"Load firmware[online]"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Flashing",src:i(2982).A+"",width:"1648",height:"782"})}),"\n",(0,n.jsx)(t.h3,{id:"step-3",children:"Step 3."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Check and confirm the target board is correct."}),"\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.strong,{children:"Flash Firmware"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Flashing",src:i(71727).A+"",width:"1149",height:"514"})}),"\n",(0,n.jsx)(t.h3,{id:"step-4",children:"Step 4."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["When the programming is successful click on ",(0,n.jsx)(t.strong,{children:"Connect"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Flashing",src:i(75856).A+"",width:"1280",height:"648"})}),"\n",(0,n.jsx)(t.h3,{id:"step-5",children:"Step 5."}),"\n",(0,n.jsx)(t.p,{children:"Configure the pin remapping. If you are using a commercial Rotorflight controller (NEXUS, Flydragon, Flywing, MatekG474 etc) this step is not required. These boards are configured with the required servos etc already."}),"\n",(0,n.jsxs)(t.p,{children:["If building a custom controller you will need to apply the remapping config to add your servos and motors. Please see the ",(0,n.jsx)(t.a,{href:"/docs/next/Tutorial-Setup/Remapping",children:"Remapping  page"})," for details on how to use the Custom defaults remapping spreadsheet."]}),"\n",(0,n.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(t.p,{children:"'Initiating reboot to bootloader' hangs\nIf you're on Windows and it hangs while displaying Initiating reboot to bootloader, you'll need to install the proper driver for the STM32 BOOTLOADER device."}),"\n",(0,n.jsx)(t.p,{children:"Make sure the device STM32 BOOTLOADER is installed and showing up in the Device Manager, either under Other Devices or under Universal Serial Bus devices. Select View > Show Hidden Devices in order to see all installed devices."}),"\n",(0,n.jsx)(t.p,{children:"You might need to uninstall all STM Device in DFU Mode devices under Universal Serial Bus Controllers before Windows will install the STM32 BOOTLOADER device. Make sure to check Delete the driver software for this device."}),"\n",(0,n.jsx)(t.p,{children:"In the Configurator, go to the CLI and type dfu. This puts the FC in Device Firmware Update mode."}),"\n",(0,n.jsx)(t.p,{children:"Start Zadig (see download link on the Welcome tab in the Configurator), select Options > List all Devices, select STM32 BOOTLOADER and change the driver to WinUSB. Flash firmware should now work."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Flashing",src:i(91609).A+"",width:"572",height:"250"})}),"\n",(0,n.jsx)(t.p,{children:"Error 'Rebooting device to bootloader: FAILED'\nIf you receive the error Rebooting device to bootloader: FAILED then you will need to manually place the FC into bootloader mode. Do this by holding down the BOOT button while connecting it to your computer."}),"\n",(0,n.jsx)(t.p,{children:"Help... that didn't work. Its bricked!\nOk, so after rebooting you are no longer able to connect to the FC via USB. This can happen if your configuration file is not correct (USB becomes unallocated) or if you have loaded the incorrect firmware for the processor type. Don't worry: the bootloader can't be bricked, it's in ROM. You can always reload the firmware via the DFU (device firmware update) mode. Most flight controllers have a 'boot' button or pins which are used to enter DFU mode. Generally you can just enter DFU mode by pushing the button or bridging the boot pins as you plug the USB in (while the Rotorflight Configurator is open)."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Flashing",src:i(77602).A+"",width:"675",height:"275"})}),"\n",(0,n.jsx)(t.p,{children:"Rotorflight Configurator will display DFU - STM32 BOOTLOADER at the top of the page after a successful DFU connection. Click on the Update Firmware and follow the steps above to re-flash the firmware as required."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Flashing",src:i(41259).A+"",width:"478",height:"138"})}),"\n",(0,n.jsxs)(t.p,{children:["If you still having problem connecting to the MCU, install the ",(0,n.jsx)(t.a,{href:"https://impulserc.com/pages/downloads",children:(0,n.jsx)(t.strong,{children:"Impulse-RC Driver Fixer"})}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},70397:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/flash-1-96e9e383edb1cbf875bc21f6f539e101.png"},2982:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/flash-2-2063fcabfc4e0a47f8545fc1b9dc9e26.png"},71727:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/flash-3-3980a424552f4c7ba147cd24d4e54370.png"},75856:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/flash-4-602528ebede0fd32b9ec91f4401b3665.png"},91609:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/flash-5-43a28b0686f5586a51813c07c9e1c5cf.png"},77602:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/flash-6-f79c1ecd3d32d2f3a685f85382bdd2ec.png"},41259:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/flash-7-46fd2492aec928e0d09d64f5891c8504.png"},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(96540);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
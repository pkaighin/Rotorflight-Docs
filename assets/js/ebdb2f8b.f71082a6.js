"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[358],{60030:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var o=i(74848),n=i(28453);const r={sidebar_position:20},s="Flashing the firmware",a={id:"Tutorial-Setup/Flashing-the-firmware",title:"Flashing the firmware",description:"Install Rotorflight Configurator",source:"@site/docs/Tutorial-Setup/Flashing-the-firmware.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Flashing-the-firmware",permalink:"/Rotorflight-Docs/docs/Tutorial-Setup/Flashing-the-firmware",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/Flashing-the-firmware.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Backup and restore",permalink:"/Rotorflight-Docs/docs/Tutorial-Setup/Backup-and-restore"},next:{title:"Remapping",permalink:"/Rotorflight-Docs/docs/Tutorial-Setup/Remapping"}},l={},h=[{value:"Install Rotorflight Configurator",id:"install-rotorflight-configurator",level:2},{value:"Install Drivers",id:"install-drivers",level:2},{value:"Back up Betaflight Config",id:"back-up-betaflight-config",level:2},{value:"Flash Firmware to FC",id:"flash-firmware-to-fc",level:2},{value:"Step 1.",id:"step-1",level:3},{value:"Step 2.",id:"step-2",level:3},{value:"Step 3.",id:"step-3",level:3},{value:"Step 4.",id:"step-4",level:3},{value:"Step 5.",id:"step-5",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"flashing-the-firmware",children:"Flashing the firmware"}),"\n",(0,o.jsx)(t.h2,{id:"install-rotorflight-configurator",children:"Install Rotorflight Configurator"}),"\n",(0,o.jsxs)(t.p,{children:["Start by downloading and installing the latest ",(0,o.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-configurator/releases",children:"Rotorflight Configurator release"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"This walk-through uses Windows, but it should also work on Linux or macOS."}),"\n",(0,o.jsx)(t.h2,{id:"install-drivers",children:"Install Drivers"}),"\n",(0,o.jsxs)(t.p,{children:["On Windows, install the ",(0,o.jsx)(t.strong,{children:"STM USB VCP Drivers"})," from the links on the Rotorflight Configurator page."]}),"\n",(0,o.jsx)(t.h2,{id:"back-up-betaflight-config",children:"Back up Betaflight Config"}),"\n",(0,o.jsx)(t.p,{children:"Rotorflight is based on Betaflight and uses the Betaflight configuration as its base. You should make a copy of the configuration that the flight controller (FC) shipped with. Back up the Betaflight configuration as shown in Back up and restore."}),"\n",(0,o.jsx)(t.h2,{id:"flash-firmware-to-fc",children:"Flash Firmware to FC"}),"\n",(0,o.jsx)(t.p,{children:"Connect the FC to your computer with an USB data cable. Now you are ready to install the Rotorflight firmware to your FC. There are five different versions of the firmware, each version targeting a specific microprocessor: F405, F411, F7X2, F745, and H743. Your FC must use one of those processors. Besides firmware, each FC has it's own configuration. The configuration specifies the FC board, e.g. what pads are used for what."}),"\n",(0,o.jsx)(t.h3,{id:"step-1",children:"Step 1."}),"\n",(0,o.jsx)(t.p,{children:"Identify the Betaflight target. This can be found in the dump file specified by board_name saved in your backup or on the manufacturers website."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Flashing",src:i(70397).A+"",width:"956",height:"287"})}),"\n",(0,o.jsx)(t.h3,{id:"step-2",children:"Step 2."}),"\n",(0,o.jsxs)(t.p,{children:["Open the Rotorflight configurator and click on ",(0,o.jsx)(t.strong,{children:"Update Firmware"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Choose All release and Snapshots from the dropdown."}),"\n",(0,o.jsx)(t.p,{children:"Select the Target you identified in Step 1."}),"\n",(0,o.jsx)(t.p,{children:"Select Full chip Erase, this will remove all previous configurations."}),"\n",(0,o.jsxs)(t.p,{children:["Click on ",(0,o.jsx)(t.strong,{children:"Load firmware[online]"})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Flashing",src:i(2982).A+"",width:"1280",height:"636"})}),"\n",(0,o.jsx)(t.h3,{id:"step-3",children:"Step 3."}),"\n",(0,o.jsx)(t.p,{children:"Check and confirm the target board is correct."}),"\n",(0,o.jsxs)(t.p,{children:["Click on ",(0,o.jsx)(t.strong,{children:"Flash Firmware"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Flashing",src:i(71727).A+"",width:"1149",height:"514"})}),"\n",(0,o.jsx)(t.h3,{id:"step-4",children:"Step 4."}),"\n",(0,o.jsxs)(t.p,{children:["When the programming is successful click on ",(0,o.jsx)(t.strong,{children:"Connect"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.strong,{children:"Apply Custom Defaults"})," from the popup. The FC will now reboot."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Flashing",src:i(75856).A+"",width:"1280",height:"648"})}),"\n",(0,o.jsx)(t.h3,{id:"step-5",children:"Step 5."}),"\n",(0,o.jsx)(t.p,{children:"Configure the pin remapping. There are two options for this:"}),"\n",(0,o.jsx)(t.p,{children:"If you have one of the boards listed in the Boards and Configuration Files section of the wiki (e.g. Matek F722 wpx) you can use a pre-configured custom defaults config file. These files have already had pins remapped for servos and motors. Choose a pin configuration (e.g. (a), (b) etc) that suits your helicopter best and either the Motorized Tail (MT) or Servo Tail (ST) as required. These files can be downloaded from the Rotorflight-targets repo. See the Custom Defaults page for more info. If this is your first Rotorflight controller or have no experience remapping pins then we recommend this method. If you have a different board and wish to use this method please ask on the Discord discussion and we can build one."}),"\n",(0,o.jsx)(t.p,{children:"The second option is to manually re-map your pins to add your servos and motors, or by using the Custom defaults remapping spreadsheet."}),"\n",(0,o.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(t.p,{children:"'Initiating reboot to bootloader' hangs\nIf you're on Windows and it hangs while displaying Initiating reboot to bootloader, you'll need to install the proper driver for the STM32 BOOTLOADER device."}),"\n",(0,o.jsx)(t.p,{children:"Make sure the device STM32 BOOTLOADER is installed and showing up in the Device Manager, either under Other Devices or under Universal Serial Bus devices. Select View > Show Hidden Devices in order to see all installed devices."}),"\n",(0,o.jsx)(t.p,{children:"You might need to uninstall all STM Device in DFU Mode devices under Universal Serial Bus Controllers before Windows will install the STM32 BOOTLOADER device. Make sure to check Delete the driver software for this device."}),"\n",(0,o.jsx)(t.p,{children:"In the Configurator, go to the CLI and type dfu. This puts the FC in Device Firmware Update mode."}),"\n",(0,o.jsx)(t.p,{children:"Start Zadig (see download link on the Welcome tab in the Configurator), select Options > List all Devices, select STM32 BOOTLOADER and change the driver to WinUSB. Flash firmware should now work."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Flashing",src:i(91609).A+"",width:"572",height:"250"})}),"\n",(0,o.jsx)(t.p,{children:"Error 'Rebooting device to bootloader: FAILED'\nIf you receive the error Rebooting device to bootloader: FAILED then you will need to manually place the FC into bootloader mode. Do this by holding down the BOOT button while connecting it to your computer."}),"\n",(0,o.jsx)(t.p,{children:"Help... that didn't work. Its bricked!\nOk, so after rebooting you are no longer able to connect to the FC via USB. This can happen if your configuration file is not correct (USB becomes unallocated) or if you have loaded the incorrect firmware for the processor type. Don't worry: the bootloader can't be bricked, it's in ROM. You can always reload the firmware via the DFU (device firmware update) mode. Most flight controllers have a 'boot' button or pins which are used to enter DFU mode. Generally you can just enter DFU mode by pushing the button or bridging the boot pins as you plug the USB in (while the Rotorflight Configurator is open)."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Flashing",src:i(77602).A+"",width:"675",height:"275"})}),"\n",(0,o.jsx)(t.p,{children:"Rotorflight Configurator will display DFU - STM32 BOOTLOADER at the top of the page after a successful DFU connection. Click on the Update Firmware and follow the steps above to re-flash the firmware as required."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Flashing",src:i(41259).A+"",width:"478",height:"138"})}),"\n",(0,o.jsxs)(t.p,{children:["If you still having problem connecting to the MCU, install the ",(0,o.jsx)(t.a,{href:"https://impulserc.com/pages/downloads",children:(0,o.jsx)(t.strong,{children:"Impulse-RC Driver Fixer"})}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},70397:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/flash-1-96e9e383edb1cbf875bc21f6f539e101.png"},2982:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/flash-2-d301b170ab0fccd6ab3596da531521a0.png"},71727:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/flash-3-3980a424552f4c7ba147cd24d4e54370.png"},75856:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/flash-4-602528ebede0fd32b9ec91f4401b3665.png"},91609:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/flash-5-43a28b0686f5586a51813c07c9e1c5cf.png"},77602:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/flash-6-f79c1ecd3d32d2f3a685f85382bdd2ec.png"},41259:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/flash-7-46fd2492aec928e0d09d64f5891c8504.png"},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var o=i(96540);const n={},r=o.createContext(n);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);
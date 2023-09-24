"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[9195],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=r.createContext({}),h=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=h(o),p=i,f=c["".concat(s,".").concat(p)]||c[p]||d[p]||n;return o?r.createElement(f,a(a({ref:t},u),{},{components:o})):r.createElement(f,a({ref:t},u))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var h=2;h<n;h++)a[h]=o[h];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},570:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var r=o(7462),i=(o(7294),o(3905));const n={sidebar_position:20},a="Flashing the firmware",l={unversionedId:"Tutorial - Setup/Flashing the firmware",id:"Tutorial - Setup/Flashing the firmware",title:"Flashing the firmware",description:"Install Rotorflight Configurator",source:"@site/docs/Tutorial - Setup/Flashing the firmware.md",sourceDirName:"Tutorial - Setup",slug:"/Tutorial - Setup/Flashing the firmware",permalink:"/docs/Tutorial - Setup/Flashing the firmware",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial - Setup/Flashing the firmware.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Backup and restore",permalink:"/docs/Tutorial - Setup/Backup and restore"},next:{title:"Remapping",permalink:"/docs/Tutorial - Setup/Remapping"}},s={},h=[{value:"Install Rotorflight Configurator",id:"install-rotorflight-configurator",level:2},{value:"Install Drivers",id:"install-drivers",level:2},{value:"Back up Betaflight Config",id:"back-up-betaflight-config",level:2},{value:"Flash Firmware to FC",id:"flash-firmware-to-fc",level:2},{value:"Step 1.",id:"step-1",level:3},{value:"Step 2.",id:"step-2",level:3},{value:"Step 3.",id:"step-3",level:3},{value:"Step 4.",id:"step-4",level:3},{value:"Step 5.",id:"step-5",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:h},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flashing-the-firmware"},"Flashing the firmware"),(0,i.kt)("h2",{id:"install-rotorflight-configurator"},"Install Rotorflight Configurator"),(0,i.kt)("p",null,"Start by downloading and installing the latest Rotorflight Configurator release. This walk-through uses Windows, but it should also work on Linux or macOS."),(0,i.kt)("h2",{id:"install-drivers"},"Install Drivers"),(0,i.kt)("p",null,"On Windows, install the STM USB Drivers from the links on the Rotorflight Configurator page."),(0,i.kt)("h2",{id:"back-up-betaflight-config"},"Back up Betaflight Config"),(0,i.kt)("p",null,"Rotorflight is based on Betaflight and uses the Betaflight configuration as its base. You should make a copy of the configuration that the flight controller (FC) shipped with. Back up the Betaflight configuration as shown in Back up and restore."),(0,i.kt)("h2",{id:"flash-firmware-to-fc"},"Flash Firmware to FC"),(0,i.kt)("p",null,"Connect the FC to your computer with an USB data cable. Now you are ready to install the Rotorflight firmware to your FC. There are five different versions of the firmware, each version targeting a specific microprocessor: F405, F411, F7X2, F745, and H743. Your FC must use one of those processors. Besides firmware, each FC has it's own configuration. The configuration specifies the FC board, e.g. what pads are used for what."),(0,i.kt)("h3",{id:"step-1"},"Step 1."),(0,i.kt)("p",null,"Identify the Betaflight target. This can be found in the dump file specified by board_name saved in your backup or on the manufacturers website."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Flashing",src:o(2712).Z,width:"956",height:"287"})),(0,i.kt)("h3",{id:"step-2"},"Step 2."),(0,i.kt)("p",null,"Open the Rotorflight configurator and click on ","[Update Firmware]"),(0,i.kt)("p",null,"Chose All release and Snapshots from the dropdown"),(0,i.kt)("p",null,"Select the Target you identified in Step 1."),(0,i.kt)("p",null,"Select Full chip Erase. This will remove all previous configurations."),(0,i.kt)("p",null,"Click on [Load firmware","[online]","]"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Flashing",src:o(1463).Z,width:"1280",height:"636"})),(0,i.kt)("h3",{id:"step-3"},"Step 3."),(0,i.kt)("p",null,"Check and confirm the target board is correct."),(0,i.kt)("p",null,"Click on ","[Flash Firmware]"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Flashing",src:o(1443).Z,width:"1149",height:"514"})),(0,i.kt)("h3",{id:"step-4"},"Step 4."),(0,i.kt)("p",null,"When the programming is successful click on ","[Connect]","."),(0,i.kt)("p",null,"Click ","[Apply Custom Defaults]"," from the popup. The FC will now reboot."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Flashing",src:o(3443).Z,width:"1280",height:"648"})),(0,i.kt)("h3",{id:"step-5"},"Step 5."),(0,i.kt)("p",null,"Configure the pin remapping. There are two options for this:"),(0,i.kt)("p",null,"If you have one of the boards listed in the Boards and Configuration Files section of the wiki (e.g. Matek F722 wpx) you can use a pre-configured custom defaults config file. These files have already had pins remapped for servos and motors. Choose a pin configuration (e.g. (a), (b) etc) that suits your helicopter best and either the Motorised Tail (MT) or Servo Tail (ST) as required. These files can be downloaded from the Rotorflight-targets repo. See the Custom Defaults page for more info. If this is your first Rotorflight controller or have no experience remapping pins then we recommend this method. If you have a different board and wish to use this method please ask on the Discord discussion and we can build one."),(0,i.kt)("p",null,"The second option is to manually re-map your pins to add your servos and motors, or by using the Custom defaults remapping spreadsheet."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"'Initiating reboot to bootloader' hangs\nIf you're on Windows and it hangs while displaying Initiating reboot to bootloader, you'll need to install the proper driver for the STM32 BOOTLOADER device."),(0,i.kt)("p",null,"Make sure the device STM32 BOOTLOADER is installed and showing up in the Device Manager, either under Other Devices or under Universal Serial Bus devices. Select View > Show Hidden Devices in order to see all installed devices."),(0,i.kt)("p",null,"You might need to uninstall all STM Device in DFU Mode devices under Universal Serial Bus Controllers before Windows will install the STM32 BOOTLOADER device. Make sure to check Delete the driver software for this device."),(0,i.kt)("p",null,"In the Configurator, go to the CLI and type dfu. This puts the FC in Device Firmware Update mode."),(0,i.kt)("p",null,"Start Zadig (see download link on the Welcome tab in the Configurator), select Options > List all Devices, select STM32 BOOTLOADER and change the driver to WinUSB. Flash firmware should now work."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Flashing",src:o(6573).Z,width:"572",height:"250"})),(0,i.kt)("p",null,"Error 'Rebooting device to bootloader: FAILED'\nIf you receive the error Rebooting device to bootloader: FAILED then you will need to manually place the FC into bootloader mode. Do this by holding down the BOOT button while connecting it to your computer."),(0,i.kt)("p",null,"Help... that didn't work. Its bricked!\nOk, so after rebooting you are no longer able to connect to the FC via USB. This can happen if your configuration file is not correct (USB becomes unalocated) or if you have loaded the incorrect firmware for the processor type. Don't worry: the bootloader can't be bricked, it's in ROM. You can always reload the firmware via the DFU (device firmware update) mode. Most flight controllers have a 'boot' button or pins which are used to enter DFU mode. Generally you can just enter DFU mode by pushing the button or bridging the boot pins as you plug the USB in (while the Rotorflight Configurator is open)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Flashing",src:o(9468).Z,width:"675",height:"275"})),(0,i.kt)("p",null,"Rotorflight Configurator will display DFU - STM32 BOOTLOADER at the top of the page after a successful DFU connection. Click on the Update Firmware and follow the steps above to re-flash the firmware as required."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Flashing",src:o(230).Z,width:"478",height:"138"})))}d.isMDXComponent=!0},2712:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/flash-1-96e9e383edb1cbf875bc21f6f539e101.png"},1463:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/flash-2-d301b170ab0fccd6ab3596da531521a0.png"},1443:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/flash-3-3980a424552f4c7ba147cd24d4e54370.png"},3443:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/flash-4-602528ebede0fd32b9ec91f4401b3665.png"},6573:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/flash-5-43a28b0686f5586a51813c07c9e1c5cf.png"},9468:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/flash-6-f79c1ecd3d32d2f3a685f85382bdd2ec.png"},230:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/flash-7-46fd2492aec928e0d09d64f5891c8504.png"}}]);
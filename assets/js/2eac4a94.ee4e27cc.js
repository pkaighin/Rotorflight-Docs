"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[6206],{80625:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var i=r(74848),s=r(28453);const t={sidebar_position:40},o="Design Requirements",l={id:"Manufacturers/Design-Requirements",title:"Design Requirements",description:"This page collects the generic hardware requirements for all Flight Controller designs for Rotorflight.",source:"@site/docs/Manufacturers/Design-Requirements.md",sourceDirName:"Manufacturers",slug:"/Manufacturers/Design-Requirements",permalink:"/Rotorflight-Docs/docs/Manufacturers/Design-Requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaighin/Rotorflight-Docs/tree/main/docs/Manufacturers/Design-Requirements.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"manufactSidebar",previous:{title:"Manufacturers stuff?",permalink:"/Rotorflight-Docs/docs/Manufacturers/Developers"},next:{title:"Reference Design",permalink:"/Rotorflight-Docs/docs/Manufacturers/Reference-Design"}},a={},h=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:2},{value:"Gyroscope &amp; Accelerometer",id:"gyroscope--accelerometer",level:3},{value:"Barometer",id:"barometer",level:3},{value:"Blackbox Flash",id:"blackbox-flash",level:3},{value:"Connectors",id:"connectors",level:2},{value:"Servo and Motor Outputs",id:"servo-and-motor-outputs",level:2},{value:"Cyclic Servos",id:"cyclic-servos",level:3},{value:"Tail servo / ESC",id:"tail-servo--esc",level:3},{value:"Main ESC",id:"main-esc",level:3},{value:"ESC telemetry / RPM",id:"esc-telemetry--rpm",level:3},{value:"Extension Ports",id:"extension-ports",level:2},{value:"UARTs",id:"uarts",level:3},{value:"Receiver",id:"receiver",level:3},{value:"DSM",id:"dsm",level:4},{value:"Compass",id:"compass",level:3},{value:"GPS",id:"gps",level:3},{value:"LED STRIP",id:"led-strip",level:3},{value:"Other Features",id:"other-features",level:2},{value:"LEDs",id:"leds",level:3},{value:"Boot/DFU button",id:"bootdfu-button",level:3},{value:"SWD",id:"swd",level:3},{value:"Power",id:"power",level:2},{value:"5V",id:"5v",level:3},{value:"VX (BEC power)",id:"vx-bec-power",level:3},{value:"ESD Protection",id:"esd-protection",level:2},{value:"Miscellaneous Notes",id:"miscellaneous-notes",level:2},{value:"TIM1 and TIM8",id:"tim1-and-tim8",level:3}];function c(e){const n={a:"a",del:"del",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"design-requirements",children:"Design Requirements"}),"\n",(0,i.jsx)(n.p,{children:"This page collects the generic hardware requirements for all Flight Controller designs for Rotorflight."}),"\n",(0,i.jsxs)(n.p,{children:["The actual Reference Designs for Rotorflight-2 can be found ",(0,i.jsx)(n.a,{href:"https://github.com/rotorflight/rotorflight/wiki/Rotorflight-FC-Reference-Design",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"For an FC to be fully supported by Rotorflight-2 (RF2), it must follow one of the Reference Designs."})}),"\n",(0,i.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,i.jsx)(n.p,{children:"Rotorflight is based on Betaflight, and thus has the same basic requirements for the hardware."}),"\n",(0,i.jsxs)(n.p,{children:["Please read the Design Guidelines for ",(0,i.jsx)(n.a,{href:"https://github.com/betaflight/betaflight/blob/4.4.0-RC5/docs/Manufacturer%20Design%20Guidelines.md",children:"Betaflight"}),"\nfirst."]}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(n.p,{children:"The following features and peripherals are mandatory:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gyroscope & Accelerometer"}),"\n",(0,i.jsx)(n.li,{children:"Barometer"}),"\n",(0,i.jsx)(n.li,{children:"Blackbox (flash chip or SD card)"}),"\n",(0,i.jsx)(n.li,{children:"Indicator LEDs (Power, GPIO)"}),"\n",(0,i.jsx)(n.li,{children:"DFU button"}),"\n",(0,i.jsx)(n.li,{children:"USB socket"}),"\n",(0,i.jsx)(n.li,{children:"Regulated +5V for external devices (RPM sensor, GPS, Compass, LED strips, etc.)"}),"\n",(0,i.jsx)(n.li,{children:"Voltage sensor (ADC) for Vx and +5V"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Optional peripherals and features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Voltage sensor (ADC) for main battery (Vbat)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"gyroscope--accelerometer",children:"Gyroscope & Accelerometer"}),"\n",(0,i.jsx)(n.p,{children:"The supported gyro&acc chips are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BMI270"}),"\n",(0,i.jsx)(n.li,{children:"ICM42688P"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.del,{children:"ICM20689"})," (supported but poor performance)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.del,{children:"ICM20602"})," (supported but poor performance)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Other models are not supported."}),"\n",(0,i.jsx)(n.h3,{id:"barometer",children:"Barometer"}),"\n",(0,i.jsx)(n.p,{children:"The supported barometer chips are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SPL06"}),"\n",(0,i.jsx)(n.li,{children:"DPS310"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.del,{children:"BMP280"})," (supported but poor performance)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.del,{children:"BMP388"})," (supported but poor performance)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Other barometer models - like BMP390 - will be supported in the future."}),"\n",(0,i.jsx)(n.h3,{id:"blackbox-flash",children:"Blackbox Flash"}),"\n",(0,i.jsx)(n.p,{children:"The minimum suggested flash size for the Blackbox is 1Gbit (128Mb x 8)."}),"\n",(0,i.jsx)(n.p,{children:"The supported SPI flash chips are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Winbond W25N01G"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.del,{children:"Winbond W25Q64"})," (supported but not large enough for RF use)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.del,{children:"Winbond W25Q128"})," (supported but not large enough for RF use)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.del,{children:"Winbond W25Q256"})," (supported but not large enough for RF use)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Larger flash chips - like W25N02 and W25N04 - will be supported in the future."}),"\n",(0,i.jsx)(n.h2,{id:"connectors",children:"Connectors"}),"\n",(0,i.jsx)(n.p,{children:'A helicopter Flight Controller typically have two kinds of connectors. The servo and motors are connected to standard 0.1" pin headers, with 6V-8.4V power on the center pin. The power is usually provided by a BEC in the ESC. The other connectors are usually UARTs or multi-function connectors, with 5V power. Most commonly these are JST type connectors (XH,PA,GH,etc).'}),"\n",(0,i.jsx)(n.p,{children:"It is also very useful to have the motor/servo headers on one end of the FC, and the other connectors on the other. This helps to remember that the other side has BEC (>6V) voltage, and the other side has 5V."}),"\n",(0,i.jsx)(n.p,{children:'The standard "JR" style servo plugs are thicker than 0.1", usually 2.65mm. If more than 4 headers are located side by side, an extra gap of 0.5mm is required after every 4x3 header block. Otherwise the servo plugs will not fit in properly.'}),"\n",(0,i.jsx)(n.h2,{id:"servo-and-motor-outputs",children:"Servo and Motor Outputs"}),"\n",(0,i.jsx)(n.h3,{id:"cyclic-servos",children:"Cyclic Servos"}),"\n",(0,i.jsx)(n.p,{children:"Three servos are required for cyclic. The reference designs also have a pin for an optional fourth cyclic servo, which can be a solder pad on the PCB."}),"\n",(0,i.jsxs)(n.p,{children:["The servo pins should be selected so that they are ",(0,i.jsx)(n.em,{children:"on the same timer"}),".\nDMA is not required for servos, but the pins should have it available for future use."]}),"\n",(0,i.jsx)(n.p,{children:"The servo header is a standard 0.1\" pin header. It's common to have the cyclic servos side-by-side, as a 3x3 header block."}),"\n",(0,i.jsx)(n.h3,{id:"tail-servo--esc",children:"Tail servo / ESC"}),"\n",(0,i.jsx)(n.p,{children:"The tail servo pin should be selected so that it is on a different timer than the cyclic servos. For ESC/motor use, DMA must also be available without conflicts. The pin and timer selection must allow DShot BitBang."}),"\n",(0,i.jsx)(n.h3,{id:"main-esc",children:"Main ESC"}),"\n",(0,i.jsx)(n.p,{children:"Main ESC/motor pin should be selected so that it is on a different timer than the tail motor/servo. The pin must have DMA available without conflicts. The pin and timer selection must allow DShot BitBang."}),"\n",(0,i.jsx)(n.h3,{id:"esc-telemetry--rpm",children:"ESC telemetry / RPM"}),"\n",(0,i.jsx)(n.p,{children:"The ESC telemetry pin can be an Rx on any UART."}),"\n",(0,i.jsx)(n.p,{children:"If a combined ESC telemetry and RPM input pin is preferred, then the pin should be selected so that it can act as a UART Rx, and a timer input, for example PA1 or PA3."}),"\n",(0,i.jsx)(n.p,{children:"The RPM input requires a free timer. The timer can't be shared with other functions."}),"\n",(0,i.jsx)(n.p,{children:"TIM2 and TIM5 can accommodate 4 RPM inputs, one on each channel. Other timers can accommodate only one RPM input.\nIt is preferred to use TIM2 or TIM5 for RPM inputs."}),"\n",(0,i.jsx)(n.p,{children:"The RPM inputs require over-voltage protection diodes. Any pin header that provides the servo power (VX) and can act as an RPM input, must have the protection diode on the signal pin. This is due to a shortcoming in a commonly used HobbyWing RPM sensor."}),"\n",(0,i.jsx)(n.h2,{id:"extension-ports",children:"Extension Ports"}),"\n",(0,i.jsx)(n.p,{children:"The extension ports are for any extra peripherals, including receivers."}),"\n",(0,i.jsx)(n.p,{children:"The ports are primarily for UARTs, but because of the STM32 flexibility, they can be configured for other functions too."}),"\n",(0,i.jsx)(n.p,{children:"Possible functions are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"UART"}),"\n",(0,i.jsx)(n.li,{children:"I2C"}),"\n",(0,i.jsx)(n.li,{children:"RPM input"}),"\n",(0,i.jsx)(n.li,{children:"LED strip"}),"\n",(0,i.jsx)(n.li,{children:"Extra PWM (servo) output"}),"\n",(0,i.jsx)(n.li,{children:"Extra DShot (motor) output"}),"\n",(0,i.jsx)(n.li,{children:"Camera Control"}),"\n",(0,i.jsx)(n.li,{children:"Voltage and current measurements (ADC)"}),"\n",(0,i.jsx)(n.li,{children:"RSSI input"}),"\n",(0,i.jsx)(n.li,{children:"External OSD"}),"\n",(0,i.jsx)(n.li,{children:"Video Tx Control (VTX)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The physical connector should be 4-pin JST-GH [GND, 5V, RX, TX], or other JST style polarised connector."}),"\n",(0,i.jsx)(n.h3,{id:"uarts",children:"UARTs"}),"\n",(0,i.jsx)(n.p,{children:"It is preferable to have as many UARTs available as possible."}),"\n",(0,i.jsx)(n.h3,{id:"receiver",children:"Receiver"}),"\n",(0,i.jsx)(n.p,{children:"Typically, any of the UART connectors can be used for connecting the receiver."}),"\n",(0,i.jsx)(n.p,{children:"If a dedicated receiver port is preferred, UART3/4 on PC10/PC11 is the best choice due to its flexibility."}),"\n",(0,i.jsx)(n.h4,{id:"dsm",children:"DSM"}),"\n",(0,i.jsx)(n.p,{children:"Spektrum DSM can't be connected to a UART socket, as it requires 3.3V.\nThe DSM socket is a JST-ZH with [3.3V GND DATA] pins."}),"\n",(0,i.jsx)(n.p,{children:"The options for connecting a DSM receiver are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Provide a standard DSM socket"}),"\n",(0,i.jsx)(n.li,{children:"Connect to a generic UART socket with 3.3V power (instead of 5V)"}),"\n",(0,i.jsx)(n.li,{children:"Connect to a generic UART socket with an adapter, converting 5V to 3.3V"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"compass",children:"Compass"}),"\n",(0,i.jsx)(n.p,{children:"An external compass connects to an I2C interface, which can be provided by one of the multi-function headers (UART/I2C/...)"}),"\n",(0,i.jsx)(n.p,{children:"Usually a compass is integrated into an external GPS unit."}),"\n",(0,i.jsx)(n.p,{children:"Note! The external I2C can't be shared with the internal barometer, as this would not allow using that pin header for anything else than I2C."}),"\n",(0,i.jsx)(n.h3,{id:"gps",children:"GPS"}),"\n",(0,i.jsx)(n.p,{children:"An external GPS connects to any of the UART (multi-function) headers."}),"\n",(0,i.jsx)(n.p,{children:"If a GPS specific header is preferred, a 6-pin socket with [GND,SDA,SCL,TX,RX,5V] can be added (Pixhawk compatible)."}),"\n",(0,i.jsx)(n.h3,{id:"led-strip",children:"LED STRIP"}),"\n",(0,i.jsx)(n.p,{children:"The WS2812B LED strip requires a GPIO pin with a timer and DMA capability."}),"\n",(0,i.jsx)(n.p,{children:"It can be provided on one of the multi-function header (shared with UART etc.)"}),"\n",(0,i.jsx)(n.h2,{id:"other-features",children:"Other Features"}),"\n",(0,i.jsx)(n.h3,{id:"leds",children:"LEDs"}),"\n",(0,i.jsx)(n.p,{children:"At least one power LED and one indicator LED (GPIO) are mandatory."}),"\n",(0,i.jsx)(n.p,{children:"Preferably, a two colour (green+red) indicator LED on two GPIO pins can be used."}),"\n",(0,i.jsx)(n.h3,{id:"bootdfu-button",children:"Boot/DFU button"}),"\n",(0,i.jsxs)(n.p,{children:["There ",(0,i.jsx)(n.em,{children:"must"})," be a bootloader DFU button on the PCB, accessible ",(0,i.jsx)(n.em,{children:"without"})," opening the FC case."]}),"\n",(0,i.jsx)(n.h3,{id:"swd",children:"SWD"}),"\n",(0,i.jsx)(n.p,{children:"The SWD pins PA13 and PA14 must be exposed on test pads on the PCB, along with the GND and +3.3V pads."}),"\n",(0,i.jsx)(n.h2,{id:"power",children:"Power"}),"\n",(0,i.jsx)(n.h3,{id:"5v",children:"5V"}),"\n",(0,i.jsx)(n.p,{children:"A 5V power must be provided for the external devices."}),"\n",(0,i.jsx)(n.p,{children:"The regulator should be able to provide at last 1A current, preferably 2A."}),"\n",(0,i.jsx)(n.h3,{id:"vx-bec-power",children:"VX (BEC power)"}),"\n",(0,i.jsx)(n.p,{children:"The system is powered from the VX Power bus, which can be provided by a BEC or a 2S LiPo battery."}),"\n",(0,i.jsx)(n.p,{children:"The VX power is fed into the FC via the ESC pin headers (Throttle, Telem, RPM)."}),"\n",(0,i.jsx)(n.p,{children:"Large ESCs usually have two or three pairs of BEC power wires, for increasing the current capacity. The FC should have input pins for all of them."}),"\n",(0,i.jsx)(n.p,{children:"For very large helicopters, it may be reasonable to have a separate connector (XT30) for the VX power input."}),"\n",(0,i.jsx)(n.h2,{id:"esd-protection",children:"ESD Protection"}),"\n",(0,i.jsxs)(n.p,{children:["The STM32 GPIO pins are ",(0,i.jsx)(n.em,{children:"NOT"})," protected for over-voltage (details in ST Application Notes).\nThus, any pins exposed on external connectors should be protected by TVS diodes and current limiting resistors."]}),"\n",(0,i.jsx)(n.p,{children:"The signal pins on the sockets with servo power (Vx) should have 470ohm resistors."}),"\n",(0,i.jsx)(n.p,{children:"The signal pins on the expansion sockets with +5V power should have 22ohm resistors."}),"\n",(0,i.jsx)(n.p,{children:"The higher resistance (470ohm) on the servo/ESC pins provides protection against accidental polarity reversal (unplugging the ESC/BEC plug wrong way around)."}),"\n",(0,i.jsx)(n.p,{children:"The lower resistance (22ohm) on the expansion sockets is required for the various protocols used.\nIt is still offering some over-current protection, while not interfering with the signals."}),"\n",(0,i.jsx)(n.p,{children:"The easiest way to implement the protection is to use an ESD protection IC with integrated steering and TVS diodes:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"ESD Array",src:r(32056).A+"",width:"2560",height:"1920"})}),"\n",(0,i.jsx)(n.p,{children:"Or using discrete components:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"ESD Diodes",src:r(57651).A+"",width:"2560",height:"1920"})}),"\n",(0,i.jsx)(n.h2,{id:"miscellaneous-notes",children:"Miscellaneous Notes"}),"\n",(0,i.jsx)(n.h3,{id:"tim1-and-tim8",children:"TIM1 and TIM8"}),"\n",(0,i.jsx)(n.p,{children:'DShot BitBang requires one "pacing" timer, either TIM1 or TIM8. In the design, one of them must be reserved for BitBang use.'}),"\n",(0,i.jsx)(n.p,{children:'One "pacing" timer channel and one DMA channel is required for each GPIO port (PA,PB,PC,PD) with motor pins. It is preferred to have all motor pins located on the same GPIO port, thus using only one timer and DMA channel.'})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},32056:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/ESD-Array-a07888b045e0d6ab9bb09af17af38b93.jpeg"},57651:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/ESD-Diodes-82c12788a9df8e735d57e182f737efad.jpeg"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var i=r(96540);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);
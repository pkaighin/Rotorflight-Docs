"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[5975],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(n),k=r,h=s["".concat(d,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(h,i(i({ref:e},u),{},{components:n})):a.createElement(h,i({ref:e},u))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7362:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:130},i="LED Strip",o={unversionedId:"Tutorial - Setup/LED Strip",id:"Tutorial - Setup/LED Strip",title:"LED Strip",description:"Rotorflight supports the use of addressable LED strips.  Addressable LED strips allow each LED in the strip to",source:"@site/docs/Tutorial - Setup/LED Strip.md",sourceDirName:"Tutorial - Setup",slug:"/Tutorial - Setup/LED Strip",permalink:"/docs/Tutorial - Setup/LED Strip",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial - Setup/LED Strip.md",tags:[],version:"current",sidebarPosition:130,frontMatter:{sidebar_position:130},sidebar:"tutorialSidebar",previous:{title:"RPM Filters",permalink:"/docs/Tutorial - Setup/RPM Filters"},next:{title:"Modes",permalink:"/docs/Tutorial - Setup/Modes"}},d={},p=[{value:"Supported hardware",id:"supported-hardware",level:2},{value:"Tested Hardware",id:"tested-hardware",level:3},{value:"Connections",id:"connections",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Modes",id:"modes",level:3},{value:"Warning",id:"warning",level:4},{value:"Flight Mode &amp; Orientation",id:"flight-mode--orientation",level:4},{value:"Indicator",id:"indicator",level:4},{value:"Armed state",id:"armed-state",level:4},{value:"Thrust state",id:"thrust-state",level:4},{value:"Thrust ring state",id:"thrust-ring-state",level:4},{value:"Solid Color",id:"solid-color",level:4},{value:"Colors",id:"colors",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:p},s="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"led-strip"},"LED Strip"),(0,r.kt)("p",null,"Rotorflight supports the use of addressable LED strips.  Addressable LED strips allow each LED in the strip to\nbe programmed with a unique and independent color.  This is far more advanced than the normal RGB strips which\nrequire that all the LEDs in the strip show the same color."),(0,r.kt)("p",null,"Addressable LED strips can be used to show information from the flight controller system, the current implementation\nsupports the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Up to 32 LEDs."),(0,r.kt)("li",{parentName:"ul"},"Indicators showing pitch/roll stick positions."),(0,r.kt)("li",{parentName:"ul"},"Heading/Orientation lights."),(0,r.kt)("li",{parentName:"ul"},"Flight mode specific color schemes."),(0,r.kt)("li",{parentName:"ul"},"Low battery warning."),(0,r.kt)("li",{parentName:"ul"},"AUX operated on/off switch")),(0,r.kt)("p",null,"The function and orientation configuration is fixed for now but later it should be able to be set via the UI or CLI.."),(0,r.kt)("h2",{id:"supported-hardware"},"Supported hardware"),(0,r.kt)("p",null,"Only strips of 32 WS2811/WS2812 LEDs are supported currently.  If the strip is longer than 32 LEDs it does not matter,\nbut only the first 32 are used."),(0,r.kt)("p",null,"WS2812 LEDs require an 800khz signal and precise timings and thus requires the use of a dedicated hardware timer."),(0,r.kt)("p",null,"Note: Not all WS2812 ICs use the same timings, some batches use different timings.  "),(0,r.kt)("p",null,"It could be possible to be able to specify the timings required via CLI if users request it."),(0,r.kt)("h3",{id:"tested-hardware"},"Tested Hardware"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.adafruit.com/products/2226"},"Adafruit NeoPixel Jewel 7")," (preliminary testing)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Measured current consumption in all white mode ~ 350 mA."),(0,r.kt)("li",{parentName:"ul"},"Fits well under motors on mini 250 quads."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.adafruit.com/products/1426"},"Adafruit NeoPixel Stick")," (works well)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Measured current consumption in all white mode ~ 350 mA.")))),(0,r.kt)("h2",{id:"connections"},"Connections"),(0,r.kt)("p",null,"WS2812 LED strips generally require a single data line, 5V and GND."),(0,r.kt)("p",null,"WS2812 LEDs on full brightness can consume quite a bit of current.  It is recommended to verify the current draw and ensure your 5V power source can cope with the load.\nuses.  e.g. ESC1/BEC1 -> FC, ESC2/BEC2 -> LED strip.   It's also possible to power one half of the strip from one BEC and the other half"),(0,r.kt)("p",null,"LED Strip pin should be on a separate timer."),(0,r.kt)("p",null,"If you have LEDs that are intermittent, flicker or show the wrong colors then drop the VIN to less than 4.7v, e.g. by using an inline\ndiode on the VIN to the LED strip. The problem occurs because of the difference in voltage between the data signal and the power\nsignal.  The WS2811 LED's require the data signal (Din) to be between 0.3 ",(0,r.kt)("em",{parentName:"p"}," Vin (Max) and 0.7 ")," VIN (Min) to register valid logic\nlow/high signals.  The LED pin on the CPU will always be between 0v to ~3.3v, so the Vin should be 4.7v (3.3v / 0.7 = 4.71v).\nSome LEDs are more tolerant of this than others."),(0,r.kt)("p",null,"The datasheet can be found here: ",(0,r.kt)("a",{parentName:"p",href:"http://www.adafruit.com/datasheets/WS2812.pdf"},"http://www.adafruit.com/datasheets/WS2812.pdf")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The led strip feature can be configured via the GUI"),(0,r.kt)("p",null,"GUI:\nEnable the Led Strip feature via the GUI under setup."),(0,r.kt)("p",null,"Configure the leds from the Led Strip tab in the Rotorflight GUI.\nFirst setup how the led's are laid out so that you can visualize it later as you configure and so the flight controller knows how many led's there are available."),(0,r.kt)("p",null,"There is a step by step guide on how to use the GUI to configure the Led Strip feature using the GUI ",(0,r.kt)("a",{parentName:"p",href:"http://blog.oscarliang.net/setup-rgb-led-cleanflight/"},"http://blog.oscarliang.net/setup-rgb-led-cleanflight/")," which was published early 2015 by Oscar Liang which may or may not be up-to-date by the time you read this."),(0,r.kt)("p",null,"CLI:\nEnable the ",(0,r.kt)("inlineCode",{parentName:"p"},"LED_STRIP")," feature via the cli:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"feature LED_STRIP\n")),(0,r.kt)("p",null,"If you enable LED_STRIP feature and the feature is turned off again after a reboot then check your config does not conflict with other features, as above."),(0,r.kt)("p",null,"Configure the LEDs using the ",(0,r.kt)("inlineCode",{parentName:"p"},"led")," command."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"led")," command takes either zero or two arguments - an zero-based led number and a sequence which indicates pair of coordinates, direction flags and mode flags and a color."),(0,r.kt)("p",null,"If used with zero arguments it prints out the led configuration which can be copied for future reference."),(0,r.kt)("p",null,"Each led is configured using the following template: ",(0,r.kt)("inlineCode",{parentName:"p"},"x,y:ddd:mmm:cc")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," are grid coordinates of a 0 based 16x16 grid, north west is 0,0, south east is 15,15\n",(0,r.kt)("inlineCode",{parentName:"p"},"ddd")," specifies the directions, since an led can face in any direction it can have multiple directions.  Directions are:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," - North\n",(0,r.kt)("inlineCode",{parentName:"p"},"E")," - East\n",(0,r.kt)("inlineCode",{parentName:"p"},"S")," - South\n",(0,r.kt)("inlineCode",{parentName:"p"},"W")," - West\n",(0,r.kt)("inlineCode",{parentName:"p"},"U")," - Up\n",(0,r.kt)("inlineCode",{parentName:"p"},"D")," - Down"),(0,r.kt)("p",null,"For instance, an LED that faces South-east at a 45 degree downwards angle could be configured as ",(0,r.kt)("inlineCode",{parentName:"p"},"SED"),"."),(0,r.kt)("p",null,"Note: It is perfectly possible to configure an LED to have all directions ",(0,r.kt)("inlineCode",{parentName:"p"},"NESWUD")," but probably doesn't make sense."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mmm")," specifies the modes that should be applied an LED.  Modes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"W")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"W"),"warnings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"F"),"light mode & Orientation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"I"),"ndicator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"A")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"A"),"rmed state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"T")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"T"),"hrust state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"R")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"R"),"ing thrust state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"C")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"C"),"olor.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cc")," specifies the color number (0 based index)."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"led 0 0,15:SD:IAW:0\nled 1 15,0:ND:IAW:0\nled 2 0,0:ND:IAW:0\nled 3 0,15:SD:IAW:0\nled 4 7,7::C:1\nled 5 8,8::C:2\n")),(0,r.kt)("p",null,"To erase an led, and to mark the end of the chain, use ",(0,r.kt)("inlineCode",{parentName:"p"},"0,0::")," as the second argument, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"led 4 0,0:::\n")),(0,r.kt)("p",null,"It is best to erase all LEDs that you do not have connected."),(0,r.kt)("h3",{id:"modes"},"Modes"),(0,r.kt)("h4",{id:"warning"},"Warning"),(0,r.kt)("p",null,"This mode simply uses the LEDs to flash when warnings occur."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Warning"),(0,r.kt)("th",{parentName:"tr",align:null},"LED Pattern"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Arm-lock enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"flash between green and off"),(0,r.kt)("td",{parentName:"tr",align:null},"occurs calibration or when unarmed and the aircraft is tilted too much")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Low Battery"),(0,r.kt)("td",{parentName:"tr",align:null},"flash red and off"),(0,r.kt)("td",{parentName:"tr",align:null},"battery monitoring must be enabled.  May trigger temporarily under high-throttle due to voltage drop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Failsafe"),(0,r.kt)("td",{parentName:"tr",align:null},"flash between light blue and yellow"),(0,r.kt)("td",{parentName:"tr",align:null},"Failsafe must be enabled")))),(0,r.kt)("p",null,"Flash patterns appear in order, so that it's clear which warnings are enabled."),(0,r.kt)("h4",{id:"flight-mode--orientation"},"Flight Mode & Orientation"),(0,r.kt)("p",null,"This mode shows the flight mode and orientation."),(0,r.kt)("p",null,"When flight modes are active then the LEDs are updated to show different colors depending on the mode, placement on the grid and direction."),(0,r.kt)("p",null,"LEDs are set in a specific order:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LEDs that marked as facing up or down."),(0,r.kt)("li",{parentName:"ul"},"LEDs that marked as facing west or east AND are on the west or east side of the grid."),(0,r.kt)("li",{parentName:"ul"},"LEDs that marked as facing north or south AND are on the north or south side of the grid.")),(0,r.kt)("p",null,"That is, south facing LEDs have priority."),(0,r.kt)("p",null,"The mapping between modes led placement and colors is currently fixed and cannot be changed."),(0,r.kt)("h4",{id:"indicator"},"Indicator"),(0,r.kt)("p",null,"This mode flashes LEDs that correspond to roll and pitch stick positions.  i.e.  they indicate the direction the craft is going to turn."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Direction"),(0,r.kt)("th",{parentName:"tr",align:null},"LED Color"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Orientation"),(0,r.kt)("td",{parentName:"tr",align:null},"North"),(0,r.kt)("td",{parentName:"tr",align:null},"WHITE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Orientation"),(0,r.kt)("td",{parentName:"tr",align:null},"East"),(0,r.kt)("td",{parentName:"tr",align:null},"DARK VIOLET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Orientation"),(0,r.kt)("td",{parentName:"tr",align:null},"South"),(0,r.kt)("td",{parentName:"tr",align:null},"RED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Orientation"),(0,r.kt)("td",{parentName:"tr",align:null},"West"),(0,r.kt)("td",{parentName:"tr",align:null},"DEEP PINK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Orientation"),(0,r.kt)("td",{parentName:"tr",align:null},"Up"),(0,r.kt)("td",{parentName:"tr",align:null},"BLUE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Orientation"),(0,r.kt)("td",{parentName:"tr",align:null},"Down"),(0,r.kt)("td",{parentName:"tr",align:null},"ORANGE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Head Free"),(0,r.kt)("td",{parentName:"tr",align:null},"North"),(0,r.kt)("td",{parentName:"tr",align:null},"LIME GREEN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Head Free"),(0,r.kt)("td",{parentName:"tr",align:null},"East"),(0,r.kt)("td",{parentName:"tr",align:null},"DARK VIOLET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Head Free"),(0,r.kt)("td",{parentName:"tr",align:null},"South"),(0,r.kt)("td",{parentName:"tr",align:null},"ORANGE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Head Free"),(0,r.kt)("td",{parentName:"tr",align:null},"West"),(0,r.kt)("td",{parentName:"tr",align:null},"DEEP PINK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Head Free"),(0,r.kt)("td",{parentName:"tr",align:null},"Up"),(0,r.kt)("td",{parentName:"tr",align:null},"BLUE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Head Free"),(0,r.kt)("td",{parentName:"tr",align:null},"Down"),(0,r.kt)("td",{parentName:"tr",align:null},"ORANGE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Horizon"),(0,r.kt)("td",{parentName:"tr",align:null},"North"),(0,r.kt)("td",{parentName:"tr",align:null},"BLUE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Horizon"),(0,r.kt)("td",{parentName:"tr",align:null},"East"),(0,r.kt)("td",{parentName:"tr",align:null},"DARK VIOLET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Horizon"),(0,r.kt)("td",{parentName:"tr",align:null},"South"),(0,r.kt)("td",{parentName:"tr",align:null},"YELLOW")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Horizon"),(0,r.kt)("td",{parentName:"tr",align:null},"West"),(0,r.kt)("td",{parentName:"tr",align:null},"DEEP PINK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Horizon"),(0,r.kt)("td",{parentName:"tr",align:null},"Up"),(0,r.kt)("td",{parentName:"tr",align:null},"BLUE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Horizon"),(0,r.kt)("td",{parentName:"tr",align:null},"Down"),(0,r.kt)("td",{parentName:"tr",align:null},"ORANGE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Angle"),(0,r.kt)("td",{parentName:"tr",align:null},"North"),(0,r.kt)("td",{parentName:"tr",align:null},"CYAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Angle"),(0,r.kt)("td",{parentName:"tr",align:null},"East"),(0,r.kt)("td",{parentName:"tr",align:null},"DARK VIOLET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Angle"),(0,r.kt)("td",{parentName:"tr",align:null},"South"),(0,r.kt)("td",{parentName:"tr",align:null},"YELLOW")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Angle"),(0,r.kt)("td",{parentName:"tr",align:null},"West"),(0,r.kt)("td",{parentName:"tr",align:null},"DEEP PINK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Angle"),(0,r.kt)("td",{parentName:"tr",align:null},"Up"),(0,r.kt)("td",{parentName:"tr",align:null},"BLUE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Angle"),(0,r.kt)("td",{parentName:"tr",align:null},"Down"),(0,r.kt)("td",{parentName:"tr",align:null},"ORANGE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mag"),(0,r.kt)("td",{parentName:"tr",align:null},"North"),(0,r.kt)("td",{parentName:"tr",align:null},"MINT GREEN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mag"),(0,r.kt)("td",{parentName:"tr",align:null},"East"),(0,r.kt)("td",{parentName:"tr",align:null},"DARK VIOLET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mag"),(0,r.kt)("td",{parentName:"tr",align:null},"South"),(0,r.kt)("td",{parentName:"tr",align:null},"ORANGE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mag"),(0,r.kt)("td",{parentName:"tr",align:null},"West"),(0,r.kt)("td",{parentName:"tr",align:null},"DEEP PINK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mag"),(0,r.kt)("td",{parentName:"tr",align:null},"Up"),(0,r.kt)("td",{parentName:"tr",align:null},"BLUE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mag"),(0,r.kt)("td",{parentName:"tr",align:null},"Down"),(0,r.kt)("td",{parentName:"tr",align:null},"ORANGE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Baro"),(0,r.kt)("td",{parentName:"tr",align:null},"North"),(0,r.kt)("td",{parentName:"tr",align:null},"LIGHT BLUE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Baro"),(0,r.kt)("td",{parentName:"tr",align:null},"East"),(0,r.kt)("td",{parentName:"tr",align:null},"DARK VIOLET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Baro"),(0,r.kt)("td",{parentName:"tr",align:null},"South"),(0,r.kt)("td",{parentName:"tr",align:null},"RED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Baro"),(0,r.kt)("td",{parentName:"tr",align:null},"West"),(0,r.kt)("td",{parentName:"tr",align:null},"DEEP PINK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Baro"),(0,r.kt)("td",{parentName:"tr",align:null},"Up"),(0,r.kt)("td",{parentName:"tr",align:null},"BLUE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Baro"),(0,r.kt)("td",{parentName:"tr",align:null},"Down"),(0,r.kt)("td",{parentName:"tr",align:null},"ORANGE")))),(0,r.kt)("h4",{id:"armed-state"},"Armed state"),(0,r.kt)("p",null,"This mode toggles LEDs between green and blue when disarmed and armed, respectively."),(0,r.kt)("p",null,"Note: Armed State cannot be used with Flight Mode."),(0,r.kt)("h4",{id:"thrust-state"},"Thrust state"),(0,r.kt)("p",null,"This mode fades the LED current LED color to the previous/next color in the HSB color space depending on throttle stick position.  When the\nthrottle is in the middle position the color is unaffected, thus it can be mixed with orientation colors to indicate orientation and throttle at\nthe same time.  Thrust should normally be combined with Color or Mode/Orientation."),(0,r.kt)("h4",{id:"thrust-ring-state"},"Thrust ring state"),(0,r.kt)("p",null,"This mode is allows you to use a 12, 16 or 24 leds ring (e.g. NeoPixel ring) for an afterburner effect. When armed the leds use the following sequences: 2 On, 4 Off, 2 On, 4 Off, and so on.  The light pattern rotates clockwise as throttle increases. "),(0,r.kt)("p",null,"A better effect is acheived when LEDs configured for thrust ring have no other functions."),(0,r.kt)("p",null,"LED direction and X/Y positions are irrelevant for thrust ring LED state.  The order of the LEDs that have the state determines how the LED behaves."),(0,r.kt)("p",null,"Each LED of the ring can be a different color. The color can be selected between the 16 colors availables."),(0,r.kt)("p",null,"For example, led 0 is set as a ",(0,r.kt)("inlineCode",{parentName:"p"},"R"),"ing thrust state led in color 13 as follow. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"led 0 2,2::R:13\n")),(0,r.kt)("p",null,"LED strips and rings can be combined."),(0,r.kt)("h4",{id:"solid-color"},"Solid Color"),(0,r.kt)("p",null,"The mode allows you to set an LED to be permanently on and set to a specific color."),(0,r.kt)("p",null,"x,y position and directions are ignored when using this mode."),(0,r.kt)("p",null,"Other modes will override or combine with the color mode."),(0,r.kt)("p",null,"For example, to set led 0 to always use color 10 you would issue this command. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"led 0 0,0::C:10\n")),(0,r.kt)("h3",{id:"colors"},"Colors"),(0,r.kt)("p",null,"Colors can be configured using the cli ",(0,r.kt)("inlineCode",{parentName:"p"},"color")," command."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"color")," command takes either zero or two arguments - an zero-based color number and a sequence which indicates pair of hue, saturation and value (HSV)."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/HSL_and_HSV"},"http://en.wikipedia.org/wiki/HSL_and_HSV")),(0,r.kt)("p",null,"If used with zero arguments it prints out the color configuration which can be copied for future reference."),(0,r.kt)("p",null,"The default color configuration is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Index"),(0,r.kt)("th",{parentName:"tr",align:null},"Color"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"black")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"white")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"red")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"orange")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"yellow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"lime green")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"green")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"mint green")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"cyan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"light blue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"blue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"dark violet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"magenta")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"deep pink")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"black")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"black")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"color 0 0,0,0\ncolor 1 0,255,255\ncolor 2 0,0,255\ncolor 3 30,0,255\ncolor 4 60,0,255\ncolor 5 90,0,255\ncolor 6 120,0,255\ncolor 7 150,0,255\ncolor 8 180,0,255\ncolor 9 210,0,255\ncolor 10 240,0,255\ncolor 11 270,0,255\ncolor 12 300,0,255\ncolor 13 330,0,255\ncolor 14 0,0,0\ncolor 15 0,0,0\n")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"On initial power up the LEDs on the strip will be set to WHITE.  This means you can attach a current meter to verify\nthe current draw if your measurement equipment is fast enough.  Most 5050 LEDs will draw 0.3 Watts a piece.\nThis also means that you can make sure that each R,G and B LED in each LED module on the strip is also functioning."),(0,r.kt)("p",null,"After a short delay the LEDs will show the unarmed color sequence and or low-battery warning sequence."),(0,r.kt)("p",null,"Also check that the feature ",(0,r.kt)("inlineCode",{parentName:"p"},"LED_STRIP")," was correctly enabled and that it does not conflict with other features, as above."))}m.isMDXComponent=!0}}]);
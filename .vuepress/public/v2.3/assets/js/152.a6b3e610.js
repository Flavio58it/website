(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{457:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),e("p",[t._v("The Velbus binding integrates with a "),e("a",{attrs:{href:"https://www.velbus.eu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Velbus"),e("OutboundLink")],1),t._v(" system through a Velbus configuration module (VMB1USB or VMB1RS).")]),e("p",[t._v("The binding has been tested with a USB configuration module for universal mounting (VMB1USB).")]),e("p",[t._v("The binding exposes basic actions from the Velbus System that can be triggered from the smartphone/tablet interface, as defined by the Velbus Protocol info sheets.")]),e("p",[t._v("Supported item types are switches, dimmers and rollershutters.\nPushbutton, temperature sensors and input module states are retrieved and made available in the binding.")]),t._m(1),e("p",[t._v('A Velbus configuration module (e.g. VMB1USB) is required as a "bridge" for accessing any other Velbus devices.')]),e("p",[t._v("The supported Velbus devices are:")]),t._m(2),e("p",[t._v("The type of a specific device can be found in the configuration section for things in the Paper UI. It is part of the unique thing id which could look like:")]),t._m(3),t._m(4),t._m(5),e("p",[t._v("The Velbus bridge cannot be discovered automatically. It has to be added manually by defining the serial port of the Velbus Configuration module.")]),e("p",[t._v("Once the bridge has been added as a thing, a manual scan can be launched to discover all other supported Velbus devices on the bus. These devices will be available in the inbox. The discovery scan will also retrieve the channel names of the Velbus devices.")]),t._m(6),t._m(7),e("p",[t._v("In the things file, this looks e.g. like")]),t._m(8),e("p",[t._v("For the other Velbus devices, the thing configuration has the following syntax:")]),t._m(9),e("p",[t._v("or nested in the bridge configuration:")]),t._m(10),e("p",[t._v("The following thing types are valid for configuration:")]),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),e("p",[t._v(".things:")]),t._m(31),e("p",[t._v(".items:")]),t._m(32),e("p",[t._v(".sitemap:")]),t._m(33),e("p",[t._v("Example trigger rule:")]),t._m(34),e("DocPreviousVersions"),e("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"velbus-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#velbus-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Velbus Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("vmb1bls, vmb1dm, vmb1led, vmb1ry, vmb1ryno, vmb1rynos, vmb2ble, vmb2pbn, vmb4dc, vmb4ry, vmb4ryld, vmb4ryno, vmb6in, vmb6pbn, vmb7in, vmb8ir, vmb8pb, vmb8pbu, vmbdme, vmbdmi, vmbdmir, vmbgp1, vmbgp2, vmbgp4, vmbgp4pir, vmbgpo, vmbgpod, vmbpirc, vmbpirm, vmbpiro\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("velbus:vmb4ryld:0424e5d2:01:CH1\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The thing type is the second string behind the first colon and in this example it is "),s("strong",[this._v("vmb4ryld")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("The Velbus bridge needs to be added first in the things file or through Paper UI.\nIt is necessary to specify the serial port device used for communication.\nOn Linux systems, this will usually be either "),e("code",[t._v("/dev/ttyS0")]),t._v(", "),e("code",[t._v("/dev/ttyUSB0")]),t._v(" or "),e("code",[t._v("/dev/ttyACM0")]),t._v(" (or a higher  number than "),e("code",[t._v("0")]),t._v(" if multiple devices are present).\nOn Windows it will be "),e("code",[t._v("COM1")]),t._v(", "),e("code",[t._v("COM2")]),t._v(", etc.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("velbus"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bridge"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" port"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"COM1"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("velbus"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")])]),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("thing "),e("span",{attrs:{class:"token class-name"}},[t._v("type")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("bridgeId"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("thingId"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Label"')]),t._v(" @ "),e("span",{attrs:{class:"token string"}},[t._v('"Location"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CH1"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"Kitchen Light"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CH2"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"Living Light"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("thing "),e("span",{attrs:{class:"token class-name"}},[t._v("type")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),e("span",{attrs:{class:"token function"}},[t._v(" <thingId>")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Label"')]),t._v(" @ "),e("span",{attrs:{class:"token string"}},[t._v('"Location"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CH1"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"Kitchen Light"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CH2"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"Living Light"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("vmb1bls, vmb1dm, vmb1led, vmb1ry, vmb1ryno, vmb1rynos, vmb2ble, vmb2pbn, vmb4dc, vmb4ry, vmb4ryld, vmb4ryno, vmb6in, vmb6pbn, vmb7in, vmb8ir, vmb8pb, vmb8pbu, vmbdme, vmbdmi, vmbdmir, vmbgp1, vmbgp2, vmbgp4, vmbgp4pir, vmbgpo, vmbgpod, vmbpirc, vmbpirm, vmbpiro\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("thingId")]),this._v(" is the hexadecimal Velbus address of the thing.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v('"Label"')]),this._v(" is an optional label for the thing.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v('@ "Location"')]),this._v(" is optional, and represents the location of the thing.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v('[CHx="..."]')]),this._v(" is optional, and represents the name of channel x, e.g. CH1 specifies the name of channel 1.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For thing type "),s("code",[this._v("vmb1bls")]),this._v(" the supported channels is "),s("code",[this._v("CH1")]),this._v(". UpDown, StopMove and Percent command types are supported.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("For thing types "),e("code",[t._v("vmb1dm")]),t._v(", "),e("code",[t._v("vmb1led")]),t._v(", "),e("code",[t._v("vmbdme")]),t._v(", "),e("code",[t._v("vmbdmi")]),t._v(" and "),e("code",[t._v("vmbdmir")]),t._v(" the supported channel is "),e("code",[t._v("CH1")]),t._v(".\nOnOff and Percent command types are supported.\nSending an ON command will switch the dimmer to the value stored when last turning the dimmer off.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("For thing types "),e("code",[t._v("vmb1ryno")]),t._v(", "),e("code",[t._v("vmb1rynos")]),t._v(", "),e("code",[t._v("vmb4ryld")]),t._v(" and "),e("code",[t._v("vmb4ryno")]),t._v(" 5 channels are available "),e("code",[t._v("CH1")]),t._v(" ... "),e("code",[t._v("CH5")]),t._v(".\nOnOff command types are supported.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For thing type "),s("code",[this._v("vmb2ble")]),this._v(" the supported channels are "),s("code",[this._v("CH1")]),this._v(" and "),s("code",[this._v("CH2")]),this._v(". UpDown, StopMove and Percent command types are supported.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Thing types "),e("code",[t._v("vmb2pbn")]),t._v(", "),e("code",[t._v("vmb6pbn")]),t._v(", "),e("code",[t._v("vmb7in")]),t._v(", "),e("code",[t._v("vmb8ir")]),t._v(", "),e("code",[t._v("vmb8pb")]),t._v(" and "),e("code",[t._v("vmb8pbu")]),t._v(" have 8 trigger channels "),e("code",[t._v("CH1")]),t._v(" ... "),e("code",[t._v("CH8")]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For thing type "),s("code",[this._v("vmb4dc")]),this._v(" 4 channels are available "),s("code",[this._v("CH1")]),this._v(" ... "),s("code",[this._v("CH4")]),this._v(".\nOnOff and Percent command types are supported.\nSending an ON command will switch the dimmer to the value stored when last turning the dimmer off.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For thing type "),s("code",[this._v("vmb4ry")]),this._v(" 4 channels are available "),s("code",[this._v("CH1")]),this._v(" ... "),s("code",[this._v("CH4")]),this._v(".\nOnOff command types are supported.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For thing type "),s("code",[this._v("vmb4dc")]),this._v(" the supported channels are "),s("code",[this._v("CH1")]),this._v(" ... "),s("code",[this._v("CH4")]),this._v(".\nOnOff and Percent command types are supported.\nSending an ON command will switch the dimmer to the value stored when last turning the dimmer off.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Thing type "),s("code",[this._v("vmb6in")]),this._v("has 6 trigger channels "),s("code",[this._v("CH1")]),this._v(" ... "),s("code",[this._v("CH6")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Thing types "),e("code",[t._v("vmbgp1")]),t._v(", "),e("code",[t._v("vmbgp2")]),t._v(", "),e("code",[t._v("vmbgp4")]),t._v(", "),e("code",[t._v("vmbgp4pir")]),t._v(" and "),e("code",[t._v("vmbpiro")]),t._v(" have 8 trigger channels "),e("code",[t._v("CH1")]),t._v(" ... "),e("code",[t._v("CH8")]),t._v(" and one temperature channel "),e("code",[t._v("CH9")]),t._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Thing types "),e("code",[t._v("vmbgpo")]),t._v(" and "),e("code",[t._v("vmbgpod")]),t._v(" have 32 trigger channels "),e("code",[t._v("CH1")]),t._v(" ... "),e("code",[t._v("CH32")]),t._v(" and one temperature channel "),e("code",[t._v("CH33")]),t._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Thing types "),e("code",[t._v("vmbpirc")]),t._v(" and "),e("code",[t._v("vmbpirm")]),t._v(" have 7 trigger channels "),e("code",[t._v("CH1")]),t._v(" ... "),e("code",[t._v("CH7")]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The trigger channels can be used as a trigger to rules. The event message can be "),s("code",[this._v("PRESSED")]),this._v(", "),s("code",[this._v("RELEASED")]),this._v("or "),s("code",[this._v("LONG_PRESSED")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"full-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("velbus"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bridge"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" port"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"COM1"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vmb2ble     "),e("span",{attrs:{class:"token number"}},[t._v("01")]),t._v("\n    vmb2pbn     "),e("span",{attrs:{class:"token number"}},[t._v("02")]),t._v("\n    vmb6pbn     "),e("span",{attrs:{class:"token number"}},[t._v("03")]),t._v("\n    vmb8pbu     "),e("span",{attrs:{class:"token number"}},[t._v("04")]),t._v("\n    vmb7in      "),e("span",{attrs:{class:"token number"}},[t._v("05")]),t._v("\n    vmb4ryld    "),e("span",{attrs:{class:"token number"}},[t._v("06")]),t._v("\n    vmb4dc      "),e("span",{attrs:{class:"token number"}},[t._v("07")]),t._v("\n    vmbgp1      "),e("span",{attrs:{class:"token number"}},[t._v("08")]),t._v("\n    vmbgp2      "),e("span",{attrs:{class:"token number"}},[t._v("09")]),t._v("\n    vmbgp4      "),e("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("A\n    vmbgp4pir   "),e("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("B\n    vmbgpo      "),e("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("C\n    vmbgpod     "),e("span",{attrs:{class:"token number"}},[t._v("0D")]),t._v("\n    vmbpiro     "),e("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("E\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("LivingRoom")]),t._v("           "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"velbus:vmb4ryld:1:06:CH1"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                # "),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("for")]),t._v(" onOff type "),e("span",{attrs:{class:"token class-name"}},[t._v("action")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("TVRoom")]),t._v("               "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"velbus:vmb4dc:1:07:CH2"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                  # Changing brightness dimmer "),e("span",{attrs:{class:"token class-name"}},[t._v("type")]),t._v(" action\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Rollershutter")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Kitchen")]),t._v("       "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"velbus:vmb2ble:1:01"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                     # Controlling rollershutter "),e("span",{attrs:{class:"token class-name"}},[t._v("or")]),t._v(" blind type "),e("span",{attrs:{class:"token class-name"}},[t._v("action")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Temperature_LivingRoom")]),t._v("   "),e("span",{attrs:{class:"token string"}},[t._v('"Temperature [%.1f °C]"')]),t._v("    "),e("span",{attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v(" channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"velbus:vmbgp1:1:08:CH09"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Temperature_Corridor")]),t._v("   "),e("span",{attrs:{class:"token string"}},[t._v('"Temperature [%.1f °C]"')]),t._v("    "),e("span",{attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v(" channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"velbus:vmbgpo:1:0C:CH33"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Temperature_Outside")]),t._v("   "),e("span",{attrs:{class:"token string"}},[t._v('"Temperature [%.1f °C]"')]),t._v("    "),e("span",{attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v(" channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"velbus:vmbpiro:1:0E:CH09"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("item")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LivingRoom\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Slider")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("item")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("TVRoom\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("item")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("TVRoom          # allows switching "),e("span",{attrs:{class:"token class-name"}},[t._v("dimmer")]),t._v(" "),e("span",{attrs:{class:"token constant"}},[t._v("item")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("off")]),t._v(" or on\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Rollershutter")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("item")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Kitchen\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rules"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"example trigger rule"')]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("Channel")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'velbus:vmb7in:1:05:CH5'")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("triggered")]),t._v(" PRESSED\n"),e("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" message "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" receivedEvent"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("getEvent")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token function"}},[t._v("logInfo")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v('"velbusTriggerExample"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Message: {}"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);
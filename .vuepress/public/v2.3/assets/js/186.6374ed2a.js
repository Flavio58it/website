(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{414:function(t,e,s){"use strict";s.r(e);var i=s(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("AddonLogo"),s("p",[t._v("This binding integrates the Silvercrest Wifi Socket SWS-A1 sold by Lidl and the EasyHome Wifi Socket DIS-124 sold by Aldi.")]),t._m(1),s("ul",[s("li",[t._v("Silvercrest Wifi Socket SWS-A1 - "),s("a",{attrs:{href:"http://www.lidl-service.com/static/118127777/103043_FI.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("(Owner Manual)"),s("OutboundLink")],1),t._v("   --   Tested with firmware version: 1.41, 1.60, 1.70")]),s("li",[t._v("EasyHome Wifi Socket DIS-124 "),s("a",{attrs:{href:"https://www.aldi-sued.de/de/infos/aldi-sued-a-bis-z/s/serviceportal/ergebnisliste/sis/si/wifi-steckdose/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.aldi-sued.de/de/infos/aldi-sued-a-bis-z/s/serviceportal/ergebnisliste/sis/si/wifi-steckdose/"),s("OutboundLink")],1)])]),t._m(2),s("p",[t._v("The Discovery of Wifi Sockets is always running in the background. If a command is sent to wifi socket using the Android/iOS app or if the physical button in the device is pressed, the device will be recognized and will be placed in the Inbox.")]),t._m(3),s("p",[t._v("The binding does not require any special configuration. The Wifi Socket should be connected to the same wifi network.")]),t._m(4),s("p",[t._v("To configure a Wifi Socket manually the mac address and the vendor is required. You can check the Wifi Socket mac address in your router or using some mobile app. Supported vendors are either Silvercrest (Lidl) or EasyHome (Aldi).")]),s("p",[t._v("Wifi Socket thing parameters:")]),t._m(5),s("p",[t._v("E.g.")]),t._m(6),t._m(7),s("p",[t._v("The Silvercrest Wifi Socket support the following channel:")]),t._m(8),s("DocPreviousVersions"),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"silvercrest-wifi-plug-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#silvercrest-wifi-plug-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Silvercrest Wifi Plug Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter ID")]),s("th",[t._v("Parameter Type")]),s("th",[t._v("Mandatory")]),s("th",[t._v("Description")]),s("th",[t._v("Default")])])]),s("tbody",[s("tr",[s("td",[t._v("macAddress")]),s("td",[t._v("text")]),s("td",[t._v("true")]),s("td",[t._v("The socket MAC address")]),s("td")]),s("tr",[s("td",[t._v("hostAddress")]),s("td",[t._v("text")]),s("td",[t._v("false")]),s("td",[t._v("The socket Host address. The binding is capable to discover the host address.")]),s("td")]),s("tr",[s("td",[t._v("updateInterval")]),s("td",[t._v("integer")]),s("td",[t._v("false")]),s("td",[t._v("Update time interval in seconds to request the status of the socket.")]),s("td",[t._v("60")])]),s("tr",[s("td",[t._v("vendor")]),s("td",[t._v("text")]),s("td",[t._v("true")]),s("td",[t._v('The vendor of the system ("ALDI_EASYHOME" or "LIDL_SILVERCREST")')]),s("td",[t._v("LIDL_SILVERCREST")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("silvercrestwifisocket"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("wifiSocket"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("lamp")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" macAddress"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"ACCF23343C50"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vendor"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"ALDI_EASYHOME"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[this._v("Channel Type ID")]),e("th",[this._v("Item Type")]),e("th",[this._v("Description")])])]),e("tbody",[e("tr",[e("td",[this._v("switch")]),e("td",[this._v("Switch")]),e("td",[this._v("Wifi Socket Switch.")])])])])}],!1,null,null,null);e.default=r.exports}}]);
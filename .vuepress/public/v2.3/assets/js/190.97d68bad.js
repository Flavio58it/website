(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{420:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("This binding integrates the "),s("a",{attrs:{href:"https://www.seneye.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Seneye aquarium monitoring system"),s("OutboundLink")],1),t._v(".")]),t._m(1),s("p",[t._v("The seneye monitor monitors what is happening inside your aquarium to ensure that the aquatic life remains healthy.\nThe monitor allows you to continuously track the changes in the water parameters, alerting you to the problems before they affect the fish.")]),s("p",[t._v("At least one Seneye monitor is required ("),s("a",{attrs:{href:"https://www.seneye.com/devices/compare",target:"_blank",rel:"noopener noreferrer"}},[t._v("Home / pond or reef"),s("OutboundLink")],1),t._v(") and the measure results must be synced to the seneye cloud by using a seneye web server (see "),s("a",{attrs:{href:"https://www.seneye.com/store",target:"_blank",rel:"noopener noreferrer"}},[t._v("shop"),s("OutboundLink")],1),t._v(", there is one for wifi and one for a wired network)\nEach monitor is represented by one seneye thing.")]),t._m(2),s("p",[t._v("This binding provides one thing type: 'seneye'.\nYou can have multiple seneye devices in your home, just make sure that your aquarium_name is properly set for each seneye thing.")]),t._m(3),s("p",[t._v("Discovery is not supported, the seneye monitor must be configured manually")]),t._m(4),s("p",[t._v("The following settings must be configured in order to make your seneye binding work:")]),s("table",[t._m(5),s("tbody",[s("tr",[s("td",[t._v("aquarium_name")]),s("td",[t._v("The name of the aquarium, as specified in "),s("a",{attrs:{href:"https://www.seneye.me/",target:"_blank",rel:"noopener noreferrer"}},[t._v("seneye.me"),s("OutboundLink")],1),t._v(".")])]),t._m(6),s("tr",[s("td",[t._v("username")]),s("td",[t._v("Your login name for "),s("a",{attrs:{href:"https://www.seneye.me/",target:"_blank",rel:"noopener noreferrer"}},[t._v("seneye.me"),s("OutboundLink")],1)])]),s("tr",[s("td",[t._v("password")]),s("td",[t._v("Your password for "),s("a",{attrs:{href:"https://www.seneye.me/",target:"_blank",rel:"noopener noreferrer"}},[t._v("seneye.me"),s("OutboundLink")],1)])]),t._m(7)])]),t._m(8),s("p",[t._v("The following channels are supported:")]),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),s("p",[t._v("The sitemap could look like this:")]),t._m(15),s("DocPreviousVersions"),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"seneye-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#seneye-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Seneye Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Setting")]),e("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td"),e("td",[this._v("Useful to distinguish multiple seneye installations.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("poll_time")]),e("td",[this._v("How often (in minutes) should the seneye account be checked.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel Type ID")]),s("th",[t._v("Item Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("temperature")]),s("td",[t._v("String")]),s("td",[t._v("The water temperature")])]),s("tr",[s("td",[t._v("ph")]),s("td",[t._v("String")]),s("td",[t._v("The PH level of the water")])]),s("tr",[s("td",[t._v("nh3")]),s("td",[t._v("String")]),s("td",[t._v("The level of Ammonia (NH3) in the water")])]),s("tr",[s("td",[t._v("nh4")]),s("td",[t._v("String")]),s("td",[t._v("The level of Ammonium (NH4) in the water")])]),s("tr",[s("td",[t._v("O2")]),s("td",[t._v("String")]),s("td",[t._v("The level of oxygene in the water")])]),s("tr",[s("td",[t._v("lux")]),s("td",[t._v("String")]),s("td",[t._v("The lux level of your aquarium lightning, if available")])]),s("tr",[s("td",[t._v("par")]),s("td",[t._v("String")]),s("td",[t._v("The par level of your aquarium lightning, if available")])]),s("tr",[s("td",[t._v("kelvin")]),s("td",[t._v("String")]),s("td",[t._v("The kelvin level of your aquarium lightning, if available")])]),s("tr",[s("td",[t._v("lastreading")]),s("td",[t._v("DateTime")]),s("td",[t._v("The moment when the last readings are received from the monitor")])]),s("tr",[s("td",[t._v("slideexpires")]),s("td",[t._v("DateTime")]),s("td",[t._v("The moment when the current slide will expire")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A manual configuration through a "),e("code",[this._v("things/seneye.things")]),this._v(" file could look like this:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("seneye"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("seneye"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mySeneye")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Seneye"')]),t._v(" @ "),s("span",{attrs:{class:"token string"}},[t._v('"Living Room"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("aquarium_name"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"MyAquarium"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"mail@example.com"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"xxx"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" poll_time"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A manual configuration through a "),e("code",[this._v("demo.items")]),this._v(" file could look like this:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("mySeneye_Temperature")]),t._v("  "),s("span",{attrs:{class:"token string"}},[t._v('"Temp [%s] C"')]),t._v("        "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"seneye:seneye:mySeneye:temperature"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("mySeneye_PH")]),t._v("           "),s("span",{attrs:{class:"token string"}},[t._v('"PH [%s]"')]),t._v("            "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"seneye:seneye:mySeneye:ph"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("mySeneye_NH3")]),t._v("          "),s("span",{attrs:{class:"token string"}},[t._v('"NH3 [%s]"')]),t._v("           "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"seneye:seneye:mySeneye:nh3"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" home "),s("span",{attrs:{class:"token constant"}},[t._v("label")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"My home"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("label")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"Aquarium"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("item")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("mySeneye_Temperature "),s("span",{attrs:{class:"token constant"}},[t._v("label")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"Temperature [%.1f °C]"')]),t._v(" "),s("span",{attrs:{class:"token constant"}},[t._v("icon")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"temperature"')]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("item")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("mySeneye_PH "),s("span",{attrs:{class:"token constant"}},[t._v("label")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"PH [%.1f]"')]),t._v(" "),s("span",{attrs:{class:"token constant"}},[t._v("icon")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"water"')]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("item")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("mySeneye_NH3 "),s("span",{attrs:{class:"token constant"}},[t._v("label")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"NH3 [%.1f]"')]),t._v(" "),s("span",{attrs:{class:"token constant"}},[t._v("icon")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"water"')]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);
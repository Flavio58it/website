(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{479:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),n("AddonLogo"),n("p",[t._v("This binding allows allows basic control of the OpenSprinkler and OpenSprinkler PI (Plus) devices.\nStations can be controlled to be turned on or off and rain sensor state can be read.")]),t._m(1),t._m(2),t._m(3),n("p",[t._v("OpenSprinkler devices can be manually discovered by sending a request to every IP on the network.\nDiscovery needs to be run manually as this is a brute force method of finding devices that can saturate network or device available bandwidth.")]),t._m(4),n("p",[t._v("OpenSprinkler")]),t._m(5),t._m(6),n("p",[t._v("OpenSprinkler PI")]),t._m(7),t._m(8),t._m(9),n("p",[t._v("The following channels are supported by all devices.")]),t._m(10),n("p",[t._v("The following are only support by the OpenSprinkler using the HTTP API interface.")]),t._m(11),t._m(12),n("p",[t._v("demo.Things:")]),t._m(13),n("p",[t._v("demo.items:")]),t._m(14),n("p",[t._v("demo.sitemap:")]),t._m(15),n("DocPreviousVersions"),n("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"opensprinkler-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opensprinkler-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" OpenSprinkler Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("OpenSprinkler using the HTTP API access on the network.")]),s("li",[this._v("OpenSprinkler PI (Plus) through the GPIO when openHAB is installed on the same Raspberry Pi used in the OpenSprinkler PI.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('opensprinkler:http:1 [ hostname="127.0.0.1", port=80, password="opendoor", refresh=60 ]\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("hostname: Hostname or IP address of the OpenSprinkler HTTP API.")]),s("li",[this._v("port: Port the OpenSprinkler device is listening on. Usually 80.")]),s("li",[this._v("password: Admin password of the API. Factory default is: opendoor")]),s("li",[this._v("refresh: Number of seconds in between refreshing the Thing state with the API.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("opensprinkler:pi:1 [ stations=8, refresh=60 ]\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("stations: Number of stations to control.")]),s("li",[this._v("refresh: Number of seconds in between refreshing the Thing state with the API.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("Channel Type ID")]),n("th",[t._v("Item Type")]),n("th"),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("station01")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 01 is on or off.")])]),n("tr",[n("td",[t._v("station02")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 02 is on or off.")])]),n("tr",[n("td",[t._v("station03")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 03 is on or off.")])]),n("tr",[n("td",[t._v("station04")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 04 is on or off.")])]),n("tr",[n("td",[t._v("station05")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 05 is on or off.")])]),n("tr",[n("td",[t._v("station06")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 06 is on or off.")])]),n("tr",[n("td",[t._v("station07")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 07 is on or off.")])]),n("tr",[n("td",[t._v("station08")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 08 is on or off.")])]),n("tr",[n("td",[t._v("station09")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 09 is on or off.")])]),n("tr",[n("td",[t._v("station10")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 10 is on or off.")])]),n("tr",[n("td",[t._v("station11")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 11 is on or off.")])]),n("tr",[n("td",[t._v("station12")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 12 is on or off.")])]),n("tr",[n("td",[t._v("station13")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 13 is on or off.")])]),n("tr",[n("td",[t._v("station14")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 14 is on or off.")])]),n("tr",[n("td",[t._v("station15")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 15 is on or off.")])]),n("tr",[n("td",[t._v("station16")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 16 is on or off.")])]),n("tr",[n("td",[t._v("station17")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 17 is on or off.")])]),n("tr",[n("td",[t._v("station18")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 18 is on or off.")])]),n("tr",[n("td",[t._v("station19")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 19 is on or off.")])]),n("tr",[n("td",[t._v("station20")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 20 is on or off.")])]),n("tr",[n("td",[t._v("station21")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 21 is on or off.")])]),n("tr",[n("td",[t._v("station22")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 22 is on or off.")])]),n("tr",[n("td",[t._v("station23")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 23 is on or off.")])]),n("tr",[n("td",[t._v("station24")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 24 is on or off.")])]),n("tr",[n("td",[t._v("station25")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 25 is on or off.")])]),n("tr",[n("td",[t._v("station26")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 26 is on or off.")])]),n("tr",[n("td",[t._v("station27")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 27 is on or off.")])]),n("tr",[n("td",[t._v("station28")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 28 is on or off.")])]),n("tr",[n("td",[t._v("station29")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 29 is on or off.")])]),n("tr",[n("td",[t._v("station30")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 30 is on or off.")])]),n("tr",[n("td",[t._v("station31")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 31 is on or off.")])]),n("tr",[n("td",[t._v("station32")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 32 is on or off.")])]),n("tr",[n("td",[t._v("station33")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 33 is on or off.")])]),n("tr",[n("td",[t._v("station34")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 34 is on or off.")])]),n("tr",[n("td",[t._v("station35")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 35 is on or off.")])]),n("tr",[n("td",[t._v("station36")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 36 is on or off.")])]),n("tr",[n("td",[t._v("station37")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 37 is on or off.")])]),n("tr",[n("td",[t._v("station38")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 38 is on or off.")])]),n("tr",[n("td",[t._v("station39")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 39 is on or off.")])]),n("tr",[n("td",[t._v("station40")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 40 is on or off.")])]),n("tr",[n("td",[t._v("station41")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 41 is on or off.")])]),n("tr",[n("td",[t._v("station42")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 42 is on or off.")])]),n("tr",[n("td",[t._v("station43")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 43 is on or off.")])]),n("tr",[n("td",[t._v("station44")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 44 is on or off.")])]),n("tr",[n("td",[t._v("station45")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 45 is on or off.")])]),n("tr",[n("td",[t._v("station46")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 46 is on or off.")])]),n("tr",[n("td",[t._v("station47")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 47 is on or off.")])]),n("tr",[n("td",[t._v("station48")]),n("td",[t._v("Switch")]),n("td",[t._v("RW")]),n("td",[t._v("This channel indicates whether station 48 is on or off.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("Channel Type ID")]),s("th",[this._v("Item Type")]),s("th"),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("rainsensor")]),s("td",[this._v("Switch")]),s("td",[this._v("RO")]),s("td",[this._v("This channel indicates whether rain is detected by the device or not.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('opensprinkler:http:1 [ hostname="192.168.1.23", port=80, password="opendoor", refresh=60 ]\n')])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("stations")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Station01")]),n("span",{attrs:{class:"token tag"}},[t._v(" (stations)")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"opensprinkler:http:1:station01"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Station02")]),n("span",{attrs:{class:"token tag"}},[t._v(" (stations)")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"opensprinkler:http:1:station02"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Station03")]),n("span",{attrs:{class:"token tag"}},[t._v(" (stations)")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"opensprinkler:http:1:station03"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Station04")]),n("span",{attrs:{class:"token tag"}},[t._v(" (stations)")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"opensprinkler:http:1:station04"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Station05")]),n("span",{attrs:{class:"token tag"}},[t._v(" (stations)")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"opensprinkler:http:1:station05"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Station06")]),n("span",{attrs:{class:"token tag"}},[t._v(" (stations)")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"opensprinkler:http:1:station06"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Station07")]),n("span",{attrs:{class:"token tag"}},[t._v(" (stations)")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"opensprinkler:http:1:station07"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Station08")]),n("span",{attrs:{class:"token tag"}},[t._v(" (stations)")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"opensprinkler:http:1:station08"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("RainSensor")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"opensprinkler:http:1:rainsensor"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" demo "),n("span",{attrs:{class:"token constant"}},[t._v("label")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"Main Menu"')]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("RainSensor "),n("span",{attrs:{class:"token constant"}},[t._v("label")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"Rain [%s]"')]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("item")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("stations "),n("span",{attrs:{class:"token constant"}},[t._v("label")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"Water Stations"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{633:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("This binding uses the "),s("a",{attrs:{href:"http://www.fronius.com/en/photovoltaics/products/all-products/system-monitoring/open-interfaces/fronius-solar-api-json-",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fronius Solar API V1"),s("OutboundLink")],1),t._v(" to obtain data from a Fronius devices.")]),t._m(1),s("p",[t._v("Support Fronius Galvo, Fronius Symo inverters and other Fronius inverters in combination with the Fronius Datamanager 1.0 / 2.0 or Fronius Datalogger.\nYou can add multiple inverters that depend on the same datalogger with different device ids. ( Default 1 )")]),t._m(2),s("p",[t._v("There is no discovery implemented. You have to create your things manually and specify the IP of the Datalogger and the DeviceId.")]),t._m(3),s("p",[t._v("The binding has no configuration options, all configuration is done at Thing level.")]),t._m(4),s("p",[t._v("The thing has a few configuration parameters:")]),t._m(5),t._m(6),t._m(7),t._m(8),s("p",[t._v("demo.things:")]),t._m(9),s("p",[t._v("demo.items:")]),t._m(10),s("p",[t._v("Tested with a Fronius Symo 8.2-3-M")]),s("DocPreviousVersions"),s("EditPageLink")],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"fronius-binding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fronius-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Fronius Binding")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"supported-things"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"discovery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"binding-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"thing-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("Ip")]),s("td",[t._v("the ip-address of your Fronius Datalogger")])]),s("tr",[s("td",[t._v("DeviceId")]),s("td",[t._v("The identifier of your device ( Default: 1)")])]),s("tr",[s("td",[t._v("refresh")]),s("td",[t._v("Refresh interval in seconds")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"channels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel ID")]),s("th",[t._v("Item Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("day_energy")]),s("td",[t._v("Number")]),s("td",[t._v("Energy generated on current day")])]),s("tr",[s("td",[t._v("pac")]),s("td",[t._v("Number")]),s("td",[t._v("AC powery")])]),s("tr",[s("td",[t._v("total_energy")]),s("td",[t._v("Number")]),s("td",[t._v("Energy generated overall")])]),s("tr",[s("td",[t._v("year_energy")]),s("td",[t._v("Number")]),s("td",[t._v("Energy generated in current year")])]),s("tr",[s("td",[t._v("fac")]),s("td",[t._v("Number")]),s("td",[t._v("AC frequency")])]),s("tr",[s("td",[t._v("iac")]),s("td",[t._v("Number")]),s("td",[t._v("AC current")])]),s("tr",[s("td",[t._v("idc")]),s("td",[t._v("Number")]),s("td",[t._v("DC current")])]),s("tr",[s("td",[t._v("uac")]),s("td",[t._v("Number")]),s("td",[t._v("AC voltage")])]),s("tr",[s("td",[t._v("udc")]),s("td",[t._v("Number")]),s("td",[t._v("DC voltage")])]),s("tr",[s("td",[t._v("pGrid")]),s("td",[t._v("Number")]),s("td",[t._v("Power + from grid, - to grid")])]),s("tr",[s("td",[t._v("pLoad")]),s("td",[t._v("Number")]),s("td",[t._v("Power + generator, - consumer")])]),s("tr",[s("td",[t._v("pAkku")]),s("td",[t._v("Number")]),s("td",[t._v("Power + charge, - discharge")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"full-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("fronius"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bridge"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mybridge")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hostname"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"192.168.66.148"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("refreshInterval"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("powerinverter")]),t._v(" myinverter "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" deviceId"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("AC_Powery")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachannelpac"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Day_Energy")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachanneldayenergy"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Total_Energy")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachanneltotal"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Year_Energy")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachannelyear"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("FAC")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachannelfac"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("IAC")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachanneliac"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("IDC")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachannelidc"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("UAC")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachanneluac"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("UDC")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachanneludc"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Grid_Power")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:powerflowchannelpgrid"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Load_Power")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:powerflowchannelpload"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Load_Power")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:powerflowchannelpload"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Load_Power")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:powerflowchannelpload"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Battery_Power")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:powerflowchannelpakku"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);a.default=e.exports}}]);
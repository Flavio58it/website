(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{419:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),e("AddonLogo"),e("p",[t._v("The senseBox binding integrates environment data from the "),e("a",{attrs:{href:"https://sensebox.de/",target:"_blank",rel:"noopener noreferrer"}},[t._v("senseBox"),e("OutboundLink")],1),t._v("\nCitizen Science Toolkit.")]),t._m(1),e("p",[t._v("The API server uses Letsencrypt certificates.\nTherefore, one needs to either import the Letsencrypt root certificates into the local keystore (see the description in the\n"),e("a",{attrs:{href:"https://www.openhab.org/addons/bindings/netatmo/#missing-certificate-authority",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netatmo Binding"),e("OutboundLink")],1),t._v(").\nAnother way would be to simply update the JDK to at least JDK 1.8.0_111")]),t._m(2),e("p",[t._v('This binding supports a generic "senseBox" API endpoint which is a representation of the physical box.')]),t._m(3),e("p",[t._v("This binding provides no discovery.\nThe desired senseBox must be configured manually or via a things file.")]),t._m(4),e("p",[t._v("The binding has no configuration options itself, all configuration is done at 'Things' level.")]),t._m(5),e("p",[t._v("The senseBox thing requires the box Id (which can be obtained on the map) and an interval in seconds for the API polling.\nThe senseBox support team wrote in an email that polling even every five minutes is still o.k., therefore the minimum is hardcoded to be 300 seconds.")]),t._m(6),t._m(7),e("p",[t._v("In the table is shown more detailed information about each Channel type.\nThe binding introduces the following channels:")]),t._m(8),e("p",[t._v('Channels starting with "descriptors" are defined on the API server.')]),t._m(9),e("p",[t._v("sensebox.things:")]),t._m(10),e("p",[t._v("sensebox.items:")]),t._m(11),e("p",[t._v("sensebox.sitemap:")]),t._m(12),t._m(13),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://docs.opensensemap.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.opensensemap.org/"),e("OutboundLink")],1)])]),e("li",[e("p",[e("a",{attrs:{href:"https://docs.opensensemap.org/#api-Boxes-findBox",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.opensensemap.org/#api-Boxes-findBox"),e("OutboundLink")],1)])]),e("li",[e("p",[e("a",{attrs:{href:"https://docs.opensensemap.org/#api-Measurements-getMeasurements",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.opensensemap.org/#api-Measurements-getMeasurements"),e("OutboundLink")],1)])]),e("li",[e("p",[e("a",{attrs:{href:"https://api.opensensemap.org/boxes/:boxId",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.opensensemap.org/boxes/:boxId"),e("OutboundLink")],1)])]),e("li",[e("p",[e("a",{attrs:{href:"https://api.opensensemap.org/boxes/:senseBoxId/sensors",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.opensensemap.org/boxes/:senseBoxId/sensors"),e("OutboundLink")],1)])])]),e("DocPreviousVersions"),e("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"sensebox-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sensebox-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" senseBox Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing configuration")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("sensebox"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("box"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("home")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" senseBoxId "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"foothesmurfingbar"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refreshInterval "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("600")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("Channel ID")]),e("th",[t._v("Channel Description")]),e("th",[t._v("Supported item type")]),e("th",[t._v("Advanced")])])]),e("tbody",[e("tr",[e("td",[t._v("descriptors#location")]),e("td",[t._v("Location of the box")]),e("td",[t._v("Point")]),e("td",[t._v("False")])]),e("tr",[e("td",[t._v("measurements#uvIntensity")]),e("td",[t._v("Intensity of Ultraviolet radiation")]),e("td",[t._v("Number")]),e("td",[t._v("False")])]),e("tr",[e("td",[t._v("measurements#luminance")]),e("td",[t._v("Illuminance")]),e("td",[t._v("Number")]),e("td",[t._v("False")])]),e("tr",[e("td",[t._v("measurements#pressure")]),e("td",[t._v("Air pressure")]),e("td",[t._v("Number")]),e("td",[t._v("False")])]),e("tr",[e("td",[t._v("measurements#humidity")]),e("td",[t._v("Humidity")]),e("td",[t._v("Number")]),e("td",[t._v("False")])]),e("tr",[e("td",[t._v("measurements#temperature")]),e("td",[t._v("Temperature")]),e("td",[t._v("Number")]),e("td",[t._v("False")])]),e("tr",[e("td",[t._v("measurements#particulateMatter2dot5")]),e("td",[t._v("Particulate Matter 2.5 µm in diameter")]),e("td",[t._v("Number")]),e("td",[t._v("False")])]),e("tr",[e("td",[t._v("measurements#particulateMatter10")]),e("td",[t._v("Temperature Matter 10 µm in diameter")]),e("td",[t._v("Number")]),e("td",[t._v("False")])]),e("tr",[e("td",[t._v("lastReported#uvIntensityLastReported")]),e("td",[t._v("The timestamp when uv radiation intensity was last reported")]),e("td",[t._v("DateTime")]),e("td",[t._v("True")])]),e("tr",[e("td",[t._v("lastReported#luminanceLastReported")]),e("td",[t._v("The timestamp when illuminance was last reported")]),e("td",[t._v("DateTime")]),e("td",[t._v("True")])]),e("tr",[e("td",[t._v("lastReported#pressureLastReported")]),e("td",[t._v("The timestamp when pressure was last reported")]),e("td",[t._v("DateTime")]),e("td",[t._v("True")])]),e("tr",[e("td",[t._v("lastReported#humidityLastReported")]),e("td",[t._v("The timestamp when humidity was last reported")]),e("td",[t._v("DateTime")]),e("td",[t._v("True")])]),e("tr",[e("td",[t._v("lastReported#temperatureLastReported")]),e("td",[t._v("The timestamp when temperature was last reported")]),e("td",[t._v("DateTime")]),e("td",[t._v("True")])]),e("tr",[e("td",[t._v("lastReported#particulateMatter2dot5LastReported")]),e("td",[t._v("The timestamp when particulate matter 2.5 was last reported")]),e("td",[t._v("DateTime")]),e("td",[t._v("True")])]),e("tr",[e("td",[t._v("lastReported#particulateMatter10LastReported")]),e("td",[t._v("The timestamp when particulate matter 10 was last reported")]),e("td",[t._v("DateTime")]),e("td",[t._v("True")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("sensebox"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("box"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("zugspitze")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" senseBoxId "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"578cf2ccccff9d1000bd9198"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refreshInterval "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("900")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Location")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Zugspitze_Location")]),t._v("                                                              "),e("span",{attrs:{class:"token tag"}},[t._v(" (Zugspitze)")]),t._v("                "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"sensebox:box:zugspitze:descriptors#location"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),e("span",{attrs:{class:"token class-name"}},[t._v("Zugspitze_Humidity")]),t._v("         "),e("span",{attrs:{class:"token string"}},[t._v('"Zugspitze Humidity [%.1f %%]"')]),t._v("        "),e("span",{attrs:{class:"token function"}},[t._v(" <humidity>")]),t._v("     "),e("span",{attrs:{class:"token tag"}},[t._v(" (Zugspitze, Weather)")]),t._v("       "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"sensebox:box:zugspitze:measurements#humidity"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),e("span",{attrs:{class:"token class-name"}},[t._v("Zugspitze_Luminance")]),t._v("        "),e("span",{attrs:{class:"token string"}},[t._v('"Zugspitze Light Level [%.1f lx]"')]),t._v("     "),e("span",{attrs:{class:"token function"}},[t._v(" <light>")]),t._v("        "),e("span",{attrs:{class:"token tag"}},[t._v(" (Zugspitze, Weather)")]),t._v("       "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"sensebox:box:zugspitze:measurements#luminance"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),e("span",{attrs:{class:"token class-name"}},[t._v("Zugspitze_Pressure")]),t._v("         "),e("span",{attrs:{class:"token string"}},[t._v('"Zugspitze Pressure [%.1f hPa]"')]),t._v("       "),e("span",{attrs:{class:"token function"}},[t._v(" <pressure>")]),t._v("     "),e("span",{attrs:{class:"token tag"}},[t._v(" (Zugspitze, Weather)")]),t._v("       "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"sensebox:box:zugspitze:measurements#pressure"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),e("span",{attrs:{class:"token class-name"}},[t._v("Zugspitze_Temperature")]),t._v("      "),e("span",{attrs:{class:"token string"}},[t._v('"Zugspitze Temperature [%.1f °C]"')]),t._v("     "),e("span",{attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v("  "),e("span",{attrs:{class:"token tag"}},[t._v(" (Zugspitze, Weather)")]),t._v("       "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"sensebox:box:zugspitze:measurements#temperature"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),e("span",{attrs:{class:"token class-name"}},[t._v("Zugspitze_UVIntensity")]),t._v("      "),e("span",{attrs:{class:"token string"}},[t._v('"Zugspitze UvIntensity [%.1f μW/cm²]"')]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v(" <light>")]),t._v("        "),e("span",{attrs:{class:"token tag"}},[t._v(" (Zugspitze, Weather)")]),t._v("       "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"sensebox:box:zugspitze:measurements#uvIntensity"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),e("span",{attrs:{class:"token class-name"}},[t._v("Zugspitze_PM2dot5")]),t._v("          "),e("span",{attrs:{class:"token string"}},[t._v('"Zugspitze PM2.5 [%.1f µg/m³]"')]),t._v("                        "),e("span",{attrs:{class:"token tag"}},[t._v(" (Zugspitze, Weather)")]),t._v("       "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"sensebox:box:zugspitze:measurements#particulateMatter2dot5"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),e("span",{attrs:{class:"token class-name"}},[t._v("Zugspitze_PM10")]),t._v("             "),e("span",{attrs:{class:"token string"}},[t._v('"Zugspitze PM10 [%.1f µg/m³]"')]),t._v("                         "),e("span",{attrs:{class:"token tag"}},[t._v(" (Zugspitze, Weather)")]),t._v("       "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"sensebox:box:zugspitze:measurements#particulateMatter10"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" sensebox "),e("span",{attrs:{class:"token constant"}},[t._v("label")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"SenseBox Zugspitze"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("item")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Zugspitze_Temperature\n\t"),e("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("item")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Zugspitze_Pressure\n\t"),e("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("item")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Zugspitze_Humidity\n\t"),e("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("item")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Zugspitze_Luminance\n\t"),e("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("item")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Zugspitze_UVIntensity\n\t"),e("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("item")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Zugspitze_PM2dot5\n\t"),e("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("item")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Zugspitze_PM10\n\t"),e("span",{attrs:{class:"token keyword"}},[t._v("Mapview")]),t._v(" "),e("span",{attrs:{class:"token constant"}},[t._v("item")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Zugspitze_Location "),e("span",{attrs:{class:"token constant"}},[t._v("height")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"sensebox-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sensebox-api","aria-hidden":"true"}},[this._v("#")]),this._v(" senseBox API")])}],!1,null,null,null);s.default=n.exports}}]);
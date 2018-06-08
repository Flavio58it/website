(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{627:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("This binding can be used to receive image files from FTP clients.\nThe binding acts as a FTP server.\nImages stored on the FTP server are not saved to the file system, therefore the binding shouldn't cause any problems on flash based openHAB installations.")]),t._m(1),t._m(2),t._m(3),a("p",[t._v("Automatic discovery is not supported.")]),t._m(4),a("p",[t._v("The binding has the following configuration options:")]),t._m(5),t._m(6),a("p",[t._v("This binding currently supports the following channels:")]),t._m(7),a("p",[t._v("When an image file is uploaded to FTP server, the binding tries to find the channel whose filename matches the uploaded image filename.\nIf no match is found, no channel is updated.\nThe filename parameter supports regular expression patterns.\nSee more details in the Things example.")]),a("p",[t._v("Image channel supports following options:")]),t._m(8),t._m(9),t._m(10),a("p",[t._v("When an image file is uploaded to FTP server, the binding tries to find the trigger channel whose filename matches the upload image filename.\nIf no match is found, no channel is updated.\nThe filename parameter supports regular expression patterns.\nSee more details in the Things example.")]),a("p",[t._v("Trigger channels supports following options:")]),t._m(11),t._m(12),a("p",[t._v("Things:")]),t._m(13),a("p",[t._v("Items:")]),t._m(14),a("p",[t._v("Rules:")]),t._m(15),a("p",[t._v("Sitemap:")]),t._m(16),t._m(17),a("p",[t._v("The binding can be used to receive images from network cameras that send images to a FTP server when motion or sound is detected.")]),a("p",[t._v("Things:")]),t._m(18),a("p",[t._v("Items:")]),t._m(19),a("p",[t._v("Rules:")]),t._m(20),a("p",[t._v("Sitemap:")]),t._m(21),t._m(22),a("p",[t._v("For problem solving, if binding logging is not enough, Apache FTP server logging can also be enabled by the following command in the karaf console:")]),t._m(23),a("p",[t._v("and set back to default level:")]),t._m(24),a("p",[t._v("If you meet any problems to receive images from the network cameras, you could test connection to binding with any FTP client.\nYou can send image files via FTP client and thing channels should be updated accordingly.")]),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"ftp-upload-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ftp-upload-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" FTP Upload Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding supports Things of type "),s("code",[this._v("ftpupload")]),this._v(".\nEvery Thing is identified by FTP user name.\nTherefore, every thing should use unique user name to login FTP server.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),a("th",[t._v("Name")]),a("th",[t._v("Description")]),a("th",[t._v("Required")]),a("th",[t._v("Default value")])])]),a("tbody",[a("tr",[a("td",[t._v("port")]),a("td",[t._v("TCP Port")]),a("td",[t._v("TCP port of the FTP server")]),a("td",[t._v("no")]),a("td",[t._v("2121")])]),a("tr",[a("td",[t._v("idleTimeout")]),a("td",[t._v("Idle timeout")]),a("td",[t._v("The number of seconds before an inactive client is disconnected. If this value is set to 0, the idle time is disabled.")]),a("td",[t._v("no")]),a("td",[t._v("60")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("Channel Type ID")]),s("th",[this._v("Item Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("image")]),s("td",[this._v("Image")]),s("td",[this._v("Image file received via FTP.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),a("th",[t._v("Name")]),a("th",[t._v("Description")]),a("th",[t._v("Required")]),a("th",[t._v("Default value")])])]),a("tbody",[a("tr",[a("td",[t._v("filename")]),a("td",[t._v("Filename")]),a("td",[t._v("Filename to match received files. Supports regular expression patterns.")]),a("td",[t._v("yes")]),a("td",[t._v(".*")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"trigger-channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trigger-channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Trigger Channels")])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("Channel Type ID")]),s("th",[this._v("Options")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("image-received")]),s("td",[this._v("IMAGE_RECEIVED")]),s("td",[this._v("Triggered when image file received from FTP client.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),a("th",[t._v("Name")]),a("th",[t._v("Description")]),a("th",[t._v("Required")]),a("th",[t._v("Default value")])])]),a("tbody",[a("tr",[a("td",[t._v("filename")]),a("td",[t._v("Filename")]),a("td",[t._v("Filename to match received files. Supports regular expression patterns.")]),a("td",[t._v("yes")]),a("td",[t._v(".*")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"full-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ftpupload"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("imagereceiver"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("images1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" userName"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"test1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"12345"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ftpupload"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("imagereceiver"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("images2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" userName"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"test2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"12345"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("Channels")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Type")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("image")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("channel "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" my_image1 "),a("span",{attrs:{class:"token string"}},[t._v('"My Image channel 1"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            filename"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"test12[0-9]{2}.png"')]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// match to filename test12xx.png, where xx can be numbers between 00-99")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Type")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("image")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("channel "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" my_image2 "),a("span",{attrs:{class:"token string"}},[t._v('"My Image channel 2"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            filename"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"test.jpg"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        Trigger "),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[a("span",{attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" my_image_trigger1 "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            filename"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"test12[0-9]{2}.png"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        Trigger "),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[a("span",{attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" my_image_trigger2 "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            filename"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"test.jpg"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Image")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("Image1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"ftpupload:imagereceiver:images1:image"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Image")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("Image2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"ftpupload:imagereceiver:images2:my_image1"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"example trigger rule 1"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Channel")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'ftpupload:imagereceiver:images1:image-received'")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("triggered")]),t._v(" IMAGE_RECEIVED \n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("logInfo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Test"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"Image received"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"example trigger rule 2"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Channel")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'ftpupload:imagereceiver:images2:my_image_trigger1'")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("triggered")]),t._v(" IMAGE_RECEIVED \n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("logInfo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Test"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"Image received"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"FTP images"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Image")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Image1\n    "),a("span",{attrs:{class:"token class-name"}},[t._v("Image")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Image2\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"use-case-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-case-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Use case example")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ftpupload"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("imagereceiver"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("garagecamera")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" userName"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"garage"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"12345"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Image")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("Garage_NetworkCamera_Motion_Image")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"ftpupload:imagereceiver:garagecamera:image"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"example trigger rule"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Channel")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'ftpupload:imagereceiver:garagecamera:image-received'")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("triggered")]),t._v(" IMAGE_RECEIVED \n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("logInfo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Test"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"Garage motion detected"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Garage network camera"')]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("icon")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"camera"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Image")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Garage_NetworkCamera_Motion_Image\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"logging-and-problem-solving"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logging-and-problem-solving","aria-hidden":"true"}},[this._v("#")]),this._v(" Logging and Problem Solving")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("log:set DEBUG org.apache.ftpserver\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("log:set DEFAULT org.apache.ftpserver\n")])])])}],!1,null,null,null);s.default=n.exports}}]);
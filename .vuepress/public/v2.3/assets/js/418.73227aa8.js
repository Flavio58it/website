(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{762:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),e("table",[t._m(6),e("tbody",[e("tr",[e("td",[t._v("hostname")]),e("td"),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),e("td",[t._v('SMTP server hostname, e.g. "'),e("a",{attrs:{href:"http://smtp.gmail.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("smtp.gmail.com"),e("OutboundLink")],1),t._v('"')])]),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14)])]),t._m(15),t._m(16),e("DocPreviousVersions"),e("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"mail-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mail-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Mail Actions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This add-on provides SMTP services so your rules and scripts can send e-mails.\nThe "),s("code",[this._v("to")]),this._v(" paremeter can contain a semicolon-separated list of email addresses.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("sendMail(String to, String subject, String message)")]),this._v(": Sends an email via SMTP.")]),s("li",[s("code",[this._v("sendMail(String to, String subject, String message, String attachmentUrl)")]),this._v(": Sends an email with attachment via SMTP.")]),s("li",[s("code",[this._v("sendMail(String to, String subject, String message, List<String> attachmentUrlList)")]),this._v(": Sends an email with one or more attachments via SMTP.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This action service can be configured via the "),s("code",[this._v("services/mail.cfg")]),this._v(" file.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[this._v("Property")]),s("th",[this._v("Default")]),s("th",{staticStyle:{"text-align":"center"}},[this._v("Required")]),s("th",[this._v("Description")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("port")]),s("td",[this._v("25 (resp. 587 for TLS/SSL)")]),s("td",{staticStyle:{"text-align":"center"}},[this._v("No")]),s("td",[this._v("SMTP port to use")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("username")]),s("td"),s("td",{staticStyle:{"text-align":"center"}},[this._v("if the SMTP server at "),s("code",[this._v("<hostname>")]),this._v(" and "),s("code",[this._v("<port>")]),this._v(" requires authentication")]),s("td",[this._v("SMTP user name")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("password")]),s("td"),s("td",{staticStyle:{"text-align":"center"}},[this._v("if the SMTP server at "),s("code",[this._v("<hostname>")]),this._v(" and "),s("code",[this._v("<port>")]),this._v(" requires authentication")]),s("td",[this._v("SMTP password")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("from")]),s("td"),s("td",{staticStyle:{"text-align":"center"}},[this._v("Yes")]),s("td",[this._v("Email address to use for sending mails")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("tls")]),s("td",[this._v("false")]),s("td",{staticStyle:{"text-align":"center"}},[this._v("No")]),s("td",[s("code",[this._v("true")]),this._v(" if STARTTLS is enabled (not required) for the connection")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("td",[t._v("ssl")]),e("td",[t._v("false")]),e("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),e("td",[e("code",[t._v("true")]),t._v(" if SSL negotiation should occur on connection.  Do not set both "),e("code",[t._v("tls")]),t._v(" and "),e("code",[t._v("ssl")]),t._v(" to "),e("code",[t._v("true")]),t._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("popbeforesmtp")]),s("td",[this._v("false")]),s("td",{staticStyle:{"text-align":"center"}},[this._v("No")]),s("td",[this._v("set to "),s("code",[this._v("true")]),this._v(" if POP before SMTP (another authentication mechanism) should be enabled. Username and password are taken from the above configuration")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("charset")]),s("td",[this._v("platform default")]),s("td",{staticStyle:{"text-align":"center"}},[this._v("No")]),s("td",[this._v("Character set used to encode the message body")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rules"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" java"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token class-name"}},[t._v("List")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("List")]),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" attachmentUrlList "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("newArrayList")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{attrs:{class:"token string"}},[t._v('"http://some.web/site/snap.jpg&param=value"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token string"}},[t._v('"http://192.168.1.100/data.txt"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token string"}},[t._v('"file:///tmp/201601011031.jpg"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("sendMail")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v('"you@email.net"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Test"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"This is the message."')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attachmentUrlList"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{625:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("Transform input using the XML Stylesheet Language for Transformations (XSLT).")]),s("p",[t._v("XSLT is a standard method to transform an XML structure from one document into a new document with a different structure.")]),t._m(1),s("p",[t._v("General transformation rule summary:")]),t._m(2),s("p",[t._v("The Rule uses XPath to gather the XML node information.\nFor more information have a look at the "),s("a",{attrs:{href:"https://docs.openhab.org/addons/transformations/xpath/readme.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("XPath transformation"),s("OutboundLink")],1),t._v(" .")]),t._m(3),t._m(4),s("p",[t._v("A simple but complete XSLT transformation looks like in the following example, which was taken from "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Java_API_for_XML_Processing#Example",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),s("p",[t._v("This example has a namespace defined, as you would find in real world applications, which has to be matched in the rule.")]),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),s("ul",[s("li",[t._v("Extended introduction and more "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/XSLT#XSLT_examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("examples"),s("OutboundLink")],1),t._v(" at Wikipedia.")]),s("li",[t._v("A good "),s("a",{attrs:{href:"https://www.w3schools.com/xml/xsl_intro.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("introduction"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://www.w3schools.com/xml/xsl_transformation.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("tutorial"),s("OutboundLink")],1),t._v(" at W3School.")]),s("li",[t._v("An informative "),s("a",{attrs:{href:"https://www.ibm.com/developerworks/library/x-xsltmistakes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tutorial"),s("OutboundLink")],1),t._v(" of common mistakes.")])]),s("DocPreviousVersions"),s("EditPageLink")],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"xslt-transformation-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xslt-transformation-service","aria-hidden":"true"}},[this._v("#")]),this._v(" XSLT Transformation Service")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The transformation expects the rule to be read from a file which is stored under the "),a("code",[this._v("transform")]),this._v(" folder.\nTo organize the various transformations one should use subfolders.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("The directive "),s("code",[t._v("xsl:output")]),t._v(" defines how the output document should be structured.")]),s("li",[t._v("The directive "),s("code",[t._v("xsl:template")]),t._v(" specifies matching attributes for the XML node to find.")]),s("li",[t._v("The "),s("code",[t._v("xsl:template")]),t._v(" tag contains the rule which specifies what should be done.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"basic-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Example")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("input XML")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("xml version"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("'1.0'")]),t._v(" encoding"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("'UTF-8'")]),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("root"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("node "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("'hello'")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("root"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("transform/helloworld.xsl")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("xsl:output")]),t._v(": transform incoming document into another XML-like document, without indentation.")]),s("li",[s("code",[t._v("xsl:template")]),t._v(": "),s("code",[t._v('match="/"')]),t._v(' "any type of node", so the whole document.')]),s("li",[t._v("The "),s("code",[t._v("xsl")]),t._v(" rule does "),s("code",[t._v("select")]),t._v(" the node "),s("code",[t._v("/root/node")]),t._v(" and extracts the "),s("code",[t._v("value-of")]),t._v(" attribute "),s("code",[t._v("val")]),t._v(".")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("xml version"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("'1.0'")]),t._v(" encoding"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("'UTF-8'")]),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("xsl"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("stylesheet version"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("'2.0'")]),t._v(" xmlns"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("xsl"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("'http://www.w3.org/1999/XSL/Transform'")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("xsl"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("output method"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("'xml'")]),t._v(" indent"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("'no'")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("xsl"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("template match"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("'/'")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("reRoot"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("reNode"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("xsl"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("value"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("of select"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("'/root/node/@val'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" world"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("reNode"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("reRoot"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("xsl"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("template"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("xsl"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("stylesheet"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("Output XML")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("reRoot")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("reNode")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello world"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("reNode")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("reRoot")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"advanced-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Advanced Example")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("input XML")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("The tag "),a("code",[this._v("<PTZStatus>")]),this._v(" contains an attribute "),a("code",[this._v("xmlns=")]),this._v(" which defines the namespace "),a("code",[this._v("http://www.hikvision.com/ver20/XMLSchema")]),this._v(".")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PTZStatus")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("version")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2.0"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("xmlns")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.hikvision.com/ver20/XMLSchema"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AbsoluteHigh")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("elevation")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("elevation")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("azimuth")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("date")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Fri, 18 Dec 2009 9:38 am PST"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("450"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("azimuth")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("absoluteZoom")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("10"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("absoluteZoom")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("AbsoluteHigh")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("PTZStatus")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("transform/azimut.xsl")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("In the rule, the tag "),s("code",[t._v("<xsl:stylesheet>")]),t._v(" has to have an attribute "),s("code",[t._v('xmlns:xsl="http://www.w3.org/1999/XSL/Transform"')]),t._v(" and a second attribute "),s("code",[t._v("xmlns:")]),t._v(".\nThis attribute has to be the same as the namespace for the input document.\nIn the rule each step traversed along the path to the next tag has to be prepended with the "),s("code",[t._v("xmlns")]),t._v(" namespace, here defined as "),s("code",[t._v("h")]),t._v(".")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("xsl:output")]),t._v(" transform incoming document into another XML-like document, no indentation, "),s("strong",[t._v("without XML")]),t._v(".")]),s("li",[s("code",[t._v("xsl:template")]),t._v(": "),s("code",[t._v('match="/"')]),t._v(" whole document.")]),s("li",[t._v("Full path to node "),s("code",[t._v("azimuth")]),t._v(" reading out "),s("code",[t._v("date")]),t._v(" attribute.")]),s("li",[t._v("Add a linebreak by setting "),s("code",[t._v("&#10;")]),t._v(" as text.")]),s("li",[t._v("Search for node "),s("code",[t._v("azimuth")]),t._v(" by prepending "),s("code",[t._v("//")]),t._v(" and get the "),s("code",[t._v("text")]),t._v(".")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("xsl:")]),t._v("stylesheet")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("version")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2.0"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsl")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/1999/XSL/Transform"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("h")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.hikvision.com/ver20/XMLSchema"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("xsl:")]),t._v("output")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xml"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("indent")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("no"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("encoding")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("omit-xml-declaration")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yes"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n   "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("xsl:")]),t._v("template")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("match")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("xsl:")]),t._v("value-of")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("select")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/h:PTZStatus/h:AbsoluteHigh/h:azimuth/@date"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("xsl:")]),t._v("text")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token entity",title:"&#10;"}},[t._v("&#10;")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("xsl:")]),t._v("text")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("xsl:")]),t._v("value-of")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("select")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//h:azimuth/text()"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n   "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("xsl:")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("xsl:")]),t._v("stylesheet")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("Output Document")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("Fri, 18 Dec 2009 9:38 am PST\n450\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" Further Reading")])}],!1,null,null,null);a.default=e.exports}}]);
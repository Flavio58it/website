(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{728:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("AddonLogo"),a("p",[t._v("The "),a("a",{attrs:{href:"https://www.amazon.com/Dash-Buttons/b?node=10667898011",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon Dash Button"),a("OutboundLink")],1),t._v(" is a cheap and small Wi-Fi connected device to order products from Amazon with the simple press of a button.\nThis Binding allows you to integrate Dash Buttons into your home automation setup.")]),a("p",[t._v("The Binding code is inspired by "),a("a",{attrs:{href:"https://github.com/hortinstein/node-dash-button",target:"_blank",rel:"noopener noreferrer"}},[t._v("hortinstein/node-dash-button"),a("OutboundLink")],1),t._v(".")]),t._m(1),t._m(2),t._m(3),a("p",[t._v("The Binding uses "),a("a",{attrs:{href:"https://www.pcap4j.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pcap4J"),a("OutboundLink")],1),t._v(" in order to capture "),a("code",[t._v("ARP")]),t._v(" and "),a("code",[t._v("BOOTP")]),t._v(" requests send by the Amazon Dash Button.\nButtons will hence only be usable within the same network as your openHAB instance.")]),a("p",[t._v("Start with installing libpcap (for Mac/Linux/UNIX) or WinPcap (for Windows) on your computer.\nThey are native libraries that power the core functionalities of Pcap4J.")]),t._m(4),t._m(5),a("p",[t._v("Installing "),a("a",{attrs:{href:"http://www.tcpdump.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("libpcap"),a("OutboundLink")],1),t._v(" should be as simple as:")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),a("p",[t._v('If you need mulitple capabilities (like "cap_net_bind_service" for the Network binding), you have to add them like this:')]),t._m(11),t._m(12),a("p",[t._v("On a Windows system there are two options to go with.")]),a("ol",[a("li",[t._v("The preferred solution is "),a("a",{attrs:{href:"https://www.winpcap.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("WinPcap"),a("OutboundLink")],1),t._v(" if your network interface is supported.")]),a("li",[t._v("An alternative option is "),a("a",{attrs:{href:"https://github.com/nmap/npcap",target:"_blank",rel:"noopener noreferrer"}},[t._v("npcap"),a("OutboundLink")],1),t._v(' with the settings "WinPcap 4.1.3 compatibility" and "Raw 802.11 Packet Capture"')])]),t._m(13),a("p",[t._v("The installation methods might differ.\nA few known operating systems are:")]),t._m(14),t._m(15),a("p",[t._v("Setting up your Dash Button is as simple as following the instructions provided by "),a("a",{attrs:{href:"https://www.amazon.com/Dash-Buttons/b?node=10667898011",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon"),a("OutboundLink")],1),a("strong",[t._v("EXCEPT FOR THE LAST STEP")]),t._v(".\nFollow the instructions to set up the Dash Button in their mobile app.\nWhen you get to the step where it asks you to pick which product you want to map it to, just quit the setup process.")]),t._m(16),a("p",[t._v("Every time a Dash Button is pressed a request will be sent to the Amazon servers.\nIf no product was configured for the Button, a notification will be presented by the Amazon app on your smartphone.")]),a("p",[t._v("To prevent the Dash Button from contacting the Amazon Servers, block Internet access for the device.\nPlease refer to the documentation of your network's router for details.\nIf your network doesn't provide that option, you can at least deal with the notifications by either uninstalling the Amazon app or disabling notifications for it (possible on most smartphone OSs).")]),a("p",[t._v("It has shown that blocking the Dash Button communication with the Amazon servers will provoke reconnection attempts.\nThis increased amount of communication causes a reduced overall battery life.\nThe built-in AAA battery can be easily replaced.")]),t._m(17),t._m(18),a("p",[t._v('There is one supported Thing, the "Amazon Dash Button".')]),t._m(19),a("p",[t._v("Background discovery is not supported as it is not possible to distinguish\nbetween a Dash Button and other Amazon devices like the Kindle,\na Fire TV or an Echo speaker.")]),a("p",[t._v("You can start the discovery process for Dash Button devices manually.\nWhile openHAB is in the scanning process, press the button on the Dash to be recognized and added to your Inbox.")]),t._m(20),t._m(21),t._m(22),t._m(23),a("p",[t._v("For manual defintion of a "),a("code",[t._v("dashbutton")]),t._v(" Thing the MAC address can either be taken from the discovery output or can e.g. be captured through your router/DHCP frontend or with "),a("a",{attrs:{href:"https://wireshark.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wireshark"),a("OutboundLink")],1),t._v(".")]),t._m(24),t._m(25),t._m(26),a("p",[t._v("Things:")]),t._m(27),a("p",[t._v("(Pay attention: The mac address has to be given in two different formats)")]),a("p",[t._v("Rules:")]),t._m(28),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"amazon-dash-button-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amazon-dash-button-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Amazon Dash Button Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Warning:")]),this._v("\nThe Dash Button will try to contact the Amazon servers every time the button is pressed.\nThis might not be in line with your privacy preferences but can be prevented.\nPlease refer to the "),e("a",{attrs:{href:"#no-phonehome"}},[this._v('"Preventing Communication with Amazon Servers"')]),this._v(" section for details.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Response Time:")]),this._v("\nPlease be aware, that due to the operation method of this binding, the response time for a button press can be rather high (up to five seconds).\nYou might want to keep that in mind during product selection or task assignment.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note:")]),this._v("\nPcap4J needs administrator/root privileges.\nInstructions for Debian/Ubuntu are given below.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"installing-libpcap-on-debian-ubuntu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-libpcap-on-debian-ubuntu","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing libpcap on Debian/Ubuntu")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),e("span",{attrs:{class:"token function"}},[this._v("apt-get")]),this._v(" "),e("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" libpcap-dev\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can run Pcap4J with a non-root openHAB user by granting capabilities "),e("code",[this._v("CAP_NET_RAW")]),this._v(" and "),e("code",[this._v("CAP_NET_ADMIN")]),this._v(" to the openHAB java environment by the following command:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" setcap cap_net_raw,cap_net_admin"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("eip "),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[t._v("$(")]),t._v("realpath /usr/bin/java"),a("span",{attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Be aware of other capabilities which were previously set by setcap.\n"),e("strong",[this._v("These capabilities will be overwritten!")]),this._v("\nYou can see which capabilities have already been set with the command:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" getcap "),e("span",{attrs:{class:"token variable"}},[e("span",{attrs:{class:"token variable"}},[this._v("$(")]),this._v("realpath /usr/bin/java"),e("span",{attrs:{class:"token variable"}},[this._v(")")])]),this._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" setcap "),a("span",{attrs:{class:"token string"}},[t._v("'cap_net_raw,cap_net_admin=+eip cap_net_bind_service=+ep'")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[t._v("$(")]),t._v("realpath /usr/bin/java"),a("span",{attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"installing-winpcap-on-windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-winpcap-on-windows","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing WinPcap on Windows")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"installing-libpcap-on-other-operating-systems"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-libpcap-on-other-operating-systems","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing libpcap on Other Operating Systems")])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Operating System")]),e("th",{staticStyle:{"text-align":"left"}},[this._v("Command")])])]),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("CentOS")]),e("td",{staticStyle:{"text-align":"left"}},[e("code",[this._v("yum install libpcap-devel")])])]),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("Mac")]),e("td",{staticStyle:{"text-align":"left"}},[e("code",[this._v("brew install libpcap")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"setup-dash-button"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-dash-button","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup Dash Button")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"preventing-communication-with-amazon-servers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preventing-communication-with-amazon-servers","aria-hidden":"true"}},[this._v("#")]),this._v(" Preventing Communication with Amazon Servers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Preventing the communication with the Amazon servers or the Amazon app is "),e("strong",[this._v("not")]),this._v(" necessary to integrate the Dash Button in openHAB.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Caution:")]),this._v("\nYou have to be aware that other Amazon devices might pop up in your Inbox if they send an "),e("code",[this._v("ARP")]),this._v(" request while scanning for Dash Buttons.\nYou can ignore these devices in your Inbox.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"amazon-dash-button"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amazon-dash-button","aria-hidden":"true"}},[this._v("#")]),this._v(" Amazon Dash Button")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[e("code",[this._v("macAddress")]),this._v(" - The MAC address of the Amazon Dash Button.")])]),e("li",[e("p",[e("code",[this._v("pcapNetworkInterfaceName")]),this._v(" - The network interface which receives the packets of the Amazon Dash Button.")])]),e("li",[e("p",[e("code",[this._v("packetInterval")]),this._v(" - Often a single button press is recognized multiple times.\nYou can specify how long any further detected button pressed should be ignored after one click was processed.\nThe parameter is optional and 5000ms by default.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("Press:")]),this._v(' Trigger channel for recognizing presses on the Amazon Dash Button.\nA trigger channel can directly be used in a rule, check the "Full Example" section for one example.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("amazondashbutton"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("dashbutton"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("fc")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("a6"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("67")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("c"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("aa"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("c7 "),a("span",{attrs:{class:"token string"}},[t._v('"My Dash Button"')]),t._v(" @ "),a("span",{attrs:{class:"token string"}},[t._v('"Living"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" macAddress"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"fc:a6:67:0c:aa:c7"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pcapNetworkInterfaceName"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"eth0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" packetInterval"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("5000")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"My Dash Button pressed"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Channel")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"amazondashbutton:dashbutton:fc-a6-67-0c-aa-c7:press"')]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("triggered")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("logInfo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"amazondashbutton"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"My Dash Button has been pressed"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);
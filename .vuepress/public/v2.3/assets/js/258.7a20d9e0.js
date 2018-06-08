(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{522:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[a("a",{attrs:{href:"http://www.musicpd.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Music Player Daemon (MPD)"),a("OutboundLink")],1),t._v(" is a flexible, powerful, server-side application for playing music. Through plugins and libraries it can play a variety of sound files while being controlled by its network protocol.")]),a("p",[t._v("By help of the openHAB MPD binding, you can e.g. start/stop playing music in specific rooms / on various channels and change volume.")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),a("p",[t._v("The syntax for the Exec binding configuration string is explained here:")]),t._m(6),t._m(7),t._m(8),t._m(9),a("p",[t._v("Here are some examples of valid binding configuration strings:")]),t._m(10),a("p",[t._v("As a result, your lines in the items file might look like the following:")]),t._m(11),t._m(12),a("p",[t._v("Support for track names was added in 1.5 and also ability to set exact volume for dimmer items (previously only increase/decrease actions were available)")]),t._m(13),t._m(14),t._m(15),a("p",[t._v("To concatenate artist and title:")]),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),a("p",[t._v("It can be used to choose radio station (streaming URI) from playlist defined.")]),t._m(25),t._m(26),t._m(27),t._m(28),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"mpd-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mpd-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" MPD Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding can be configured in the file "),s("code",[this._v("services/mpd.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),a("th",[t._v("Default")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[a("code",[t._v("<player-id>")]),t._v(".host")]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("IP address or hostname of the MPD player")])]),a("tr",[a("td",[a("code",[t._v("<player-id>")]),t._v(".port")]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("Port number on which the MPD player is listening")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("where "),s("code",[this._v("<player-id>")]),this._v(" is a unique name that you give for the player, such as "),s("code",[this._v("livingroom")]),this._v(", "),s("code",[this._v("bath")]),this._v(", etc.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('mpd="<openHAB-command>:<player-id>:<player-commandLine>[,<openHAB-command>:<player-id>:<player-commandLine>][,...]"\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("where the parts in "),s("code",[this._v("[]")]),this._v(" are optional.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The Player-Id corresponds with the configuration in "),s("code",[this._v("mpd.cfg")]),this._v(" where one has to configure the MPDs:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('mpd="ON:bath:play, OFF:bath:stop"\nmpd="INCREASE:bath:volume_increase, DECREASE:bath:volume_decrease"\n')])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Mpd_Bathroom_StartStop")]),t._v("\t"),a("span",{attrs:{class:"token string"}},[t._v('"Start/Stop"')]),a("span",{attrs:{class:"token tag"}},[t._v("\t(Bathroom)")]),t._v("\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mpd"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"ON:bad:play, OFF:bad:stop"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"track-names"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#track-names","aria-hidden":"true"}},[this._v("#")]),this._v(" Track Names")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CurrentTrack")]),t._v("    "),a("span",{attrs:{class:"token string"}},[t._v('"Current track [%s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mpd"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"TITLE:bad:tracktitle"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CurrentArtist")]),t._v("    "),a("span",{attrs:{class:"token string"}},[t._v('"Current artist [%s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mpd"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"ARTIST:bad:trackartist"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ConcatInfo")]),t._v("       "),a("span",{attrs:{class:"token string"}},[t._v('"Now playing [%s]"')]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Mpd_Bathroom_StartStop")]),t._v("       "),a("span",{attrs:{class:"token string"}},[t._v('"Start/Stop"')]),t._v("  "),a("span",{attrs:{class:"token tag"}},[t._v(" (Bathroom)")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mpd"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"ON:bad:play, OFF:bad:stop"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Mpd_Bathroom_NextPrev")]),t._v("        "),a("span",{attrs:{class:"token string"}},[t._v('"Track control"')]),t._v("  "),a("span",{attrs:{class:"token tag"}},[t._v(" (Bathroom)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mpd"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"ON:bad:next, OFF:bad:prev"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Mpd_Bathroom_VolumeControl")]),t._v("   "),a("span",{attrs:{class:"token string"}},[t._v('"Volume [%d%%]"')]),t._v("      "),a("span",{attrs:{class:"token tag"}},[t._v(" (Bathroom)")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mpd"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"INCREASE:bad:volume_increase, DECREASE:bad:volume_decrease, PERCENT:bad:volume"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Rules")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"concat"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" CurrentTrack "),a("span",{attrs:{class:"token keyword"}},[t._v("received update")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("or")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" CurrentArtist "),a("span",{attrs:{class:"token keyword"}},[t._v("received update")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),a("span",{attrs:{class:"token function-name"}},[t._v("ConcatInfo")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("postUpdate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function-name"}},[t._v("CurrentTrack")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('" / "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token function-name"}},[t._v("CurrentArtist")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"sitemap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sitemap","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemap")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("CurrentTrack\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("CurrentArtist\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("ConcatInfo\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Mpd_Bathroom_StartStop "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OFF"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Pause"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ON"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Play"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Mpd_Bathroom_NextPrev  "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OFF"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Previous"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ON"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Next"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Slider")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Mpd_Bathroom_VolumeControl\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"find-song-in-mpd-database-by-title-and-play-this-song"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find-song-in-mpd-database-by-title-and-play-this-song","aria-hidden":"true"}},[this._v("#")]),this._v(" Find song in MPD database by title and play this song")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"items-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#items-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("PlayHappyBirthdays")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Play Happy Birthday"')]),a("span",{attrs:{class:"token function"}},[t._v(" <none>")]),a("span",{attrs:{class:"token tag"}},[t._v(" (All)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mpd"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"ON:playsong=HappyBirthdays"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"sitemap-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemap")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("PlayHappyBirthdays "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ON"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Play"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"play-song-from-current-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#play-song-from-current-list","aria-hidden":"true"}},[this._v("#")]),this._v(" Play song from current list")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"items-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#items-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CurrentRadioStation")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Radio"')]),a("span",{attrs:{class:"token function"}},[t._v(" <none>")]),a("span",{attrs:{class:"token tag"}},[t._v(" (All)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mpd"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"NUMBER:p1:playsongid"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"sitemap-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemap")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Selection")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("CurrentRadioStation "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"ZET Chilli"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Radio Kolor"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Radio 7"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Złote Przeboje"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"EskaROCK"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"RMF Classic"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("7")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"RMF Maxxx"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("11")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"ESKA"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("9")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"RMF"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"MUZO.FM"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("8")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"PR 3"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("12")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"TOK FM"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);
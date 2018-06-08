(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{565:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("This service allows you to persist state updates using the "),a("a",{attrs:{href:"https://aws.amazon.com/dynamodb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon DynamoDB"),a("OutboundLink")],1),t._v(" database. Query functionality is also fully supported.")]),a("p",[t._v("Features:")]),t._m(1),t._m(2),a("p",[t._v('This service is provided "AS IS", and the user takes full responsibility of any charges or damage to Amazon data.')]),t._m(3),t._m(4),t._m(5),a("p",[t._v("You must first set up an Amazon account as described below.")]),a("p",[t._v("Users are recommended to familiarize themselves with AWS pricing before using this service.  Please note that there might be charges from Amazon when using this service to query/store data to DynamoDB. See "),a("a",{attrs:{href:"https://aws.amazon.com/dynamodb/pricing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon DynamoDB pricing pages"),a("OutboundLink")],1),t._v(" for more details. Please also note possible "),a("a",{attrs:{href:"https://aws.amazon.com/free/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Free Tier"),a("OutboundLink")],1),t._v(" benefits.")]),t._m(6),a("ul",[a("li",[a("a",{attrs:{href:"https://aws.amazon.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sign up"),a("OutboundLink")],1),t._v(" for Amazon AWS.")]),a("li",[t._v("Select the AWS region in the "),a("a",{attrs:{href:"https://console.aws.amazon.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWS console"),a("OutboundLink")],1),t._v(" using "),a("a",{attrs:{href:"https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started.html#select-region",target:"_blank",rel:"noopener noreferrer"}},[t._v("these instructions"),a("OutboundLink")],1),t._v(". Note the region identifier in the URL (e.g. "),a("code",[t._v("https://eu-west-1.console.aws.amazon.com/console/home?region=eu-west-1")]),t._v(" means that region id is "),a("code",[t._v("eu-west-1")]),t._v(").")]),t._m(7),t._m(8)]),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),a("table",[t._m(15),a("tbody",[a("tr",[a("td",[t._v("profilesConfigFile")]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("path to the credentials file.  For example, "),a("code",[t._v("/etc/openhab2/aws_creds")]),t._v(". Please note that the user that runs openHAB must have approriate read rights to the credential file. For more details on the Amazon credential file format, see "),a("a",{attrs:{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon documentation"),a("OutboundLink")],1),t._v(".")])]),t._m(16),t._m(17)])]),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),a("p",[t._v("In addition to the configuration properties above, the following are also available:")]),t._m(23),a("p",[t._v("Refer to Amazon documentation on "),a("a",{attrs:{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ProvisionedThroughput.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("provisioned throughput"),a("OutboundLink")],1),t._v(" for details on read/write capacity.")]),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),a("p",[t._v("When the tables are created, the read/write capacity is configured according to configuration. However, the service does not modify the capacity of existing tables. As a workaround, you can modify the read/write capacity of existing tables using the "),a("a",{attrs:{href:"https://aws.amazon.com/console/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon console"),a("OutboundLink")],1),t._v(".")]),t._m(30),t._m(31),a("ol",[t._m(32),a("li",[t._v("Update SDK version in "),a("code",[t._v("scripts/fetch_sdk_pom.xml")]),t._v(". You can use the "),a("a",{attrs:{href:"https://mvnrepository.com/artifact/com.amazonaws/aws-java-sdk-dynamodb",target:"_blank",rel:"noopener noreferrer"}},[t._v("maven online repository browser"),a("OutboundLink")],1),t._v(" to find the latest version available online.")]),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37)]),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"amazon-dynamodb-persistence"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amazon-dynamodb-persistence","aria-hidden":"true"}},[this._v("#")]),this._v(" Amazon DynamoDB Persistence")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Writing/reading information to relational database systems")]),e("li",[this._v("Configurable database table names")]),e("li",[this._v("Automatic table creation")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"disclaimer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disclaimer","aria-hidden":"true"}},[this._v("#")]),this._v(" Disclaimer")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"table-of-contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents","aria-hidden":"true"}},[this._v("#")]),this._v(" Table of Contents")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"#prerequisites"}},[t._v("Prerequisites")]),a("ul",[a("li",[a("a",{attrs:{href:"#setting-up-an-amazon-account"}},[t._v("Setting Up an Amazon Account")])])])]),a("li",[a("a",{attrs:{href:"#configuration"}},[t._v("Configuration")]),a("ul",[a("li",[a("a",{attrs:{href:"#basic-configuration"}},[t._v("Basic configuration")])]),a("li",[a("a",{attrs:{href:"#configuration-using-credentials-file"}},[t._v("Configuration Using Credentials File")])]),a("li",[a("a",{attrs:{href:"#advanced-configuration"}},[t._v("Advanced Configuration")])])])]),a("li",[a("a",{attrs:{href:"#details"}},[t._v("Details")]),a("ul",[a("li",[a("a",{attrs:{href:"#tables-creation"}},[t._v("Tables Creation")])]),a("li",[a("a",{attrs:{href:"#caveats"}},[t._v("Caveats")])])])]),a("li",[a("a",{attrs:{href:"#developer-notes"}},[t._v("Developer Notes")]),a("ul",[a("li",[a("a",{attrs:{href:"#updating-amazon-sdk"}},[t._v("Updating Amazon SDK")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"setting-up-an-amazon-account"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-an-amazon-account","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting Up an Amazon Account")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("strong",[t._v("Create user for openHAB with IAM")]),a("ul",[a("li",[t._v("Open Services -> IAM -> Users -> Create new Users. Enter "),a("code",[t._v("openhab")]),t._v(" to "),a("em",[t._v("User names")]),t._v(", keep "),a("em",[t._v("Generate an access key for each user")]),t._v(" checked, and finally click "),a("em",[t._v("Create")]),t._v(".")]),a("li",[a("em",[t._v("Show User Security Credentials")]),t._v(" and record the keys displayed")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("strong",[t._v("Configure user policy to have access for dynamodb")]),a("ul",[a("li",[t._v("Open Services -> IAM -> Policies")]),a("li",[t._v("Check "),a("em",[t._v("AmazonDynamoDBFullAccess")]),t._v(" and click "),a("em",[t._v("Policy actions")]),t._v(" -> "),a("em",[t._v("Attach")])]),a("li",[t._v("Check the user created in step 2 and click "),a("em",[t._v("Attach policy")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This service can be configured in the file "),e("code",[this._v("services/dynamodb.cfg")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"basic-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic configuration")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),a("th",[t._v("Default")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("accessKey")]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("access key as shown in "),a("a",{attrs:{href:"#setting-up-amazon-account"}},[t._v("Setting up Amazon account")]),t._v(".")])]),a("tr",[a("td",[t._v("secretKey")]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("secret key as shown in "),a("a",{attrs:{href:"#setting-up-amazon-account"}},[t._v("Setting up Amazon account")]),t._v(".")])]),a("tr",[a("td",[t._v("region")]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("AWS region ID as described in "),a("a",{attrs:{href:"#setting-up-amazon-account"}},[t._v("Setting up Amazon account")]),t._v(". The region needs to match the region that was used to create the user.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configuration-using-credentials-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-using-credentials-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Using Credentials File")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Alternatively, instead of specifying "),e("code",[this._v("accessKey")]),this._v(" and "),e("code",[this._v("secretKey")]),this._v(", one can configure a configuration profile file.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Property")]),e("th",[this._v("Default")]),e("th",{staticStyle:{"text-align":"center"}},[this._v("Required")]),e("th",[this._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("profile")]),e("td"),e("td",{staticStyle:{"text-align":"center"}},[this._v("Yes")]),e("td",[this._v("name of the profile to use")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("region")]),e("td"),e("td",{staticStyle:{"text-align":"center"}},[this._v("Yes")]),e("td",[this._v("AWS region ID as described in Step 2 in "),e("a",{attrs:{href:"#setting-up-amazon-account"}},[this._v("Setting up Amazon account")]),this._v(". The region needs to match the region that was used to create the user.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Example of service configuration file ("),e("code",[this._v("services/dynamodb.cfg")]),this._v("):")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{attrs:{class:"token constant"}},[t._v("profilesConfigFile")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v("/etc/openhab2/aws_creds")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("profile")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v("fooprofile")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("region")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v("eu-west-1")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Example of credentials file ("),e("code",[this._v("/etc/openhab2/aws_creds")]),this._v("):")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v("[fooprofile]")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("aws_access_key_id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v("testAccessKey")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("aws_secret_access_key")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v("testSecretKey")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"advanced-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Advanced Configuration")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),a("th",[t._v("Default")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("readCapacityUnits")]),a("td",[t._v("1")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),a("td",[t._v("read capacity for the created tables")])]),a("tr",[a("td",[t._v("writeCapacityUnits")]),a("td",[t._v("1")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),a("td",[t._v("write capacity for the created tables")])]),a("tr",[a("td",[t._v("tablePrefix")]),a("td",[a("code",[t._v("openhab-")])]),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),a("td",[t._v("table prefix used in the name of created tables")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("All item- and event-related configuration is done in the file "),e("code",[this._v("persistence/dynamodb.persist")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#details","aria-hidden":"true"}},[this._v("#")]),this._v(" Details")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"tables-creation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tables-creation","aria-hidden":"true"}},[this._v("#")]),this._v(" Tables Creation")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("When an item is persisted via this service, a table is created (if necessary). Currently, the service will create at most two tables for different item types. The tables will be named "),a("code",[t._v("<prefix><item-type>")]),t._v(", where "),a("code",[t._v("<prefix>")]),t._v(" matches the "),a("code",[t._v("tablePrefix")]),t._v(" configuration property; while the "),a("code",[t._v("<item-type>")]),t._v(" is either "),a("code",[t._v("bigdecimal")]),t._v(" (numeric items) or "),a("code",[t._v("string")]),t._v(" (string and complex items).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Each table will have three columns: "),e("code",[this._v("itemname")]),this._v(" (item name), "),e("code",[this._v("timeutc")]),this._v(" (in ISO 8601 format with millisecond accuracy), and "),e("code",[this._v("itemstate")]),this._v(" (either a number or string representing item state).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"caveats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#caveats","aria-hidden":"true"}},[this._v("#")]),this._v(" Caveats")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"developer-notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#developer-notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Developer Notes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"updating-amazon-sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-amazon-sdk","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating Amazon SDK")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Clean "),e("code",[this._v("lib/*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("scripts/fetch_sdk.sh")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Copy "),e("code",[this._v("scripts/target/site/dependencies.html")]),this._v(" and "),e("code",[this._v("scripts/target/dependency/*.jar")]),this._v(" to "),e("code",[this._v("lib/")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Generate "),e("code",[this._v("build.properties")]),this._v(" entries\n"),e("code",[this._v("ls lib/*.jar | python -c \"import sys; print(' ' + ',\\\\\\\\\\\\n '.join(map(str.strip, sys.stdin.readlines())))\"")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Generate "),e("code",[this._v("META-INF/MANIFEST.MF")]),e("code",[this._v("Bundle-ClassPath")]),this._v(" entries\n"),e("code",[this._v("ls lib/*.jar | python -c \"import sys; print(' ' + ',\\\\n '.join(map(str.strip, sys.stdin.readlines())))\"")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Generate "),e("code",[this._v(".classpath")]),this._v(" entries\n"),e("code",[this._v("ls lib/*.jar | python -c \"import sys;pre='<classpathentry exported=\\\"true\\\" kind=\\\"lib\\\" path=\\\"';post='\\\"/>'; print('\\\\t' + pre + (post + '\\\\n\\\\t' + pre).join(map(str.strip, sys.stdin.readlines())) + post)\"")])])}],!1,null,null,null);e.default=r.exports}}]);
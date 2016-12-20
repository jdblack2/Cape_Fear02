// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"widgets/Print/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Print/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n  \x3cdiv class\x3d"settings-section" data-dojo-attach-point\x3d"searchesSection"\x3e\r\n    \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n\r\n        \x3ctd class\x3d"first"\x3e*${nls.serviceURL}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n            data-dojo-attach-point\x3d"serviceURL"\r\n            required\x3d"true" data-dojo-props\x3d"style:{width:\'100%\'}"/\x3e\r\n          \x3c/td\x3e\r\n\r\n          \x3ctd\x3e\x3cdiv data-dojo-attach-point\x3d"checkProcessDiv" style\x3d"display:none"\x3e\r\n            \x26nbsp;\x26nbsp;\x3cimg data-dojo-attach-point\x3d"checkImg" width\x3d"20px" height\x3d"20px" src\x3d""\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.defaultTitle}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n            data-dojo-attach-point\x3d"defaultTitle" data-dojo-attach-event\x3d"Blur:_onTitleBlur" placeHolder\x3d"ArcGIS WebMap"\r\n            data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.defaultAuthor}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" placeHolder\x3d"Web AppBuilder for ArcGIS"\r\n            data-dojo-attach-point\x3d"defaultAuthor" data-dojo-attach-event\x3d"Blur:_onAuthorBlur" data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\r\n          \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.defaultCopyright}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n            data-dojo-attach-point\x3d"defaultCopyright" data-dojo-attach-event\x3d"Blur:_onCopyrightBlur" data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\r\n          \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr style\x3d"display: none"\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.defaultFormat}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cselect data-dojo-type\x3d"dijit/form/ComboBox" data-dojo-attach-point\x3d"defaultFormat"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr style\x3d"display: none"\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.defaultLayout}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cselect data-dojo-type\x3d"dijit/form/ComboBox" data-dojo-attach-point\x3d"defaultLayout"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Print/setting/css/style.css":".jimu-widget-print-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-print-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-print-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-print-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-print-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; text-align: right; padding-right:15px; min-width: 200px;}.jimu-widget-print-setting .input-table \x3e tbody \x3e tr \x3e .second{width:650px;}",
"*now":function(h){h(['dojo/i18n!*preload*widgets/Print/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/on dojo/Deferred dojo/dom-style dojo/dom-attr esri/request jimu/dijit/Message jimu/portalUtils jimu/portalUrlUtils jimu/utils dojo/store/Memory dijit/form/ValidationTextBox dijit/form/ComboBox".split(" "),function(h,n,p,c,q,r,d,s,t,e,u,l,b,m){return h([n,p],{baseClass:"jimu-widget-print-setting",memoryFormat:new m,memoryLayout:new m,_portalPrintTaskURL:null,startup:function(){this.inherited(arguments);
this.setConfig(this.config);s.set(this.checkImg,"src",require.toUrl("jimu")+"/images/loading.gif");this.own(q(this.serviceURL,"Change",c.hitch(this,this.onUrlChange)))},onUrlChange:function(){var a=this.serviceURL.get("value");if(a){d.set(this.checkProcessDiv,"display","");this.memoryFormat.data={};this.memoryLayout.data={};this.defaultFormat.set("store",this.memoryFormat);this.defaultLayout.set("store",this.memoryLayout);this.defaultFormat.set("value","");this.defaultLayout.set("value","");d.set(this.defaultFormat.domNode.parentNode.parentNode,
"display","none");d.set(this.defaultLayout.domNode.parentNode.parentNode,"display","none");var g=l.setHttpProtocol(this.serviceURL.get("value")),f=l.getNewPrintUrl(this.appConfig.portalUrl);g===f||/sharing\/tools\/newPrint$/.test(g)?(d.set(this.checkProcessDiv,"display","none"),d.set(this.defaultFormat.domNode.parentNode.parentNode,"display","none"),d.set(this.defaultLayout.domNode.parentNode.parentNode,"display","none")):this._getPrintTaskInfo(a)}},_getPrintTaskInfo:function(a){t({url:a,content:{f:"json"},
handleAs:"json",callbackParamName:"callback",timeout:6E4,load:c.hitch(this,this._handlePrintInfo),error:c.hitch(this,this._handleError)})},_handleError:function(a){d.set(this.checkProcessDiv,"display","none");var g=new e({message:a.message||this.nls.warning,buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){g.close()})}]})},_handlePrintInfo:function(a){d.set(this.checkProcessDiv,"display","none");d.set(this.defaultFormat.domNode.parentNode.parentNode,"display","");d.set(this.defaultLayout.domNode.parentNode.parentNode,
"display","");if(a&&a.parameters)for(var g=a.parameters.length,f=0;f<g;f++){var b=a.parameters[f];if("Format"===b.name||"Layout_Template"===b.name){for(var c=a.parameters[f].choiceList,h=c.length,e=[],k=0;k<h;k++)e.push({name:c[k],id:c[k]});c=a.parameters[f].defaultValue;"Format"===b.name?(this.memoryFormat.data=e,this.defaultFormat.set("store",this.memoryFormat),this.config.serviceURL===this.serviceURL.get("value")&&this.config.defaultFormat?this.defaultFormat.set("value",this.config.defaultFormat):
this.defaultFormat.set("value",c)):(this.memoryLayout.data=e,this.defaultLayout.set("store",this.memoryLayout),this.config.serviceURL===this.serviceURL.get("value")&&this.config.defaultLayout?this.defaultLayout.set("value",this.config.defaultLayout):this.defaultLayout.set("value",c))}}},setConfig:function(a){this.config=a;this.loadPrintURL(a);a.defaultTitle?this.defaultTitle.set("value",b.stripHTML(a.defaultTitle)):this.defaultTitle.set("value","ArcGIS WebMap");a.defaultAuthor?this.defaultAuthor.set("value",
b.stripHTML(a.defaultAuthor)):this.defaultTitle.set("value","Web AppBuilder for ArcGIS");a.defaultCopyright&&this.defaultCopyright.set("value",b.stripHTML(a.defaultCopyright))},_onTitleBlur:function(){this.defaultTitle.set("value",b.stripHTML(this.defaultTitle.get("value")))},_onAuthorBlur:function(){this.defaultAuthor.set("value",b.stripHTML(this.defaultAuthor.get("value")))},_onCopyrightBlur:function(){this.defaultCopyright.set("value",b.stripHTML(this.defaultCopyright.get("value")))},getConfig:function(){if(!this.serviceURL.get("value")){var a=
new e({message:this.nls.warning,buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){a.close()})}]});return!1}this.config.serviceURL=this.serviceURL.get("value");this.config.defaultTitle=b.stripHTML(this.defaultTitle.get("value"));this.config.defaultAuthor=b.stripHTML(this.defaultAuthor.get("value"));this.config.defaultCopyright=b.stripHTML(this.defaultCopyright.get("value"));this.config.defaultFormat=this.defaultFormat.get("value");this.config.defaultLayout=this.defaultLayout.get("value");
return this.config},loadPrintURL:function(){this._getPrintTaskURL(this.appConfig.portalUrl).then(c.hitch(this,function(a){this.serviceURL.set("value",a)}))},_getPrintTaskURL:function(a){var b=new r;if(this.config&&this.config.serviceURL)return b.resolve(this.config.serviceURL),b;u.getPortalSelfInfo(a).then(c.hitch(this,function(a){(a=a&&a.helperServices&&a.helperServices.printTask&&a.helperServices.printTask.url)?b.resolve(a):b.reject("error")}),c.hitch(this,function(a){new e({message:this.nls.portalConnectionError||
a&&a.message||"portal connection error"});b.reject("error");console.error(a)}));return b}})});
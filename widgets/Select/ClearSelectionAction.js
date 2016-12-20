// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","jimu/BaseFeatureAction","jimu/SelectionManager"],function(b,c,d){return b(c,{name:"ClearSelection",iconClass:"icon-clear-selection",constructor:function(){this.label=window.jimuNls.featureActions.ClearSelection},isFeatureSupported:function(a){return 0<a.features.length&&a.geometryType},onExecute:function(a){d.getInstance().clearSelection(a)},getIcon:function(a){return this.folderUrl+"images/"+this.name+"_"+a+"."+this.iconFormat}})});
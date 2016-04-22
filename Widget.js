define(['dojo/_base/declare',
      'dojo/_base/lang',
      'jimu/BaseWidget',
      "esri/InfoTemplate",
      "esri/map",
      "esri/layers/FeatureLayer",
      "esri/symbols/SimpleFillSymbol",
      "esri/symbols/SimpleLineSymbol",
      "esri/symbols/SimpleMarkerSymbol",
      "esri/symbols/PictureMarkerSymbol",
      "esri/renderers/SimpleRenderer",
      "esri/tasks/query",
      "esri/toolbars/draw",
      "dojo/dom",
      "dojo/on",
      "dojo/parser",
      "dojo/_base/array",
      "esri/Color",
      "dijit/form/Button",
      "dijit/_TemplatedMixin",
      "dijit/_WidgetsInTemplateMixin",
      "dojo/domReady!"
      ],
  function(declare, lang, _BaseWidget, InfoTemplate, Map, FeatureLayer, SimpleFillSymbol,
          SimpleLineSymbol, SimpleMarkerSymbol, PictureMarkerSymbol, SimpleRenderer,
          Query, Draw, dom, on, parser, arrayUtil, Color, Button, _TemplatedMixin, 
          _WidgetsInTemplatedMixin
    ) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([_BaseWidget, _TemplatedMixin, _WidgetsInTemplatedMixin], {

      baseClass: 'jimu-widget-bridgereports',
      name: 'BridgeReports',

      postCreate: function() {
        this.inherited(arguments);
        console.log('postCreate');
      },

      startup: function() {
        this.inherited(arguments);
        console.log('startup');

        var selectionToolbar;//, featureLayer;
        var selectionMode;

        var bridgeSelectionToolbar, bridgeFeatureLayer;
        var bridgeWebiLink1stPart = 'http://reports/biportal/reportlauncher.aspx?reportID=9999999&Bridge ID Prompt=';
        // ObjectIDs go here, encapsulated in straight brackets and
        // comma separated.
        var bridgeWebiLink2ndPart;
        var bridgeWebiLink3rdPart = '&Format=PDF';
      },

      onOpen: function() {
        dom.byId("mapIdNode").innerHTML += 'map id:' + this.map.id + '<br>' + 'graphicsLayerIds: ';
        dom.byId("mapIdNode").innerHTML += this.map.graphicsLayerIds + '<br>' + 'layerIds: ' + this.map.layerIds;
        mapFeature = this.map.getLayer(this.map.layerIds[0]);
        // Add the new map feature and
        // get rid of this part of the code.
        console.log('opened with ' + mapFeature.id);
        console.log('b0');

        console.log('b3-2');
        /*
        function _addBridgesToTheMap() {
          console.log("button Clicked.");
          
          var bridgeFeatureLayer;
          this.map.basemap = "streets";
          var bridgeMarkerSymbol = new PictureMarkerSymbol('./images/cyan_bridge_symbol_2.png',
          25, 19);
          // Can apply a renderer after the layer is added to the map...
          // Use the bridgeMarkerSymbol for now, apply renderer later.
          var bridgeMarkerRenderer = new SimpleRenderer(bridgeMarkerSymbol);
          bridgeMarkerRenderer.setRotationInfo({
            field:"ROTATION",
            type:"geographic"
          });
          var bridgeContent = "Non-State Bridge <br>" +
                              "<b>Bridge ID</b>: ${BRIDGE_ID}";
          var bridgeInfoTemplate = new InfoTemplate("${FIELD_NAME}", bridgeContent);
          ///////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////
          bridgeFeatureLayer = new FeatureLayer("http://wfs.ksdot.org/arcgis_web_adaptor/rest/services/Structures/Non_State_Bridges/MapServer/0",
          {
            mode: FeatureLayer.MODE_ONDEMAND,
            infoTemplate: bridgeInfoTemplate,
            outFields: ["*"]
          });
          //Apply a new renderer here.
          bridgeFeatureLayer.setSelectionSymbol(bridgeMarkerSymbol);
          //bridgeFeatureLayer.on("selection-complete", showBridgeIDs);
          //bridgeFeatureLayer.on("selection-clear", function () {
          //  dom.byId('bridgeIdOutput').innerHTML = "<i>No Selected Bridges</i>";
          //});
          */
        //var _addBridgesToTheMap = function(evt) {
        //  console.log("Adding...");
        //}

        // This.own with on(this.buttton, "action", and lang.hitch(this, this.functionName)
        this.own(on(this.addBridgesButton, "click", lang.hitch(this, this._addBridgesToTheMap)));
        

        //on(dom.byId("addBridgesButton"), "click", function () {
        // console.log("Add bridges clicked.");
        //  addBridgesToTheMap();
        //});
        
        // Add in the code to add the map service here
        // wire it up to a button so that you can add
        // the data programatically.

        // Try to stick as closely to the JSAPI (working)
        // version of the map as possible, only adding
        // in the WAB stuff where it's needed, since it
        // seems to be much more troublesome than the
        // JSAPI version.

        // If this doesn't start working soon, just work
        // on improving the JSAPI version, maybe with
        // Angular or Bootstrap.js since Dojo is a pain.

        //var queryTask = new QueryTask("http://wfs.ksdot.org/arcgis_web_adaptor/rest/services/Structures/Non_State_Bridges/MapServer/0");
        /*
        var bridgeQuery = new Query();
        
        console.log('b4');
        bridgeQuery.query = "1 = 1"
        bridgeQuery.objectIds = [2582, 14820, 14607, 2536, 1799, 1798];
        bridgeQuery.outFields = ["*"];
        bridgeQuery.returnGeometry = false;
        
        console.log('b5');
        queryTask.on("complete", queryTaskExecuteCompleteHandler);
        queryTask.on("error", queryTaskErrorHandler);
        
        queryTask.execute(bridgeQuery);
        
        */
        console.log('Finished onOpen.');
      },

      _addBridgesToTheMap: function(evt) {
        console.log("adding....");
        console.log("Using" + this.bridgeWebiLink1stPart)
        // Put the JSAPI code to add bridge features here now
        // that the function is properly accessible.
      },

      onClose: function() {
        console.log('onClose');
      }
  });
});
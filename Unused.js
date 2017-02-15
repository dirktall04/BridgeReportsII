// Removed functionality after testing completed.
      // Better to have the user just add the map through the layers widget.
      /*
      <div><button class='addBridgesButton' data-dojo-attach-point="addBridgesButton" data-dojo-type="dijit/form/Button">Add bridges to the map</button></div>
      _addBridgesToTheMap: function(evt) {
        this.addBridgesButton.disabled = "true";
        setTimeout(function () {//donothing
        }, 500);

        this._mapFeature = this.map.getLayer(this.map.layerIds[0]);
        console.log("adding....");
        console.log("Using " + this._bridgeWebiLink1stPart);
        console.log("Map check: " + this.map.graphicsLayerIds);
        console.log("MapFeature: " + this._mapFeature.id);
        //require.toUrl allows for widget location relative pathing.
        //this._bridgeMarkerSymbol1 = new PictureMarkerSymbol(location.href + 'widgets/images/cyan_bridge_symbol_2.png'),
        //25, 19);

        //this._bridgeMarkerSymbol2 = new PictureMarkerSymbol(require.toUrl('./images/cyan_bridge_symbol_2.png'),
        //50, 38);


        this._bridgeMarkerSymbol1 = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_DIAMOND, 12,          
          new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
            new Color([41,73,231]),
          2),
          new Color([231,223,24,0.8])
        );
        // Can apply a renderer after the layer is added to the map...
        // Use the bridgeMarkerSymbol for now, apply renderer later.
        
        var bridgeContent = "Non-State Bridge <br>" +
                            "<b>Bridge ID</b>: ${BRIDGE_ID}";
        var bridgeInfoTemplate = new InfoTemplate("${FIELD_NAME}", bridgeContent);
        ///////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////
        this._bridgeFeatureLayer = new FeatureLayer("http://wfs.ksdot.org/arcgis_web_adaptor/rest/services/Structures/Non_State_Bridges/MapServer/0",
        {
          mode: FeatureLayer.MODE_ONDEMAND,//.MODE_SNAPSHOT,
          infoTemplate: bridgeInfoTemplate,
          outFields: ["*"]
        });

        this._bridgeFeatureLayer.setSelectionSymbol(this._bridgeMarkerSymbol1);

        this.map.addLayer(this._bridgeFeatureLayer);
      },

      */

      // Should be able to use the above code to write something that will let me get the information
        // necessary to determine which report link each layer should use, and also
        // when each layer is turned on in the legend and also used for selection in
        // this widget.
        
        // Test with layerinfo.title as that should match what the user sees for that layer. -- Will still need
        // to do backend checks on the data source, but the layerinfo.title info might be more user friendly.
        
        //dom.byId("mapIdNode").innerHTML += arrayUtil.forEach(this.map.graphicsLayerIds, function (layerId) {
        //  var layer = this.map.getLayer(layerId);
        //  var title = layer.label || layer.title || layer.name || layer.id || " ";
        //  return title;
        //}, this) + '<br>';
        //this.map.basemap = "gray";
        
        //this._thisMap = this.map;
        // Add the new map feature and
        // get rid of this part of the code.
        //##console.log('opened with ' + this.map.getLayer(this.map.layerIds[0]).id;

        /*
        if (reportLinkedLayers.length >= 1) {
          //if (reportLinkedLayersArray[0].length >= 1) {
          var layerNameCount = 0;
          console.log('reportLinkedLayers.length >= 1');

          // Loop though the list to build the dropDownContents
          // .forEach item in reportLinkedLayers, dropDownContents +=
          // 'option value = " + + </option>'
          arrayUtil.forEach(reportLinkedLayers, function (layerName) {
            if (layerNameCount >= 1) {
              dropDownContents += "<option value = " + 
                layerName + "</option>";
            } else {
              dropDownContents += "<option value = " + 
                layerName + "</option>";
            }
            layerNameCount += 1;
          });
          dom.byId("reportableLayersDropdown").innerHTML = '<select name="reportLayersDropdown" style="min-width:80%;max-width:90%;">' +
          dropDownContents + '</select>';
        } else {
          console.log('reportLinkedLayers.length < 1');
          dom.byId("reportableLayersDropdown").innerHTML = "<i>No report-linked layers detected.</i></br></br></br>";
        }

        <div><button class='listAllLayers2' data-dojo-attach-point="listAllLayers2" data-dojo-type="dijit/form/Button">List all the layers</button></div>
        //this.own(on(this.listAllLayers2, "click", lang.hitch(this, this._consoleLogAllLayerNames)));
        <div><button id="dropDownButton1" data-dojo-attach-point="dropDownButton1" data-dojo-type="dijit/form/Button">Create Report List</button></br></br></div>
        //this.own(on(this.dropDownButton1, "click", lang.hitch(this, this._dropDownButton1Handler)));

        */


        // Create a dictionary (javascript calls it 'map', which is infortunate as that leads
        // to a name collision with default esri nomenclature for the web map) that stores
        // the information for all known layers that can be used to
        // access a report.

        // Ex. state bridges and non-state bridges.

        //var testMapDict = new Map();
        //testMapDict.set('Non-State Bridges', ['http://wfs.ksdot.org/arcgis_web_adaptor/rest/services/Structures/Non_State_Bridges/MapServer/0',
        // 'bridgeAttribute', 'reportLink1', 'reportLink2', 'reportLink3']);
        //testMapDict.set('State Bridges', ['http://wfs.ksdot.org/arcgis_web_adaptor/rest/services/Structures/State_Bridges/MapServer/0',
        // 'bridgeAttribute', 'reportLink1', 'reportLink2', 'reportLink3']);

        //testMapDict.forEach(function (value, key, map) {
        //  console.log('Value: ' + value);
        //  console.log('Key: ' + key);
        //});

        // Use str.toLowerCase() prior to comparisons.
        /*
        var layerToTest1 = 'Non-State Bridges'
        var layerToTestUrl1 = 'http://wfs.ksdot.org/arcgis_web_adaptor/rest/services/Structures/Non_State_Bridges/MapServer/0'
        var defaultAttribute1 = 'BRIDGE_ID'
        var report1a = ['http://biportal.ksdot.org/report1a', ''] // URL, non-standard Atribute used as report key (if any).
        var report1b = ['http://biportal.ksdot.org/report1b', '']
        var report1c = ['http://biportal.ksdot.org/report1c', 'MAX_CLEARANCE']

        var layerToTest2 = 'State Bridges'
        var layerToTestUrl2 = 'http://wfs.ksdot.org/arcgis_web_adaptor/rest/services/Structures/State_Bridges/MapServer/0'
        var defaultAttribute2 = 'STR_NAME'
        var report2a = ['http://biportal.ksdot.org/report2a', ''] // URL, non-standard Atribute used as report key (if any).
        var report2b = ['http://biportal.ksdot.org/report2b', 'MIN_CLEARANCE']
        var report2c = ['http://biportal.ksdot.org/report2c', '']

        var testDict = Object.create(null); // Creates a bare/pure dictionary from the object constructor.

        //testDict["CT"] = ["alex", "liza"];
        //testDict["AK"] = ["fred", "liza"];

        testDict[layerToTest1] = [layerToTestUrl1, defaultAttribute1, [report1a, report1b, report1c]];
        testDict[layerToTest2] = [layerToTestUrl2, defaultAttribute2, [report2a, report2b, report2c]];

        //console.log(testDict["CT"]);
        //console.log(testDict["AK"][0]);
        console.log('t1[0]: ' + testDict[layerToTest1][0]);
        console.log('t1[1]: ' + testDict[layerToTest1][1]);
        console.log('t1[2]: ' + testDict[layerToTest1][2]);
        //console.log('t2[0]: ' + testDict[layerToTest2][0]);
        //console.log('t2[1]: ' + testDict[layerToTest2][1]);
        //console.log('t2[2]: ' + testDict[layerToTest2][2]);

        Object.keys(testDict).forEach(function (key) {
          console.log(key + ': ' + testDict[key]);
        });

        testDict[layerToTest1][2].forEach(function (element, index, array) {
          if (element[1] != '') {
            element.forEach(function (elem2, ind2, arr2) {
              console.log('Full element' + ': ' + element);
              console.log('Elem 2, ind ' + ind2 + ': ' + elem2);
            });
          } else {
            console.log('Element index 1 is blank.');
          }
          
        });
        */

        // Consider putting this information out in a separate .js file that this
        // one reads on load to make the widget a bit more easily maintainable.

        // Once we are able to retrieve the data from the dictionary, as above, need to be able to
        // test the url for the layer and make sure that it matches the url in the dictionary.
        // Then, we can proceed with using the attribute column defined in the dictionary
        // to generate urls + parameters for the reports which are listed afterwards.
        // Each report should have a name and a URL, and maybe an attribute associated with it
        // If no attribute is given for the report, use the layer's default attribute to get
        // the data for the selected items, to be passed into the report.


        /*
        if (typeof(Storage) !== "undefined") {
          console.log('Local Storage available!');
        } else {
          console.log('No local storage support.')
        }
        */
        /*
        function logMapElements(value, key, map) {
          console.log("m[" + key + "] = " + value);
        }
        new Map([["foo", 3], ["bar", {}], ["baz", undefined]]).forEach(logMapElements);
        // logs:
        // "m[foo] = 3"
        // "m[bar] = [object Object]"
        // "m[baz] = undefined"
        */


        // Need a combo box with the current map's layers for a selection type.
        // Also need a combo box for each report that can be reached using that
        // layer's information.
        // Could even do a combo box for the layer's attribute to be used for the
        // report, if that is a thing that changes between reports for a given
        // layer to be reported upon.

        // Start with just developer defined information even so, since it doesn't seem to be as easy to update/use
        // local storage as it would be if you could just include some information in a javascript file.

        // Use the data from layer.name and layer.url to match against the list of associated layers
        // that can be used to generate a report.

        // For instance, with Non-State Bridges and http://wfs.ksdot.org/arcgis_web_adaptor/rest/services/Structures/Non_State_Bridges/MapServer/0
        // you have access to two reports
        // that each have their own URLs.
        // And that use a specific attribute from the Non-State Bridges layer... in this case BRIDGE_ID.
        // It is important to note that both the URLs for reports that go with a layer, and the
        // attribute to use from that layer for each report need to be user configurable.

        // Can add a button/menu for the configuration right in the widget, or can use
        // a separate widget, but I think it would be better for now to try to allow the user to do everything
        // in one widget rather than separating the information out and then trying to make sure that
        // they added the right widget to get what they wanted done.

        //console.log(layer);
          //console.log(layer.arcgisProps.title);
          //console.log("LayerName = " + layer.name);
          //console.log("LayerUrl = " + layer.url);

          // arrayUtil.forEach(this.map.layerIds...){
            // Figure out a flattened way to compare the layerId's
            // arcgisProps.Title and Url properties with what's listed
            // in the other array for validation.
            // If they match, add the Title to the new array for option values.
            // The option values should use layerID and layer Title.
            // Possibly use "Title (Url)"" for the dropdown display value,
            // but that will likely exceed the length possible, so maybe not.
            // The option value that gets read by the rest of the
            // script should be the layerID so that it is easier
            // to reference the layer for use in the next
            // function to follow.
          //}

        // Add in the code to add the map service here
        // wire it up to a button so that you can add
        // the data programatically.

        // Need to take all the layers in the map and represent them
        // with a checkbox and label.

        // Then, modify the current selection (if any) with the requested
        // button operation, i.e. new selection, add selection, subtract selection,
        // clear selection, show feature ids.


      /*
      // Function from the layer list widget.
      _findSelectableLayers: function() {
        // summary:
        //    obtain basemap layers and operational layers if the map is not webmap.
        var selectableLayers = [],
        // emulate a webmapItemInfo.
        var retObj = {
          itemData: {
            baseMap: {
              baseMapLayers: []
            },
            operationalLayers: []
          }
        };
        array.forEach(this.map.graphicsLayerIds, function(layerId) {
          var layer = this.map.getLayer(layerId);
          if (layer.isOperationalLayer) {
            operLayers.push({
              layerObject: layer,
              title: layer.label || layer.title || layer.name || layer.id || " ",
              id: layer.id || " "
            });
          }
        }, this);
        array.forEach(this.map.layerIds, function(layerId) {
          var layer = this.map.getLayer(layerId);
          if (layer.isOperationalLayer) {
            operLayers.push({
              layerObject: layer,
              title: layer.label || layer.title || layer.name || layer.id || " ",
              id: layer.id || " "
            });
          } else {
            basemapLayers.push({
              layerObject: layer,
              id: layer.id || " "
            });
          }
        }, this);

      */

      /*
      _getLayersList: function(evt) {
        console.log("Accessing layers...");
        this._var formWidgets = registry.findWidgets(formNode);
      },
      */

      /*
        var dropDownBoxNode = null;
        dropDownBoxNode = dom.byId("dropDownBox1");
        if (dropDownBoxNode) {
          console.log("Truthy ");
          console.log(dropDownBoxNode);
        } else {
          console.log("Falsey");
        }
        */

      // The next function is commented because it is no longer used.
      /*
      _generateSelectableLayersDropdown: function (validatedOptionsArray) {
        var dropDown1Html = '<select id="dropDownBox1" data-dojo-attach-point="dropDownBox1">';

        arrayUtil.forEach(validatedOptionsArray, function (validatedOptionItem) {
          dropDown1Html += '<option value="' + validatedOptionItem[1] + '">' + validatedOptionItem[0] + '</option>';
        }, this);

        dropDown1Html += "</select>";
        return dropDown1Html;
      },
      */

      // Need to disable everything that isn't usable without preceding operations
      // until those operations complete, then enable the objects when they
      // are usable.

      // For instance, the draw tools should not be enabled until
      // after the dropdownbox is populated.
      // Same with the populate reports dropdown button.

      // ^^ :DONE

      // Will have to use node.js to read in a prebuilt
      // list of report links (with IDs) and their user-friendly
      // names/titles, along with the layer that they're associated
      // with.

      // Then, need to allow the user to create new associated
      // layers and associate those with new reports.

      // Save the modified data into the widget folder and
      // reread it the next time that it gets requested.

      // More important might be figuring out how to display
      // the list of layers in the map and their user-friendly
      // name to the user, however. This is necessary so that
      // the user can select the layer that they want to use
      // for map feature selection.

      // For the time being, only allow selection on one layer
      // at a time. I'm not sure if the WebI reports allow
      // for multiple types of features yet anyways or how
      // we would build the query for that kind of a report.

      // Current status: Core functionality seems to be working
      // correctly. Just need to try sending the bridge IDs to the
      // to the Reports Portal now that it's been patched with the
      // ability to accept multiple IDs parameters in one and 
      // implement the option to do so as a parameter in the
      // body of the (POST) request rather than in the URL as
      // a GET request.
      // Next, need to move from adding the layers manually
      // to simply querying the layer widget to find out what layers
      // are in the map and let the user normally add the layers
      // that they want to use without hard coding them into
      // this application.

      // Will also require the ability to let users associate
      // each layer with a report endpoint. Maybe start with
      // some default endpoints for each of the reports that
      // are specifically known to the application.
      // -- Possibly store these in an editable .js file
      // or something that goes along with the widget and
      // acts as a data store.
      // -- SqlLite seems like it would too much for something
      // so simple, but maybe it's worth experimenting with
      // for future reference.

      // Each associated layer will need to be able to
      // give the users a selection list or drop-down
      // of which report they want to be able to access
      // since there are at least 3 reports for bridges
      // for the state version and at least 3 reports
      // for bridges for the non-state version
      // and they're separate report IDs, with
      // separate report formats.

      // ^^ Mostly done.

      //require.toUrl allows for widget location relative pathing.
        //this._bridgeMarkerSymbol1 = new PictureMarkerSymbol(location.href + 'widgets/images/cyan_bridge_symbol_2.png'),
        //25, 19);

        //this._bridgeMarkerSymbol2 = new PictureMarkerSymbol(require.toUrl('./images/cyan_bridge_symbol_2.png'),
        //50, 38);
      //<div></br><button id='detectReportableLayers' data-dojo-attach-point='detectReportableLayers' data-dojo-type="dijit/form/Button">Detect Reportable Layers</button></br></div>

      //Test getting the layers and printing their name...
      // need this for selection of existing layers.
      _consoleLogAllLayerNames:  function(evt) {
        dom.byId("mapIdNode").innerHTML += 'map id:' + this.map.id + '<br>' + 'graphicsLayerIds: ';
        dom.byId("mapIdNode").innerHTML += this.map.graphicsLayerIds + '<br>' + 'layerIds: ' + this.map.layerIds + '<br>';
        arrayUtil.forEach(this.map.layerIds, function (layerId) {
          console.log("Passed in layerId: " + layerId.toString());
          var layer = this.map.getLayer(layerId);
          
          if (layer.isOperationalLayer) {
            var title = layer.label || layer.title || layer.name || layer.id || " ";
            console.log("Title: " + title);
          } else if (typeof(layer.url) !== "undefined") {
            //else if (typeof(layer.name) !== "undefined" && typeof(layer.url) !== "undefined") {
            var title = layer.label || layer.title || layer.name || layer.id || " ";
            console.log("Label: " + layer.label);
            console.log("Title: " + layer.title);
            console.log("Name: " + layer.name);
            console.log("ID: " + layer.id);
            console.log("varTitle: " + title);
            console.log('arcgisProps.Title : ' + layer.arcgisProps.title);
            console.log('Url: ' + layer.url);
          } else {
          }

        }, this);

        var basemapLayers = [],
          operLayers = [];
        // emulate a webmapItemInfo.
        var retObj = {
          itemData: {
            baseMap: {
              baseMapLayers: []
            },
            operationalLayers: []
          }
        };
        array.forEach(this.map.graphicsLayerIds, function(layerId) {
          var layer = this.map.getLayer(layerId);
          if (layer.isOperationalLayer) {
            operLayers.push({
              layerObject: layer,
              title: layer.label || layer.title || layer.name || layer.id || " ",
              id: layer.id || " "
            });
          }
        }, this);
        array.forEach(this.map.layerIds, function(layerId) {
          var layer = this.map.getLayer(layerId);
          if (layer.isOperationalLayer) {
            operLayers.push({
              layerObject: layer,
              title: layer.label || layer.title || layer.name || layer.id || " ",
              id: layer.id || " "
            });
          } else {
            basemapLayers.push({
              layerObject: layer,
              id: layer.id || " "
            });
          }
        }, this);

        console.log('c0');

        console.log('c3-2');

        var selectedValue = domAttr.get('dropDownBox1', 'value');
        var selectedValue = domAttr.get('dropDownBox1', 'valueText');
        var allAttributes = registry.byId('dropDownBox1').attributes;
        console.log('');

        console.log('Finished _consoleLogAllLayerNames.');
      },

              //arrayUtil.forEach(this.map.graphicsLayerIds, function (layerId) {
          //var layer = this.map.getLayer(layerId);
          //if (layer.isOperationalLayer) {
          //  var title = layer.label || layer.title || layer.name || layer.id || " ";
          //  dom.byId("mapIdNode").innerHTML += title + 'test2 <br>';
          //}
        //}, this);

        //console.log('b3-2');

        /*
        arrayUtil.forEach(this.map.layerIds, function (layerId) {
          var layer = this.map.getLayer(layerId);
          var currentLayerSet = [];
          if (typeof(layer.arcgisProps.title) !== "undefined" && layer.arcgisProps.title !== "null"  && typeof(layer.url) !== "undefined") {
            currentLayerSet.push(layer.arcgisProps.title);
            currentLayerSet.push(layer.url);
            currentLayerSet.push(layerId);
            currentLayerItems.push(currentLayerSet);
          } else {
          }
        }, this);
        */

        /*
        arrayUtil.forEach(currentLayerItems, function (layerSet) {
          arrayUtil.forEach(this._savedLayersInfo, function (savedLayerItem) {
            if (savedLayerItem[0].toLowerCase().indexOf(layerSet[0].toString().toLowerCase()) >= 0
              && savedLayerItem[1].toLowerCase().indexOf(layerSet[1].toString().toLowerCase()) >= 0) {
              validatedOptionLayers.push([layerSet[0], layerSet[2]]);
            } else {
            }
          }, this);
        }, this);
        */

        /*
        
        domConstruct.empty("dropDownBox2");
        arrayUtil.forEach(reportsForSelectedLayer, function (reportItem) {
          // Use domConstruct to remove/add elements to the first options dropdown box.
          var newOption = domConstruct.toDom('<option value="' + reportItem[1] + '">' + reportItem[0] + '</option>');
          domConstruct.place(newOption, "dropDownBox2");
          //console.log("Validated Option Layer " + ik + ": " + validatedOptionLayer.toString());
        }, this);
        

        this._featureItemsLayer = this.map.getLayer(selectedValue); // selectedValue == selected layerId.
        
        // For testing purposes, remove when done.
        console.log(this._featureItemsLayer);
        dom.byId("mapIdNode").innerHTML += 'json String:' + json.toJson(this._featureItemsLayer)+ '<br>';
        //console.log(json.toJson(this._featureItemsLayer));
        
        // init with the selected layer
        // //this._initFeatureItemsSelectToolbar();
        
        */
        // Start registering the onChange handler here.

        if (this._dropDownBox0HandlerRef) {
          console.log("Removing _dropDownBox0HandlerRef.");
          this._dropDownBox0HandlerRef.remove();
        }
        else{
          // do nothing;
        }

        // Kind of a weird way of doing things, but it seems to work.
        // Persists a reference to the on change handler, so that it can be removed later and we
        // won't end up with multiple copies of it attached to the dropdown box.
        this.own(this._dropDownBox0HandlerRef = on(this.dropDownBox0, "change", lang.hitch(this, this._dropDownBox0Handler)));
        // Fire the handler once to initialize the (first) second drop-down box.
        this._dropDownBox0Handler();


        arrayUtil.forEach(this._savedLayersInfo, function (layerToAddOption) {
          // Use domConstruct to remove/add elements to the first options dropdown box.
        }, this);

        var selectedValueText = domAttr.get('dropDownBox0', 'valueText');
        // ^^ This doesn't work. Use 'value' and match
        // it with the data in the data store instead.


        //var newLayerData = null;
        //newLayerData = this.map.addLayer(this._featureLayerToAdd); // Do a callback here that updates the memory store object with an overwrite.

        //qResultItem.mapLayerId = newLayerData.id; 
        //qResultItem.isInMap = true;
        //qResultItem.mapLayerId = true; // Something that I would like to be able to access with a callback to the
        // map.getlayerId function.
        //this._savedLayerMemoryStore.put(qResultItem, {overwrite: true});

        //console.log("Layer " + selectedValue + " added.");

        // Query the datastore for the added feature's data... or you should maybe
        // already have it instead of using the value from the this.dropdownbox.options[this.dropdownbox.selectedindex.index]....
        // because you will have properly architected the app so that you don't have to make such a silly call.

        // Just query the datastore with the info from:
        // \\ var selectedValue = domAttr.get('dropDownBox0', 'value');
        // \\ or
        // \\ var selectedValueText = domAttr.get('dropDownBox0', 'valueText');
        // ... whichever is less ridiculous to use as a query attribute.

        // change the feature layer's entry in the data store here so that it shows
        // it being in the map. Don't update the layer id yet though, because the
        // map has probably not quite finished loading. Maybe you can do _timeOutDetectLayers
        // as a callback to this.map.addLayer and eventually strip out the timeout call and
        // go straight to the interior call that it's protecting since the layer should be
        // fully functional by the time that the callback is called... if that's easy to
        // accomplish.

        //console.log("Selected index: " + selectedIndex);
        //console.log("Selected valuetext: " + selectedValueText);

        // Now use selectedValueText to get the list of reports back out from the
        // (retrieved earlier) saved info array.
        /*
        arrayUtil.forEach(this._savedLayersInfo, function (savedLayerItem) {
          // Needs to be modified to actually represent what should be matched here.
          if (savedLayerItem[0].toLowerCase() === selectedValueText.toLowerCase()) {
            console.log(savedLayerItem[0] + " matched " + selectedValueText);
            reportsForSelectedLayer = savedLayerItem[3];
          } else {
            console.log(savedLayerItem[0] + " did not match " + selectedValueText);
          }
        }, this);
        */

        //var selectedIndex = domAttr.get('dropDownBox1', 'selectedIndex');
        //var selectedIndex = this.dropDownBox0.options[this.dropDownBox0.selectedIndex].index;
        //ar selectedValueText = this.dropDownBox0.options[this.dropDownBox0.selectedIndex].text;


        // Replaced by the sVQuery.
        /*
        arrayUtil.forEach(this._savedLayersInfo, function (savedLayerItem) {
          // Needs to be modified to actually represent what should be matched here.
          if (savedLayerItem[0].toLowerCase() === selectedValue.toLowerCase()) {
            console.log(savedLayerItem[0] + " matched " + selectedValue);
            reportsForSelectedLayer = savedLayerItem[3];
          } else {
            console.log(savedLayerItem[0] + " did not match " + selectedValue);
          }
        }, this);
        */

        // Accepts {key1:value1, key2:value2, key3:value3},
        // {key1:value4, key2:value5, key3:value6},
        // {key1:value7, key2:value8, key3:value9} etc.
        // Needs to be generated based on the loaded json.
        // Should include the layer name, layer url, isInMap, mapLayerId.
        // First key/value should be an autonumber style id.
        // --Get the highest number that is currently in the data store
        // (if any) and increment it when adding to the store.--
        // Next two will be a result of the loaded json. The 4th will be
        // a true/false, and the last will be either a value or null.
        // Also include an autonumber style id as the 0th key/value.
        // ex: {id:1, layerName:"State Bridges", layerUrl: "http://maps.ksdot.org/rest/services/statebridges/mapserver/0",
        // isInMap:False, mapLayerId:null}.

        /*
        xhr("!./reportingLayersConfig.json", {
          handleAs: "text"
        }).then(function(data){
          // Do something with the handled data
          console.log("Received: " + data.toString());
          this._savedLayersInfo = data;
        }, function(err){
          // Handle the error condition
          console.log("An error in the xhr occurred: " + err);
        }, function(evt){
          // Handle a progress event from the request if the
          // browser supports XHR2
        });
        */

        // Might use this in the startup with a setTimeout to prevent it from
        // completing execution before this finishes.
        /*

        // Try module pattern here instead.
        // return _reportingLayers
        function asyncFunctionToSetup() {
          var selfRef = this;
          require([
            "dojo/text!./reportingLayersConfig.json"
            ], function (
              reportingLayersConfig
            ){
              selfRef._reportingLayers = reportingLayersConfig; //console.log(json.fromJson(reportingLayersConfig));
            }
          );
          setTimeout(selfRef._savedLayersInfo = json.fromJson(this._reportingLayers).layersArray;, 50);
        }
        */
        /*

        var reportingLayersConfig = null;

        //function waitFunctionData(){
        //  console.log("Wait function data is: " + this.reportingLayersConfig);
        //};

        function loadMemoryStoreData(){
          require([
            "dojo/text!./reportingLayersConfig.json"
            ], function (
              reportingLayersConfig
            ){
              //this._reportingLayers = reportingLayersConfig; //console.log(json.fromJson(reportingLayersConfig));
              console.log(reportingLayersConfig.length);
              // Need to wait for this to finish before proceeding.
            }
          );
          setTimeout(function(){ waitFunctionData(); }, 1500);
        }

        function waitFunctionData(){
          console.log("Wait function data is: " + this.reportingLayersConfig);
        };

        var loadMemoryStoreData_this = loadMemoryStoreData.bind(this);

        loadMemoryStoreData_this();

        console.log(this._savedLayersInfo);
        */
        /*
        // At the time that this function is declared, this._reportingLayers will be null.
        // Need to get around that.
        function createSetMemoryFunction() {
          return (function setMemoryStoreInitialData(){
            this._savedLayersInfo = json.fromJson(this._reportingLayers).layersArray;
          });
        }

        var setMemoryStoreInitialData_this = setMemoryStoreInitialData.bind(this);

        function asyncLoadOfMemoryStoreData() {
          // Do the thing that you want to do first
          // then the setTimeout function will fire
          // because the queue is empty... it will
          // *wait* until the queue is empty however,
          // which means that until the previous function
          // is done processing, we don't have to worry
          // about the function in setTimeout from
          // completing.
          loadMemoryStoreData_this();

          setTimeout(function(){ setMemoryStoreInitialData_this(); }, 50);
        }

        //asyncLoadOfMemoryStoreData();

        var asyncLoadOfMemoryStoreData_this = asyncLoadOfMemoryStoreData.bind(this);

        asyncLoadOfMemoryStoreData_this();

        */

        //widgetsIntemplate: true,

        //console.log(reportingLayersConfig.toString());

        <div></br><button id='loadReportLinkedLayerOptions' data-dojo-attach-point='loadReportLinkedLayerOptions' data-dojo-type="dijit/form/Button">Load Report Linked Layer Options</button></div>
        <div></br><button id='testTheDataStore' data-dojo-attach-point='testTheDataStore' data-dojo-type="dijit/form/Button">Test the Data Store</button></div>

        //this.own(on(this.loadReportLinkedLayerOptions, "click", lang.hitch(this, this._populateDropDownFeaturesToBeAddedToTheMap)));

        //For testing data store functionality so that I can use it instead of having to refer
        // to several different array forEach's to get the data that I need.
        //this.own(on(this.testTheDataStore, "click", lang.hitch(this, this._testDataStoreAsItRelatesToTheMap)));

        //this._savedLayersInfo = json.fromJson(this._reportingLayers).layersArray; // Already done earlier in the widget.

        //console.log("Selected map layerId: " + selectedValue.split("'")[1]);
        //console.log("Selected index: " + selectedIndex);
        //console.log("Selected valuetext: " + selectedValueText);

        // Now use selectedValueText to get the list of reports back out from the
        // (retrieved earlier) saved info array.

        //var selectedValueText = domAttr.get('dropDownBox1', 'valueText');
        //var selectedIndex = domAttr.get('dropDownBox1', 'selectedIndex');
        //var selectedIndex = this.dropDownBox1.options[this.dropDownBox1.selectedIndex].index;
        //var selectedValueText = this.dropDownBox1.options[this.dropDownBox1.selectedIndex].text;

        //console.log("After function definitions, sValue1:");
        //console.log(sValue1);

          //console.log("selectionValue:");
          //console.log(selectionValue1);

            //console.log("reportItem");
            //console.log(reportItem);

          //console.log("Sent result:");
          //console.log(sentResult1);

          //console.log(reportsForSelectedLayer);
          //console.log("Building report options...");

        //console.log("sValue1: " + sValue1);

          //console.log("this._featureItemsLayer:");
          //console.log(this._featureItemsLayer);

        // For testing purposes, remove when done.
        
        //dom.byId("mapIdNode").innerHTML += 'json String:' + json.toJson(this._featureItemsLayer)+ '<br>';
        //console.log(json.toJson(this._featureItemsLayer));

        // init with the selected layer
        // //this._initFeatureItemsSelectToolbar();

          //console.log("queryResultItem " + ik + ": " + queryResultItem.toString());
          //ik += 1;

        //var ik = 0;

          //reportLinkedLayers.push([queryResultItem[0], queryResultItem[1]]);

        //console.log("dsQuery =");
        //console.log(dsQuery);


      // Will eventually use the info from selectedValue and possibly from a query to the data store.

      // // This code was to have been used for a version of the widget that made POST requests. \\ \\
      // I have since been informed that the WebI reports we use do not accept POST requests.
      // Due to this, the GET request method, with all of the data being passed in the URL as
      // opposed to passing it in a form body, has been reinstated.
      // This results in a reduction in the maximum number of features which can be used in a report
      // called from this widget, based on the browser, and possibly the reports server. I have
      // not tested the reports server's limits as of yet, but IE is limited to around 2048 characters.

      /*
      // Generalized from Bridges to Features.
      _showReportLinkForSelectedFeatureItems: function (event) {
        this._bridgeWebiLink2ndPart = '';
        var selectedReport = domAttr.get('dropDownBox2', 'value');
        console.log("Selected Report:");
        console.log(selectedReport);

        var selectedLayer = domAttr.get('dropDownBox1', 'value');
        console.log("Selected Layer:");
        console.log(selectedLayer);

        var selectedFeatureLayerQuery = {layerName:selectedLayer};
        var selectedFeatureLayerResult = this._savedLayerMemoryStore.query(selectedFeatureLayerQuery);
        selectedFeatureLayerResultItem = selectedFeatureLayerResult[0];

        var attributeName = null;
        var someData = [];
        var idToAdd = 1;

        arrayUtil.forEach(selectedFeatureLayerResultItem.layerReports, function(layerReportItem) {
          someData.push({id:idToAdd, reportName:layerReportItem[0], reportUrl:layerReportItem[1], reportAlternateAttribute:layerReportItem[2]});
          idToAdd += 1;
        }, this);

        arrayUtil.forEach(someData, function (someDataItem) {
          console.log(someDataItem);
        }, this);

        var tempDataStore = new Memory({data: someData});
        var tempQuery = {reportName:selectedReport};
        var tempQueryResult = null;

        tempQueryResult = tempDataStore.query(tempQuery);

        tempQueryResultItem = tempQueryResult[0];

        if (typeof(tempQueryResultItem.reportAlternateAttribute) !== "undefined" && tempQueryResultItem.reportAlternateAttribute !== null) {
          attributeName = tempQueryResultItem.reportAlternateAttribute;
        } else {
          attributeName = selectedFeatureLayerResultItem.layerDefaultAttribute;
        }

        this._bridgeWebiLinkBase = tempQueryResultItem.reportUrl;

        var featureIDList = '';

        var selectedFeaturesArray = this._featureItemsLayer.getSelectedFeatures()

        var testURL = "http://reports/biportal/reportlauncher.aspx?reportID=37755&Format=PDF&Bridge ID Prompt=";

        console.log('Parsing the following url:');
        console.log(testURL);

        function parseURLForParameters(unparsedURL) {
          //parameterUnSplitPairs = [];
          var parameterNames = [];
          var parameterKeysAndValues = Object.create(null);

          var baseAndParameters = unparsedURL.split("?");

          var unsplitParameterPairs = baseAndParameters[1].split("&");

          arrayUtil.forEach(baseAndParameters, function(arrayItem) {
            console.log(arrayItem);
          }, this);

          arrayUtil.forEach(unsplitParameterPairs, function(paramItem) {
            console.log(paramItem);
            var tempArray = paramItem.split("=");
            parameterKeysAndValues[tempArray[0]] = tempArray[1];
          }, this);

          return [baseAndParameters[0], parameterKeysAndValues];
        }

        // Use the correct url.
        var returnedValueArray = parseURLForParameters(testURL);
        var returnedURLBase = returnedValueArray[0];

        var returnedParameters = returnedValueArray[1];

        // new step to get the info out of the array.

        // need to find the url for the report that's selected based
        // on the info for the selected feature layer.

        // console.log -- Output the parse results with a loop over the
        // created object/dictionary's attribute+value/key+value pairs.

        // Now  instead of console.log, use this to create a post object
        // that will work when the link is clicked on.

        // Might need the report ID in the url, but
        // need to have the rest of the parameters
        // in the body as form arguments.

        if (selectedFeaturesArray.length >= 1) {
          var featuresCount = 0;
          arrayUtil.forEach(selectedFeaturesArray, function (feature) {
            if (featuresCount >= 1) {
              this._bridgeWebiLink2ndPart += ',[' +
               feature.attributes[attributeName].toString() + ']';
               featureIDList += ', ' + feature.attributes[attributeName].toString();
            } else {
              this._bridgeWebiLink2ndPart += '[' + 
              feature.attributes[attributeName].toString() + ']';
              featureIDList += feature.attributes[attributeName].toString();
            }
            featuresCount += 1;
          }, this);

          console.log(this._bridgeWebiLink2ndPart);
          console.log(this._bridgeWebiLink2ndPart.toString());

          var dynamicInnerHtml = '<div id="formPostContainer" style="hidden">';
          dynamicInnerHtml+= '<form id="featureReportsForm" action="' + returnedURLBase + '" method="post" style="display: none">';

          var otherInnerHtml = '<a href="' +
            this._bridgeWebiLinkBase + this._bridgeWebiLink2ndPart + '">Features Report Link</a>' +
            '<br>' + '<b>Selected Feature IDs: ' +
            featureIDList + ' </b>';

          var j = 0;
          for(var propertyName in returnedParameters) {
            console.log("Property Name = " + propertyName);
            if (typeof(returnedParameters[propertyName]) === "undefined" || returnedParameters[propertyName] === null ||
              returnedParameters[propertyName] === '') {
              console.log("This property name had no usable value(s). Must be the report features ID parameter.");
              console.log("Property Value = " + this._bridgeWebiLink2ndPart.toString());
              dynamicInnerHtml += '<input type="hidden" name="' + propertyName + '" value="' + this._bridgeWebiLink2ndPart.toString() + '">'
              //dynamicInnerHtml += propertyName + featureIDList;
            } else {
              console.log("Property Value = " + returnedParameters[propertyName]);
              dynamicInnerHtml += '<input type="hidden" name="' + propertyName + '" value="' + returnedParameters[propertyName] + '">'
              //dynamicInnerHtml += propertyName + returnedParameters[propertyName];
            }
            j++;
          }

          dynamicInnerHtml += '</form></div>';
          // Change this part to be a button with an onclick handler that submits the form.
          dynamicInnerHtml += '<div><button onClick="featureReportsForm.submit()">Features Report Link</button></div>';

          dom.byId('ReportLinkOutput').innerHTML = dynamicInnerHtml;

          // Create a form here with this information instead of
          // just outputting it to the console.
          // Have to see how to add html elements.
          // Might be as easy as doing a loop after creating
          // a form with a hidden:true css inline and a link 
          // button that is not hidden, but which is used to
          // execute the javascript to send the form.

          // Also have a button in the main widget.html that
          // gets unhidden by the Build a report link if there
          // are selected features and that rehides the button
          // and displays a message about not having selected
          // features otherwise.

        } else {
          dom.byId('ReportLinkOutput').innerHTML = "<i>No Selected Features</i>";
        }
      },
        */

        //dom.byId("mapIdNode").innerHTML += 'map id:' + this.map.id + '<br>' + 'graphicsLayerIds: ';
        //dom.byId("mapIdNode").innerHTML += this.map.graphicsLayerIds + '<br>' + 'layerIds: ' + this.map.layerIds + '<br>';

          <div id='mapIdNode'></div>
          <div id='result1'></div>
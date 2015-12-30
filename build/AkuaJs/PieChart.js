 jQuery.sap.declare("AkuaJs.BarChart"); 

   
  sap.ui.core.Control.extend("AkuaJs.PieChart", {  
            renderer: function (oRm, oControl) {  
                oRm.write("<div");  
                oRm.writeControlData(oControl);  
                oRm.write("</div>");  
            }, 
             metadata : {  
    properties: {  
      "axis0": {type : "any"},
      "slicer": {type : "any"},  
      "connection": {type : "any"},  
      "colors": {type : "string[]"},  
      "numberFormat": {type : "string",defaultValue: ',.0f'},
    }}, 
            onAfterRendering: function (event) {  
			var me = this;
			 require(["PieChartNvd3"], function(chart) {
			
				var barchart = chart({
					axis0: me.getAxis0(),
					slicer: me.getSlicer(),
					Connection : LocalCubeConnection(HyperCube(SDTL( me.getConnection()))),
                    colors:me.getColors(),
                    numberFormat :  me.getNumberFormat()

				});

				barchart.getViewCaller(event.srcControl.$());
				
			});
               
            }  
        });  
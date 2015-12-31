

sap.ui.jsview("ui5applicationiii3.Screen1", {

   
    // getControllerName: function () {
    //     return "ui5applicationiii3.Screen1";
    // },

    
    createContent: function (oController) {
      

 // jQuery.sap.registerModulePath('AkuaJs', 'https://rawgit.com/Qrist0ph/AkuaJs-UI5/latest/build/AkuaJs');          
jQuery.sap.registerModulePath('AkuaJs', 'https://d739cc1f9f50baf2effcb0354365770503c4616c.googledrive.com/host/0B2Od6vq-b27zNWxtRTlaWWJLUU0/SapUi5/');
jQuery.sap.require("AkuaJs.BarChart");
jQuery.sap.require("AkuaJs.PieChart");
jQuery.sap.require("AkuaJs.Map");


  eBezirkMitte =E(D("Bezirk"), "Mitte");
  eBezirkPankow =E(D("Bezirk"), "Pankow");
  eBezirkFriedrichshain =E(D("Bezirk"), "Friedrichshain");
    
    return new sap.m.Page( {
            title: "Map",
            content: [
                new sap.m.Label({
                text: "this is Detail 2"
            }),
            
           new AkuaJs.Map({
                        axis0: A({
                        crosslists:
                        [
                              TCL([
                        T([eBezirkMitte]), T([eBezirkPankow])
                    ])
                        ]
                    }),
                  

                    connection :[ 
                                 T([eBezirkMitte], 88),
				T([eBezirkPankow], 33),
				T([eBezirkFriedrichshain], 55)],
                   colors:["#FFD7AA", "#F4A460","#990000"],
                   numberFormat:',.2'

})
            ]
        });
    }

});



sap.ui.jsview("ui5applicationiii3.Map", {

   
    // getControllerName: function () {
    //     return "ui5applicationiii3.Screen1";
    // },

    
    createContent: function (oController) {
      


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

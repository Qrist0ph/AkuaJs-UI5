

sap.ui.jsview("ui5applicationiii3.PieChart", {

createContent: function (oController) {
      

 // jQuery.sap.registerModulePath('AkuaJs', 'https://rawgit.com/Qrist0ph/AkuaJs-UI5/latest/build/AkuaJs');          
jQuery.sap.registerModulePath('AkuaJs', 'https://d739cc1f9f50baf2effcb0354365770503c4616c.googledrive.com/host/0B2Od6vq-b27zNWxtRTlaWWJLUU0/SapUi5/');
jQuery.sap.require("AkuaJs.PieChart");



    eJune = E(D("Month"), "June");
    eAugust = E(D("Month"), "August");
	ePoland = E(D("Country"), "Poland");        
	eCar = E(D("Product"), "Car");
	eBike = E(D("Product"), "Bike");
	eBoat = E(D("Product"), "Boat");
	eCost = E(D("Measure"), "Costs");
	eRevenue = E(D("Measure"), "Revenue");   
    
    return new sap.m.Page( {
            title: "Pie Chart",
            content: [
                new sap.m.Label({
                text: "this is Detail 2"
            }),
            
             new AkuaJs.PieChart({
                        axis0: A({
                        crosslists:
                        [
                            TCL([
                                T([eCar]), T([eBike]), T([eBoat])
                            ]),
                            TCL([
                                T([eAugust])
                            ])
                        ]
                    }),
                    slicer: T([eCost]),
					connection :[ 
                                 T([eAugust, eCar, eCost],440)
                                ,T([eAugust, eBike, eCost],77)    
                                ,T([eAugust, eBoat, eCost],120)],
                   colors:["#FFD700", "#F4A460","#990000"],
                   numberFormat:',.2'
})
            ]
        });
    }

});

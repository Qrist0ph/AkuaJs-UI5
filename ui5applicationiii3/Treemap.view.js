sap.ui.jsview("ui5applicationiii3.Treemap", {

createContent: function (oController) {
        
jQuery.sap.require("AkuaJs.Treemap");

    eJune = E(D("Month"), "June");
    eAugust = E(D("Month"), "August");
	ePoland = E(D("Country"), "Poland");        
	eCar = E(D("Product"), "Car");
	eBike = E(D("Product"), "Bike");
	eBoat = E(D("Product"), "Boat");
	eCost = E(D("Measure"), "Costs");
	eRevenue = E(D("Measure"), "Revenue");   
    
    return new sap.m.Page( {
            title: "Treemap",
            content: [
                 new sap.m.Link({
                text: "View Code  ",
                href: "https://github.com/Qrist0ph/AkuaJs-UI5/blob/gh-pages/screen9.html"
            }), new sap.m.Label({
                text: "  ",
                width: "10px"
            }),
             new sap.m.Link({
                text: "Stand Alone",
                href: "screen9.html"
            }),
                 new AkuaJs.Treemap({
                        axis0: A({
                        crosslists:
                        [
                            TCL([
                                T([eCar]), T([eBike]), T([eBoat])
                            ])
                        ]
                    }),
                
                    pkm0: T([eCost]),
                    pkm1: T([eRevenue]),
					connection :[ 
                              T([eAugust, eBike, eRevenue], 440), T([eAugust, eBike, eCost], 770)
						, T([eAugust, eBoat, eCost], 120),T([eAugust, eBoat, eRevenue], 44),
						 T([eAugust, eCar, eCost], 77),T([eAugust, eCar, eRevenue], 333)],
                   colors:["#FFD700", "#F4A460","#990000"],
                   numberFormat:',.2'
}) ,
             
            ]
        });
    }
});

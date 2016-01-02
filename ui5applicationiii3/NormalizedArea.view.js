sap.ui.jsview("ui5applicationiii3.NormalizedArea", {

createContent: function (oController) {
        
jQuery.sap.require("AkuaJs.NormalizedArea");

    eJune = E(D("Month"), "June");
    eAugust = E(D("Month"), "August");
	ePoland = E(D("Country"), "Poland");        
	eCar = E(D("Product"), "Car");
	eBike = E(D("Product"), "Bike");
	eBoat = E(D("Product"), "Boat");
	eCost = E(D("Measure"), "Costs");
	eRevenue = E(D("Measure"), "Revenue");   
    
    return new sap.m.Page( {
            title: "Normalized Area",
            content: [
                 new sap.m.Link({
                text: "View Code  ",
                href: "https://github.com/Qrist0ph/AkuaJs-UI5/blob/gh-pages/screen7.html"
            }), new sap.m.Label({
                text: "  ",
                width: "10px"
            }),
             new sap.m.Link({
                text: "Stand Alone",
                href: "screen7.html"
            }),
                 new AkuaJs.NormalizedArea({
                        axis0: A({
                        crosslists:
                        [
                            TCL([
                                T([eCar]), T([eBike]), T([eBoat])
                            ])
                        ]
                    }),
                    
                    axis1: A({
                        crosslists:
                        [
                            TCL([
                                T([eJune]),T([eAugust])
                            ])
                        ]
                    }),				
                    slicer: T([eCost]),
					connection :[ 
                                 T([eAugust, eCar, eCost],440)
						,T([eJune, eCar, eCost],222)
						,T([eAugust, eBike, eCost],77)	  
						,T([eJune, eBike, eCost],120)	 
						,T([eAugust, eBoat, eCost],120)],
                   colors:["#FFD700", "#F4A460","#990000"],
                   numberFormat:',.2'
}) ,
             
            ]
        });
    }
});

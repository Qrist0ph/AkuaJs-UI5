sap.ui.jsview("ui5applicationiii3.NormalizedArea", {

createContent: function (oController) {
        
jQuery.sap.require("AkuaJs.NormalizedArea");

eJuni = E(D("monat"), 1030766400000);
    eAugust = E(D("monat"), 1038632400000);
            eSeptember = E(D("monat"), 1039732400000);

            ePolen = E(D("land"), "polen");
            eAuto = E(D("produkt"), "auto");
            eFahrrad = E(D("produkt"), "fahrread");
            eBoot = E(D("produkt"), "boot");

            eCost = E(D("measure"), "costs");
            eRevenue = E(D("measure"), "revenue");
    
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
                          axis1: A({
                    crosslists:
                    [
                        TCL([
                            T([eAuto]), T([eFahrrad]), T([eBoot])
                        ])
                    ]
                }),
                axis0: A({
                    crosslists:
                    [
                        TCL([
                            T([eJuni]), T([eAugust]), T([eSeptember])
                        ])
                    ]
                }),
                slicer: T([eCost]),

                connection: [
                            T([eAugust, eAuto, eCost], 440), T([eAugust, eFahrrad, eCost], 77)
                            , T([eAugust, eBoot, eCost], 120),
                            T([eJuni, eAuto, eCost], 240), T([eJuni, eFahrrad, eCost], 77)
                            , T([eJuni, eBoot, eCost], 120),
                             T([eSeptember, eAuto, eCost], 240), T([eSeptember, eFahrrad, eCost], 77)
                            , T([eSeptember, eBoot, eCost], 320)],
                   colors:["#FFD700", "#F4A460","#990000"],
                   numberFormat:',.2'
}) ,
             
            ]
        });
    }
});

sap.ui.jsview("ui5applicationiii3.Sunburst", {

    createContent: function (oController) {

        jQuery.sap.require("AkuaJs.Sunburst");

        eJune = E(D("Month"), "June");
        eAugust = E(D("Month"), "August");
        ePoland = E(D("Country"), "Poland");
        eCar = E(D("Product"), "Car");
        eBike = E(D("Product"), "Bike");
        eBoat = E(D("Product"), "Boat");
        eCost = E(D("Measure"), "Costs");
        eRevenue = E(D("Measure"), "Revenue");

        return new sap.m.Page({
            title: "Sunburst",
            content: [
                 new sap.m.Link({
                     text: "View Code  ",
                     href: "https://github.com/Qrist0ph/AkuaJs-UI5/blob/gh-pages/screen12.html"
                 }), new sap.m.Label({
                     text: "  ",
                     width: "10px"
                 }),
             new sap.m.Link({
                 text: "Stand Alone",
                 href: "screen12.html"
             }),
                 new AkuaJs.Sunburst({
                     axis0: A({
                         crosslists: [TCL([T([eCar, eAugust]), T([eBoat, eAugust]), T([eBike, eAugust]), T([eBike]), T([eBoat])])]
                     }),
                     slicer: T([eCost]),
                     connection: [
                                  T([eAugust, eCar, eCost], 440)
                         , T([eJune, eCar, eCost], 222)
                         , T([eAugust, eBike, eCost], 77)
                         , T([eJune, eBike, eCost], 120)
                         , T([eAugust, eBoat, eCost], 120)],
                     colors: ["#FFD700", "#F4A460", "#990000"],
                     numberFormat: ',.2'
                 }),
                  new sap.ui.core.HTML({
                      content: ' '
                      + '<pre><code>'
                      + 'jQuery.sap.require("AkuaJs.Sunburst"); <br/>'
+ ' <br/>'
+ 'eJune = E(D("Month"), "June"); <br/>'
+ 'eAugust = E(D("Month"), "August"); <br/>'
+ 'ePoland = E(D("Country"), "Poland"); <br/>'
+ 'eCar = E(D("Product"), "Car"); <br/>'
+ 'eBike = E(D("Product"), "Bike"); <br/>'
+ 'eBoat = E(D("Product"), "Boat"); <br/>'
+ 'eCost = E(D("Measure"), "Costs"); <br/>'
+ 'eRevenue = E(D("Measure"), "Revenue"); <br/>'
+ ' <br/>'
                      + 'new AkuaJs.Sunburst({<br/>'
+ '    axis0: A({<br/>'
+ '        crosslists: [TCL([T([eCar, eAugust]), T([eBoat, eAugust]), T([eBike, eAugust]), T([eBike]), T([eBoat])])]<br/>'
+ '    }),<br/>'
+ '    slicer: T([eCost]),<br/>'
+ '    connection: [<br/>'
+ '                 T([eAugust, eCar, eCost], 440)<br/>'
+ '        , T([eJune, eCar, eCost], 222)<br/>'
+ '        , T([eAugust, eBike, eCost], 77)<br/>'
+ '        , T([eJune, eBike, eCost], 120)<br/>'
+ '        , T([eAugust, eBoat, eCost], 120)],<br/>'
+ '    colors: ["#FFD700", "#F4A460", "#990000"],<br/>'
+ '    numberFormat: ",.2"<br/>'
+ '}),<br/>'
+ '<br/>'
                      + '</code></pre>'
                  }),
            ]
        });
    }
});

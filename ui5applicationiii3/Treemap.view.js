sap.ui.jsview("ui5applicationiii3.Treemap", {

    createContent: function (oController) {

        jQuery.sap.require("AkuaJs.Treemap");

        eJune = E(D("Month"), "June");
        eAugust = E(D("Month"), "August");
        eCar = E(D("Product"), "Car");
        eBike = E(D("Product"), "Bike");
        eBoat = E(D("Product"), "Boat");
        eCost = E(D("Measure"), "Costs");
        eRevenue = E(D("Measure"), "Revenue");

        return new sap.m.Page({
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
                     connection: [
                               T([eAugust, eBike, eRevenue], 440), T([eAugust, eBike, eCost], 770)
                         , T([eAugust, eBoat, eCost], 120), T([eAugust, eBoat, eRevenue], 44),
                          T([eAugust, eCar, eCost], 77), T([eAugust, eCar, eRevenue], -133)],
                     colors: ["#FFD700", "#F4A460", "#990000"],
                     numberFormat: ',.2'
                 }),
                  new sap.ui.core.HTML({
                      content: ' '
                      + '<pre><code>'
                      + 'jQuery.sap.require("AkuaJs.Treemap"); <br/>'
+ ' <br/>'
+ 'eJune = E(D("Month"), "June"); <br/>'
+ 'eAugust = E(D("Month"), "August"); <br/>'
+ 'eCar = E(D("Product"), "Car"); <br/>'
+ 'eBike = E(D("Product"), "Bike"); <br/>'
+ 'eBoat = E(D("Product"), "Boat"); <br/>'
+ 'eCost = E(D("Measure"), "Costs"); <br/>'
+ 'eRevenue = E(D("Measure"), "Revenue"); <br/>'
+ ' <br/>'
                    + 'new AkuaJs.Treemap({ <br/>'
+ '    axis0: A({ <br/>'
+ '        crosslists: <br/>'
+ '        [ <br/>'
+ '            TCL([ <br/>'
+ '                T([eCar]), T([eBike]), T([eBoat]) <br/>'
+ '            ]) <br/>'
+ '        ] <br/>'
+ '    }), <br/>'
+ ' <br/>'
+ '    pkm0: T([eCost]), <br/>'
+ '    pkm1: T([eRevenue]), <br/>'
+ '    connection: [ <br/>'
+ '              T([eAugust, eBike, eRevenue], 440), T([eAugust, eBike, eCost], 770) <br/>'
+ '        , T([eAugust, eBoat, eCost], 120), T([eAugust, eBoat, eRevenue], 44), <br/>'
+ '         T([eAugust, eCar, eCost], 77), T([eAugust, eCar, eRevenue], -133)], <br/>'
+ '    colors: ["#FFD700", "#F4A460", "#990000"], <br/>'
+ '    numberFormat: ",.2" <br/>'
+ '}), <br/>'
+ ' <br/>'
                      + '</code></pre>'
                  }),
            ]
        });
    }
});

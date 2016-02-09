sap.ui.jsview("ui5applicationiii3.GeoHeatmap", {

    createContent: function (oController) {

        jQuery.sap.require("AkuaJs.GeoHeatmap");

        var tuples = [
           T([E(D("coordinates"), { lat: 51.76, lng: -1.55 }), E(D("text"), "Point 1")], 16),
           T([E(D("coordinates"), { lat: 50.75, lng: -1.55 }), E(D("text"), "Point 2")], 22),
           T([E(D("coordinates"), { lat: 48.15, lng: 9.4667 }), E(D("text"), "Point 3")], 30),
           T([E(D("coordinates"), { lat: 52.35, lng: 4.9167 }), E(D("text"), "Point 4")], 28),
        ]

        return new sap.m.Page({
            title: "Geo Heatmap",
            content: [
                 new sap.m.Link({
                     text: "View Code  ",
                     href: "https://github.com/Qrist0ph/AkuaJs-UI5/blob/gh-pages/screen13.html"
                 }), new sap.m.Label({
                     text: "  ",
                     width: "10px"
                 }),
             new sap.m.Link({
                 text: "Stand Alone",
                 href: "screen13.html"
             }),
                 new AkuaJs.GeoHeatmap({
                     axis0: A({
                         crosslists: [TCL(tuples)]
                     }),
                     connection: tuples,
                     numberFormat: ',.2',
                     showMarkers: true,
                     center: { lat: 52.35, lng: 4.9167 },
                     zoom: 6
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
+ '})<br/>'
+ '<br/>'
                      + '</code></pre>'
                  }),
            ]
        });
    }
});

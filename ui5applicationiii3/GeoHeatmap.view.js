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
                     +'  jQuery.sap.registerModulePath("AkuaJs", "https://cdn.rawgit.com/Qrist0ph/AkuaJs-UI5/latest/build/AkuaJs");       <br/>'
+'        jQuery.sap.require("AkuaJs.GeoHeatmap"); <br/>'
+' <br/>'
+'        var tuples = [ <br/>'
+'           T([E(D("coordinates"), { lat: 51.76, lng: -1.55 }), E(D("text"), "Point 1")], 16), <br/>'
+'           T([E(D("coordinates"), { lat: 50.75, lng: -1.55 }), E(D("text"), "Point 2")], 22), <br/>'
+'           T([E(D("coordinates"), { lat: 48.15, lng: 9.4667 }), E(D("text"), "Point 3")], 30), <br/>'
+'           T([E(D("coordinates"), { lat: 52.35, lng: 4.9167 }), E(D("text"), "Point 4")], 28), <br/>'
+'        ] <br/>'
+' <br/>'
+'        new AkuaJs.GeoHeatmap({ <br/>'
+'            axis0: A({ <br/>'
+'                crosslists: [TCL(tuples)] <br/>'
+'            }), <br/>'
+'            connection: tuples, <br/>'
+'            numberFormat: ",.2", <br/>'
+'            showMarkers: true, <br/>'
+'            center: { lat: 52.35, lng: 4.9167 }, <br/>'
+'            zoom: 6 <br/>'
+'        }) <br/>'
                      + '</code></pre>'
                  }),
            ]
        });
    }
});

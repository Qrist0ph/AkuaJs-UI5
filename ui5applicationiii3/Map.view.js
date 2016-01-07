

sap.ui.jsview("ui5applicationiii3.Map", {


    // getControllerName: function () {
    //     return "ui5applicationiii3.Screen1";
    // },


    createContent: function (oController) {

        jQuery.sap.require("AkuaJs.Map");

        eBezirkMitte = E(D("Bezirk"), "Mitte");
        eBezirkPankow = E(D("Bezirk"), "Pankow");
        eBezirkFriedrichshain = E(D("Bezirk"), "Friedrichshain");

        return new sap.m.Page({
            title: "Map",
            content: [
                  new sap.m.Link({
                      text: "View Code  ",
                      href: "https://github.com/Qrist0ph/AkuaJs-UI5/blob/gh-pages/screen1.html"
                  }), new sap.m.Label({
                      text: "  ",
                      width: "10px"
                  }),
             new sap.m.Link({
                 text: "Stand Alone",
                 href: "screen1.html"
             }),

           new AkuaJs.Map({
               axis0: A({
                   crosslists: [TCL([T([eBezirkMitte]), T([eBezirkPankow])])]
               }),
               connection: [
                    T([eBezirkMitte], 88),
                    T([eBezirkPankow], 33),
                    T([eBezirkFriedrichshain], 55)],
               color: "#FFD7AA",
               numberFormat: ',.2',
               mapCenter: [52.50, 13.2],
               zoom: 10,
               geoJson: geojson,
               click: function (t, v) { alert(t); }
           }),
             new sap.m.Label({
                 text: "  ",
                 width: "10px"
             }),

            new sap.ui.core.HTML({
                content: ' '
                + '<pre><code>'
                + 'jQuery.sap.require("AkuaJs.Map"); <br/>'
+ ' <br/>'
+ 'eBezirkMitte = E(D("Bezirk"), "Mitte"); <br/>'
+ 'eBezirkPankow = E(D("Bezirk"), "Pankow"); <br/>'
+ 'eBezirkFriedrichshain = E(D("Bezirk"), "Friedrichshain"); <br/>'
+ ' <br/>'
+ ' new AkuaJs.Map({ <br/>'
+ '     axis0: A({ <br/>'
+ '         crosslists:[TCL([T([eBezirkMitte]), T([eBezirkPankow])])] <br/>'
+ '     }), <br/>'
+ '     connection: [ <br/>'
+ '          T([eBezirkMitte], 88), <br/>'
+ '          T([eBezirkPankow], 33), <br/>'
+ '          T([eBezirkFriedrichshain], 55)], <br/>'
+ '     color: "#FFD7AA", <br/>'
+ '     numberFormat: ",.2", <br/>'
+ '     mapCenter: [52.50, 13.2], <br/>'
+ '     zoom: 10, <br/>'
+ '     geoJson: geojson, <br/>'
+ '     click: function (t, v) { alert(t); } <br/>'
+ ' }) <br/>'
                 + '</code></pre>'
            }),
            ]
        });
    }

});

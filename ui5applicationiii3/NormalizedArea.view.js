sap.ui.jsview("ui5applicationiii3.NormalizedArea", {

    createContent: function (oController) {

        jQuery.sap.require("AkuaJs.NormalizedArea");

        eJuni = E(D("monat"), 1030766400000);
        eAugust = E(D("monat"), 1038632400000);
        eSeptember = E(D("monat"), 1039732400000);
        eAuto = E(D("produkt"), "auto");
        eFahrrad = E(D("produkt"), "fahrread");
        eBoot = E(D("produkt"), "boot");
        eCost = E(D("measure"), "costs");

        return new sap.m.Page({
            title: "Normalized Area",
            content: [
                 new sap.m.Link({
                     text: "View Code  ",
                     href: "https://github.com/Qrist0ph/AkuaJs-UI5/blob/gh-pages/screen8.html"
                 }), new sap.m.Label({
                     text: "  ",
                     width: "10px"
                 }),
             new sap.m.Link({
                 text: "Stand Alone",
                 href: "screen8.html"
             }),
                 new AkuaJs.NormalizedArea({
                     axis1: A({
                         crosslists: [TCL([T([eAuto]), T([eFahrrad]), T([eBoot])])]
                     }),

                     axis0: A({
                         crosslists: [TCL([T([eJuni]), T([eAugust]), T([eSeptember])])]
                     }),
                     slicer: T([eCost]),
                     connection: [
                                  T([eAugust, eAuto, eCost], 440), T([eAugust, eFahrrad, eCost], 77)
                             , T([eAugust, eBoot, eCost], 120),
                             T([eJuni, eAuto, eCost], 240), T([eJuni, eFahrrad, eCost], 77)
                             , T([eJuni, eBoot, eCost], 120),
                              T([eSeptember, eAuto, eCost], 240), T([eSeptember, eFahrrad, eCost], 77)
                             , T([eSeptember, eBoot, eCost], 320)
                     ],
                     numberFormat: ",.2"
                 }),
                   new sap.ui.core.HTML({
                       content: ' '
                       + '<pre><code>'
                       + 'jQuery.sap.require("AkuaJs.NormalizedArea"); <br/>'
  + ' <br/>'
  + 'eJuni = E(D("monat"), 1030766400000); <br/>'
  + 'eAugust = E(D("monat"), 1038632400000); <br/>'
  + 'eSeptember = E(D("monat"), 1039732400000); <br/>'
  + 'eAuto = E(D("produkt"), "auto"); <br/>'
  + 'eFahrrad = E(D("produkt"), "fahrread"); <br/>'
  + 'eBoot = E(D("produkt"), "boot"); <br/>'
  + 'eCost = E(D("measure"), "costs"); <br/>'
  + ' <br/>'
  + 'new AkuaJs.NormalizedArea({ <br/>'
  + '    axis1: A({ <br/>'
  + '        crosslists: [TCL([T([eAuto]), T([eFahrrad]), T([eBoot])])] <br/>'
  + '    }), <br/>'
  + ' <br/>'
  + '    axis0: A({ <br/>'
  + '        crosslists: [TCL([T([eJuni]), T([eAugust]), T([eSeptember])])] <br/>'
  + '    }), <br/>'
  + '    slicer: T([eCost]), <br/>'
  + '    connection: [ <br/>'
  + '                 T([eAugust, eAuto, eCost], 440), T([eAugust, eFahrrad, eCost], 77) <br/>'
  + '            , T([eAugust, eBoot, eCost], 120), <br/>'
  + '            T([eJuni, eAuto, eCost], 240), T([eJuni, eFahrrad, eCost], 77) <br/>'
  + '            , T([eJuni, eBoot, eCost], 120), <br/>'
  + '             T([eSeptember, eAuto, eCost], 240), T([eSeptember, eFahrrad, eCost], 77) <br/>'
  + '            , T([eSeptember, eBoot, eCost], 320) <br/>'
  + '    ], <br/>'
  + '    numberFormat: ",.2" <br/>'
  + '}) <br/>'
  + ' <br/>'
                           + '</code></pre>'
                  //+ '<script> $("pre code").each(function(i, block) {hljs.highlightBlock(block);});</script>'
                   })
            ]
        });
    }
});

sap.ui.jsview("ui5applicationiii3.DonutChart", {

    createContent: function (oController) {

        jQuery.sap.require("AkuaJs.DonutChart");

        eAugust = E(D("Month"), "August");
        eCar = E(D("Product"), "Car");
        eBike = E(D("Product"), "Bike");
        eBoat = E(D("Product"), "Boat");
        eCost = E(D("Measure"), "Costs");

        return new sap.m.Page({
            title: "Donut Chart",
            content: [
                 new sap.m.Link({
                     text: "View Code  ",
                     href: "https://github.com/Qrist0ph/AkuaJs-UI5/blob/gh-pages/screen3.html"
                 }), new sap.m.Label({
                     text: "  ",
                     width: "10px"
                 }),
             new sap.m.Link({
                 text: "Stand Alone",
                 href: "screen3.html"
             }),
                 new AkuaJs.DonutChart({
                     axis0: A({
                         crosslists:
                         [
                             TCL([
                                 T([eCar]), T([eBike]), T([eBoat])
                             ])
                         ]
                     }),
                     slicer: T([eCost]),
                     connection: [
                                  T([eAugust, eCar, eCost], 440)
                                 , T([eAugust, eBike, eCost], 77)
                                 , T([eAugust, eBoat, eCost], 120)],
                     colors: ["#FFD700", "#F4A460", "#990000"],
                     numberFormat: ',.2'
                 }),
                   new sap.ui.core.HTML({
                       content: ' '
                       + '<pre><code>'
                       + 'jQuery.sap.require("AkuaJs.DonutChart");<br/>'
+ '<br/>'
+ 'eAugust = E(D("Month"), "August");<br/>'
+ 'eCar = E(D("Product"), "Car");<br/>'
+ 'eBike = E(D("Product"), "Bike");<br/>'
+ 'eBoat = E(D("Product"), "Boat");<br/>'
+ 'eCost = E(D("Measure"), "Costs");<br/>'
+ '<br/>'
+ 'new AkuaJs.DonutChart({<br/>'
+ '    axis0: A({<br/>'
+ '        crosslists:<br/>'
+ '        [<br/>'
+ '            TCL([<br/>'
+ '                T([eCar]), T([eBike]), T([eBoat])<br/>'
+ '            ])<br/>'
+ '        ]<br/>'
+ '    }),<br/>'
+ '    slicer: T([eCost]),<br/>'
+ '    connection: [<br/>'
+ '                 T([eAugust, eCar, eCost], 440)<br/>'
+ '                , T([eAugust, eBike, eCost], 77)<br/>'
+ '                , T([eAugust, eBoat, eCost], 120)],<br/>'
+ '    colors: ["#FFD700", "#F4A460", "#990000"],<br/>'
+ '    numberFormat: ",.2"<br/>'
+ '})<br/>'
+ '<br/>'
                         + '</code></pre>'
                     + '<script> $("pre code").each(function(i, block) {hljs.highlightBlock(block);});</script>'
                   })
            ]
        });
    }
});

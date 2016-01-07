sap.ui.jsview("ui5applicationiii3.PieChart", {

    createContent: function (oController) {

        jQuery.sap.require("AkuaJs.PieChart");

        eAugust = E(D("Month"), "August");
        eCar = E(D("Product"), "Car");
        eBike = E(D("Product"), "Bike");
        eBoat = E(D("Product"), "Boat");
        eCost = E(D("Measure"), "Costs");

        return new sap.m.Page({
            title: "Pie Chart",
            content: [
                 new sap.m.Link({
                     text: "View Code  ",
                     href: "https://github.com/Qrist0ph/AkuaJs-UI5/blob/gh-pages/screen2.html"
                 }), new sap.m.Label({
                     text: "  ",
                     width: "10px"
                 }),
             new sap.m.Link({
                 text: "Stand Alone",
                 href: "screen2.html"
             }),
                 new AkuaJs.PieChart({
                     axis0: A({
                         crosslists: [TCL([T([eCar]), T([eBike]), T([eBoat])]), ]
                     }),
                     slicer: T([eCost]),
                     connection: [
                                  T([eAugust, eCar, eCost], 440)
                                 , T([eAugust, eBike, eCost], 77)
                                 , T([eAugust, eBoat, eCost], 120)],
                     colors: ["#FFD700", "#F4A460", "#990000"],
                     numberFormat: ',.2',
                 }),
                 new sap.ui.core.HTML({
                     content: ' '
                     + '<pre><code>'
                     +'jQuery.sap.require("AkuaJs.PieChart");<br/>'
+'<br/>'
+'eAugust = E(D("Month"), "August");<br/>'
+'eCar = E(D("Product"), "Car");<br/>'
+'eBike = E(D("Product"), "Bike");<br/>'
+'eBoat = E(D("Product"), "Boat");<br/>'
+'eCost = E(D("Measure"), "Costs");<br/>'
+'new AkuaJs.PieChart({<br/>'
+'    axis0: A({<br/>'
+'        crosslists: [TCL([T([eCar]), T([eBike]), T([eBoat])]), ]<br/>'
+'    }),<br/>'
+'    slicer: T([eCost]),<br/>'
+'    connection: [<br/>'
+'                 T([eAugust, eCar, eCost], 440)<br/>'
+'                , T([eAugust, eBike, eCost], 77)<br/>'
+'                , T([eAugust, eBoat, eCost], 120)],<br/>'
+'    colors: ["#FFD700", "#F4A460", "#990000"],<br/>'
+'    numberFormat: ",.2",<br/>'
+'})<br/>'
                     + '</code></pre>'
                 })
            ]
        });
    }
});

jQuery.sap.registerModulePath('AkuaJs', 'https://d739cc1f9f50baf2effcb0354365770503c4616c.googledrive.com/host/0B2Od6vq-b27zNWxtRTlaWWJLUU0/AkuaJs-UI5/src/AkuaJs/');

sap.m.Bar.extend("ClickBar", {
    init: function () {
        this._expanded = true;
        this._btn = new sap.m.Button({
            icon: "sap-icon://arrow-top"

        });

        this.addContentRight(
            this._btn
        );
    },

    metadata: {
        properties: {
            "targetId": "string",
            //"size": { type: "sap.ui.core.CSSSize", defaultValue: "200px" }
        }
    },

    // the hover event handler:
    onmousedown: function (evt) {   // is called when the Button is hovered - no event registration required

        var oList = sap.ui.getCore().byId(this.getTargetId());
        oList.setVisible(!this._expanded);

        this._expanded = !this._expanded;

        if (this._expanded) {
            this._btn.setIcon("sap-icon://arrow-top");
        } else {
            this._btn.setIcon("sap-icon://arrow-bottom");
        }
    },

    renderer: {} // add nothing, just inherit the ButtonRenderer as is; 
    // In this case (since the renderer is not changed) you could also specify this explicitly with:  renderer:"sap.ui.commons.ButtonRenderer"
    // (means you reuse the ButtonRenderer instead of creating a new view
});



sap.ui.jsview("ui5applicationiii3.Main", {

    getControllerName: function () {
        return null;
    },

    
    createContent: function (oController) {
        var oMasterPage1 = new sap.m.Page("master1", {
            title: "AkuaJs",
            content: [
                new sap.m.List({
                    id: "list1",
                    items: [
                         new sap.m.StandardListItem({
                            title: "Start",
                            type: "Navigation",
                            press: function () {
                                oSplitApp.toDetail("start");
                            },
                            icon:"images/tesseract.png"
                           
                        }),
                        new sap.m.StandardListItem({
                            title: "Map",
                            type: "Navigation",
                            press: function () {
                                oSplitApp.toDetail("map");
                            },
                            icon: "images/screen1.png"
                        }),
                         new sap.m.StandardListItem({
                            title: "Pie Chart",
                            type: "Navigation",
                            press: function () {
                                oSplitApp.toDetail("pieChart");
                            },
                            icon: "images/screen2.png"
                        }),
                          new sap.m.StandardListItem({
                            title: "Column Chart",
                            type: "Navigation",
                            press: function () {
                                oSplitApp.toDetail("columnChart");
                            },
                            icon: "images/screen10.png"
                        }),
                         new sap.m.StandardListItem({
                            title: "Donut Chart",
                            type: "Navigation",
                            press: function () {
                                oSplitApp.toDetail("donutChart");
                            },
                            icon: "images/screen3.png"
                        }),
                         new sap.m.StandardListItem({
                            title: "Stacked Columns",
                            type: "Navigation",
                            press: function () {
                                oSplitApp.toDetail("stackedColumns");
                            },
                            icon: "images/screen4.png"
                        }),
                        new sap.m.StandardListItem({
                            title: "Grouped Columns",
                            type: "Navigation",
                            press: function () {
                                oSplitApp.toDetail("groupedColumns");
                            },
                            icon: "images/screen5.png"
                        }),
                         new sap.m.StandardListItem({
                            title: "Stacked Area",
                            type: "Navigation",
                            press: function () {
                                oSplitApp.toDetail("stackedArea");
                            },
                            icon: "images/screen6.png"
                        }),
                         new sap.m.StandardListItem({
                            title: "Stream Graph",
                            type: "Navigation",
                            press: function () {
                                oSplitApp.toDetail("streamGraph");
                            },
                            icon: "images/screen7.png"
                        }),
                         new sap.m.StandardListItem({
                            title: "Normalized Area",
                            type: "Navigation",
                            press: function () {
                                oSplitApp.toDetail("normalizedArea");
                            },
                            icon: "images/screen8.png"
                        }),
                         new sap.m.StandardListItem({
                            title: "Treemap",
                            type: "Navigation",
                            press: function () {
                                oSplitApp.toDetail("treemap");
                            },
                            icon: "images/screen9.png"
                        }),
                        //  new sap.m.StandardListItem({
                        //     title: "Calendar Heatmap",
                        //     type: "Navigation",
                        //     press: function () {
                        //         oSplitApp.toDetail("calHeatmap");
                        //     },
                        //     icon: "images/screen11.png"
                        // }),
                         new sap.m.StandardListItem({
                            title: "Sunburst",
                            type: "Navigation",
                            press: function () {
                                oSplitApp.toDetail("sunburst");
                            },
                            icon: "images/screen12.png"
                        }),
                    ]
                }),

            ]
        });

        var oSplitApp = new sap.m.SplitApp("splitApp", {});

        oSplitApp.addMasterPage(oMasterPage1);

        //add the detail pages to the splitapp control
        oSplitApp
        .addDetailPage(sap.ui.view({ id: "start", viewName: "ui5applicationiii3.Start", type: sap.ui.core.mvc.ViewType.JS }))
        .addDetailPage(sap.ui.view({ id: "map", viewName: "ui5applicationiii3.Map", type: sap.ui.core.mvc.ViewType.JS }))
        .addDetailPage(sap.ui.view({ id: "pieChart", viewName: "ui5applicationiii3.PieChart", type: sap.ui.core.mvc.ViewType.JS }))
        .addDetailPage(sap.ui.view({ id: "columnChart", viewName: "ui5applicationiii3.ColumnChart", type: sap.ui.core.mvc.ViewType.JS }))
        .addDetailPage(sap.ui.view({ id: "donutChart", viewName: "ui5applicationiii3.DonutChart", type: sap.ui.core.mvc.ViewType.JS }))
        .addDetailPage(sap.ui.view({ id: "stackedColumns", viewName: "ui5applicationiii3.StackedColumns", type: sap.ui.core.mvc.ViewType.JS }))
        .addDetailPage(sap.ui.view({ id: "groupedColumns", viewName: "ui5applicationiii3.GroupedColumns", type: sap.ui.core.mvc.ViewType.JS }))
        .addDetailPage(sap.ui.view({ id: "stackedArea", viewName: "ui5applicationiii3.StackedArea", type: sap.ui.core.mvc.ViewType.JS }))
        .addDetailPage(sap.ui.view({ id: "streamGraph", viewName: "ui5applicationiii3.StreamGraph", type: sap.ui.core.mvc.ViewType.JS }))
        .addDetailPage(sap.ui.view({ id: "normalizedArea", viewName: "ui5applicationiii3.NormalizedArea", type: sap.ui.core.mvc.ViewType.JS }))
        .addDetailPage(sap.ui.view({ id: "treemap", viewName: "ui5applicationiii3.Treemap", type: sap.ui.core.mvc.ViewType.JS }))
        .addDetailPage(sap.ui.view({ id: "calHeatmap", viewName: "ui5applicationiii3.CalendarHeatmap", type: sap.ui.core.mvc.ViewType.JS }))
        .addDetailPage(sap.ui.view({ id: "sunburst", viewName: "ui5applicationiii3.Sunburst", type: sap.ui.core.mvc.ViewType.JS }))
                
        ;

        oSplitApp.setInitialDetail("start");
        oSplitApp.setInitialMaster("master1");
        //oSplitApp.setMode("PopoverMode");
        return oSplitApp;
    }
});

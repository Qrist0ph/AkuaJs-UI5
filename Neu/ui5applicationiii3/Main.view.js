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
                
        ;

        oSplitApp.setInitialDetail("start");
        oSplitApp.setInitialMaster("master1");
        //oSplitApp.setMode("PopoverMode");
        return oSplitApp;
    }
});

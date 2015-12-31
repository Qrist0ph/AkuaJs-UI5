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
      

 // jQuery.sap.registerModulePath('AkuaJs', 'https://rawgit.com/Qrist0ph/AkuaJs-UI5/latest/build/AkuaJs');          
jQuery.sap.registerModulePath('AkuaJs', 'https://d739cc1f9f50baf2effcb0354365770503c4616c.googledrive.com/host/0B2Od6vq-b27zNWxtRTlaWWJLUU0/SapUi5/');
jQuery.sap.require("AkuaJs.BarChart");
jQuery.sap.require("AkuaJs.PieChart");
jQuery.sap.require("AkuaJs.Map");


  eBezirkMitte =E(D("Bezirk"), "Mitte");
		eBezirkPankow =E(D("Bezirk"), "Pankow");
		eBezirkFriedrichshain =E(D("Bezirk"), "Friedrichshain");
     
    
var chart =new AkuaJs.Map({
                        axis0: A({
                        crosslists:
                        [
                              TCL([
                        T([eBezirkMitte]), T([eBezirkPankow])
                    ])
                        ]
                    }),
                  

                    connection :[ 
                                 T([eBezirkMitte], 88),
				T([eBezirkPankow], 33),
				T([eBezirkFriedrichshain], 55)],
                   colors:["#FFD7AA", "#F4A460","#990000"],
                   numberFormat:',.2'

});
     
     
     var screen1 = sap.ui.view({ id: "screen1", viewName: "ui5applicationiii3.Screen1", type: sap.ui.core.mvc.ViewType.JS });
     
        var oDetailPage1 = new sap.m.Page("detail1", {
            title: "Detail 1",
            
            content: [new sap.m.Label({
                text: "this is Detail 1"
            })
            ]
        });

        var oDetailPage2 = new sap.m.Page("detail2", {
            title: "Detail 2",
            content: [new sap.m.Label({
                text: "this is Detail 2"
            }),
            chart
            ]
        });


        var oMasterPage1 = new sap.m.Page("master1", {
            title: "Master",
            content: [
                new ClickBar({
                    targetId: "list1",
                    contentLeft: [
                        new sap.m.Label({ text: "Portfolio Holdings" })
                    ],

                }),
                new sap.m.List({
                    id: "list1",
                    items: [
                        new sap.m.StandardListItem({
                            title: "Map",
                            type: "Navigation",
                            press: function () {
                                oSplitApp.toDetail("screen1");
                            }
                        }),
                         new sap.m.StandardListItem({
                            title: "Pie Chart",
                            type: "Navigation",
                            press: function () {
                                oSplitApp.toDetail("pieChart");
                            }
                        }),
                         new sap.m.StandardListItem({
                             title: "Quality Ratings Range",
                             type: "Navigation",
                             press: function () {
                                 oSplitApp.toDetail("detail2");
                             }
                         })

                    ]
                }),


                new ClickBar({
                    targetId: "list2",
                    contentLeft: [
                        new sap.m.Label({ text: "Asset Holdings" })
                    ],

                }),
                new sap.m.List({
                    id: "list2",
                    items: [
                        new sap.m.StandardListItem({
                            title: "Asset Types",
                            type: "Navigation",
                            press: function () {
                                oSplitApp.toDetail("detail1");
                            }
                        }),
                         new sap.m.StandardListItem({
                             title: "Quality Ratings Range",
                             type: "Navigation",
                             press: function () {
                                 alert(2);
                                 oSplitApp.toDetail("detail2");
                             }
                         })

                    ]
                })


            ]
        });


        var oSplitApp = new sap.m.SplitApp("splitApp", {});

        //add the master pages to the splitapp control
        oSplitApp.addMasterPage(oMasterPage1);

        //add the detail pages to the splitapp control
        oSplitApp.addDetailPage(oDetailPage1)
        .addDetailPage(oDetailPage2)
        .addDetailPage(screen1)
        .addDetailPage(sap.ui.view({ id: "pieChart", viewName: "ui5applicationiii3.PieChart", type: sap.ui.core.mvc.ViewType.JS }))
        
        
        ;

        oSplitApp.setInitialDetail("detail1");
        oSplitApp.setInitialMaster("master1");
        //oSplitApp.setMode("PopoverMode");
        return oSplitApp;

    }

});

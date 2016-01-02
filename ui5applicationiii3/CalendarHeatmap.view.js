sap.ui.jsview("ui5applicationiii3.CalendarHeatmap", {

createContent: function (oController) {
        
jQuery.sap.require("AkuaJs.CalendarHeatmap");

   eTimestamp1 = E(D("Bezirk"), "1435734000");
   eTimestamp2 = E(D("Bezirk"), "1435820400");
   eTimestamp3 = E(D("Bezirk"), "1435906800");
    
    return new sap.m.Page( {
            title: "CalendarHeatmap",
            content: [
                 new sap.m.Link({
                text: "View Code  ",
                href: "https://github.com/Qrist0ph/AkuaJs-UI5/blob/gh-pages/screen11.html"
            }), new sap.m.Label({
                text: "  ",
                width: "10px"
            }),
             new sap.m.Link({
                text: "Stand Alone",
                href: "screen11.html"
            }),
                 new AkuaJs.CalendarHeatmap({
                        axis0: A({
                        crosslists:
                        [
                           TCL([
                        T([eTimestamp1]), T([eTimestamp2]), T([eTimestamp3])
                    ])
                        ]
                    }),
                    
                   
                  
					connection :[ 
                                  T([ eTimestamp1], 0.4),
               T([ eTimestamp2], -2.3),
               T([ eTimestamp3], 1.7)]
                   ,locale:'german'
                   ,height:388
            ,minDate:new Date(2015, 6, 1)
            ,maxDate:new Date(2015, 10, 1)
            ,range:3

}) ,
             
            ]
        });
    }
});

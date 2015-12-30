# AkuaJs-UI5
AkuaJs for SAP UI5

SAP UI5 Wrapper for [AkuaJs Library](http://qrist0ph.github.io/AkuaJs/).

## Quick Start 

```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
    
	

    <script src="https://rawgit.com/Qrist0ph/AkuaJs/latest/dist/plain/libs/D3/d3.min.js"></script>    
    <script data-main="https://rawgit.com/Qrist0ph/AkuaJs/latest/dist/plain/main.js" src="https://rawgit.com/Qrist0ph/AkuaJs/latest/dist/plain/libs/require.js"></script>
    <link rel="stylesheet" href="https://rawgit.com/Qrist0ph/AkuaJs/latest/dist/plain/libs/nvd3/nv.d3.min.css" type="text/css" />    
    
    <script src="https://openui5.hana.ondemand.com/resources/sap-ui-core.js"
            id="sap-ui-bootstrap"
            data-sap-ui-libs="sap.m"
            data-sap-ui-theme="sap_bluecrystal">
    </script>
   
<script>
jQuery.sap.registerModulePath('AkuaJs', '"https://rawgit.com/Qrist0ph/AkuaJs-UI5/latest/build/AkuaJs');
jQuery.sap.require("AkuaJs.PieChart");

 require(["core/CoreBundle"], function() { 
    eJune = E(D("Month"), "June");
    eAugust = E(D("Month"), "August");
	ePoland = E(D("Country"), "Poland");        
	eCar = E(D("Product"), "Car");
	eBike = E(D("Product"), "Bike");
	eBoat = E(D("Product"), "Boat");
	eCost = E(D("Measure"), "Costs");
	eRevenue = E(D("Measure"), "Revenue");   
                
    new AkuaJs.PieChart({
                        axis0: A({
                        crosslists:
                        [
                            TCL([
                                T([eCar]), T([eBike]), T([eBoat])
                            ]),
                            TCL([
                                T([eAugust])
                            ])
                        ]
                    }),
                    slicer: T([eCost]),

					connection : LocalCubeConnection(HyperCube(SDTL([ 
								 T([eAugust, eCar, eCost],440)
								,T([eAugust, eBike, eCost],77)    
								,T([eAugust, eBoat, eCost],120)]))),
                   colors:["#FFD700", "#F4A460","#990000"],
                   numberFormat:',.2'

}).placeAt('content')
 });

</script>


</head>
<body class="sapUiBody" role="application">
    <div id="content"></div>
</body>


</html>
```
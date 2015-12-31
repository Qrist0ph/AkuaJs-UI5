

sap.ui.jsview("ui5applicationiii3.Start", {

createContent: function (oController) {
    
    return new sap.m.Page( {
            title: "Start",
            content: [
                new sap.m.Label({
                text: ""
            }),
            new sap.ui.core.HTML({
              content :   '  <div class="inner">'
              +'  <header style="display: table-cell;">'
              +'<h1>AkuaJs for SAP UI5</h1>'
              +' <h3>The AkuaJs Analytical Engine for SAP UI5</h3>'
              +' </header>'
              +'<div style="display: table-cell;">'
              +' <img src="images/tesseract.png" style="height:100px;vertical-align:botton;margin-left:100px;padding-top:20px" />'
              +'</div>'
              +''
              +'<div id="wrapper"> <h3>Why use AkuaJs</h3>'
              +'<ul>'
              +'<li>Create awesome Visualizations based on one unified Data Model</li>'
              +'<li>Choose from a variety of different charts</li>'
              +'<li>Build interactive maps to display sales or financial information </li>'
              +'<li>Ready for mobile app development</li>'
              +'<li>Easily extend it to incorporate your favorite charting engine</li>'
              +' <li>Free for non commercial usage and during development</li>'
              +''
              +'</ul>'
              +'</div>'
              +''
              +''
              +''
              +''
              +''
              +'Copyright © 2015  <a href="https://github.com/Qrist0ph">Christoph Au&szlig;em</a> <br/> <a href="https://de.linkedin.com/pub/christoph-au%C3%9Fem/21/8b4/27">'
              +'<img src="https://static.licdn.com/scds/common/u/img/webpromo/btn_liprofile_blue_80x15_de_DE.png?locale=" width="80" height="15" border="0" alt="Profil von Christoph Außem auf LinkedIn anzeigen">'
              +''
              +'<br/>'
              +'<a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/">Creative Commons Attribution-NonCommercial 3.0 Unported License</a>.'
            })
            
            ]
        });
    }

});

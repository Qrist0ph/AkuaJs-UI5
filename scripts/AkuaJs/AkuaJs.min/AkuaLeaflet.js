define(["core/CoreBundle","leaflet"],function(){function c(a){Apple.call(this,a);this.axis0=a.axis0;this.height=a.height?a.height:450;this.InfoMessage=a.InfoMessage?a.InfoMessage:"Info:";this.Unit=a.Unit?a.Unit:"";this.mapCenter=a.mapCenter?a.mapCenter:[52.8,13];this.zoom=a.zoom?a.zoom:8;this.geoJson=a.geoJson}c.prototype=new Apple;c.prototype.constructor=c;c.prototype.getView=function(){var a="<style>\t#"+this.divid+" .info {padding: 6px 8px;font: 14px/16px Arial, Helvetica, sans-serif;background: white;background: rgba(255,255,255,0.8);box-shadow: 0 0 15px rgba(0,0,0,0.2);border-radius: 5px;}#"+
this.divid+" .info h4 {margin: 0 0 5px;color: #777;}#"+this.divid+" .legend {text-align: left;line-height: 18px;color: #555;}#"+this.divid+" .legend i {width: 18px;height: 18px;float: left;margin-right: 8px;opacity: 0.7;}</style>\t";return this.view=$('<div id="'+this.divid+'" />').html(a+'<div style="height:'+this.height+'px;"  > '+this.divid+"</div> ")};c.prototype.updateValues=function(a){var b=this;b.map||(b.map=L.map(b.view[0].children[1]).setView(b.mapCenter,b.zoom),(new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{minZoom:0,attribution:'Map data <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'})).addTo(b.map),b.info=L.control(),b.info.onAdd=function(b){this._div=L.DomUtil.create("div","info");this.update();return this._div},b.info.update=function(a){this._div.innerHTML="<h4>"+b.InfoMessage+"</h4>"+(a?"<b>"+a.Name+"</b><br />"+a.value.formatMoney(0,",",".","")+" "+b.Unit:"")},b.info.addTo(this.map),a=L.control({position:"bottomright"}),a.onAdd=function(a){a=L.DomUtil.create("div","info legend");
return b.legend=a},a.addTo(b.map));var c=this.calculateMinMax();a=c.max;var c=c.min,d=Math.abs(a)>Math.abs(c)?Math.abs(a):Math.abs(c);a=Enumerable.From(this.calculateBuckets(c,a)).Select(function(a){return'<i style="background:'+a.color+'"></i> '+a.from.formatMoney(0,",",".","")+(a.to?"&ndash;"+a.to.formatMoney(0,",",".",""):"+")}).ToArray();b.legend.innerHTML=a.join("<br>");var e=function(a){a=a.target;a.setStyle({weight:2,color:"#666",dashArray:"",fillOpacity:.7});L.Browser.ie||L.Browser.opera||
a.bringToFront();b.info.update(a.feature.properties)},f=function(a){b.geojson.resetStyle(a.target);b.info.update()};b.geojson&&b.map.removeLayer(b.geojson);b.geojson=L.geoJson(this.geoJson,{style:function(a){var c=b.axis0.Tuples().FirstOrDefault(null,function(b){return b.ToCaption()==a.properties.Name}),c=c?b.getValue(c):0;a.properties.value=c;return{weight:2,opacity:1,color:"white",dashArray:"1",fillOpacity:.7,fillColor:b.getGradientColor(c,d)}},onEachFeature:function(a,c){c.on({mouseover:e,mouseout:f,
click:function(a){if(b.click){var c=b.axis0.Tuples().FirstOrDefault(null,function(b){return b.ToCaption()==a.target.feature.properties.Name}),d=c?b.getValue(c):0;b.click(c,d)}}})}}).addTo(b.map)};return function(a){return new c.prototype.constructor(a)}});
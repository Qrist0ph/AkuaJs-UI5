define(["core/CoreBundle","nv.d3.min"],function(){function e(a){Apple.call(this,a);this.axis0=a.axis0;this.size=a.pkm0?a.pkm0:T([]);this.color=a.pkm1?a.pkm1:T([]);this.divid=guid();this.height=a.height?a.height:400;this.pkm0Name=a.pkm0Name?a.pkm0Name:"Value 1";this.pkm1Name=a.pkm1Name?a.pkm1Name:"Value 2"}e.prototype=new Apple;e.prototype.constructor=e;e.prototype.getView=function(){var a="<style>\t .TreeTooltip {position: absolute;border:1px solid;margin:10px;padding: 6px;opacity: 0.9;z-index: 1000;} #"+
this.divid+" .node {border: solid 1px white;font: 10px sans-serif;line-height: 12px;overflow: hidden;position: absolute;text-indent: 2px;} </style>";return this.view=$("<div />").html(a+'<div  id="'+this.divid+'"  ></div> ')};e.prototype.updateValues=function(){var a=this,f=$("#"+a.divid).parent().parent().width(),c=a.height;a.chart=d3.layout.treemap().size([f,c]).value(function(a){return a.size});var f=d3.select("#"+a.divid).style("position","relative").style("width",f+0+0+"px").style("height",c+
0+0+"px").style("left","0px").style("top","0px"),d=d3.select("body").append("div").attr("class","TreeTooltip").style("visibility","hidden").style("background-color","#ffffff"),f=f.datum(a.testdata()).selectAll(".node").data(a.chart.nodes).enter().append("div").attr("class","node").call(function(){this.style("left",function(a){return a.x+"px"}).style("top",function(a){return a.y+"px"}).style("width",function(a){return Math.max(0,a.dx-1)+"px"}).style("height",function(a){return Math.max(0,a.dy-1)+"px"})}).style("background",
function(a){return a.color?a.color:null}).text(function(b){return b.children?null:a.writeTupleText(b.name)}).on("mouseover",function(b){b.size&&(d.html(a.writeTupleText(b.name)+" "+a.pkm0Name+" "+d3.locale(a.locale).numberFormat(a.numberFormat)(b.size)+" - "+a.pkm1Name+" "+d3.locale(a.locale).numberFormat(a.numberFormat)(b.pkm1)),d.style("visibility","visible"),this.style.cursor="hand")}).on("mousemove",function(){d.style("top",d3.event.pageY+"px").style("left",d3.event.pageX+"px")}).on("mouseout",
function(){d.style("visibility","hidden")}).on("click",function(b){b.size&&a.click&&a.click(b.tuple,b.size)});a.click&&f.style("cursor","pointer")};e.prototype.testdata=function(){for(var a=this.axis0.Tuples().ToArray(),f=-Infinity,c=0;c<a.length;c++)var d=Math.abs(this.getValue(a[c].And(this.color))),f=d>f?d:f;for(var b=[],c=0;c<a.length;c++){var e=this.getValue(a[c].And(this.color)),d=e/f,d=0>d?ColorLuminance("FF0000",1+d):ColorLuminance("00FF00",1-d);b.push({name:a[c],size:this.getValue(a[c].And(this.size)),
color:d,pkm1:e,tuple:a[c]})}return{name:"flare",children:b}};e.prototype.selectionCallback=function(){str="";this.getSelection().each(function(){str+=$(this).text()+" "})};return function(a){return new e.prototype.constructor(a)}});

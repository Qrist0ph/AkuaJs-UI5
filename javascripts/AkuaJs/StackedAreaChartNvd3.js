define(["core/CoreBundle","nv.d3.min"],function(){function b(a){Apple.call(this,a);this.axis0=a.axis0;this.axis1=a.axis1;this.height=a.height?a.height:400;this.showLegend=null!=a.showLegend?a.showLegend:!0;this.barAxis=this.axis0.Tuples().ToArray()}b.prototype=new Apple;b.prototype.constructor=b;b.prototype.getView=function(){return this.view=$('<svg class="nvd3"  id="'+this.divid+'" style="height:'+this.height+'px"> </svg> ')};b.prototype.updateValues=function(){this.chart=this.chart?this.chart:
nv.models.stackedAreaChart().margin({right:100}).useInteractiveGuideline(!0).rightAlignYAxis(!0).transitionDuration(500).showControls(!1).clipEdge(!0).style("stream-center").showLegend(this.showLegend);this.chart.xAxis.tickFormat(function(a){return d3.time.format("%x")(new Date(a))});this.chart.yAxis.tickFormat(d3.locale(this.locale).numberFormat(this.numberFormat));d3.select(this.view[0]).attr("height",500).datum(this.testdata()).call(this.chart);nv.utils.windowResize(this.chart.update);return this.chart};
b.prototype.testdata=function(){for(var a=this.axis0.Tuples().ToArray(),b=this.axis1.Tuples().ToArray(),e=[],c=0;c<b.length;c++){var f={key:b[c].ToCaption(),values:[]};e.push(f);for(var d=0;d<a.length;d++){var g=a[d].elements[0];f.values.push({x:g?parseInt(g.Caption):"",y:this.getValue(a[d].And(b[c]))})}}return e};return function(a){return new b.prototype.constructor(a)}});

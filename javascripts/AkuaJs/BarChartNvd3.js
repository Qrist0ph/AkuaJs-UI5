define(["core/CoreBundle","nv.d3.min"],function(){function b(a){Apple.call(this,a);this.axis0=a.axis0;this.height=a.height?a.height:400;this.captionLength=a.captionLength;this.numberFormat=a.numberFormat?a.numberFormat:[2,",",".",""];this.xAxisFormat=a.xAxisFormat?a.xAxisFormat:function(a,c){return truncateString(a,this.captionLength).replace("&hellip;","...")}}b.prototype=new Apple;b.prototype.constructor=b;b.prototype.getView=function(){return this.view=$('<div id="'+this.divid+'">  <svg style="height: '+
this.height+'px;" class="nvd3"></svg></div> ')};b.prototype.updateValues=function(){var a=this;nv.addGraph(function(){a.chart=a.chart?a.chart:window.nv.models.discreteBarChart().x(function(a){return a.key.ToCaption()}).y(function(a){return a.y}).tooltips(!0).staggerLabels(!0).tooltipContent(function(b){return"<h3>"+b.data.key.ToCaption()+"</h3><p>"+b.data.y.formatNumber(a.numberFormat)+"</p>"}).color(a.colors);a.chart.xAxis.tickFormat(a.xAxisFormat);d3.select("#"+a.divid+" svg").datum(a.testdata()).transition().duration(1200).call(a.chart);
if(a.actAsFilter)a.chart.discretebar.dispatch.on("elementClick",function(b){a.selected=b.point.key;a.selectedBar&&a.selectedBar.style("fill",a.selectedStyle);a.selectedBar=d3.select(b.e.target);a.selectedStyle=a.selectedBar.style()[0][0].style.fill;a.selectedBar.style("fill","#0ff");if(a.parent)a.parent.onSelectionChanged(a)});nv.utils.windowResize(a.chart.update);return a.chart})};b.prototype.testdata=function(){for(var a=this.axis0.Tuples().ToArray(),b=[],c=this.textIndex=0;c<a[0].elements.length;c++)"text"==
a[0].elements[c].Dimension.Caption&&(this.textIndex=c);for(c=0;c<a.length;c++)b.push({key:a[c],y:this.getValue(a[c])});return[{key:"Cumulative Return",values:b}]};b.prototype.getSelection=function(){var a=[];this.selected&&a.push(this.selected);return Enumerable.From(a)};return function(a){return new b.prototype.constructor(a)}});
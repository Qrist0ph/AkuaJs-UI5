define(["core/CoreBundle","nv.d3.min"],function(){function d(b){Apple.call(this,b);this.axis0=b.axis0;this.axis1=b.axis1;this.height=b.height?b.height:1800;this.showLegend=null!=b.showLegend?b.showLegend:!0;this.barAxis=this.axis0.Tuples().ToArray()}d.prototype=new Apple;d.prototype.constructor=d;d.prototype.getView=function(){return this.view=$('<svg class="nvd3"  id="chart-container" style="height:'+this.height+'px; width:1000px"> </svg> ')};d.prototype.updateValues=function(){function b(a){this.chartData=
a.data;this.width=a.width;this.height=a.height;this.maxDataPoint=a.maxDataPoint;this.svg=a.svg;this.id=a.id;this.name=a.name;this.margin=a.margin;this.showBottomAxis=a.showBottomAxis;var b=this.name;this.xScale=d3.time.scale().range([0,this.width]).domain(d3.extent(this.chartData.map(function(a){return a.Year})));this.yScale=d3.scale.linear().range([this.height,0]).domain([0,this.maxDataPoint]);var c=this.xScale,d=this.yScale;this.area=d3.svg.area().interpolate("step-before").x(function(a){return c(a.Year)}).y0(this.height).y1(function(a){return d(a[b])});
this.chartContainer=svg.append("g").attr("class",this.name.toLowerCase()).attr("transform","translate("+this.margin.left+","+(this.margin.top+this.height*this.id+10*this.id)+")");foo=this.chartContainer.append("path").data([this.chartData]).attr("class","chart").attr("d",this.area);this.xAxisTop=d3.svg.axis().scale(this.xScale).orient("bottom");this.xAxisBottom=d3.svg.axis().scale(this.xScale).orient("top");0==this.id&&this.chartContainer.append("g").attr("class","x axis top").attr("transform","translate(0,0)").call(this.xAxisTop);
this.showBottomAxis&&this.chartContainer.append("g").attr("class","x axis bottom").attr("transform","translate(0,"+this.height+")").call(this.xAxisBottom);this.yAxis=d3.svg.axis().scale(this.yScale).orient("left").ticks(5);this.chartContainer.append("g").attr("class","y axis").attr("transform","translate(-15,0)").call(this.yAxis);this.chartContainer.append("text").attr("class","country-title").attr("transform","translate(15,40)").text(this.name);var e=this.chartContainer.append("circle").attr("r",
7).style("display","none").style("fill","#FFFFFF").style("pointer-events","none").style("stroke","#FB5050").style("stroke-width","3px");foo.on("mousemove",function(a,b){e.style("display","inherit");var c=d3.mouse(this);e.attr("cx",c[0])})}foo=null;var c={top:10,right:40,bottom:150,left:60},d=940-c.left-c.right,g=1800-c.top-c.bottom;contextWidth=.5*d;svg=d3.select("#chart-container").append("svg").attr("width",d+c.left+c.right).attr("height",g+c.top+c.bottom);(function(a){var f=[],k=[],l=0,e;for(e in a[0])a[0].hasOwnProperty(e)&&
"Year"!=e&&f.push(e);e=f.length;a.forEach(function(a){for(var b in a)"Year"!=b&&a.hasOwnProperty(b)&&(a[b]=parseFloat(a[b]),a[b]>l&&(l=a[b]));a.Year=a.Year});for(var h=0;h<e;h++)k.push(new b({data:a.slice(),id:h,name:f[h],width:d,height:1/e*g,maxDataPoint:l,svg:svg,margin:c,showBottomAxis:h==f.length-1}))})(this.data());foo.on("mousemove",function(a,b){console.log("hu"+(a?a.values:""))});b.prototype.showOnly=function(a){this.xScale.domain(a);this.chartContainer.select(".x.axis.top").call(this.xAxisTop);
this.chartContainer.select(".x.axis.bottom").call(this.xAxisBottom)}};d.prototype.data=function(){for(var b=this.axis0.Tuples().ToArray(),c=this.axis1.Tuples().ToArray(),d=[],g=0;g<b.length;g++){var a={};a.Year=parseInt(b[g].elements[0].Caption);for(var f=0;f<c.length;f++){var k=this.getValue(b[g].And(c[f]));a[c[f].ToCaption()]=k?k:0}d.push(a)}return d};return function(b){return new d.prototype.constructor(b)}});
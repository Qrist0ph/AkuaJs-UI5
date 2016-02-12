define(["core/CoreBundle","nv.d3.min"],function(){function e(b){Apple.call(this,b);this.axis0=b.axis0;this.schulden=b.schulden?b.schulden:0;this.height=b.height?b.height:400;this.captionLength=b.captionLength;this.numberFormat=b.numberFormat?b.numberFormat:[2,",",".",""]}e.prototype=new Apple;e.prototype.constructor=e;e.prototype.getView=function(){var b=this.height/2-50;this.viewFrame.parent().width();b="<style>\t #"+this.divid+" sidebar {  float: right;  width: 100px;} #"+this.divid+" sequence {  width: 600px;  height: 70px;} #"+
this.divid+" .legend {  padding: 10px 0 0 3px;} #"+this.divid+" .sequence text, #"+this.divid+" .legend text {  font-weight: 600;  fill: #fff;} #"+this.divid+" .chart {  position: relative;} #"+this.divid+" svg {  display: block;margin:auto} #"+this.divid+" .chart path {  stroke: #fff;} #"+this.divid+" .explanation {  position: absolute;  top: "+b+"px;   text-align: center;  color: #666; width: 100% ;pointer-events:none} #"+this.divid+' .percentage {  font-size: 2.5em;width:100% }\t</style><div ><div class="sequence"></div><div class="chart" ><div class="explanation" style="visibility: hidden;"> <span class="percentage" ></span><br/> </div></div></div>';
return this.view=$('<div id="'+this.divid+'"/>').html(b)};e.prototype.updateValues=function(){function b(a){var b=(100*a.value/(t+c.schulden)).toPrecision(3),f=b+"%";.1>b&&(f="< 0.1%");d3.select("#"+c.divid+" .percentage").html(a.value.formatMoney(0,",",".","&euro;")+" </br> "+f);d3.select("#"+c.divid+" .explanation").style("visibility","");var d=m(a);p(d,f);d3.selectAll("path").style("opacity",.3);s.selectAll("path").filter(function(a){return 0<=d.indexOf(a)}).style("opacity",1)}function e(a){console.log("leave");
d3.selectAll("path").on("mouseover",null);d3.selectAll("path").transition().duration(100).style("opacity",1).each("end",function(){d3.select(this).on("mouseover",b)})}function m(a){for(var b=[];a.parent;)b.unshift(a),a=a.parent;return b}function q(a,b){var f=[];f.push("0,0");f.push(d.w+",0");f.push(d.w+d.t+","+d.h/2);f.push(d.w+","+d.h);f.push("0,"+d.h);0<b&&f.push(d.t+","+d.h/2);return f.join(" ")}function p(a,b){var f=d3.select("#"+c.divid+" .trail").selectAll("g").data(a,function(a){return a.name+
a.depth}),e=f.enter().append("svg:g");e.append("svg:polygon").attr("points",q).style("fill",function(a){return c.getColorByName(a.name)});e.append("svg:text").attr("x",(d.w+d.t)/2).attr("y",d.h/2).attr("dy","0.35em").attr("text-anchor","middle").text(function(a){a=a.name.split("-");return a[a.length-1]});f.attr("transform",function(a,b){return"translate("+b*(d.w+d.s)+", 0)"});f.exit().remove();d3.select("#"+c.divid+" .trail").select("#"+c.divid+" .endlabel").attr("x",(a.length+.5)*(d.w+d.s)).attr("y",
d.h/2).attr("dy","0.35em").attr("text-anchor","middle").text(b);d3.select("#"+c.divid+" .trail").style("visibility","")}function l(){var a=d3.select("#"+c.divid+" .legend").append("svg:svg").attr("width",75).attr("height",33*d3.keys(c.colors).length).selectAll("g").data(d3.entries(c.colors)).enter().append("svg:g").attr("transform",function(a,b){return"translate(0,"+33*b+")"});a.append("svg:rect").attr("rx",3).attr("ry",3).attr("width",75).attr("height",30).style("fill",function(a){return a.value});
a.append("svg:text").attr("x",37.5).attr("y",15).attr("dy","0.35em").attr("text-anchor","middle").text(function(a){return a.key})}function n(){var a=d3.select("#"+c.divid+" .legend");"hidden"==a.style("visibility")?a.style("visibility",""):a.style("visibility","hidden")}var g=this.view.parent().parent().parent().parent().width()-60,k=this.height-50,h=Math.min(g,k)/2,c=this,d={w:130,h:30,s:3,t:10},t=0,s=d3.select("#"+c.divid+" .chart").append("svg:svg").attr("width",g).attr("height",k).append("svg:g").attr("class",
"container").attr("transform","translate("+g/2+","+k/2+")"),u=d3.layout.partition().size([2*Math.PI,h*h]).value(function(a){return a.size}),v=d3.svg.arc().startAngle(function(a){return a.x}).endAngle(function(a){return a.x+a.dx}).innerRadius(function(a){return Math.sqrt(a.y)}).outerRadius(function(a){return Math.sqrt(a.y+a.dy)}),k=d3.csv.parseRows("account-account-account-account-account-account,22781\naccount-account-account-account-account-foo,2781");(function(a){d3.select("#"+c.divid+" .sequence").append("svg:svg").attr("width",
g).attr("height",50).attr("class","trail").append("svg:text").attr("id","endlabel").style("fill","#000");l();d3.select("#"+c.divid+" .togglelegend").on("click",n);s.append("svg:circle").attr("r",h).style("opacity",0);var d=u.nodes(a).filter(function(a){return.005<a.dx});a=s.data([a]).selectAll("path").data(d).enter().append("svg:path").attr("display",function(a){return a.depth?null:"none"}).attr("d",v).attr("fill-rule","evenodd").style("fill",function(a){return c.getColorByName(a.name)}).style("opacity",
1).on("mouseover",b);d3.select("#"+c.divid+" ").on("mouseleave",e);t=a.node().__data__.value})(this.buildHierarchy(k))};e.prototype.buildHierarchy=function(b){b={name:"root",children:[]};for(var e=this.axis0.Tuples().ToArray(),m=0;m<e.length;m++){var q=this.getValue(e[m]);if(!isNaN(q))for(var p=Enumerable.From(e[m].elements).Select(function(b){return b.Caption}).ToArray(),l=b,n=0;n<p.length;n++){var g=l.children,k=p[n],h;if(n+1<p.length){for(var l=!1,c=0;c<g.length;c++)if(g[c].name==k){h=g[c];l=!0;
break}l||(h={name:k,children:[]},g.push(h));l=h}else h={name:k,size:q},g.push(h)}}return b};e.prototype.getSelection=function(){r=[];this.selected&&r.push(this.selected);return Enumerable.From(r)};return function(b){return new e.prototype.constructor(b)}});

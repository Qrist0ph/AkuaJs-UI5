define(["core/CoreBundle","jquery.event.drag-2.2","slick.core","slick.grid"],function(){function b(a){if(!window.Slick)throw"SlickGrid missing";Apple.call(this,a);this.axis0=a.axis0;this.slicer=a.slicer;this.width=a.width?a.width:300;this.divid=guid()}function f(a,b,c,d,e){return c}b.prototype=new Apple;b.prototype.constructor=b;b.prototype.getView=function(){return this.view=$('<div id="'+this.divid+'" style="height:150px;width:'+this.width+'px">ssssfff</div> ')};b.prototype.updateValues=function(){for(var a=
this.axis0.Tuples().ToArray(),b=this.TupleToHeader(this.axis0.Tuples().First()),c=[],d=0;d<a.length;d++)c.push(this.TupleToLine(a[d]));new Slick.Grid(this.view,c,b,{enableCellNavigation:!1,enableColumnReorder:!1,headerRowHeight:50})};b.prototype.selectionCallback=function(){str="";this.getSelection().each(function(){str+=$(this).text()+" "});alert(str)};b.prototype.TupleToHeader=function(a){var b=[];a=a.Permutate();for(var c=0;c<a.length;c++){var d=a[c],e={};e.id=d.Dimension.Caption;e.name=d.Dimension.Caption;
e.field=d.Dimension.Caption;e.formatter=f;e.width=180;b.push(e)}return b};b.prototype.TupleToLine=function(a){var b={};a=a.Permutate();for(var c=0;c<a.length;c++){var d=a[c];b[d.Dimension.Caption]=d.Caption}return b};return function(a){return new b.prototype.constructor(a)}});

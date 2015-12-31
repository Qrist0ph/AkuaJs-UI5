
   jQuery.sap.declare("my.useful.SampleModule"); // declaration of the module. Will ensure that the containing namespace 'my.useful' exists.

   // list of dependencies of this module
   jQuery.sap.require("sap.ui.core.Core");

   

   // create the 'main' object of the module
   my.useful.SampleModule = {};
   
   sap.m.Button.extend("my.useful.SampleModule.MyButton", { //inherit Button definition                                         
  metadata: {  
    events: {  
      "hover" : {}  //new event definition hover  
    }  
  },  
  //hover event handler  
  onmouseover : function(evt) {  
    this.fireHover();  
  },  
  renderer: {} //Standard renderer method is not overridden  
});  



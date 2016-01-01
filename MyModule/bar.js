sap.ui.define([], function() {

    // create a new class
    var SomeClass =  function(){};

    // add methods to its prototype
    SomeClass.prototype.foo = function() {
        return "Foo";
    }

    // return the class as module value
    return SomeClass;
});
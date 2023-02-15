function addition(value) {
    console.log("Value is: " + value);
}
var firstVal = 42;
var secondVal = 1;
var sumOfVals = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);
var Foo = /** @class */ (function () {
    function Foo() {
        this.x = 3;
    }
    Foo.prototype.print = function () { console.log('x is' + this.x); };
    ;
    return Foo;
}());
var f = new Foo();
f.print(); //Prints 'x is 3' as expected

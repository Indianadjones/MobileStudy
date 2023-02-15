function addition(value: string) {
console.log("Value is: " + value);
}
let firstVal: number = 42;
let secondVal: number = 1;
let sumOfVals: string = (firstVal + secondVal).toLocaleString();

addition(sumOfVals);

class Foo {

    x=3
    print() { console.log('x is' + this.x)};
}
var f = new Foo();
f.print();//Prints 'x is 3' as expected

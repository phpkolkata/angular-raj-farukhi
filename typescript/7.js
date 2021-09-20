var Greet = /** @class */ (function () {
    function Greet() {
    }
    Greet.prototype.hi = function () {
        console.log("hi ", this.name);
    };
    return Greet;
}());
var obj = new Greet();
obj.name = "raj";
obj.hi();

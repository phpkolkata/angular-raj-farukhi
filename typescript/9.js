// public, private, protected
var Greet = /** @class */ (function () {
    function Greet(name) {
        this.name = name;
    }
    Greet.prototype.hi = function () {
        console.log("hi ", this.name);
    };
    return Greet;
}());
var obj = new Greet("raj");
obj.hi();

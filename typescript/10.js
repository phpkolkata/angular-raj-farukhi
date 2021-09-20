var Greet = /** @class */ (function () {
    function Greet(_name) {
        this._name = _name;
    }
    Greet.prototype.hi = function () {
        console.log("hi", this.name);
    };
    Object.defineProperty(Greet.prototype, "name", {
        set: function (nm) {
            this.name = nm;
        },
        enumerable: false,
        configurable: true
    });
    return Greet;
}());
var greet = new Greet("suman");
greet.hi();

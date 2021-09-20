"use strict";
exports.__esModule = true;
exports.Greet = void 0;
var Greet = /** @class */ (function () {
    function Greet(name) {
        this.name = name;
    }
    Greet.prototype.hi = function () {
        console.log("hi ", this.name);
    };
    return Greet;
}());
exports.Greet = Greet;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var decorators_1 = require("./decorators");
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.oneField = "Asdsad";
        console.log("creating object");
    }
    MyClass.prototype.someFun = function () {
        console.log("field: " + this.oneField);
    };
    MyClass = tslib_1.__decorate([
        decorators_1.Special
    ], MyClass);
    return MyClass;
}());
var m = new MyClass();
m.someFun();
// @ts-ignore
m.hello();
var n = new MyClass();
n.someFun();

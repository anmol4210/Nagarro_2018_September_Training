"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const decorators_1 = require("./decorators");
let MyClass = class MyClass {
    constructor() {
        this.oneField = "Asdsad";
        console.log("creating object");
    }
    someFun() {
        console.log("field: " + this.oneField);
    }
};
MyClass = tslib_1.__decorate([
    decorators_1.Special
], MyClass);
let m = new MyClass();
m.someFun();
// @ts-ignore
m.hello();
let n = new MyClass();
n.someFun();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
function fun1() {
    console.log('fun1');
    fun2();
}
exports.fun1 = fun1;
exports.a = 10;
function fun2() {
    console.log('fun2');
}
function doSomething() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return 10;
    });
}
exports.doSomething = doSomething;
exports.default = {
    x: 23
};

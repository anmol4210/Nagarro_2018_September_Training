"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Special(constructor) {
    console.log(constructor);
    constructor.prototype.hello = function () {
        console.log("added by decorator");
    };
}
exports.Special = Special;

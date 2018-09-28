"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lib_1 = require("./lib");
const lib_2 = tslib_1.__importDefault(require("./lib"));
const libStar = tslib_1.__importStar(require("./lib"));
lib_1.fun1();
console.log(lib_1.a);
console.log(lib_2.default.x);
libStar.fun1();
function task() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield lib_1.doSomething();
    });
}
task();

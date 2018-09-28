"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function Special(ctor) {
    console.log(ctor);
    ctor.prototype.hello = function () {
        console.log("added by decorator");
    };
}
exports.Special = Special;
function Component(ctor) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var _this = _super.call(this) || this;
            _this.data = {
                x: _this.x
            };
            _this.methods = {
                hello: _this.hello
            };
            return _this;
        }
        return class_1;
    }(ctor));
}
exports.Component = Component;

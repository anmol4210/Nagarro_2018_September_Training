"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var decorators_1 = require("./decorators");
var MyComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MyComponent, _super);
    function MyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 10;
        return _this;
    }
    MyComponent.prototype.hello = function () {
        console.log('hello');
    };
    MyComponent = tslib_1.__decorate([
        decorators_1.Component
    ], MyComponent);
    return MyComponent;
}(BaseComponent));
var m = new MyComponent();
console.log(m);
console.log(m.data.x);
m.methods.hello();

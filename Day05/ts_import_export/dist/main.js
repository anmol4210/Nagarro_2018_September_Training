"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("./lib");
var lib_2 = __importDefault(require("./lib"));
var libStar = __importStar(require("./lib"));
lib_1.fun1();
console.log(lib_1.a);
console.log(lib_2.default.x);
libStar.fun1();

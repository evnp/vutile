"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refriedElement = exports.refried = exports.refriedValidatedValue = exports.refriedConstructedValue = exports.refriedValue = void 0;
var vue_1 = require("vue");
function refriedValue(name, initialValue) {
    if (initialValue === void 0) { initialValue = null; }
    var ref = (0, vue_1.ref)(initialValue);
    var beans = { ref: ref };
    Object.defineProperty(beans, name, { get: function () { return ref.value; } });
    return beans;
}
exports.refriedValue = refriedValue;
function refriedConstructedValue(name, cons, initialValue) {
    var ref = (0, vue_1.ref)(initialValue);
    var beans = { ref: ref };
    Object.defineProperty(beans, name, {
        get: function () {
            if (ref.value && !(ref.value instanceof cons)) {
                throw new Error("Invalid ref value (expected: ".concat(cons, ", found: ").concat(ref.value, ")."));
            }
            return ref.value;
        },
    });
    return beans;
}
exports.refriedConstructedValue = refriedConstructedValue;
function refriedValidatedValue(name, validator, initialValue) {
    var ref = (0, vue_1.ref)(initialValue);
    var beans = { ref: ref };
    Object.defineProperty(beans, name, {
        get: function () {
            if (!validator(ref.value)) {
                throw new Error("Invalid ref value (validation failed for ".concat(ref.value, ")."));
            }
            return ref.value;
        },
    });
    return beans;
}
exports.refriedValidatedValue = refriedValidatedValue;
function refried(name, constructorOrValidator, initialValue) {
    var _a;
    if (constructorOrValidator === void 0) { constructorOrValidator = null; }
    var cv = constructorOrValidator;
    if (typeof cv === "function") {
        if (((_a = cv.prototype) === null || _a === void 0 ? void 0 : _a.constructor) === cv) {
            return refriedConstructedValue(name, cv, initialValue);
        }
        else {
            return refriedValidatedValue(name, cv, initialValue);
        }
    }
    else {
        return refriedValue(name, initialValue);
    }
}
exports.refried = refried;
function refriedElement(constructorOrValidator, initialValue) {
    return refried("element", constructorOrValidator, initialValue);
}
exports.refriedElement = refriedElement;

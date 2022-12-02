"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementRef = exports.namedRef = exports.validatedRefValue = exports.constructedRefValue = exports.refValue = void 0;
var vue_1 = require("vue");
function refValue(name, initialValue) {
    if (initialValue === void 0) { initialValue = null; }
    var ref = (0, vue_1.ref)(initialValue);
    var beans = { ref: ref };
    Object.defineProperty(beans, name, { get: function () { return ref.value; } });
    return beans;
}
exports.refValue = refValue;
function constructedRefValue(name, cons, initialValue) {
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
exports.constructedRefValue = constructedRefValue;
function validatedRefValue(name, validator, initialValue) {
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
exports.validatedRefValue = validatedRefValue;
function namedRef(name, constructorOrValidator, initialValue) {
    var _a;
    if (constructorOrValidator === void 0) { constructorOrValidator = null; }
    var cv = constructorOrValidator;
    if (typeof cv === "function") {
        if (((_a = cv.prototype) === null || _a === void 0 ? void 0 : _a.constructor) === cv) {
            return constructedRefValue(name, cv, initialValue);
        }
        else {
            return validatedRefValue(name, cv, initialValue);
        }
    }
    else {
        return refValue(name, initialValue);
    }
}
exports.namedRef = namedRef;
function elementRef(constructorOrValidator, initialValue) {
    return namedRef("element", constructorOrValidator, initialValue);
}
exports.elementRef = elementRef;

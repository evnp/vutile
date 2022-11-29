"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.P = void 0;
function pOptFn(pType) {
    return function () {
        return {
            type: pType,
            required: false,
        };
    };
}
function pReqFn(pType) {
    return function () {
        return {
            type: pType,
            required: true,
        };
    };
}
function pDefaultFn(pType) {
    return function (dflt) {
        return __assign({ type: pType, required: false }, (typeof dflt !== undefined ? { default: dflt } : {}));
    };
}
function pTypedOptFn(base) {
    return function () {
        return {
            type: base,
            required: false,
        };
    };
}
function pTypedReqFn(base) {
    return function () {
        return {
            type: base,
            required: true,
        };
    };
}
function pTypedDefaultFn(base) {
    return function (dflt) {
        return {
            type: base,
            required: false,
            default: dflt,
        };
    };
}
var pStrOpt = pOptFn(String);
var pNumOpt = pOptFn(Number);
var pBoolOpt = pOptFn(Boolean);
var pStrReq = pReqFn(String);
var pNumReq = pReqFn(Number);
var pBoolReq = pReqFn(Boolean);
var pStrDefault = pDefaultFn(String);
var pNumDefault = pDefaultFn(Number);
var pBoolDefault = pDefaultFn(Boolean);
var pStrDefaultEmpty = pDefaultFn(String)("");
var pNumDefaultZero = pDefaultFn(Number)(0);
var pBoolDefaultFalse = pDefaultFn(Boolean)(false);
var pBoolDefaultTrue = pDefaultFn(Boolean)(true);
var P = {
    Str: pStrOpt(),
    Num: pNumOpt(),
    Bool: pBoolOpt(),
    StrReq: pStrReq(),
    NumReq: pNumReq(),
    BoolReq: pBoolReq(),
    StrDefault: pStrDefault,
    NumDefault: pNumDefault,
    BoolDefault: pBoolDefault,
    StrDefaultEmpty: pStrDefaultEmpty,
    NumDefaultZero: pNumDefaultZero,
    BoolDefaultFalse: pBoolDefaultFalse,
    BoolDefaultTrue: pBoolDefaultTrue,
    Typed: pTypedOptFn,
    TypedReq: pTypedReqFn,
    TypedDefault: pTypedDefaultFn,
    S: pStrOpt(),
    N: pNumOpt(),
    B: pBoolOpt(),
    SR: pStrReq(),
    NR: pNumReq(),
    BR: pBoolReq(),
    SD: pStrDefault,
    ND: pNumDefault,
    BD: pBoolDefault,
    SDE: pStrDefaultEmpty,
    NDZ: pNumDefaultZero,
    BDF: pBoolDefaultFalse,
    BDT: pBoolDefaultTrue,
    T: pTypedOptFn,
    TR: pTypedReqFn,
    TD: pTypedDefaultFn,
};
exports.P = P;

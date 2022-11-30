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
var pObjOpt = pOptFn(Object);
var pArrOpt = pOptFn(Array);
var pFuncOpt = pOptFn(Function);
var pDateOpt = pOptFn(Date);
var pSymOpt = pOptFn(Symbol);
var pStrReq = pReqFn(String);
var pNumReq = pReqFn(Number);
var pBoolReq = pReqFn(Boolean);
var pObjReq = pReqFn(Object);
var pArrReq = pReqFn(Array);
var pFuncReq = pReqFn(Function);
var pDateReq = pReqFn(Date);
var pSymReq = pReqFn(Symbol);
var pStrDefault = pDefaultFn(String);
var pNumDefault = pDefaultFn(Number);
var pBoolDefault = pDefaultFn(Boolean);
var pObjDefault = pDefaultFn(Object);
var pArrDefault = pDefaultFn(Array);
var pFuncDefault = pDefaultFn(Function);
var pDateDefault = pDefaultFn(Date);
var pSymDefault = pDefaultFn(Symbol);
var pStrDefaultEmpty = pDefaultFn(String)("");
var pNumDefaultZero = pDefaultFn(Number)(0);
var pBoolDefaultFalse = pDefaultFn(Boolean)(false);
var pBoolDefaultTrue = pDefaultFn(Boolean)(true);
var pObjDefaultEmpty = pDefaultFn(Object)({});
var pArrDefaultEmpty = pDefaultFn(Array)([]);
var pFuncDefaultIdentity = pDefaultFn(Function)(function (x) { return x; });
var P = {
    Str: pStrOpt(),
    Num: pNumOpt(),
    Bool: pBoolOpt(),
    Obj: pObjOpt(),
    Arr: pArrOpt(),
    Func: pFuncOpt(),
    Date: pDateOpt(),
    Sym: pSymOpt(),
    StrReq: pStrReq(),
    NumReq: pNumReq(),
    BoolReq: pBoolReq(),
    ObjReq: pObjReq(),
    ArrReq: pArrReq(),
    FuncReq: pFuncReq(),
    DateReq: pDateReq(),
    SymReq: pSymReq(),
    StrDefault: pStrDefault,
    NumDefault: pNumDefault,
    BoolDefault: pBoolDefault,
    ObjDefault: pObjDefault,
    ArrDefault: pArrDefault,
    FuncDefault: pFuncDefault,
    DateDefault: pDateDefault,
    SymDefault: pSymDefault,
    StrDefaultEmpty: pStrDefaultEmpty,
    NumDefaultZero: pNumDefaultZero,
    BoolDefaultFalse: pBoolDefaultFalse,
    BoolDefaultTrue: pBoolDefaultTrue,
    ObjDefaultEmpty: pObjDefaultEmpty,
    ArrDefaultEmpty: pArrDefaultEmpty,
    FuncDefaultIdentity: pFuncDefaultIdentity,
    Typed: pTypedOptFn,
    TypedReq: pTypedReqFn,
    TypedDefault: pTypedDefaultFn,
    TypedStr: pTypedOptFn(String),
    TypedStrReq: pTypedReqFn(String),
    TypedStrDefault: pTypedDefaultFn(String),
    TypedObj: pTypedOptFn(Object),
    TypedObjReq: pTypedReqFn(Object),
    TypedObjDefault: pTypedDefaultFn(Object),
    TypedArr: pTypedOptFn(Array),
    TypedArrReq: pTypedReqFn(Array),
    TypedArrDefault: pTypedDefaultFn(Array),
    TypedFunc: pTypedOptFn(Function),
    TypedFuncReq: pTypedReqFn(Function),
    TypedFuncDefault: pTypedDefaultFn(Function),
    TypedDate: pTypedOptFn(Date),
    TypedDateReq: pTypedReqFn(Date),
    TypedDateDefault: pTypedDefaultFn(Date),
    TypedSym: pTypedOptFn(Symbol),
    TypedSymReq: pTypedReqFn(Symbol),
    TypedSymDefault: pTypedDefaultFn(Symbol),
    S: pStrOpt(),
    N: pNumOpt(),
    B: pBoolOpt(),
    O: pObjOpt(),
    A: pArrOpt(),
    F: pFuncOpt(),
    D: pDateOpt(),
    Y: pSymOpt(),
    SR: pStrReq(),
    NR: pNumReq(),
    BR: pBoolReq(),
    OR: pObjReq(),
    AR: pArrReq(),
    FR: pFuncReq(),
    DR: pDateReq(),
    YR: pSymReq(),
    SD: pStrDefault,
    ND: pNumDefault,
    BD: pBoolDefault,
    OD: pObjDefault,
    AD: pArrDefault,
    FD: pFuncDefault,
    DD: pDateDefault,
    YD: pSymDefault,
    SDE: pStrDefaultEmpty,
    NDZ: pNumDefaultZero,
    BDF: pBoolDefaultFalse,
    BDT: pBoolDefaultTrue,
    ODE: pObjDefaultEmpty,
    ADE: pArrDefaultEmpty,
    FDI: pFuncDefaultIdentity,
    TS: pTypedOptFn(String),
    TSR: pTypedReqFn(String),
    TSD: pTypedDefaultFn(String),
    TO: pTypedOptFn(Object),
    TOR: pTypedReqFn(Object),
    TOD: pTypedDefaultFn(Object),
    TA: pTypedOptFn(Array),
    TAR: pTypedReqFn(Array),
    TAD: pTypedDefaultFn(Array),
    TF: pTypedOptFn(Function),
    TFR: pTypedReqFn(Function),
    TFD: pTypedDefaultFn(Function),
    TD: pTypedOptFn(Date),
    TDR: pTypedReqFn(Date),
    TDD: pTypedDefaultFn(Date),
    TY: pTypedOptFn(Symbol),
    TYR: pTypedReqFn(Symbol),
    TYD: pTypedDefaultFn(Symbol),
};
exports.P = P;

import { PropType } from "vue";
import type { Prop } from "vue";
declare function pTypedOptFn<BaseT>(base: BaseT): <PropT = BaseT>() => {
    type: PropType<PropT>;
    required: false;
};
declare function pTypedReqFn<BaseT>(base: BaseT): <PropT = BaseT>() => {
    type: PropType<PropT>;
    required: true;
};
declare function pTypedDefaultFn<BaseT>(base: BaseT): <PropT = BaseT>(dflt: PropT) => {
    type: PropType<PropT>;
    required: false;
    default: PropT;
};
declare const pStrOpt: () => Prop<string, string> & {
    required: false;
};
declare const pNumOpt: () => Prop<number, number> & {
    required: false;
};
declare const pBoolOpt: () => Prop<boolean, boolean> & {
    required: false;
};
declare const pObjOpt: () => Prop<object, object> & {
    required: false;
};
declare const pArrOpt: () => Prop<unknown[], unknown[]> & {
    required: false;
};
declare const pFuncOpt: () => Prop<(...args: unknown[]) => unknown, (...args: unknown[]) => unknown> & {
    required: false;
};
declare const pDateOpt: () => Prop<Date, Date> & {
    required: false;
};
declare const pSymOpt: () => Prop<symbol, symbol> & {
    required: false;
};
declare const pStrReq: () => Prop<string, string> & {
    required: true;
};
declare const pNumReq: () => Prop<number, number> & {
    required: true;
};
declare const pBoolReq: () => Prop<boolean, boolean> & {
    required: true;
};
declare const pObjReq: () => Prop<object, object> & {
    required: true;
};
declare const pArrReq: () => Prop<unknown[], unknown[]> & {
    required: true;
};
declare const pFuncReq: () => Prop<(...args: unknown[]) => unknown, (...args: unknown[]) => unknown> & {
    required: true;
};
declare const pDateReq: () => Prop<Date, Date> & {
    required: true;
};
declare const pSymReq: () => Prop<symbol, symbol> & {
    required: true;
};
declare const pStrDefault: (dflt?: string | undefined) => Prop<string, string> & {
    default: string;
};
declare const pNumDefault: (dflt?: number | undefined) => Prop<number, number> & {
    default: number;
};
declare const pBoolDefault: (dflt?: boolean | undefined) => Prop<boolean, boolean> & {
    default: boolean;
};
declare const pObjDefault: (dflt?: object | undefined) => Prop<object, object> & {
    default: object;
};
declare const pArrDefault: (dflt?: unknown[] | undefined) => Prop<unknown[], unknown[]> & {
    default: unknown[];
};
declare const pFuncDefault: (dflt?: ((...args: unknown[]) => unknown) | undefined) => Prop<(...args: unknown[]) => unknown, (...args: unknown[]) => unknown> & {
    default: (...args: unknown[]) => unknown;
};
declare const pDateDefault: (dflt?: Date | undefined) => Prop<Date, Date> & {
    default: Date;
};
declare const pSymDefault: (dflt?: symbol | undefined) => Prop<symbol, symbol> & {
    default: symbol;
};
declare type PStrOpt = ReturnType<typeof pStrOpt>;
declare type PNumOpt = ReturnType<typeof pNumOpt>;
declare type PBoolOpt = ReturnType<typeof pBoolOpt>;
declare type PObjOpt = ReturnType<typeof pObjOpt>;
declare type PArrOpt = ReturnType<typeof pArrOpt>;
declare type PFuncOpt = ReturnType<typeof pFuncOpt>;
declare type PDateOpt = ReturnType<typeof pDateOpt>;
declare type PSymOpt = ReturnType<typeof pSymOpt>;
declare type PStrReq = ReturnType<typeof pStrReq>;
declare type PNumReq = ReturnType<typeof pNumReq>;
declare type PBoolReq = ReturnType<typeof pBoolReq>;
declare type PObjReq = ReturnType<typeof pObjReq>;
declare type PArrReq = ReturnType<typeof pArrReq>;
declare type PFuncReq = ReturnType<typeof pFuncReq>;
declare type PDateReq = ReturnType<typeof pDateReq>;
declare type PSymReq = ReturnType<typeof pSymReq>;
declare type PStrDefault = typeof pStrDefault;
declare type PNumDefault = typeof pNumDefault;
declare type PBoolDefault = typeof pBoolDefault;
declare type PObjDefault = typeof pObjDefault;
declare type PArrDefault = typeof pArrDefault;
declare type PFuncDefault = typeof pFuncDefault;
declare type PDateDefault = typeof pDateDefault;
declare type PSymDefault = typeof pSymDefault;
declare type PStrDefaultEmpty = ReturnType<typeof pStrDefault>;
declare type PNumDefaultZero = ReturnType<typeof pNumDefault>;
declare type PBoolDefaultFalse = ReturnType<typeof pBoolDefault>;
declare type PBoolDefaultTrue = ReturnType<typeof pBoolDefault>;
declare type PObjDefaultEmpty = ReturnType<typeof pObjDefault>;
declare type PArrDefaultEmpty = ReturnType<typeof pArrDefault>;
declare type PFuncDefaultIdentity = ReturnType<typeof pFuncDefault>;
declare type PTypedOpt = typeof pTypedOptFn;
declare type PTypedReq = typeof pTypedReqFn;
declare type PTypedDefault = typeof pTypedDefaultFn;
declare type PTypedStrOpt = ReturnType<typeof pTypedOptFn>;
declare type PTypedStrReq = ReturnType<typeof pTypedReqFn>;
declare type PTypedStrDefault = ReturnType<typeof pTypedDefaultFn>;
declare type PTypedObjOpt = ReturnType<typeof pTypedOptFn>;
declare type PTypedObjReq = ReturnType<typeof pTypedReqFn>;
declare type PTypedObjDefault = ReturnType<typeof pTypedDefaultFn>;
declare type PTypedArrOpt = ReturnType<typeof pTypedOptFn>;
declare type PTypedArrReq = ReturnType<typeof pTypedReqFn>;
declare type PTypedArrDefault = ReturnType<typeof pTypedDefaultFn>;
declare type PTypedFuncOpt = ReturnType<typeof pTypedOptFn>;
declare type PTypedFuncReq = ReturnType<typeof pTypedReqFn>;
declare type PTypedFuncDefault = ReturnType<typeof pTypedDefaultFn>;
declare type PTypedDateOpt = ReturnType<typeof pTypedOptFn>;
declare type PTypedDateReq = ReturnType<typeof pTypedReqFn>;
declare type PTypedDateDefault = ReturnType<typeof pTypedDefaultFn>;
declare type PTypedSymOpt = ReturnType<typeof pTypedOptFn>;
declare type PTypedSymReq = ReturnType<typeof pTypedReqFn>;
declare type PTypedSymDefault = ReturnType<typeof pTypedDefaultFn>;
declare const P: {
    Str: PStrOpt;
    Num: PNumOpt;
    Bool: PBoolOpt;
    Obj: PObjOpt;
    Arr: PArrOpt;
    Func: PFuncOpt;
    Date: PDateOpt;
    Sym: PSymOpt;
    StrReq: PStrReq;
    NumReq: PNumReq;
    BoolReq: PBoolReq;
    ObjReq: PObjReq;
    ArrReq: PArrReq;
    FuncReq: PFuncReq;
    DateReq: PDateReq;
    SymReq: PSymReq;
    StrDefault: PStrDefault;
    NumDefault: PNumDefault;
    BoolDefault: PBoolDefault;
    ObjDefault: PObjDefault;
    ArrDefault: PArrDefault;
    FuncDefault: PFuncDefault;
    DateDefault: PDateDefault;
    SymDefault: PSymDefault;
    StrDefaultEmpty: PStrDefaultEmpty;
    NumDefaultZero: PNumDefaultZero;
    BoolDefaultFalse: PBoolDefaultFalse;
    BoolDefaultTrue: PBoolDefaultTrue;
    ObjDefaultEmpty: PObjDefaultEmpty;
    ArrDefaultEmpty: PArrDefaultEmpty;
    FuncDefaultIdentity: PFuncDefaultIdentity;
    Typed: PTypedOpt;
    TypedReq: PTypedReq;
    TypedDefault: PTypedDefault;
    TypedStr: PTypedStrOpt;
    TypedStrReq: PTypedStrReq;
    TypedStrDefault: PTypedStrDefault;
    TypedObj: PTypedObjOpt;
    TypedObjReq: PTypedObjReq;
    TypedObjDefault: PTypedObjDefault;
    TypedArr: PTypedArrOpt;
    TypedArrReq: PTypedArrReq;
    TypedArrDefault: PTypedArrDefault;
    TypedFunc: PTypedFuncOpt;
    TypedFuncReq: PTypedFuncReq;
    TypedFuncDefault: PTypedFuncDefault;
    TypedDate: PTypedDateOpt;
    TypedDateReq: PTypedDateReq;
    TypedDateDefault: PTypedDateDefault;
    TypedSym: PTypedSymOpt;
    TypedSymReq: PTypedSymReq;
    TypedSymDefault: PTypedSymDefault;
    S: PStrOpt;
    N: PNumOpt;
    B: PBoolOpt;
    O: PObjOpt;
    A: PArrOpt;
    F: PFuncOpt;
    D: PDateOpt;
    Y: PSymOpt;
    SR: PStrReq;
    NR: PNumReq;
    BR: PBoolReq;
    OR: PObjReq;
    AR: PArrReq;
    FR: PFuncReq;
    DR: PDateReq;
    YR: PSymReq;
    SD: PStrDefault;
    ND: PNumDefault;
    BD: PBoolDefault;
    OD: PObjDefault;
    AD: PArrDefault;
    FD: PFuncDefault;
    DD: PDateDefault;
    YD: PSymDefault;
    SDE: PStrDefaultEmpty;
    NDZ: PNumDefaultZero;
    BDF: PBoolDefaultFalse;
    BDT: PBoolDefaultTrue;
    ODE: PObjDefaultEmpty;
    ADE: PArrDefaultEmpty;
    FDI: PFuncDefaultIdentity;
    TS: PTypedStrOpt;
    TSR: PTypedStrReq;
    TSD: PTypedStrDefault;
    TO: PTypedObjOpt;
    TOR: PTypedObjReq;
    TOD: PTypedObjDefault;
    TA: PTypedArrOpt;
    TAR: PTypedArrReq;
    TAD: PTypedArrDefault;
    TF: PTypedFuncOpt;
    TFR: PTypedFuncReq;
    TFD: PTypedFuncDefault;
    TD: PTypedDateOpt;
    TDR: PTypedDateReq;
    TDD: PTypedDateDefault;
    TY: PTypedSymOpt;
    TYR: PTypedSymReq;
    TYD: PTypedSymDefault;
};
export { P };

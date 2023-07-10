import { PropType } from "vue";
import type { Prop, Ref } from "vue";
type PTypedOptFnReturnType<T> = {
    type: PropType<T>;
    required: false;
    validator?: (value: T) => boolean;
};
declare function pTypedOptFn<BaseT>(base: BaseT): <PropT>(validator?: ((value: PropT) => unknown) | undefined) => PTypedOptFnReturnType<PropT>;
type PTypedReqFnReturnType<T> = {
    type: PropType<T>;
    required: true;
    validator?: (value: T) => boolean;
};
declare function pTypedReqFn<BaseT>(base: BaseT): <PropT>(validator?: ((value: PropT) => unknown) | undefined) => PTypedReqFnReturnType<PropT>;
type PTypedDefaultFnReturnType<T> = {
    type: PropType<T>;
    required: false;
    default: T;
    validator?: (value: T) => boolean;
};
declare function pTypedDefaultFn<BaseT>(base: BaseT): <PropT = BaseT>(dflt: PropT, validator?: ((value: PropT) => unknown) | undefined) => PTypedDefaultFnReturnType<PropT>;
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
declare const pStrDefault: (dflt: string, validator?: ((value: string) => unknown) | undefined) => Prop<string, string> & {
    default: string;
    validator?: ((value: string) => boolean) | undefined;
};
declare const pNumDefault: (dflt: number, validator?: ((value: number) => unknown) | undefined) => Prop<number, number> & {
    default: number;
    validator?: ((value: number) => boolean) | undefined;
};
declare const pBoolDefault: (dflt: boolean, validator?: ((value: boolean) => unknown) | undefined) => Prop<boolean, boolean> & {
    default: boolean;
    validator?: ((value: boolean) => boolean) | undefined;
};
declare const pObjDefault: (dflt: object, validator?: ((value: object) => unknown) | undefined) => Prop<object, object> & {
    default: object;
    validator?: ((value: object) => boolean) | undefined;
};
declare const pArrDefault: (dflt: unknown[], validator?: ((value: unknown[]) => unknown) | undefined) => Prop<unknown[], unknown[]> & {
    default: unknown[];
    validator?: ((value: unknown[]) => boolean) | undefined;
};
declare const pFuncDefault: (dflt: (...args: unknown[]) => unknown, validator?: ((value: (...args: unknown[]) => unknown) => unknown) | undefined) => Prop<(...args: unknown[]) => unknown, (...args: unknown[]) => unknown> & {
    default: (...args: unknown[]) => unknown;
    validator?: ((value: (...args: unknown[]) => unknown) => boolean) | undefined;
};
declare const pDateDefault: (dflt: Date, validator?: ((value: Date) => unknown) | undefined) => Prop<Date, Date> & {
    default: Date;
    validator?: ((value: Date) => boolean) | undefined;
};
declare const pSymDefault: (dflt: symbol, validator?: ((value: symbol) => unknown) | undefined) => Prop<symbol, symbol> & {
    default: symbol;
    validator?: ((value: symbol) => boolean) | undefined;
};
type PStrOpt = ReturnType<typeof pStrOpt>;
type PNumOpt = ReturnType<typeof pNumOpt>;
type PBoolOpt = ReturnType<typeof pBoolOpt>;
type PObjOpt = ReturnType<typeof pObjOpt>;
type PArrOpt = ReturnType<typeof pArrOpt>;
type PFuncOpt = ReturnType<typeof pFuncOpt>;
type PDateOpt = ReturnType<typeof pDateOpt>;
type PSymOpt = ReturnType<typeof pSymOpt>;
type PStrReq = ReturnType<typeof pStrReq>;
type PNumReq = ReturnType<typeof pNumReq>;
type PBoolReq = ReturnType<typeof pBoolReq>;
type PObjReq = ReturnType<typeof pObjReq>;
type PArrReq = ReturnType<typeof pArrReq>;
type PFuncReq = ReturnType<typeof pFuncReq>;
type PDateReq = ReturnType<typeof pDateReq>;
type PSymReq = ReturnType<typeof pSymReq>;
type PStrDefault = typeof pStrDefault;
type PNumDefault = typeof pNumDefault;
type PBoolDefault = typeof pBoolDefault;
type PObjDefault = typeof pObjDefault;
type PArrDefault = typeof pArrDefault;
type PFuncDefault = typeof pFuncDefault;
type PDateDefault = typeof pDateDefault;
type PSymDefault = typeof pSymDefault;
type PStrDefaultEmpty = ReturnType<typeof pStrDefault>;
type PNumDefaultZero = ReturnType<typeof pNumDefault>;
type PBoolDefaultFalse = ReturnType<typeof pBoolDefault>;
type PBoolDefaultTrue = ReturnType<typeof pBoolDefault>;
type PObjDefaultEmpty = ReturnType<typeof pObjDefault>;
type PArrDefaultEmpty = ReturnType<typeof pArrDefault>;
type PFuncDefaultIdentity = ReturnType<typeof pFuncDefault>;
type PDateDefaultNow = ReturnType<typeof pDateDefault>;
type PSymDefaultEmpty = ReturnType<typeof pSymDefault>;
type PTypedOpt = typeof pTypedOptFn;
type PTypedReq = typeof pTypedReqFn;
type PTypedDefault = typeof pTypedDefaultFn;
type PTypedStrOpt = ReturnType<typeof pTypedOptFn>;
type PTypedStrReq = ReturnType<typeof pTypedReqFn>;
type PTypedStrDefault = ReturnType<typeof pTypedDefaultFn>;
type PTypedNumOpt = ReturnType<typeof pTypedOptFn>;
type PTypedNumReq = ReturnType<typeof pTypedReqFn>;
type PTypedNumDefault = ReturnType<typeof pTypedDefaultFn>;
type PTypedObjOpt = ReturnType<typeof pTypedOptFn>;
type PTypedObjReq = ReturnType<typeof pTypedReqFn>;
type PTypedObjDefault = ReturnType<typeof pTypedDefaultFn>;
type PTypedArrOpt = ReturnType<typeof pTypedOptFn>;
type PTypedArrReq = ReturnType<typeof pTypedReqFn>;
type PTypedArrDefault = ReturnType<typeof pTypedDefaultFn>;
type PTypedFuncOpt = ReturnType<typeof pTypedOptFn>;
type PTypedFuncReq = ReturnType<typeof pTypedReqFn>;
type PTypedFuncDefault = ReturnType<typeof pTypedDefaultFn>;
type PTypedDateOpt = ReturnType<typeof pTypedOptFn>;
type PTypedDateReq = ReturnType<typeof pTypedReqFn>;
type PTypedDateDefault = ReturnType<typeof pTypedDefaultFn>;
type PTypedSymOpt = ReturnType<typeof pTypedOptFn>;
type PTypedSymReq = ReturnType<typeof pTypedReqFn>;
type PTypedSymDefault = ReturnType<typeof pTypedDefaultFn>;
declare function pValidated<T extends PStrOpt | PStrReq | PStrDefaultEmpty>(pType: T, validator: (value: string) => unknown): T & {
    validator: (value: string) => boolean;
};
declare function pValidated<T extends PNumOpt | PNumReq | PNumDefaultZero>(pType: T, validator: (value: number) => unknown): T & {
    validator: (value: number) => boolean;
};
declare function pValidated<T extends PBoolOpt | PBoolReq | PBoolDefaultFalse | PBoolDefaultTrue>(pType: T, validator: (value: boolean) => unknown): T & {
    validator: (value: boolean) => boolean;
};
declare function pValidated<T extends PObjOpt | PObjReq | PObjDefaultEmpty>(pType: T, validator: (value: Record<PropertyKey, unknown>) => unknown): T & {
    validator: (value: Array<unknown>) => boolean;
};
declare function pValidated<T extends PArrOpt | PArrReq | PArrDefaultEmpty>(pType: T, validator: (value: Array<unknown>) => unknown): T & {
    validator: (value: Array<unknown>) => boolean;
};
declare function pValidated<T extends PFuncOpt | PFuncReq | PFuncDefaultIdentity>(pType: T, validator: (value: (...any: unknown[]) => unknown) => unknown): T & {
    validator: (value: (...any: unknown[]) => unknown) => boolean;
};
declare function pValidated<T extends PDateOpt | PDateReq | PDateDefaultNow>(pType: T, validator: (value: Date) => unknown): T & {
    validator: (value: Date) => boolean;
};
declare function pValidated<T extends PSymOpt | PSymReq | PSymDefaultEmpty>(pType: T, validator: (value: symbol) => unknown): T & {
    validator: (value: symbol) => boolean;
};
declare const pStrOrNull: PTypedDefaultFnReturnType<string | null>;
declare const pNumOrNull: PTypedDefaultFnReturnType<number | null>;
declare const pBoolOrNull: PTypedDefaultFnReturnType<boolean | null>;
declare const pObjOrNull: PTypedDefaultFnReturnType<Record<PropertyKey, unknown> | null>;
declare const pArrOrNull: PTypedDefaultFnReturnType<unknown[] | null>;
declare const pFuncOrNull: PTypedDefaultFnReturnType<((...any: unknown[]) => unknown) | null>;
declare const pDateOrNull: PTypedDefaultFnReturnType<Date | null>;
declare const pSymOrNull: PTypedDefaultFnReturnType<symbol | null>;
declare function pick<T, R extends Record<PropertyKey, T>>(props: R, ...keys: Array<keyof R>): Record<string, Ref<T>>;
type PropValidationErrorMessage<T> = null | string | ((props: Record<string, T>, defaultMessage: string) => string);
declare function validateMultipleProps<T, R>(props: Record<string, T>, validate: (props: Record<string, T>) => unknown, { parse, throwError, message, defaultMessage, }?: {
    parse?: ((props: Record<string, T>, valid: boolean) => R) | null;
    throwError?: boolean;
    message?: PropValidationErrorMessage<T>;
    defaultMessage?: string;
}): R;
declare function requireAtLeastOneOf<T>(props: Record<string, T>, { throwError, message, }?: {
    throwError?: boolean;
    message?: PropValidationErrorMessage<T>;
}): Record<string, T>;
declare function requireAtMostOneOf<T>(props: Record<string, T>, { throwError, message, }?: {
    throwError?: boolean;
    message?: PropValidationErrorMessage<T>;
}): [string, T];
declare function requireExactlyOneOf<T>(props: Record<string, T>, { throwError, message, }?: {
    throwError?: boolean;
    message?: PropValidationErrorMessage<T>;
}): [string, T];
declare function str(dflt: string): ReturnType<PStrDefault>;
declare function str(dflt?: string): PStrOpt;
declare namespace str {
    var req: typeof strReq;
    var typed: typeof strTyped;
}
declare function strReq(): PStrReq;
declare function strTyped<T>(): PTypedOptFnReturnType<T>;
declare function strTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
declare function strStrictDefault(): PStrOpt;
declare function strStrictDefault(dflt: string): ReturnType<PStrDefault>;
declare namespace strStrictDefault {
    var req: typeof strReq;
    var typed: typeof strTyped;
}
type P = {
    str: typeof str;
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
    DateDefaultNow: PDateDefaultNow;
    SymDefaultEmpty: PSymDefaultEmpty;
    StrOrNull: typeof pStrOrNull;
    NumOrNull: typeof pNumOrNull;
    BoolOrNull: typeof pBoolOrNull;
    ObjOrNull: typeof pObjOrNull;
    ArrOrNull: typeof pArrOrNull;
    FuncOrNull: typeof pFuncOrNull;
    DateOrNull: typeof pDateOrNull;
    SymOrNull: typeof pSymOrNull;
    Typed: PTypedOpt;
    TypedReq: PTypedReq;
    TypedDefault: PTypedDefault;
    TypedStr: PTypedStrOpt;
    TypedStrReq: PTypedStrReq;
    TypedStrDefault: PTypedStrDefault;
    TypedNum: PTypedNumOpt;
    TypedNumReq: PTypedNumReq;
    TypedNumDefault: PTypedNumDefault;
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
    Validated: typeof pValidated;
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
    DDN: PDateDefaultNow;
    YDE: PSymDefaultEmpty;
    SON: typeof pStrOrNull;
    NON: typeof pNumOrNull;
    BON: typeof pBoolOrNull;
    OON: typeof pObjOrNull;
    AON: typeof pArrOrNull;
    FON: typeof pFuncOrNull;
    DON: typeof pDateOrNull;
    YON: typeof pSymOrNull;
    TS: PTypedStrOpt;
    TSR: PTypedStrReq;
    TSD: PTypedStrDefault;
    TN: PTypedNumOpt;
    TNR: PTypedNumReq;
    TND: PTypedNumDefault;
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
    V: typeof pValidated;
    pick: typeof pick;
    validateMultipleProps: typeof validateMultipleProps;
    requireAtLeastOneOf: typeof requireAtLeastOneOf;
    requireAtMostOneOf: typeof requireAtMostOneOf;
    requireExactlyOneOf: typeof requireExactlyOneOf;
};
declare const P: P;
type PStrictDefaults = Omit<P, "str" | "Str" | "Num" | "Bool" | "Obj" | "Arr" | "Func" | "Date" | "Sym" | "S" | "N" | "B" | "O" | "A" | "F" | "D" | "Y"> & {
    str: typeof strStrictDefault;
    Str: typeof pStrOrNull;
    Num: typeof pNumOrNull;
    Bool: PBoolDefaultFalse;
    Obj: typeof pObjOrNull;
    Arr: typeof pArrOrNull;
    Func: typeof pFuncOrNull;
    Date: typeof pDateOrNull;
    Sym: typeof pSymOrNull;
    S: typeof pStrOrNull;
    N: typeof pNumOrNull;
    B: PBoolDefaultFalse;
    O: typeof pObjOrNull;
    A: typeof pArrOrNull;
    F: typeof pFuncOrNull;
    D: typeof pDateOrNull;
    Y: typeof pSymOrNull;
};
declare const PStrictDefaults: PStrictDefaults;
export { P, PStrictDefaults };

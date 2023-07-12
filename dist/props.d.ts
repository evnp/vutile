import { PropType } from "vue";
import type { Prop, Ref } from "vue";
type PTypedOptFnReturnType<T> = {
    type: PropType<T>;
    required: false;
    validator?: (value: T) => boolean;
};
type PTypedReqFnReturnType<T> = {
    type: PropType<T>;
    required: true;
    validator?: (value: T) => boolean;
};
type PTypedDefaultFnReturnType<T> = {
    type: PropType<T>;
    required: false;
    default: T;
    validator?: (value: T) => boolean;
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
declare const pStrOrNull: PTypedDefaultFnReturnType<string | null>;
declare const pNumOrNull: PTypedDefaultFnReturnType<number | null>;
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
declare function str(): PStrOpt;
declare function str(dflt: string): ReturnType<PStrDefault>;
declare namespace str {
    var req: typeof strReq & {
        typed: typeof strReqTyped;
    };
    var typed: typeof strTyped & {
        req: typeof strReqTyped;
    };
}
declare function strReq(): PStrReq;
declare function strTyped<T>(): PTypedOptFnReturnType<T>;
declare function strTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
declare function strReqTyped<T>(): PTypedReqFnReturnType<T>;
declare function strStrictDefault(): typeof pStrOrNull;
declare function strStrictDefault(dflt: string): ReturnType<PStrDefault>;
declare namespace strStrictDefault {
    var req: typeof strReq & {
        typed: typeof strReqTyped;
    };
    var typed: typeof strTyped & {
        req: typeof strReqTyped;
    };
}
declare function num(): PNumOpt;
declare function num(dflt: number): ReturnType<PNumDefault>;
declare namespace num {
    var req: typeof numReq & {
        typed: typeof numReqTyped;
    };
    var typed: typeof numTyped & {
        req: typeof numReqTyped;
    };
}
declare function numReq(): PNumReq;
declare function numTyped<T>(): PTypedOptFnReturnType<T>;
declare function numTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
declare function numReqTyped<T>(): PTypedReqFnReturnType<T>;
declare function numStrictDefault(): typeof pNumOrNull;
declare function numStrictDefault(dflt: number): ReturnType<PNumDefault>;
declare namespace numStrictDefault {
    var req: typeof numReq & {
        typed: typeof numReqTyped;
    };
    var typed: typeof numTyped & {
        req: typeof numReqTyped;
    };
}
declare function bool(): PBoolOpt;
declare function bool(dflt: boolean): ReturnType<PBoolDefault>;
declare namespace bool {
    var req: typeof boolReq & {
        typed: typeof boolReqTyped;
    };
    var typed: typeof boolTyped & {
        req: typeof boolReqTyped;
    };
}
declare function boolReq(): PBoolReq;
declare function boolTyped<T>(): PTypedOptFnReturnType<T>;
declare function boolTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
declare function boolReqTyped<T>(): PTypedReqFnReturnType<T>;
declare function boolStrictDefault(): ReturnType<typeof pBoolDefault>;
declare function boolStrictDefault(dflt: boolean): ReturnType<PBoolDefault>;
declare namespace boolStrictDefault {
    var req: typeof boolReq & {
        typed: typeof boolReqTyped;
    };
    var typed: typeof boolTyped & {
        req: typeof boolReqTyped;
    };
}
declare function obj(): PObjOpt;
declare function obj(dflt: object): ReturnType<PObjDefault>;
declare namespace obj {
    var req: typeof objReq & {
        typed: typeof objReqTyped;
    };
    var typed: typeof objTyped & {
        req: typeof objReqTyped;
    };
}
declare function objReq(): PObjReq;
declare function objTyped<T>(): PTypedOptFnReturnType<T>;
declare function objTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
declare function objReqTyped<T>(): PTypedReqFnReturnType<T>;
declare function objStrictDefault(): typeof pObjOrNull;
declare function objStrictDefault(dflt: object): ReturnType<PObjDefault>;
declare namespace objStrictDefault {
    var req: typeof objReq & {
        typed: typeof objReqTyped;
    };
    var typed: typeof objTyped & {
        req: typeof objReqTyped;
    };
}
declare function arr(): PArrOpt;
declare function arr(dflt: unknown[]): ReturnType<PArrDefault>;
declare namespace arr {
    var req: typeof arrReq & {
        typed: typeof arrReqTyped;
    };
    var typed: typeof arrTyped & {
        req: typeof arrReqTyped;
    };
}
declare function arrReq(): PArrReq;
declare function arrTyped<T>(): PTypedOptFnReturnType<T>;
declare function arrTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
declare function arrReqTyped<T>(): PTypedReqFnReturnType<T>;
declare function arrStrictDefault(): typeof pArrOrNull;
declare function arrStrictDefault(dflt: unknown[]): ReturnType<PArrDefault>;
declare namespace arrStrictDefault {
    var req: typeof arrReq & {
        typed: typeof arrReqTyped;
    };
    var typed: typeof arrTyped & {
        req: typeof arrReqTyped;
    };
}
type GenericFunction = (...args: unknown[]) => unknown;
declare function func(): PFuncOpt;
declare function func(dflt: GenericFunction): ReturnType<PFuncDefault>;
declare namespace func {
    var req: typeof funcReq & {
        typed: typeof funcReqTyped;
    };
    var typed: typeof funcTyped & {
        req: typeof funcReqTyped;
    };
}
declare function funcReq(): PFuncReq;
declare function funcTyped<T>(): PTypedOptFnReturnType<T>;
declare function funcTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
declare function funcReqTyped<T>(): PTypedReqFnReturnType<T>;
declare function funcStrictDefault(): typeof pFuncOrNull;
declare function funcStrictDefault(dflt: GenericFunction): ReturnType<PFuncDefault>;
declare namespace funcStrictDefault {
    var req: typeof funcReq & {
        typed: typeof funcReqTyped;
    };
    var typed: typeof funcTyped & {
        req: typeof funcReqTyped;
    };
}
declare function date(): PDateOpt;
declare function date(dflt: Date): ReturnType<PDateDefault>;
declare namespace date {
    var req: typeof dateReq & {
        typed: typeof dateReqTyped;
    };
    var typed: typeof dateTyped & {
        req: typeof dateReqTyped;
    };
}
declare function dateReq(): PDateReq;
declare function dateTyped<T>(): PTypedOptFnReturnType<T>;
declare function dateTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
declare function dateReqTyped<T>(): PTypedReqFnReturnType<T>;
declare function dateStrictDefault(): typeof pDateOrNull;
declare function dateStrictDefault(dflt: Date): ReturnType<PDateDefault>;
declare namespace dateStrictDefault {
    var req: typeof dateReq & {
        typed: typeof dateReqTyped;
    };
    var typed: typeof dateTyped & {
        req: typeof dateReqTyped;
    };
}
declare function sym(): PSymOpt;
declare function sym(dflt: symbol): ReturnType<PSymDefault>;
declare namespace sym {
    var req: typeof symReq & {
        typed: typeof symReqTyped;
    };
    var typed: typeof symTyped & {
        req: typeof symReqTyped;
    };
}
declare function symReq(): PSymReq;
declare function symTyped<T>(): PTypedOptFnReturnType<T>;
declare function symTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
declare function symReqTyped<T>(): PTypedReqFnReturnType<T>;
declare function symStrictDefault(): typeof pSymOrNull;
declare function symStrictDefault(dflt: symbol): ReturnType<PSymDefault>;
declare namespace symStrictDefault {
    var req: typeof symReq & {
        typed: typeof symReqTyped;
    };
    var typed: typeof symTyped & {
        req: typeof symReqTyped;
    };
}
type P = {
    str: typeof str;
    num: typeof num;
    bool: typeof bool;
    obj: typeof obj;
    arr: typeof arr;
    func: typeof func;
    date: typeof date;
    sym: typeof sym;
    pick: typeof pick;
    validateMultipleProps: typeof validateMultipleProps;
    requireAtLeastOneOf: typeof requireAtLeastOneOf;
    requireAtMostOneOf: typeof requireAtMostOneOf;
    requireExactlyOneOf: typeof requireExactlyOneOf;
};
declare const P: P;
type PStrictDefaults = Omit<P, "str" | "num" | "bool" | "obj" | "arr" | "func" | "date" | "sym"> & {
    str: typeof strStrictDefault;
    num: typeof numStrictDefault;
    bool: typeof boolStrictDefault;
    obj: typeof objStrictDefault;
    arr: typeof arrStrictDefault;
    func: typeof funcStrictDefault;
    date: typeof dateStrictDefault;
    sym: typeof symStrictDefault;
};
declare const PStrictDefaults: PStrictDefaults;
export { P, PStrictDefaults };

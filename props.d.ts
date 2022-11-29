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
declare const pStrReq: () => Prop<string, string> & {
    required: true;
};
declare const pNumReq: () => Prop<number, number> & {
    required: true;
};
declare const pBoolReq: () => Prop<boolean, boolean> & {
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
declare type PStrOpt = ReturnType<typeof pStrOpt>;
declare type PNumOpt = ReturnType<typeof pNumOpt>;
declare type PBoolOpt = ReturnType<typeof pBoolOpt>;
declare type PStrReq = ReturnType<typeof pStrReq>;
declare type PNumReq = ReturnType<typeof pNumReq>;
declare type PBoolReq = ReturnType<typeof pBoolReq>;
declare type PStrDefault = typeof pStrDefault;
declare type PNumDefault = typeof pNumDefault;
declare type PBoolDefault = typeof pBoolDefault;
declare type PStrDefaultEmpty = ReturnType<typeof pStrDefault>;
declare type PNumDefaultZero = ReturnType<typeof pNumDefault>;
declare type PBoolDefaultFalse = ReturnType<typeof pBoolDefault>;
declare type PBoolDefaultTrue = ReturnType<typeof pBoolDefault>;
declare type PTypedOpt = typeof pTypedOptFn;
declare type PTypedReq = typeof pTypedReqFn;
declare type PTypedDefault = typeof pTypedDefaultFn;
declare const P: {
    Str: PStrOpt;
    Num: PNumOpt;
    Bool: PBoolOpt;
    StrReq: PStrReq;
    NumReq: PNumReq;
    BoolReq: PBoolReq;
    StrDefault: PStrDefault;
    NumDefault: PNumDefault;
    BoolDefault: PBoolDefault;
    StrDefaultEmpty: PStrDefaultEmpty;
    NumDefaultZero: PNumDefaultZero;
    BoolDefaultFalse: PBoolDefaultFalse;
    BoolDefaultTrue: PBoolDefaultTrue;
    Typed: PTypedOpt;
    TypedReq: PTypedReq;
    TypedDefault: PTypedDefault;
    S: PStrOpt;
    N: PNumOpt;
    B: PBoolOpt;
    SR: PStrReq;
    NR: PNumReq;
    BR: PBoolReq;
    SD: PStrDefault;
    ND: PNumDefault;
    BD: PBoolDefault;
    SDE: PStrDefaultEmpty;
    NDZ: PNumDefaultZero;
    BDF: PBoolDefaultFalse;
    BDT: PBoolDefaultTrue;
    T: PTypedOpt;
    TR: PTypedReq;
    TD: PTypedDefault;
};
export { P };

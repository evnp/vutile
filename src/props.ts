import { PropType } from "vue";
import type { Prop } from "vue";

// P ~ a DSL for compact-yet-explicit, type-aware Vue component prop definitions

type PType = typeof String | typeof Number | typeof Boolean;

function pOptFn<T>(pType: PType) {
  return (): Prop<T> & { required: false } => {
    return {
      type: pType,
      required: false,
    } as unknown as Prop<T> & { required: false };
  };
}

function pReqFn<T>(pType: PType) {
  return (): Prop<T> & { required: true } => {
    return {
      type: pType,
      required: true,
    } as unknown as Prop<T> & { required: true };
  };
}

function pDefaultFn<T>(pType: PType) {
  return (dflt?: T): Prop<T> & { default: T } => {
    return {
      type: pType,
      required: false,
      ...(typeof dflt !== undefined ? { default: dflt } : {}),
    } as unknown as Prop<T> & { default: T };
  };
}

function pTypedOptFn<BaseT>(base: BaseT) {
  return function <PropT = BaseT>(): {
    type: PropType<PropT>;
    required: false;
  } {
    return {
      type: base as unknown as PropType<PropT>,
      required: false,
    };
  };
}

function pTypedReqFn<BaseT>(base: BaseT) {
  return function <PropT = BaseT>(): { type: PropType<PropT>; required: true } {
    return {
      type: base as unknown as PropType<PropT>,
      required: true,
    };
  };
}

function pTypedDefaultFn<BaseT>(base: BaseT) {
  return function <PropT = BaseT>(
    dflt: PropT
  ): {
    type: PropType<PropT>;
    required: false;
    default: PropT;
  } {
    return {
      type: base as unknown as PropType<PropT>,
      required: false,
      default: dflt,
    };
  };
}

const pStrOpt = pOptFn<string>(String);
const pNumOpt = pOptFn<number>(Number);
const pBoolOpt = pOptFn<boolean>(Boolean);

const pStrReq = pReqFn<string>(String);
const pNumReq = pReqFn<number>(Number);
const pBoolReq = pReqFn<boolean>(Boolean);

const pStrDefault = pDefaultFn<string>(String);
const pNumDefault = pDefaultFn<number>(Number);
const pBoolDefault = pDefaultFn<boolean>(Boolean);

const pStrDefaultEmpty = pDefaultFn<string>(String)("");
const pNumDefaultZero = pDefaultFn<number>(Number)(0);
const pBoolDefaultFalse = pDefaultFn<boolean>(Boolean)(false);
const pBoolDefaultTrue = pDefaultFn<boolean>(Boolean)(true);

type PStrOpt = ReturnType<typeof pStrOpt>;
type PNumOpt = ReturnType<typeof pNumOpt>;
type PBoolOpt = ReturnType<typeof pBoolOpt>;

type PStrReq = ReturnType<typeof pStrReq>;
type PNumReq = ReturnType<typeof pNumReq>;
type PBoolReq = ReturnType<typeof pBoolReq>;

type PStrDefault = typeof pStrDefault;
type PNumDefault = typeof pNumDefault;
type PBoolDefault = typeof pBoolDefault;

type PStrDefaultEmpty = ReturnType<typeof pStrDefault>;
type PNumDefaultZero = ReturnType<typeof pNumDefault>;
type PBoolDefaultFalse = ReturnType<typeof pBoolDefault>;
type PBoolDefaultTrue = ReturnType<typeof pBoolDefault>;

type PTypedOpt = typeof pTypedOptFn;
type PTypedReq = typeof pTypedReqFn;
type PTypedDefault = typeof pTypedDefaultFn;

const P: {
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
} = {
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

export { P };

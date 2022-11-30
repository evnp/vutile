import { PropType } from "vue";
import type { Prop } from "vue";

// P ~ a DSL for compact-yet-explicit, type-aware Vue component prop definitions

type PType =
  | typeof String
  | typeof Number
  | typeof Boolean
  | typeof Object
  | typeof Array
  | typeof Function
  | typeof Date
  | typeof Symbol;

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
const pObjOpt = pOptFn<object>(Object);
const pArrOpt = pOptFn<unknown[]>(Array);
const pFuncOpt = pOptFn<(...args: unknown[]) => unknown>(Function);
const pDateOpt = pOptFn<Date>(Date);
const pSymOpt = pOptFn<symbol>(Symbol);

const pStrReq = pReqFn<string>(String);
const pNumReq = pReqFn<number>(Number);
const pBoolReq = pReqFn<boolean>(Boolean);
const pObjReq = pReqFn<object>(Object);
const pArrReq = pReqFn<unknown[]>(Array);
const pFuncReq = pReqFn<(...args: unknown[]) => unknown>(Function);
const pDateReq = pReqFn<Date>(Date);
const pSymReq = pReqFn<symbol>(Symbol);

const pStrDefault = pDefaultFn<string>(String);
const pNumDefault = pDefaultFn<number>(Number);
const pBoolDefault = pDefaultFn<boolean>(Boolean);
const pObjDefault = pDefaultFn<object>(Object);
const pArrDefault = pDefaultFn<unknown[]>(Array);
const pFuncDefault = pDefaultFn<(...args: unknown[]) => unknown>(Function);
const pDateDefault = pDefaultFn<Date>(Date);
const pSymDefault = pDefaultFn<symbol>(Symbol);

const pStrDefaultEmpty = pDefaultFn<string>(String)("");
const pNumDefaultZero = pDefaultFn<number>(Number)(0);
const pBoolDefaultFalse = pDefaultFn<boolean>(Boolean)(false);
const pBoolDefaultTrue = pDefaultFn<boolean>(Boolean)(true);
const pObjDefaultEmpty = pDefaultFn<object>(Object)({});
const pArrDefaultEmpty = pDefaultFn<unknown[]>(Array)([]);
const pFuncDefaultIdentity = pDefaultFn<(...args: unknown[]) => unknown>(
  Function
)((x) => x);

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

type PTypedOpt = typeof pTypedOptFn;
type PTypedReq = typeof pTypedReqFn;
type PTypedDefault = typeof pTypedDefaultFn;

type PTypedStrOpt = ReturnType<typeof pTypedOptFn>;
type PTypedStrReq = ReturnType<typeof pTypedReqFn>;
type PTypedStrDefault = ReturnType<typeof pTypedDefaultFn>;

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

const P: {
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
} = {
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

export { P };

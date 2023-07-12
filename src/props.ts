import { PropType, toRefs, isRef } from "vue";
import type { Prop, Ref } from "vue";

// P ~ a DSL for compact-yet-explicit, type-aware Vue component prop definitions

function castReturnValueToBoolean<T>(func: unknown): (value: T) => boolean {
  return (value: T) => Boolean((func as (value: unknown) => unknown)(value));
  // Vue's prop validators require a boolean return type;
  // we relax this slightly by allowing any return type
  // and simply casting the validator result to boolean.
}

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
  return function (): Prop<T> & { required: false } {
    return {
      type: pType,
      required: false,
    } as unknown as Prop<T> & { required: false };
  };
}

function pReqFn<T>(pType: PType) {
  return function (): Prop<T> & { required: true } {
    return {
      type: pType,
      required: true,
    } as unknown as Prop<T> & { required: true };
  };
}

function pDefaultFn<T>(pType: PType) {
  return function (
    dflt: T,
    validator?: (value: T) => unknown
  ): Prop<T> & { default: T; validator?: (value: T) => boolean } {
    return {
      type: pType,
      required: false,
      default: dflt,
      ...(validator ? { validator: castReturnValueToBoolean(validator) } : {}),
    } as unknown as Prop<T> & { default: T; validator?: (value: T) => boolean };
  };
}

type PTypedOptFnReturnType<T> = {
  type: PropType<T>;
  required: false;
  validator?: (value: T) => boolean;
};

function pTypedOptFn<BaseT>(base: BaseT) {
  return function <PropT>(
    validator?: (value: PropT) => unknown
  ): PTypedOptFnReturnType<PropT> {
    return {
      type: base as unknown as PropType<PropT>,
      required: false,
      ...(validator ? { validator: castReturnValueToBoolean(validator) } : {}),
    };
  };
}

type PTypedReqFnReturnType<T> = {
  type: PropType<T>;
  required: true;
  validator?: (value: T) => boolean;
};

function pTypedReqFn<BaseT>(base: BaseT) {
  return function <PropT>(
    validator?: (value: PropT) => unknown
  ): PTypedReqFnReturnType<PropT> {
    return {
      type: base as unknown as PropType<PropT>,
      required: true,
      ...(validator ? { validator: castReturnValueToBoolean(validator) } : {}),
    };
  };
}

type PTypedDefaultFnReturnType<T> = {
  type: PropType<T>;
  required: false;
  default: T;
  validator?: (value: T) => boolean;
};

function pTypedDefaultFn<BaseT>(base: BaseT) {
  return function <PropT = BaseT>(
    dflt: PropT,
    validator?: (value: PropT) => unknown
  ): PTypedDefaultFnReturnType<PropT> {
    return {
      type: base as unknown as PropType<PropT>,
      required: false,
      default: dflt,
      ...(validator ? { validator: castReturnValueToBoolean(validator) } : {}),
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

const pStrOrNull = pTypedDefaultFn(String)<string | null>(null);
const pNumOrNull = pTypedDefaultFn(Number)<number | null>(null);
const pBoolDefaultFalse = pDefaultFn<boolean>(Boolean)(false);

const pObjOrNull = pTypedDefaultFn(Object)<Record<PropertyKey, unknown> | null>(
  null
);
const pArrOrNull = pTypedDefaultFn(Array<unknown>)<Array<unknown> | null>(null);
const pFuncOrNull = pTypedDefaultFn(Function)<
  ((...any: unknown[]) => unknown) | null
>(null);
const pDateOrNull = pTypedDefaultFn(Date)<Date | null>(null);
const pSymOrNull = pTypedDefaultFn(Symbol)<symbol | null>(null);

function pick<T, R extends Record<PropertyKey, T>>(
  props: R,
  ...keys: Array<keyof R>
): Record<string, Ref<T>> {
  return toRefs(Object.fromEntries(keys.map((k) => [k, props[k]])));
}

type PropValidationErrorMessage<T> =
  | null
  | string
  | ((props: Record<string, T>, defaultMessage: string) => string);

function validateMultipleProps<T, R>(
  props: Record<string, T>,
  validate: (props: Record<string, T>) => unknown,
  {
    parse = null,
    throwError = true,
    message = null,
    defaultMessage = "Validation of props failed.",
  }: {
    parse?: ((props: Record<string, T>, valid: boolean) => R) | null;
    throwError?: boolean;
    message?: PropValidationErrorMessage<T>;
    defaultMessage?: string;
  } = {}
): R {
  const valid = !!validate(props);
  if (!valid && throwError) {
    let errorMessage = defaultMessage;
    if (typeof message === "string") {
      errorMessage = message;
    } else if (typeof message === "function") {
      errorMessage = message(props, defaultMessage);
    }
    throw new Error(errorMessage);
  }
  return parse ? parse(props, valid) : (valid as R);
}

function requireAtLeastOneOf<T>(
  props: Record<string, T>,
  {
    throwError = true,
    message = null,
  }: {
    throwError?: boolean;
    message?: PropValidationErrorMessage<T>;
  } = {}
): Record<string, T> {
  const present = Object.entries(props).filter(([_key, prop]) =>
    isRef(prop) ? prop.value : prop
  );
  return validateMultipleProps(props, () => present.length >= 1, {
    parse: () => Object.fromEntries(present),
    throwError,
    message,
    defaultMessage:
      `At least one of ${JSON.stringify(Object.keys(props))} props should be` +
      " set, but none were.",
  });
}

function requireAtMostOneOf<T>(
  props: Record<string, T>,
  {
    throwError = true,
    message = null,
  }: {
    throwError?: boolean;
    message?: PropValidationErrorMessage<T>;
  } = {}
): [string, T] {
  const present = Object.entries(props).filter(([_key, prop]) =>
    isRef(prop) ? prop.value : prop
  );
  return validateMultipleProps(props, () => present.length <= 1, {
    parse: () => present[0],
    throwError,
    message,
    defaultMessage:
      `At most one of ${JSON.stringify(Object.keys(props))} props should be` +
      " set at once, but multiple were.",
  });
}

function requireExactlyOneOf<T>(
  props: Record<string, T>,
  {
    throwError = true,
    message = null,
  }: {
    throwError?: boolean;
    message?: PropValidationErrorMessage<T>;
  } = {}
): [string, T] {
  const present = Object.entries(props).filter(([_key, prop]) =>
    isRef(prop) ? prop.value : prop
  );
  const countDesc = present.length ? "multiple" : "none";
  const defaultMessage =
    `Exactly one of ${JSON.stringify(Object.keys(props))} props should be set` +
    ` at once, but ${countDesc} were.`;
  return validateMultipleProps(props, () => present.length === 1, {
    parse: () => present[0],
    throwError,
    message,
    defaultMessage,
  });
}

// TODO: add prop validator support to the interfaces below

function str(): PStrOpt;
function str(dflt: string): ReturnType<PStrDefault>;
function str(dflt?: string): unknown {
  return arguments.length ? pStrDefault(dflt as string) : pStrOpt();
}
function strReq(): PStrReq {
  return pStrReq();
}
function strTyped<T>(): PTypedOptFnReturnType<T>;
function strTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
function strTyped<T>(dflt?: T): unknown {
  return arguments.length
    ? pTypedDefaultFn(String)<T>(dflt as T)
    : pTypedOptFn(String)<T>();
}
function strReqTyped<T>(): PTypedReqFnReturnType<T> {
  return pTypedReqFn(String)<T>();
}
str.req = strReq as typeof strReq & { typed: typeof strReqTyped };
str.typed = strTyped as typeof strTyped & { req: typeof strReqTyped };
str.req.typed = strReqTyped;
str.typed.req = strReqTyped;
function strStrictDefault(): typeof pStrOrNull;
function strStrictDefault(dflt: string): ReturnType<PStrDefault>;
function strStrictDefault(dflt?: string): unknown {
  return arguments.length ? pStrDefault(dflt as string) : pStrOrNull;
}
strStrictDefault.req = str.req;
strStrictDefault.typed = str.typed;

function num(): PNumOpt;
function num(dflt: number): ReturnType<PNumDefault>;
function num(dflt?: number): unknown {
  return arguments.length ? pNumDefault(dflt as number) : pNumOpt();
}
function numReq(): PNumReq {
  return pNumReq();
}
function numTyped<T>(): PTypedOptFnReturnType<T>;
function numTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
function numTyped<T>(dflt?: T): unknown {
  return arguments.length
    ? pTypedDefaultFn(Number)<T>(dflt as T)
    : pTypedOptFn(Number)<T>();
}
function numReqTyped<T>(): PTypedReqFnReturnType<T> {
  return pTypedReqFn(Number)<T>();
}
num.req = numReq as typeof numReq & { typed: typeof numReqTyped };
num.typed = numTyped as typeof numTyped & { req: typeof numReqTyped };
num.req.typed = numReqTyped;
num.typed.req = numReqTyped;
function numStrictDefault(): typeof pNumOrNull;
function numStrictDefault(dflt: number): ReturnType<PNumDefault>;
function numStrictDefault(dflt?: number): unknown {
  return arguments.length ? pNumDefault(dflt as number) : pNumOrNull;
}
numStrictDefault.req = num.req;
numStrictDefault.typed = num.typed;

function bool(): PBoolOpt;
function bool(dflt: boolean): ReturnType<PBoolDefault>;
function bool(dflt?: boolean): unknown {
  return arguments.length ? pBoolDefault(dflt as boolean) : pBoolOpt();
}
function boolReq(): PBoolReq {
  return pBoolReq();
}
function boolTyped<T>(): PTypedOptFnReturnType<T>;
function boolTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
function boolTyped<T>(dflt?: T): unknown {
  return arguments.length
    ? pTypedDefaultFn(Boolean)<T>(dflt as T)
    : pTypedOptFn(Boolean)<T>();
}
function boolReqTyped<T>(): PTypedReqFnReturnType<T> {
  return pTypedReqFn(Boolean)<T>();
}
bool.req = boolReq as typeof boolReq & { typed: typeof boolReqTyped };
bool.typed = boolTyped as typeof boolTyped & { req: typeof boolReqTyped };
bool.req.typed = boolReqTyped;
bool.typed.req = boolReqTyped;
function boolStrictDefault(): ReturnType<typeof pBoolDefault>;
function boolStrictDefault(dflt: boolean): ReturnType<PBoolDefault>;
function boolStrictDefault(dflt?: boolean): unknown {
  return arguments.length ? pBoolDefault(dflt as boolean) : pBoolDefaultFalse;
}
boolStrictDefault.req = bool.req;
boolStrictDefault.typed = bool.typed;

function obj(): PObjOpt;
function obj(dflt: object): ReturnType<PObjDefault>;
function obj(dflt?: object): unknown {
  return arguments.length ? pObjDefault(dflt as object) : pObjOpt();
}
function objReq(): PObjReq {
  return pObjReq();
}
function objTyped<T>(): PTypedOptFnReturnType<T>;
function objTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
function objTyped<T>(dflt?: T): unknown {
  return arguments.length
    ? pTypedDefaultFn(Object)<T>(dflt as T)
    : pTypedOptFn(Object)<T>();
}
function objReqTyped<T>(): PTypedReqFnReturnType<T> {
  return pTypedReqFn(Object)<T>();
}
obj.req = objReq as typeof objReq & { typed: typeof objReqTyped };
obj.typed = objTyped as typeof objTyped & { req: typeof objReqTyped };
obj.req.typed = objReqTyped;
obj.typed.req = objReqTyped;
function objStrictDefault(): typeof pObjOrNull;
function objStrictDefault(dflt: object): ReturnType<PObjDefault>;
function objStrictDefault(dflt?: object): unknown {
  return arguments.length ? pObjDefault(dflt as object) : pObjOrNull;
}
objStrictDefault.req = obj.req;
objStrictDefault.typed = obj.typed;

function arr(): PArrOpt;
function arr(dflt: unknown[]): ReturnType<PArrDefault>;
function arr(dflt?: unknown[]): unknown {
  return arguments.length ? pArrDefault(dflt as unknown[]) : pArrOpt();
}
function arrReq(): PArrReq {
  return pArrReq();
}
function arrTyped<T>(): PTypedOptFnReturnType<T>;
function arrTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
function arrTyped<T>(dflt?: T): unknown {
  return arguments.length
    ? pTypedDefaultFn(Array)<T>(dflt as T)
    : pTypedOptFn(Array)<T>();
}
function arrReqTyped<T>(): PTypedReqFnReturnType<T> {
  return pTypedReqFn(Array)<T>();
}
arr.req = arrReq as typeof arrReq & { typed: typeof arrReqTyped };
arr.typed = arrTyped as typeof arrTyped & { req: typeof arrReqTyped };
arr.req.typed = arrReqTyped;
function arrStrictDefault(): typeof pArrOrNull;
function arrStrictDefault(dflt: unknown[]): ReturnType<PArrDefault>;
function arrStrictDefault(dflt?: unknown[]): unknown {
  return arguments.length ? pArrDefault(dflt as unknown[]) : pArrOrNull;
}
arrStrictDefault.req = arr.req;
arrStrictDefault.typed = arr.typed;

type GenericFunction = (...args: unknown[]) => unknown;
function func(): PFuncOpt;
function func(dflt: GenericFunction): ReturnType<PFuncDefault>;
function func(dflt?: GenericFunction): unknown {
  return arguments.length ? pFuncDefault(dflt as GenericFunction) : pFuncOpt();
}
function funcReq(): PFuncReq {
  return pFuncReq();
}
function funcTyped<T>(): PTypedOptFnReturnType<T>;
function funcTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
function funcTyped<T>(dflt?: T): unknown {
  return arguments.length
    ? pTypedDefaultFn(Function)<T>(dflt as T)
    : pTypedOptFn(Function)<T>();
}
function funcReqTyped<T>(): PTypedReqFnReturnType<T> {
  return pTypedReqFn(Function)<T>();
}
func.req = funcReq as typeof funcReq & { typed: typeof funcReqTyped };
func.typed = funcTyped as typeof funcTyped & { req: typeof funcReqTyped };
func.req.typed = funcReqTyped;
function funcStrictDefault(): typeof pFuncOrNull;
function funcStrictDefault(dflt: GenericFunction): ReturnType<PFuncDefault>;
function funcStrictDefault(dflt?: GenericFunction): unknown {
  return arguments.length ? pFuncDefault(dflt as GenericFunction) : pFuncOrNull;
}
funcStrictDefault.req = func.req;
funcStrictDefault.typed = func.typed;

function date(): PDateOpt;
function date(dflt: Date): ReturnType<PDateDefault>;
function date(dflt?: Date): unknown {
  return arguments.length ? pDateDefault(dflt as Date) : pDateOpt();
}
function dateReq(): PDateReq {
  return pDateReq();
}
function dateTyped<T>(): PTypedOptFnReturnType<T>;
function dateTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
function dateTyped<T>(dflt?: T): unknown {
  return arguments.length
    ? pTypedDefaultFn(Date)<T>(dflt as T)
    : pTypedOptFn(Date)<T>();
}
function dateReqTyped<T>(): PTypedReqFnReturnType<T> {
  return pTypedReqFn(Date)<T>();
}
date.req = dateReq as typeof dateReq & { typed: typeof dateReqTyped };
date.typed = dateTyped as typeof dateTyped & { req: typeof dateReqTyped };
date.req.typed = dateReqTyped;
date.typed.req = dateReqTyped;
function dateStrictDefault(): typeof pDateOrNull;
function dateStrictDefault(dflt: Date): ReturnType<PDateDefault>;
function dateStrictDefault(dflt?: Date): unknown {
  return arguments.length ? pDateDefault(dflt as Date) : pDateOrNull;
}
dateStrictDefault.req = date.req;
dateStrictDefault.typed = date.typed;

function sym(): PSymOpt;
function sym(dflt: symbol): ReturnType<PSymDefault>;
function sym(dflt?: symbol): unknown {
  return arguments.length ? pSymDefault(dflt as symbol) : pSymOpt();
}
function symReq(): PSymReq {
  return pSymReq();
}
function symTyped<T>(): PTypedOptFnReturnType<T>;
function symTyped<T>(dflt: T): PTypedDefaultFnReturnType<T>;
function symTyped<T>(dflt?: T): unknown {
  return arguments.length
    ? pTypedDefaultFn(Symbol)<T>(dflt as T)
    : pTypedOptFn(Symbol)<T>();
}
function symReqTyped<T>(): PTypedReqFnReturnType<T> {
  return pTypedReqFn(Symbol)<T>();
}
sym.req = symReq as typeof symReq & { typed: typeof symReqTyped };
sym.typed = symTyped as typeof symTyped & { req: typeof symReqTyped };
sym.req.typed = symReqTyped;
sym.typed.req = symReqTyped;
function symStrictDefault(): typeof pSymOrNull;
function symStrictDefault(dflt: symbol): ReturnType<PSymDefault>;
function symStrictDefault(dflt?: symbol): unknown {
  return arguments.length ? pSymDefault(dflt as symbol) : pSymOrNull;
}
symStrictDefault.req = sym.req;
symStrictDefault.typed = sym.typed;

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
const P: P = {
  str,
  num,
  bool,
  obj,
  arr,
  func,
  date,
  sym,

  pick,
  validateMultipleProps,
  requireAtLeastOneOf,
  requireAtMostOneOf,
  requireExactlyOneOf,
};

type PStrictDefaults = Omit<
  P,
  "str" | "num" | "bool" | "obj" | "arr" | "func" | "date" | "sym"
> & {
  str: typeof strStrictDefault;
  num: typeof numStrictDefault;
  bool: typeof boolStrictDefault;
  obj: typeof objStrictDefault;
  arr: typeof arrStrictDefault;
  func: typeof funcStrictDefault;
  date: typeof dateStrictDefault;
  sym: typeof symStrictDefault;
};
const PStrictDefaults: PStrictDefaults = {
  ...P,
  str: strStrictDefault,
  num: numStrictDefault,
  bool: boolStrictDefault,
  obj: objStrictDefault,
  arr: arrStrictDefault,
  func: funcStrictDefault,
  date: dateStrictDefault,
  sym: symStrictDefault,
};

export { P, PStrictDefaults };

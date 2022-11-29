import { ref as vueRef } from "vue";
import type { Ref } from "vue";

type Refried<T, N extends string> = {
  [key in N]: T;
} & {
  ref: Ref<T>;
};

export function refValue<T, N extends string>(
  name: N,
  initialValue: unknown = null
): Refried<T, N> {
  const ref = vueRef<T>(initialValue as T);
  const beans = { ref };
  Object.defineProperty(beans, name, { get: () => ref.value });
  return beans as unknown as Refried<T, N>;
}

export function constructedRefValue<T, N extends string>(
  name: N,
  cons: new (...args: unknown[]) => T,
  initialValue?: unknown
): Refried<T, N> {
  const ref = vueRef<InstanceType<typeof cons>>(initialValue as T);
  const beans = { ref };
  Object.defineProperty(beans, name, {
    get: () => {
      if (ref.value && !(ref.value instanceof cons)) {
        throw new Error(
          `Invalid ref value (expected: ${cons}, found: ${ref.value}).`
        );
      }
      return ref.value;
    },
  });
  return beans as unknown as Refried<T, N>;
}

export function validatedRefValue<T, N extends string>(
  name: string,
  validator: (value: unknown) => boolean,
  initialValue?: unknown
): Refried<T, N> {
  const ref = vueRef<T>(initialValue as T);
  const beans = { ref };
  Object.defineProperty(beans, name, {
    get: () => {
      if (!validator(ref.value)) {
        throw new Error(
          `Invalid ref value (validation failed for ${ref.value}).`
        );
      }
      return ref.value;
    },
  });
  return beans as unknown as Refried<T, N>;
}

export function namedRef<T, N extends string>(
  name: N,
  constructorOrValidator:
    | null
    | (new (...args: unknown[]) => T)
    | ((value: unknown) => boolean) = null,
  initialValue?: unknown
): Refried<T, N> {
  const cv = constructorOrValidator;
  type Constructor = new (...args: unknown[]) => T;
  type Validator = (value: unknown) => boolean;
  if (typeof cv === "function") {
    if (cv.prototype?.constructor === cv) {
      return constructedRefValue<T, N>(name, cv as Constructor, initialValue);
    } else {
      return validatedRefValue<T, N>(name, cv as Validator, initialValue);
    }
  } else {
    return refValue<T, N>(name, initialValue);
  }
}

export function elementRef<T>(
  constructorOrValidator:
    | null
    | (new (...args: unknown[]) => T)
    | ((value: unknown) => boolean),
  initialValue?: unknown
): Refried<T, "element"> {
  return namedRef<T, "element">(
    "element",
    constructorOrValidator,
    initialValue
  );
}

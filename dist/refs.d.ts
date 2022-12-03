import type { Ref } from "vue";
type Refried<T, N extends string> = {
    [key in N]: T;
} & {
    ref: Ref<T>;
};
export declare function refValue<T, N extends string>(name: N, initialValue?: unknown): Refried<T, N>;
export declare function constructedRefValue<T, N extends string>(name: N, cons: new (...args: unknown[]) => T, initialValue?: unknown): Refried<T, N>;
export declare function validatedRefValue<T, N extends string>(name: string, validator: (value: unknown) => boolean, initialValue?: unknown): Refried<T, N>;
export declare function namedRef<T, N extends string>(name: N, constructorOrValidator?: null | (new (...args: unknown[]) => T) | ((value: unknown) => boolean), initialValue?: unknown): Refried<T, N>;
export declare function elementRef<T>(constructorOrValidator: null | (new (...args: unknown[]) => T) | ((value: unknown) => boolean), initialValue?: unknown): Refried<T, "element">;
export {};

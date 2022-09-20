import type { Ref, UnwrapRef } from "vue";
declare type Refried<T, N extends string> = {
    [key in N]: T;
} & {
    ref: Ref<UnwrapRef<T>>;
};
export declare function refriedValue<T, N extends string>(name: N, initialValue?: unknown): Refried<T, N>;
export declare function refriedConstructedValue<T, N extends string>(name: N, cons: new (...args: unknown[]) => T, initialValue?: unknown): Refried<T, N>;
export declare function refriedValidatedValue<T, N extends string>(name: string, validator: (value: unknown) => boolean, initialValue?: unknown): Refried<T, N>;
export declare function refried<T, N extends string>(name: N, constructorOrValidator?: null | (new (...args: unknown[]) => T) | ((value: unknown) => boolean), initialValue?: unknown): Refried<T, N>;
export declare function refriedElement<T>(constructorOrValidator: null | (new (...args: unknown[]) => T) | ((value: unknown) => boolean), initialValue?: unknown): Refried<T, "element">;
export {};

export type DeepPartial<T> = { [K in keyof T]?: T[K] extends number ? number : T[K] extends string ? string : DeepPartial<T[K]> };

//remove the null but not undefined from the type

export type StrictNonNull<T> = T extends null
  ? never
  : {
      [Property in keyof T]: StrictNonNull<T[Property]>
    }

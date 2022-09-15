interface ImportMeta {
  env: {
    BASE_URL: string
    MODE?: string
    PROD?: boolean
    SSR?: boolean
  }
}

declare type NonEmptyArray<TItem> = readonly [TItem, ...TItem[]] | [TItem, ...TItem[]]

// eslint-disable-next-line @typescript-eslint/ban-types
declare type AnyClass = Function

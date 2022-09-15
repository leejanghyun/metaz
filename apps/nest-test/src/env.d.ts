/// <reference types="vite/client" />
// noinspection JSFileReferences

interface ImportMetaEnv {
  readonly DB_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

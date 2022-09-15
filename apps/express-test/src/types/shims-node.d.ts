declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string
    AWS_ACCESS_KEY_ID: string
    AWS_SECRET_ACCESS_KEY: string
    AWS_MESSAGE_QUEUE_URL: string
  }
}

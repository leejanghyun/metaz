/* eslint-disable import/no-named-as-default-member */
import dotenv from 'dotenv'

dotenv.config()

const {freeze} = Object

export const config = freeze({
  db: freeze({
    database: process.env.DB_DATABASE ?? 'main',
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    synchronize: process.env.NODE_ENV !== 'production',
    username: process.env.DB_USERNAME ?? 'root',
  }),
  jwt: freeze({
    key: process.env.JWT_KEY ?? 'jwt-secret',
  }),
  port: process.env.PORT,
})

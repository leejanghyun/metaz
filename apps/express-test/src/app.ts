/* eslint-disable import/no-named-as-default-member */
import express from 'express'

export const createApp = async () => {
  const app = express()

  app.use(express.json())

  return app
}

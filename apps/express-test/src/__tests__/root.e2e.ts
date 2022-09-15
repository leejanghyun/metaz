import express from 'express'
import request from 'supertest'
import {Express} from 'express-serve-static-core'
import {root} from 'src/apis/root'

describe('root routes', () => {
  let app: Express

  beforeEach(async () => {
    app = express()
    app.use('/', root({}))
  })

  it('should request /count (GET)', () => {
    return request(app).get('/').expect(200).expect('ok')
  })
})

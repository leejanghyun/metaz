import request from 'supertest'
import {Express} from 'express-serve-static-core'
import {auth} from 'src/apis/auth'
import {createApp} from 'src/app'

describe('root routes', () => {
  let app: Express

  beforeEach(async () => {
    app = await createApp()

    const userRepository: any = {
      count: jest.fn().mockResolvedValue(0),
    }

    app.use(
      '/',
      auth({
        userRepository,
      }),
    )
  })

  it('/count (GET)', () => {
    return request(app).get('/count').expect(200).expect('0')
  })

  it('/sign-in (POST)', async () => {
    const token: string = ''
    await request(app).post('/sign-in').expect(200).expect('ok')

    return request(app)
      .patch('/update-name')
      .send({
        name: 'foo',
      })
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('ok')
  })

  it('/sign-up (POST)', async () => {
    const token: string = ''
    await request(app)
      .post('/sign-up')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .set('Accept', 'application/json')
      .expect(200)
      .expect('ok')

    return request(app)
      .patch('/update-name')
      .send({
        name: 'foo',
      })
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('ok')
  })
})

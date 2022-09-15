import {INestApplication} from '@nestjs/common'
import {Test, TestingModule} from '@nestjs/testing'
import {AppModule} from 'src/app.module'
import request from 'supertest'

jest.mock('src/typeorm-module', () => {
  const {TypeOrmModule} = jest.requireActual('@nestjs/typeorm')
  const entities = jest.requireActual('src/entities')
  return {
    typeormModule: TypeOrmModule.forRoot({
      database: ':memory:',
      entities: Object.values(entities),
      logging: false,
      synchronize: true,
      type: 'sqlite',
    }),
  }
})

describe('AppController', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect('ok')
  })
  it('/auth/count (GET)', () => {
    return request(app.getHttpServer())
      .get('/auth/count')
      .expect(200)
      .expect('0')
  })

  it('/auth/sign-in (POST)', async () => {
    const token: string = ''
    await request(app.getHttpServer())
      .post('/auth/sign-in')
      .expect(201)
      .expect('ok')

    return request(app.getHttpServer())
      .patch('/auth/update-name')
      .send({
        name: 'foo',
      })
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('ok')
  })
  it('/auth/sign-up (POST)', async () => {
    const token: string = ''
    await request(app.getHttpServer())
      .post('/auth/sign-up')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .set('Accept', 'application/json')
      .expect(201)
      .expect('ok')

    return request(app.getHttpServer())
      .patch('/auth/update-name')
      .send({
        name: 'foo',
      })
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('ok')
  })
})

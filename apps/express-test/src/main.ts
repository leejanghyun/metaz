import 'reflect-metadata'
import {auth, root} from 'src/apis'
import {createApp} from 'src/app'
import {User} from 'src/entities'
import * as entities from 'src/entities'
import {DataSource} from 'typeorm'
import {config} from './config'

const dataSource = new DataSource({
  database: config.db.database,
  entities: [entities.User],
  host: config.db.host,
  password: config.db.password,
  port: 3306,
  synchronize: config.db.synchronize,
  type: 'mysql',
  username: config.db.username,
})

const app = await createApp()

await dataSource.initialize()

app.use('/', root({}))
app.use(
  '/auth',
  auth({
    userRepository: dataSource.getRepository(User),
  }),
)

if (import.meta.env.PROD) {
  app.listen(config.port)
  console.log(`listening on http://localhost:${config.port}/`)
}

export const viteNodeApp = app

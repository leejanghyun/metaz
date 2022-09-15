import {NestFactory} from '@nestjs/core'
import {AppModule} from './app.module'

if (import.meta.env.PROD) {
  const PORT = 8080
  // eslint-disable-next-line no-inner-declarations
  async function bootstrap(port: number | string) {
    const app = await NestFactory.create(AppModule)
    await app.listen(port)
  }

  bootstrap(PORT)
}

export const viteNodeApp = NestFactory.create(AppModule)

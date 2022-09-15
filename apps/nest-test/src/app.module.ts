import {Module} from '@nestjs/common'
import {ApisModule} from './apis/Api.module'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {typeormModule} from 'src/typeorm-module'
import {ConfigModule} from '@nestjs/config'
import {configuration} from 'src/configuration'

@Module({
  controllers: [AppController],
  imports: [
    typeormModule,
    ApisModule,
    ConfigModule.forRoot({
      load: [...configuration],
    }),
  ],
  providers: [AppService],
})
export class AppModule {}

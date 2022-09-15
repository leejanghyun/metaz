import {ConfigModule, ConfigService} from '@nestjs/config'
import {TypeOrmModule, TypeOrmModuleOptions} from '@nestjs/typeorm'
import {Configuration} from 'src/configuration'
import * as entities from 'src/entities'

export const typeormFactory = (
  configService: ConfigService<Configuration>,
): TypeOrmModuleOptions => {
  console.log(configService.get('dbHost'))
  return {
    database: 'mysql',
    entities: Object.values(entities),
    host: configService.get('dbHost'),
    password: configService.get('dbPassword'),
    port: configService.get('dbPort'),
    retryAttempts: 3,
    type: 'mysql',
    username: configService.get('dbUserName'),
  }
}

export const typeormModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: typeormFactory,
})

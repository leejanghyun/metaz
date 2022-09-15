import {Module} from '@nestjs/common'
import {UserService} from './User.service'
import {AuthController} from './Auth.controller'
import {TypeOrmModule} from '@nestjs/typeorm'
import {User} from 'src/entities'

@Module({
  controllers: [AuthController],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
})
export class AuthModule {}

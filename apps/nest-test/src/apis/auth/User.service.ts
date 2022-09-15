/* eslint-disable no-useless-constructor */
import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {User} from 'src/entities'
import {Repository} from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    //
  }

  getCount(): Promise<number> {
    return this.userRepository.count()
  }
}

import {InjectRepository} from 'src/data-source'
import {User} from 'src/entities'
import {Mutation, Resolver} from 'type-graphql'
import {Service} from 'typedi'
import {Repository} from 'typeorm'

@Service()
@Resolver()
export class AuthResolver {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    //
  }

  @Mutation(() => User)
  async signIn() {
    return this.userRepository.find()
  }
}

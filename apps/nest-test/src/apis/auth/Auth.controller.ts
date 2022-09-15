import {Controller, Get, Patch, Post} from '@nestjs/common'

import {UserService} from './User.service'

@Controller('/auth')
export class AuthController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private userService: UserService) {
    //
  }

  @Get('/count')
  async userCount() {
    return this.userService.getCount()
  }

  @Post('/sign-in')
  async signIn() {
    return 'ok'
  }

  @Post('/sign-up')
  async signUp() {
    return 'ok'
  }

  @Patch('/update-name')
  async updateName() {
    return 'ok'
  }
}

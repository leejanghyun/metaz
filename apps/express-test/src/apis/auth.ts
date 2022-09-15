import {Router} from 'express'
import {ContextRoute} from 'src/Context'
import {User} from 'src/entities'
import {Repository} from 'typeorm/repository/Repository'

export interface AuthProps {
  userRepository: Repository<User>
}

export const auth: ContextRoute<AuthProps> = ({userRepository}) => {
  const auth = Router()

  auth.get('/count', async (_, res) => {
    const count = await userRepository.count()
    res.send(String(count))
  })

  auth.post('/sign-in', (_, res) => {
    res.send('ok')
  })

  auth.post('/sign-up', (_, res) => {
    res.send('ok')
  })

  auth.patch('/name', (_, res) => {
    res.send('ok')
  })

  return auth
}

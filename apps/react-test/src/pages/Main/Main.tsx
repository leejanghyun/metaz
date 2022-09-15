import {FC} from 'react'

// Hooks
import {useSelector} from 'src/hooks'

// Store
import {getAccessToken} from 'src/store'

// Components
import SignInBefore from './components/SignInBefore'
import SignInAfter from './components/SignInAfter'

export const MainPage: FC = () => {
  const hasAccessToken = Boolean(useSelector(getAccessToken))

  return <>{hasAccessToken ? <SignInAfter /> : <SignInBefore />}</>
}

export default MainPage

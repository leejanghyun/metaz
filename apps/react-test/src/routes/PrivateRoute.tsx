import {ReactElement} from 'react'
import {Route, useHistory} from 'react-router-dom'

// Hooks
import {useSelector} from 'src/hooks'

// Store
import {getAccessToken} from 'src/store'

/** 컴포넌트 Property */
type Props = {
  [k: string]: unknown
  component: ReactElement
  isAuthNeed?: boolean
  path: string
}

/**
 * 라우터 컴포넌트
 * @param props 컴포넌트 Property
 * @returns 라우터 컴포넌트
 */
const PrivateRoute = (props) => {
  const {path, isAuthNeed, component: Component, ...rest} = props
  const history = useHistory()
  const accessToken = useSelector(getAccessToken)

  /** Token 있는지 유무 */
  const hasAuth = async () => {
    if (!accessToken) {
      history.push('/page-not-found')
    }
  }

  /**
   * Auth Checking
   */
  useEffect(() => {
    if (isAuthNeed) {
      hasAuth()
    }
  })

  return <Route path={path} {...rest} render={() => Component} />
}

export default PrivateRoute

import {ReactElement} from 'react'
import {Provider} from 'react-redux'
import {Global} from '@emotion/react'

import Routes from './routes'
import {GlobalStyle} from '@foo-bar-project/react-ui'

// Store
import store from 'src/store'

// Components
import Spinner from 'src/components/Loader/Spinner'
import ErrorAlert from 'src/components/Alert/ErrorAlert'

/**
 * App Wrapper
 */
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <Global styles={GlobalStyle} />
      <App>
        <Routes />
        {/** Api 통신 시 Spinner, Alert */}
        <Spinner />
        <ErrorAlert />
      </App>
    </Provider>
  )
}

/**
 * App Component
 */
const App = (props): ReactElement => {
  return <>{props.children}</>
}

export default AppWrapper

import {lazy, Suspense} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// Components
import PrivateRoute from './PrivateRoute'
import Loading from 'components/Loader/Loading'

// Main Layout
const MainLayout = lazy(() => import('layouts/main-layout/Index'))

// Page Components
const Main = lazy(() => import('src/pages/Main/Main')) // Main Page
const SignInPage = lazy(() => import('src/pages/SignIn')) // Sign In Page
const SignUpPage = lazy(() => import('src/pages/SignUp')) // Sign Up Page
const PasswordUpdatePage = lazy(() => import('src/pages/PasswordUpdate')) // Update Password Page
const PageNotFound = lazy(() => import('src/pages/PageNotFound')) // Page Not Found Page

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading isSilent={true} />}>
        {/** Main Layout */}
        <MainLayout>
          <Switch>
            {/** Main Page */}
            <PrivateRoute exact path={'/'} component={<Main />} />

            {/** Sign In Page */}
            <PrivateRoute path={'/signin'} component={<SignInPage />} />

            {/** Sign Up Page */}
            <PrivateRoute path={'/signup'} component={<SignUpPage />} />

            {/** Update Password Page */}
            <PrivateRoute isAuthNeed={true} path={'/password-update'} component={<PasswordUpdatePage />} />

            {/** Page Not Found */}
            <Route path={['*', '/page-not-found']} render={() => <PageNotFound />} />
          </Switch>
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router

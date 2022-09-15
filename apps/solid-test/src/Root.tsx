import {useRoutes} from 'solid-app-router'
import {routes} from 'src/routes'

export const Root = () => {
  const Routes = useRoutes(routes)
  return (
    <>
      root
      <Routes />
    </>
  )
}

export default Root

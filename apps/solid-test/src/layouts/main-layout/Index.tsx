import {Outlet} from 'solid-app-router'

export const MainLayout = () => {
  return (
    <div>
      main layout
      <Outlet />
    </div>
  )
}

export default MainLayout

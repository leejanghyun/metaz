import {defineComponent} from 'vue'
import {RouterView} from 'vue-router'

export const MainLayout = defineComponent(() => {
  return () => (
    <div>
      <h1>Vue Test</h1>
      <RouterView />
    </div>
  )
})

export default MainLayout

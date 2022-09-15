import {defineComponent} from 'vue'
import {Button} from 'components/Button'
import {RouterLink} from 'vue-router'

export const MainPage = defineComponent(() => {
  return () => (
    <div>
      <RouterLink to="/sign">
        <Button>Sign In / Sign Up</Button>
      </RouterLink>
    </div>
  )
})

export default MainPage

import {createApp} from 'vue'
import {Root} from './Root'
import {createRouter} from './routes'
import './index.css'

const bootstrap = async () => {
  const app = createApp(Root)

  const router = createRouter()

  app.use(router)

  await router.isReady()

  app.mount('#app')
}

bootstrap()

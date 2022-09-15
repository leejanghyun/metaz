import {defineComponent} from 'vue'

export const Button = defineComponent((_, {slots}) => {
  return () => <a class={['btn']}>{slots.default?.()}</a>
})

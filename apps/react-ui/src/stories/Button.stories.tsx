import {ComponentStory, ComponentMeta} from '@storybook/react'

// Components
import {Button} from '../components/Atom'

export default {
  title: 'Atom/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const PrimaryButton: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

PrimaryButton.args = {
  children: 'Primary',
  convert: false,
}

export const DisabledButton: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

DisabledButton.args = {
  children: 'Primary Disable',
  disabled: true,
}

import { ChakraProvider } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import UserTag from '../components/UserTag'

export default {
  title: 'Components',
  component: UserTag,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UserTag>

const Template: ComponentStory<typeof UserTag> = () => {
  return (
    <ChakraProvider>
      <UserTag title={'Tom'} />
    </ChakraProvider>
  )
}

export const UserTagComponent = Template.bind({})

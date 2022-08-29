import { ChakraProvider } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Header from '../components/Header'

export default {
  title: 'Components',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => {
  return (
    <ChakraProvider>
      <Header header={'Copy Link'} />
    </ChakraProvider>
  )
}

export const HeaderComponent = Template.bind({})

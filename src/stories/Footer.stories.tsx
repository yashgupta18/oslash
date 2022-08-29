import { ChakraProvider } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Footer from '../components/Footer'

export default {
  title: 'Components',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => {
  return (
    <ChakraProvider>
      <Footer footer={'hello'} />
    </ChakraProvider>
  )
}

export const FooterComponent = Template.bind({})

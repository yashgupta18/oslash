import { LinkIcon, QuestionOutlineIcon } from '@chakra-ui/icons'
import { ChakraProvider } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CardFooter from '../components/CardFooter'

export default {
  title: 'Components',
  component: CardFooter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CardFooter>

const Template: ComponentStory<typeof CardFooter> = () => {
  return (
    <ChakraProvider>
      <CardFooter
        leftTitle="learn about sharing"
        rightTitle={'Copy Link'}
        leftIcon={<QuestionOutlineIcon />}
        rightIcon={<LinkIcon />}
      />
    </ChakraProvider>
  )
}

export const CardFooterComponent = Template.bind({})

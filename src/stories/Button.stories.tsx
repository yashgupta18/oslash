import { ChakraProvider } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ShareIcon } from '../assets/ShareIcon'

import ShareButton from '../components/ShareButton'

export default {
  title: 'Components',
  component: ShareButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ShareButton>

const Template: ComponentStory<typeof ShareButton> = () => {
  return (
    <ChakraProvider>
      <ShareButton label={'Share'} icon={<ShareIcon />} />
    </ChakraProvider>
  )
}

export const ShareButtonComponent = Template.bind({})

import { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ChakraProvider } from '@chakra-ui/react'
import SelectionProvider from '../selectionContext'
import { ShareIcon } from '../assets/ShareIcon'
import ShareButton from '../components/ShareButton'
import Container from './Container'

export default {
  title: 'Example/Oslash',
  component: ShareButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ShareButton>

const Template: ComponentStory<typeof ShareButton> = () => {
  const [clickState, setClickState] = useState(false)
  return (
    <ChakraProvider>
      <SelectionProvider>
        <ShareButton
          label={'Share'}
          clickState={clickState}
          setClickState={setClickState}
          icon={<ShareIcon />}
        />
        {clickState ? <Container /> : null}
      </SelectionProvider>
    </ChakraProvider>
  )
}

export const Oslash = Template.bind({})

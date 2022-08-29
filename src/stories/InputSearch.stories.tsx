import { ChakraProvider } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

import InputSearch from '../components/InputSearch'

export default {
  title: 'Components',
  component: InputSearch,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof InputSearch>

const Template: ComponentStory<typeof InputSearch> = () => {
  const [value, setValue] = useState('')
  return (
    <ChakraProvider>
      <InputSearch
        name={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search emails, names or groups"
      />
    </ChakraProvider>
  )
}

export const InputSearchComponent = Template.bind({})

import { ChevronDownIcon } from '@chakra-ui/icons'
import { ChakraProvider, Menu } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import AccessList from '../components/AccessList'

import MenuDropdownButton from '../components/MenuDropdownButton'

export default {
  title: 'Components',
  component: MenuDropdownButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MenuDropdownButton>

const Template: ComponentStory<typeof MenuDropdownButton> = () => {
  const [access, setAccess] = useState('Full access')
  return (
    <ChakraProvider>
      <Menu>
        <MenuDropdownButton>
          {access ? access : 'Full access'}
          <ChevronDownIcon />
        </MenuDropdownButton>
        <AccessList
          list={['Full access', 'Can edit', 'Can view', 'No Access']}
          updateAccess={setAccess}
        />
      </Menu>
    </ChakraProvider>
  )
}

export const Dropdown = Template.bind({})

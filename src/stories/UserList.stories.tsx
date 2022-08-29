import { ChakraProvider } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from '../assets/Avatar'

import UserList from '../components/UserList'

export default {
  title: 'Components',
  component: UserList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UserList>

const user = {
  id: 1,
  name: 'Andy',
  email: 'andy@gmail.com',
  age: 32,
  group: false,
  image: <Avatar />,
  person: true,
}

const Template: ComponentStory<typeof UserList> = () => {
  return (
    <ChakraProvider>
      <UserList obj={user}>{user.image}</UserList>
    </ChakraProvider>
  )
}

export const UserListComponent = Template.bind({})

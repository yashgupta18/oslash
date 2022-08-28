import { PhoneIcon } from '@chakra-ui/icons'
import { Square } from '@chakra-ui/react'
import { Avatar } from '../assets/Avatar'

const USERS = [
  {
    id: 1,
    name: 'Andy',
    email: 'andy@gmail.com',
    age: 32,
    group: false,
    image: <Avatar />,
    person: true,
  },
  {
    id: 2,
    name: 'Bob',
    email: 'bob@gmail.com',
    age: 30,
    group: false,
    image: <Avatar />,
    person: true,
  },
  {
    id: 3,
    name: 'Tom Hulk',
    email: 'tomhulk@gmail.com',
    age: 40,
    group: false,
    image: <Avatar />,
    person: true,
  },
  {
    id: 4,
    name: 'Tom Hank',
    email: 'tomhank@gmail.com',
    age: 50,
    group: false,
    image: <Avatar />,
    person: true,
  },
  {
    id: 5,
    name: 'Engineering',
    group: true,
    image: (
      <Square size="40px" bg="purple.700" color="white">
        <PhoneIcon />
      </Square>
    ),
    person: false,
  },
  {
    id: 6,
    name: 'Finance',
    group: true,
    image: (
      <Square size="40px" bg="purple.700" color="white">
        <PhoneIcon />
      </Square>
    ),
    person: false,
  },
  {
    id: 7,
    name: 'IT',
    group: true,
    image: (
      <Square size="40px" bg="purple.700" color="white">
        <PhoneIcon />
      </Square>
    ),
    person: false,
  },
  {
    id: 8,
    name: 'Design',
    group: true,
    image: (
      <Square size="40px" bg="purple.700" color="white">
        <PhoneIcon />
      </Square>
    ),
    person: false,
  },
]

export default USERS

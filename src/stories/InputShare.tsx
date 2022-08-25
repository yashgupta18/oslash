import React from 'react'
import {
  Box,
  Select,
  Input,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react'
import Sharing from './Sharing'
import { InsigniaIcon } from './assets/InsigniaIcon'

const InputShare = () => {
  return (
    <Box bg="white" w="100%" color="black">
      <InputGroup size="sm" p={2}>
        <Input placeholder="People, emails, groups" />
        <InputRightAddon children="Invite" />
      </InputGroup>
      <Sharing
        icon={<InsigniaIcon />}
        heading={'Everyone at OSlash'}
        footer={'25 workspace members'}
      >
        <Select
          placeholder="Select option"
          size="sm"
          bg="transparent"
          color="#6B7280"
          variant="unstyled"
          _hover={{ bg: '##F3F4F6' }}
          fontSize="12px"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Sharing>
    </Box>
  )
}

export default InputShare

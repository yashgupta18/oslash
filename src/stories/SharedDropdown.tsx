import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  FormControl,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import React from 'react'

interface SharedDropdownProps {
  access?: string
}
const SharedDropdown = ({ access }: SharedDropdownProps) => {
  return (
    <FormControl>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          fontSize="12px"
          _hover={{ bg: 'none' }}
          _expanded={{ bg: 'none' }}
          _focus={{ boxShadow: 'none', outline: 'none' }}
        >
          {access ? access : 'No access'}
          <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          {['Full access', 'Can edit', 'Can view', 'No Access'].map((item) => (
            <MenuItem key={item}>{item}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </FormControl>
  )
}

export default SharedDropdown

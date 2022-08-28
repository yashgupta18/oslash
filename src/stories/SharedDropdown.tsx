import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu } from '@chakra-ui/react'
import React from 'react'
import AccessList from '../components/AccessList'
import MenuDropdownButton from '../components/MenuDropdownButton'

interface SharedDropdownProps {
  access?: string
}
const SharedDropdown = ({ access }: SharedDropdownProps) => {
  return (
    <Menu>
      <MenuDropdownButton>
        {access ? access : 'No access'}
        <ChevronDownIcon />
      </MenuDropdownButton>
      <AccessList />
    </Menu>
  )
}

export default SharedDropdown

import { MenuButton } from '@chakra-ui/react'
import React from 'react'

interface MenuDropdownProps {
  children?: React.ReactNode
}
const MenuDropdownButton = ({ children }: MenuDropdownProps) => {
  return (
    <MenuButton
      px={4}
      py={2}
      transition="all 0.2s"
      borderRadius="md"
      _focus={{ boxShadow: 'none', outline: 'none' }}
      _hover={{ bg: 'none' }}
      _expanded={{ bg: 'none' }}
      fontSize="12px"
    >
      {children}
    </MenuButton>
  )
}

export default MenuDropdownButton

import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
interface MenuDropdownProps {
  localAccess: string
  setLocalAccess: (role: string) => void
}

const MenuDropdown = ({ localAccess, setLocalAccess }: MenuDropdownProps) => {
  // const [person, setPerson] = React.useContext(selectionContext)
  const updateAccess = (role: string) => {
    setLocalAccess(role)
    // setPerson(
    //   person.map((item: { id: any; name: any; email: any }) => {
    //     return item.id === key
    //       ? {
    //           id: item.id,
    //           name: item.name,
    //           email: item.email,
    //           access: role,
    //         }
    //       : item
    //   })
    // )
  }
  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        minWidth="130px"
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: 'gray.400' }}
        _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'none', outline: 'none' }}
      >
        {localAccess ? localAccess : 'Full access'}
        <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        {['Full access', 'Can edit', 'Can view', 'No Access'].map((item) => (
          <MenuItem key={item} onClick={() => updateAccess(item)}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default MenuDropdown

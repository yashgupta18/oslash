import { MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'

interface AccessListProps {
  updateAccess?: (role: string) => void
  list: string[]
}

const AccessList = ({ updateAccess, list }: AccessListProps) => {
  return (
    <MenuList>
      {list.map((item) => (
        <MenuItem key={item} onClick={() => updateAccess && updateAccess(item)}>
          {item}
        </MenuItem>
      ))}
    </MenuList>
  )
}

export default AccessList

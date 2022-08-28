import { MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'

interface AccessListProps {
  updateAccess?: (role: string) => void
}

const AccessList = ({ updateAccess }: AccessListProps) => {
  return (
    <MenuList>
      {['Full access', 'Can edit', 'Can view', 'No Access'].map((item) => (
        <MenuItem key={item} onClick={() => updateAccess && updateAccess(item)}>
          {item}
        </MenuItem>
      ))}
    </MenuList>
  )
}

export default AccessList

import { List, ListItem } from '@chakra-ui/react'
import React from 'react'

interface UserListProps {
  obj: any
  clickHandler: (user: any) => void
  children?: React.ReactElement
}
const UserList = ({ obj, clickHandler, children }: UserListProps) => {
  return (
    <List>
      <ListItem
        key={obj.name}
        className="user"
        onClick={() => clickHandler(obj)}
      >
        {children}
        {obj.name}
      </ListItem>
    </List>
  )
}

export default UserList

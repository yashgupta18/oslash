import { List, ListItem } from '@chakra-ui/react'
import React from 'react'
import { UsersType } from '../stories/Filter'

interface UserListProps {
  obj: UsersType
  clickHandler: (user: any) => void
  children?: React.ReactElement
}
const UserList = ({ obj, clickHandler, children }: UserListProps) => {
  console.log({ obj })
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

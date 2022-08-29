import { Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { selectionContext } from '../selectionContext'

import './Filter.css'
import InputSearch from '../components/InputSearch'
import MenuDropdown from './MenuDropdown'
import UserList from '../components/UserList'
import UserTag from '../components/UserTag'

import USERS from './userData'

interface FilterProps {
  setIsClicked: (isClicked: boolean) => void
}

interface selectedProps {
  image: React.ReactNode
  name?: string
  email?: string
}

export interface UsersType {
  id: number
  name: string
  email?: string
  age?: number
  group: boolean
  person: boolean
  access?: string
  image?: React.ReactNode
}

const Filter = ({ setIsClicked }: FilterProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [person, setPerson] = React.useContext<UsersType>(
    selectionContext
  ) as any
  const [localAccess, setLocalAccess] = useState('')
  const [name, setName] = useState('')
  const [selected, setSelected] = useState<selectedProps>()
  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS)

  const filter = (e: { target: { value: string } }) => {
    const keyword = e.target.value

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase())
      })
      setFoundUsers(results)
    } else {
      setFoundUsers(USERS)
    }

    setName(keyword)
  }

  const isUserPresent = () =>
    person.some((item: { name: string }) => item.name === selected?.name)

  const rerouteHandler = () => {
    !isUserPresent() &&
      selected?.name &&
      setPerson([
        ...person,
        {
          id: person.length,
          name: selected.name,
          email: selected.email,
          image: selected.image,
          access: localAccess,
        },
      ])
    setIsClicked(false)
  }

  const clickHandler = (user: selectedProps) => {
    setSelected(user)
  }

  return (
    <>
      <Flex
        width="100%"
        bg="#F3F4F6"
        display="flex"
        justifyContent="center"
        align="center"
        position="relative"
        height="58px"
      >
        {selected?.name ? (
          <Flex align="center" justifyContent="center" width="60%">
            <UserTag title={selected?.name} setSelected={setSelected} />
          </Flex>
        ) : (
          <InputSearch
            name={name}
            onChange={(e) => filter(e)}
            placeholder="Search emails, names or groups"
          />
        )}
        <MenuDropdown
          localAccess={localAccess}
          setLocalAccess={setLocalAccess}
        />
        <Button
          onClick={() => rerouteHandler()}
          borderRadius="0px"
          bg="#FFF"
          _hover={{ bg: '#FFF' }}
        >
          Invite
        </Button>
      </Flex>

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          <>
            {foundUsers.some((item) => item.person) && (
              <h1 style={{ padding: '10px', margin: '0px 10px' }}>
                Select a person
              </h1>
            )}
            {foundUsers.map(
              (user) =>
                user.person && (
                  <UserList obj={user} clickHandler={clickHandler}>
                    {user.image}
                  </UserList>
                )
            )}
          </>
        ) : (
          <h1 className="user">No results found</h1>
        )}

        {foundUsers && foundUsers.length > 0 ? (
          <>
            {foundUsers.some((item) => item.group) && (
              <h1 style={{ padding: '10px', margin: '0px 10px' }}>
                Select a Group
              </h1>
            )}
            {foundUsers.map(
              (user) =>
                user.group && (
                  <UserList obj={user} clickHandler={clickHandler}>
                    {user.image}
                  </UserList>
                )
            )}
          </>
        ) : (
          <h1 className="user">No results found</h1>
        )}
      </div>
    </>
  )
}

export default Filter

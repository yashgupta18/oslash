// import React from 'react'
import { Box, Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import Sharing from './Sharing'
import { InsigniaIcon } from './assets/InsigniaIcon'
import React from 'react'
import { selectionContext } from '../selectionContext'
import SharedDropdown from './SharedDropdown'
import { UsersType } from './Filter'

interface InputShareProps {
  setIsClicked: (isClicked: boolean) => void
}

const InputShare = ({ setIsClicked }: InputShareProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [person] = React.useContext(selectionContext) as any
  console.log({ person })
  return (
    <Box bg="white" w="100%" color="black">
      <InputGroup size="sm" p={2}>
        <Input
          placeholder="People, emails, groups"
          onClick={() => setIsClicked(true)}
        />
        <InputRightAddon>Invite</InputRightAddon>
      </InputGroup>

      <Sharing
        icon={<InsigniaIcon />}
        heading={'Everyone at OSlash'}
        footer={'25 workspace members'}
      >
        <SharedDropdown />
      </Sharing>
      {person.length > 0
        ? person.map((item: UsersType, index: React.Key) => (
            <Sharing
              key={index}
              icon={<InsigniaIcon />}
              heading={item.name}
              footer={item.email}
            >
              <SharedDropdown access={item?.access} />
            </Sharing>
          ))
        : null}
    </Box>
  )
}

export default InputShare

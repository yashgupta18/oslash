import { Box, Button, Input, InputGroup } from '@chakra-ui/react'
import Sharing from './SharingContainer'
import { InsigniaIcon } from '../assets/InsigniaIcon'
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

  return (
    <Box bg="white" w="100%" color="black">
      <InputGroup size="sm" p={2}>
        <Input
          placeholder="People, emails, groups"
          onClick={() => setIsClicked(true)}
        />
        <Button borderRadius="0px" bg="#F9FAFB" _hover={{ bg: '#F9FAFB' }}>
          Invite
        </Button>
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
              icon={item.image}
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

import { CloseIcon } from '@chakra-ui/icons'
import { Tag, TagLabel, TagRightIcon } from '@chakra-ui/react'
import React from 'react'

interface UserTag {
  title: string
  setSelected?: (arg: any) => void
  icon?: React.FC
}
const UserTag = ({ title, setSelected, icon }: UserTag) => {
  return (
    <Tag
      size={'md'}
      key={'md'}
      bg="transparent"
      colorScheme="gray"
      position="absolute"
      left="5"
    >
      <TagLabel>{title}</TagLabel>
      <TagRightIcon
        fontSize={'10px'}
        as={icon ? icon : CloseIcon}
        onClick={() => setSelected && setSelected({})}
      />
    </Tag>
  )
}

export default UserTag

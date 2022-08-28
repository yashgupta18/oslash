import { QuestionOutlineIcon, LinkIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Sharing from '../stories/SharingContainer'

const CardFooter = () => {
  return (
    <Sharing
      icon={<QuestionOutlineIcon />}
      footer={'learn about sharing'}
      bgColor="#F9FAFB"
    >
      <Box display="flex" gap="5px" alignItems="center">
        <LinkIcon />
        <Text fontSize="14px" fontWeight="500" color="#6B7280">
          Copy Link
        </Text>
      </Box>
    </Sharing>
  )
}

export default CardFooter

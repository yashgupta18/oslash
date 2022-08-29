import { Box, Text } from '@chakra-ui/react'
import React from 'react'

interface IconTextProps {
  title: string
  icon: React.ReactNode
}
const IconText = ({ title, icon }: IconTextProps) => {
  return (
    <Box display="flex" gap="5px" alignItems="center">
      {icon}
      <Text fontSize="14px" fontWeight="500" color="#6B7280">
        {title}
      </Text>
    </Box>
  )
}

export default IconText

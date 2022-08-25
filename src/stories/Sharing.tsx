import React from 'react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

interface SharingProps {
  icon?: React.ReactNode
  children?: React.ReactNode
  heading?: string
  footer?: string
  bgColor?: string
}

const Sharing = ({
  icon,
  children,
  heading,
  footer,
  bgColor,
}: SharingProps) => {
  return (
    <Box
      bg={bgColor ? bgColor : 'white'}
      w="100%"
      p={2}
      color="black"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom=" 1px solid #E5E7EB"
    >
      <Box display="flex" gap="8px" alignItems="center">
        {icon}
        {heading && footer ? (
          <Box display="flex" flexDirection="column">
            <Text fontSize="16px" color="#111827">
              {heading}
            </Text>
            <Text fontSize="14px" color="#6B7280">
              {footer}
            </Text>
          </Box>
        ) : heading ? (
          heading && (
            <Text fontSize="16px" color="#111827">
              {heading}
            </Text>
          )
        ) : (
          footer && (
            <Text fontSize="14px" color="#6B7280">
              {footer}
            </Text>
          )
        )}
      </Box>
      <Box position="relative" right="10px">
        {children}
      </Box>
    </Box>
  )
}

export default Sharing

import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Header from '../components/Header'

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
    <Flex
      bg={bgColor ? bgColor : 'white'}
      p={2}
      justify="space-between"
      align="center"
      borderBottom=" 1px solid #E5E7EB"
    >
      <Flex gap="8px" align="center">
        {icon}
        {heading && footer ? (
          <Flex direction="column">
            <Header header={heading} />
            <Footer footer={footer} />
          </Flex>
        ) : heading ? (
          heading && <Header header={heading} />
        ) : (
          footer && <Footer footer={footer} />
        )}
      </Flex>
      <Box position="relative" right="10px">
        {children}
      </Box>
    </Flex>
  )
}

export default Sharing

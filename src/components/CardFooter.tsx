import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import IconText from './IconText'

interface CardFooterProps {
  leftTitle: string
  rightTitle: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const CardFooter = ({
  leftTitle,
  rightTitle,
  leftIcon,
  rightIcon,
}: CardFooterProps) => {
  return (
    <Flex
      bg={'white'}
      p={2}
      justify="space-between"
      align="center"
      borderBottom=" 1px solid #E5E7EB"
      bgColor="#F9FAFB"
    >
      <IconText title={leftTitle} icon={leftIcon} />
      <Box position="relative" right="10px">
        <IconText title={rightTitle} icon={rightIcon} />
      </Box>
    </Flex>
  )
}

export default CardFooter

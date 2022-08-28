import React from 'react'
import { Text } from '@chakra-ui/react'
interface HeaderProps {
  header: string
  fontSize?: string
  textColor?: string
}
const Header = ({ header, fontSize, textColor }: HeaderProps) => {
  return (
    <Text fontSize={fontSize || '16px'} color={textColor || '#111827'}>
      {header}
    </Text>
  )
}

export default Header

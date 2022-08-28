import React from 'react'
import { Text } from '@chakra-ui/react'
interface FooterProps {
  footer: string
  fontSize?: string
  textColor?: string
}
const Footer = ({ footer, fontSize, textColor }: FooterProps) => {
  return (
    <Text fontSize={fontSize || '14px'} color={textColor || '#6B7280'}>
      {footer}
    </Text>
  )
}

export default Footer

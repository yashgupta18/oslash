import { Input, InputGroup } from '@chakra-ui/react'
import React from 'react'

interface InputSearchProps {
  name: string
  filter: (e: { target: { value: any } }) => void
  placeholder: string
}
const InputSearch = ({ name, filter, placeholder }: InputSearchProps) => {
  return (
    <InputGroup size="sm" p={2} width="60%" outline="none" border="#F3F4F6">
      <Input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder={placeholder}
        _focus={{
          border: '#F3F4F6',
          outline: 'none',
          borderColor: '#F3F4F6',
          boxShadow: 'none',
        }}
        _hover={{
          bg: 'transparent',
          border: '#F3F4F6',
          outline: 'none',
          borderColor: '#F3F4F6',
          boxShadow: 'none',
        }}
      />
    </InputGroup>
  )
}

export default InputSearch

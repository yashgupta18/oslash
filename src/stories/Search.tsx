import React, { useState } from 'react'
import { ShareIcon } from './assets/ShareIcon'
import Container from './Container'
import './Search.css'
import { ChakraProvider } from '@chakra-ui/react'

const Search = () => {
  const [clickState, setClickState] = useState(true)
  return (
    <ChakraProvider>
      <button className="container" onClick={() => setClickState(!clickState)}>
        Share
        <ShareIcon />
      </button>
      {clickState ? <Container /> : null}
    </ChakraProvider>
  )
}

export default Search

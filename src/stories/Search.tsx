import React, { useState } from 'react'
import { ShareIcon } from './assets/ShareIcon'
import InputContainer from './InutContainer'
import './Search.css'
// import { ShareIcon } from '../assets/ShareIcon'
// import InputContainer from './InputContainer'
// import { ChakraProvider } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

const Search = () => {
  const [clickState, setClickState] = useState(false)
  return (
    <ChakraProvider>
      <button className="container" onClick={() => setClickState(!clickState)}>
        Share
        <ShareIcon />
      </button>
      {clickState ? <InputContainer /> : null}
    </ChakraProvider>
  )
}

export default Search

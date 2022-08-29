import { Box, Switch } from '@chakra-ui/react'
import { GlobeIcon } from '../assets/GlobeIcon'
import InputShare from './InputShare'
import Sharing from './SharingContainer'
import CardFooter from '../components/CardFooter'
import { useState } from 'react'
import Filter from './Filter'
import { LinkIcon, QuestionOutlineIcon } from '@chakra-ui/icons'

const Container = () => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <Box
      bg="white"
      w="50%"
      color="black"
      border=" 1px solid #E5E7EB"
      boxShadow="0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
    >
      {isClicked ? (
        <Filter setIsClicked={setIsClicked} />
      ) : (
        <>
          <Sharing
            icon={<GlobeIcon />}
            heading={'Share to web'}
            footer={'Publish and share link with anyone'}
          >
            <Switch />
          </Sharing>
          <InputShare setIsClicked={setIsClicked} />
        </>
      )}
      <Box bg="#F9FAFB" w="100%" color="black">
        <CardFooter
          leftTitle="learn about sharing"
          rightTitle={'Copy Link'}
          leftIcon={<QuestionOutlineIcon />}
          rightIcon={<LinkIcon />}
        />
      </Box>
    </Box>
  )
}

export default Container

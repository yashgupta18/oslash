import { Box } from '@chakra-ui/react'
import { GlobeIcon } from './assets/GlobeIcon'
import InputShare from './InputShare'
import Sharing from './Sharing'
import { Switch } from '@chakra-ui/react'
import { QuestionOutlineIcon, LinkIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'

const Container = () => {
  return (
    <Box
      bg="pink"
      w="50%"
      color="black"
      border=" 1px solid #E5E7EB"
      boxShadow="0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
    >
      {/* Share to web */}
      <Sharing
        icon={<GlobeIcon />}
        heading={'Share to web'}
        footer={'Publish and share link with anyone'}
      >
        <Switch />
      </Sharing>
      {/* Input */}
      <InputShare />
      {/* footer */}
      <Box bg="#F9FAFB" w="100%" color="black">
        <Sharing
          icon={<QuestionOutlineIcon />}
          footer={'learn about sharing'}
          bgColor="#F9FAFB"
        >
          <Box display="flex" gap="5px" alignItems="center">
            <LinkIcon />
            <Text fontSize="14px" fontWeight="500" color="#6B7280">
              Copy Link
            </Text>
          </Box>
        </Sharing>
      </Box>
    </Box>
  )
}

export default Container

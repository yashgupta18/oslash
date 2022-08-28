import { Button } from '@chakra-ui/react'

interface ShareButtonProps {
  clickState: boolean
  setClickState?: (clickState: boolean) => void
  icon: JSX.Element
}
const ShareButton = ({
  clickState,
  setClickState,
  icon,
  ...rest
}: ShareButtonProps): JSX.Element => {
  return (
    <Button
      rightIcon={icon}
      colorScheme="blackAlpha"
      variant="solid"
      background=" black"
      color=" white"
      onClick={() => setClickState && setClickState(!clickState)}
      {...rest}
    >
      Share
    </Button>
  )
}

export default ShareButton

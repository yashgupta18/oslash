import { Button } from '@chakra-ui/react'

interface ShareButtonProps {
  label: string
  clickState?: boolean
  setClickState?: (clickState: boolean) => void
  icon: JSX.Element
}
const ShareButton = ({
  label,
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
      _hover={{ bg: 'black' }}
      onClick={() => setClickState && setClickState(!clickState)}
      {...rest}
    >
      {label}
    </Button>
  )
}

export default ShareButton

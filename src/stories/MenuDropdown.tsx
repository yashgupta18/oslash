import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu } from '@chakra-ui/react'
import AccessList from '../components/AccessList'
import MenuDropdownButton from '../components/MenuDropdownButton'
interface MenuDropdownProps {
  localAccess: string
  setLocalAccess: (role: string) => void
}

const MenuDropdown = ({ localAccess, setLocalAccess }: MenuDropdownProps) => {
  const updateAccess = (role: string) => {
    setLocalAccess(role)
  }
  return (
    <Menu>
      <MenuDropdownButton>
        {localAccess ? localAccess : 'Full access'}
        <ChevronDownIcon />
      </MenuDropdownButton>
      <AccessList
        updateAccess={updateAccess}
        list={['Full access', 'Can edit', 'Can view', 'No Access']}
      />
    </Menu>
  )
}

export default MenuDropdown

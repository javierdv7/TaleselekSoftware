import { useColorMode, Flex, IconButton, IconProps, Icon, Spacer, ButtonGroup} from '@chakra-ui/react'
import { BellIcon, HamburgerIcon } from '@chakra-ui/icons'
import { TalesLargeLogoIcon } from './assets/TalesIcons'


interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({toggleSidebar}) => {
  const { colorMode } = useColorMode()
  const UserIcon: React.FC<IconProps> = (props) => (
    <Icon viewBox='0 0 200 200' {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
      </svg>
    </Icon>
  )
  return (
    <>
      <Flex
        _dark={{background: "gray.700"}}
        _light={{background: "#555", color:"white"}}
        height='10%'
        width={'100%'}
        transition={"all 0.2s"}
        boxShadow='lg'
        zIndex='sticky'
        minWidth='max-content'
        alignItems='center'
        gap='2'
        position="sticky"
        top="0"
        p = {6}>
        <IconButton onClick={toggleSidebar} aria-label='open-menu' icon={<HamburgerIcon/>}
          display={{ base: 'block', lg: 'none' }}/>
        <TalesLargeLogoIcon color="white"
        boxSize={{base: "32", md: "44"}}/>
        <Spacer/>
        <ButtonGroup gap='2'>
          <IconButton
            colorScheme='gray'
            variant='solid'
            aria-label='Notifications'
            icon={<BellIcon />}
            _hover={{ color: colorMode === 'dark' ? 'Tales.Yellow' : 'Tales.Orange', cursor: 'pointer' }}
          />
          <IconButton
            colorScheme='gray'
            variant='solid'
            aria-label='User'
            icon={<UserIcon />}
            _hover={{ color: colorMode === 'dark' ? 'Tales.Yellow' : 'Tales.Orange', cursor: 'pointer' }}
          />
        </ButtonGroup>
      </Flex>
    </>
  )
}

export default Header

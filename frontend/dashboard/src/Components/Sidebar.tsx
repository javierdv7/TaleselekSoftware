import { useColorMode, VStack, Button, Spacer, IconButton, Center, CloseButton, Icon, IconProps} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { TalesLogoIcon } from './assets/TalesIcons'

interface SidebarProps {
    toggleSidebar: () => void;
  }
  

const Sidebar: React.FC<SidebarProps> = ({toggleSidebar}) => {
    const { colorMode, toggleColorMode } = useColorMode()
    
    const LogIcon: React.FC<IconProps> = (props) => (
        <Icon viewBox='0 0 200 200' {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
        </svg>
        </Icon>
    )
    const DashboardIcon: React.FC<IconProps> = (props) => (
        <Icon viewBox='0 0 200 200' {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
        <path fillRule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z" clipRule="evenodd" />
        </svg>
        </Icon>
    )
    const DiagramIcon: React.FC<IconProps> = (props) => (
        <Icon {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 32 32">
        <path fill="currentColor" d="m6.812 17.202l7.396-3.665v-2.164h-.834c-.414 0-.808-.084-1.167-.237v1.16L4.81 15.96v2.912h2V17.2zm19.75 1.673v-2.913l-7.397-3.666v-1.158a2.98 2.98 0 0 1-1.166.236h-.833v2.164l7.395 3.666v1.672h2zm-9.874 0v-7.5h-2v7.5zm11.187 1H23.25a2 2 0 0 0-2 2V26.5a2 2 0 0 0 2 2h4.625a2 2 0 0 0 2-2v-4.625a2 2 0 0 0-2-2m-19.75 0H3.5a2 2 0 0 0-2 2V26.5a2 2 0 0 0 2 2h4.625a2 2 0 0 0 2-2v-4.625a2 2 0 0 0-2-2m5.25-9.5H18a2 2 0 0 0 2-2V3.75a2 2 0 0 0-2-2h-4.625a2 2 0 0 0-2 2v4.625a2 2 0 0 0 2 2m4.625 9.5h-4.625a2 2 0 0 0-2 2V26.5a2 2 0 0 0 2 2H18a2 2 0 0 0 2-2v-4.625a2 2 0 0 0-2-2" />
    </svg>
        </Icon>
    )
    return (
        <VStack
        _dark={{background: "gray.700"}}
        _light={{background: "#555", color:"black"}}
        as="nav"
        spacing={4}
        align="stretch"
        bg="gray.700"
        color="white"
        height="100%"
        width="100%"
        p={6}
        boxShadow='lg'
        zIndex='sticky'
        position="sticky"
        top="0"
        overflowY="auto"
        >
        <CloseButton 
        onClick={toggleSidebar}
        display={{base:'block', lg:'none'}}
        />    
        <Center
        marginBottom={16}>
            <TalesLogoIcon
            color={'white'}
            boxSize='70px'/>
        </Center>
        <Button
        _hover={{ color: colorMode === 'dark' ? 'Tales.Yellow' : 'Tales.Orange', cursor: 'pointer' }}
        height="10%"
        width={{base: "50%", md: "100%"}}
        alignSelf="center"
        leftIcon={<DashboardIcon />}
        paddingLeft={16}
        paddingRight={16}>
            Dashboard
        </Button>
        <Button
        _hover={{ color: colorMode === 'dark' ? 'Tales.Yellow' : 'Tales.Orange', cursor: 'pointer' }}
        height="10%"
        width={{base: "50%", md: "100%"}}
        alignSelf="center"
        leftIcon={<DiagramIcon />}
        paddingLeft={16}
        paddingRight={16}>
            Diagrama
        </Button>
        <Button
        _hover={{ color: colorMode === 'dark' ? 'Tales.Yellow' : 'Tales.Orange', cursor: 'pointer' }}
        height="10%"
        width={{base: "50%", md: "100%"}}
        alignSelf="center"
        leftIcon={<LogIcon />}
        paddingLeft={16}
        paddingRight={16}>
            Registro
        </Button>

        <Spacer display={{base:"none", md:"block"}}/>
        
        <IconButton
          aria-label='theme'
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          _hover={{ color: colorMode === 'dark' ? 'Tales.Yellow' : 'Tales.Orange', cursor: 'pointer' }}
          width={{base: "50%", md: "100%"}}
        alignSelf="center"/>
        </VStack>
    )
}
export default Sidebar;
  
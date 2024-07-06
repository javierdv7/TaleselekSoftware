import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, colors:{
  Tales:{
    Yellow: '#fac800',
    Orange: '#e16e09'
  }
} })

export default theme
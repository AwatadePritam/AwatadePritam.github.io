import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'
import React from 'react'

function ThemeToggle() {
    const {colorMode,toggleColorMode} = useColorMode()
    

  return (
    <IconButton
    aria-label='Theme Toggle'
    variant={'ghost-dark-mode'}
    icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
    onClick={toggleColorMode}
    />
  )
}

export default ThemeToggle
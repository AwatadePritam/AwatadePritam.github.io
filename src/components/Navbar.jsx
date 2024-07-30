import { Box, Flex ,Text ,Icon, IconButton, Button, useColorMode,useColorModeValue} from '@chakra-ui/react'
import React from 'react'
import { DownloadIcon, HamburgerIcon, MoonIcon } from '@chakra-ui/icons'
import ThemeToggle from './ThemeToggle'
import '../App.css'

function Navbar() {
    const {colorMode} = useColorMode();
    const hoverBgColor = useColorModeValue("#EDBB3C", "#EDBB3C");
    const hoverColor = useColorModeValue("#2D3748", "#EDF2F7");
    
  return (
   
     <Flex className='glass' w={'100%'} justifyContent={'center'} alignItems={'center'} position={'fixed'} top={0} left={0} zIndex={10} >
       <Flex w={['90%','90%','80%','80%']} justifyContent={'space-between'} alignItems={'center'} padding={'10px 0px' }>
            <Flex >
                <Text fontSize={['24px','24px','24px','24px']} color={useColorModeValue("#EDBB3C", "#EDBB3C")}>Portfolio</Text>
            </Flex>

            <Flex alignItems={'center'} justifyContent={'center'} gap={'10px'}>
                <Flex gap={'25px'} display={['none','none','flex','flex']}  >
                    <Text fontSize={['md','lg','xl','xl']}>Home</Text>
                    <Text fontSize={['md','lg','xl','xl']}>About</Text>
                    <Text fontSize={['md','lg','xl','xl']}>Experience</Text>
                    <Text fontSize={['md','lg','xl','xl']}>Skills</Text>
                    <Text fontSize={['md','lg','xl','xl']}>Projects</Text>
                    <Text fontSize={['md','lg','xl','xl']}>Statistics</Text>
                    <Text fontSize={['md','lg','xl','xl']}>Contact</Text>
                   
                    <Box display={'flex'} rounded={'md'} justifyContent={'center'} alignItems={'center'}  bg={useColorModeValue("#EDBB3C", "#EDBB3C")}
                                color={useColorModeValue("#EDF2F7", "#2D3748")}
                                _hover={{
                                    bg: hoverBgColor,
                                    color: hoverColor,
                                }}   pl={'10px'}
                                title='Click to download'
                                cursor={'pointer'}
                                >
                        <Text fontSize={['md','lg','lg','lg']} >Resume</Text>
                        <IconButton icon={<DownloadIcon/>} variant={'ghost-dark-mode'} />
                    </Box>
                </Flex>

                <Flex >
                <ThemeToggle/>   
                </Flex>

                <Flex gap={'25px'} display={['flex','flex','none','none']} >
                    <HamburgerIcon boxSize={6} />
                </Flex>

            </Flex>
            


       </Flex>

    </Flex>
   
  )
}

export default Navbar
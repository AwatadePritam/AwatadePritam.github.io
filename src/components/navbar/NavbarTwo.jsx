import { CloseIcon, DownloadIcon, HamburgerIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Link, Spacer, Text, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import ThemeToggle from '../ThemeToggle'
import '../../App.css'

import { Link as ScrollLink } from 'react-scroll';
import SingleNavLink from './SingleNavLink';
import SingleMiniNavLink from './SingleMiniNavLink';
import DownloadResumeButton from './DownloadResumeButton';
import MiniDownload from './MiniDownload';



const NavbarTwo = () => {
     const { isOpen, onOpen, onClose } = useDisclosure();
     const { colorMode } = useColorMode();
     const hoverBgColor = useColorModeValue("#EDBB3C", "#EDBB3C");
     const hoverColor = useColorModeValue("#2D3748", "#EDF2F7");


     const navLinks = [
        { id: 1, linkName: 'Home', linkId: 'home' },
        { id: 2, linkName: 'About', linkId: 'about' },
        { id: 3, linkName: 'Projects', linkId: 'projects' },
        { id: 4, linkName: 'Experience', linkId: 'experience' },
        { id: 5, linkName: 'Skills', linkId: 'skills' },
        { id: 6, linkName: 'Statistics', linkId: 'statistics' },
        { id: 7, linkName: 'Contact', linkId: 'contact' }
    ];
    


  return (
    <Flex className='glass' w={'100%'}   justify='center'  position={'fixed'} top={'0px'}  zIndex={10}>
        <Flex   justify='space-between' align='center' w={['90%','90%','80%','80%']}>
                <Flex>
                <Text _hover={{ cursor: 'pointer' }}  color={useColorModeValue("#EDBB3C", "#EDBB3C")} padding={['1rem 1rem', '1rem', '1rem 0rem', '1rem 0rem', '1rem 0rem', '1rem 0rem']} fontSize={['md', 'lg', '2xl', '2xl']}>Portfolio</Text>
                </Flex>
              
                <Flex  justifyContent={'center'} alignItems={'center'}  gap={'20px'}>
                    <Flex display={['none', 'none', 'none', 'flex']} justifyContent={'center'} alignItems={'center'}  gap={'20px'}>
                        {
                            navLinks.map(item=>(
                                <SingleNavLink key={item.linkId} linkName={item.linkName} linkId={item.linkId} />
                            ))
                        } 
                         
                        <DownloadResumeButton/>
                    </Flex>
                    <ThemeToggle/>
                     <HamburgerIcon onClick={onOpen} display={['flex', 'flex', 'flex', 'none']}/>
                </Flex>

                <Drawer placement={'top'} onClose={onClose} isOpen={isOpen} >
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>
                        <Flex justifyContent={'space-between'}>
                            <Text _hover={{ cursor: 'pointer' }}>Pritam's Portfolio</Text>
                            <IconButton 
                            aria-label="Close"
                            variant={'ghost'}
                            icon={<CloseIcon/>}
                            onClick={onClose}/>
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody padding={'2rem'}>
                        <Flex direction={'column'}    gap={'20px'}>
                        {
                            navLinks.map((item,index)=>(
                                <SingleMiniNavLink  onClose={onClose} key={item.linkId} index={index} linkName={item.linkName} linkId={item.linkId} />
                            ))
                        } 
                        <MiniDownload  onClose={onClose} />
                        </Flex>
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>


        </Flex>
    </Flex>
  )
}

export default NavbarTwo
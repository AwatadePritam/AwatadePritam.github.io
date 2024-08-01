import { Box, Button, Flex, Image, Text, useColorMode,useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import myPhoto from '../Images/myPhoto.gif'
import { Tilt } from 'react-tilt'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';


const Herosection = () => {
    const {colorMode}= useColorMode();
    const hoverBgColor = useColorModeValue("#EDBB3C", "#EDBB3C");
    const hoverColor = useColorModeValue("#2D3748", "#EDF2F7");

    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
  return (
   
        <Flex  w={'100%'} justifyContent={'center'} alignItems={'center'} padding={"10px 0px" } minHeight={'90vh'}>
            <Flex  flexDirection={['column','column','row','row']} w={['90%','90%','70%','70%']} justifyContent={'center'} alignItems={'center'} padding={'20px 0px' }  > 
                <Flex padding={'40px 0px'} gap={'20px'}  w={['100%','100%','60%','60%']} justifyContent={'center'} alignItems={['center','center','start','start']} flexDirection={'column'}>
                            <Flex justifyContent={'center'} alignItems={['center','center','start','start']}  gap={'0px'} flexDirection={'column'}  w={['100%','100%','90%','90%']}  >
                                        <Text fontWeight={'600'} fontSize={['xl','2xl','2xl','3xl']} >Hello👋, I'm</Text>
                                        <Text id='user-detail-name' fontWeight={'700'} fontSize={['2xl','4xl','4xl','6xl']} >Pritam Awatade</Text>
                                        <Text fontWeight={'600'} fontSize={['xl','2xl','3xl','4xl']} >
                                        <Typewriter
                                            options={{
                                                strings: ['Full Stack Web Developer', 'MERN Developer'],
                                                autoStart: true,
                                                loop: true,
                                                speed:100,
                                                 
                                                delay:50,
                                                 deleteSpeed:30
                                            }}
                                            />
                                        </Text>
                                           
                            </Flex>
                            <Flex  justifyContent={['center','center','start','start']} alignItems={'center'}  w={['100%','100%','60%','60%']}  >
                              <Link to="contact-me" smooth={true} duration={700}>
                                <Button  bg={useColorModeValue("#EDBB3C", "#EDBB3C")}
                                color={useColorModeValue("#EDF2F7", "#2D3748")}
                                _hover={{
                                    bg: hoverBgColor,
                                    color: hoverColor,
                                }}  fontSize={['sm','md','lg','xl']}> Get In Touch</Button>
                             </Link>
                            </Flex>
                </Flex>
                    <Flex  w={['60%','60%','40%','40%']} justifyContent={'center'} alignItems={'center'}>
                            <Tilt options={defaultOptions}>
                                <Image src={myPhoto} draggable={"false"}/>
                                </Tilt>
                                </Flex>
                 </Flex>
            </Flex> 
         
 
  )
}

export default Herosection
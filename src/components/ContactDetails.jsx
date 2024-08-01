import { Flex, Icon, Link, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { IoMdCall } from "react-icons/io";

const ContactDetails = () => {
    const { colorMode } = useColorMode();
    const boxShadowColor = colorMode === 'dark' ? '0 4px 12px rgba(255, 255, 255, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.4)';
  return (
    <Flex   fontSize={'xl'} direction={'column'} justifyContent={'left'} alignItems={'left'} gap={'20px'} p={'40px'} shadow="md" borderWidth="1px" borderRadius="md"  _hover={{ boxShadow: boxShadowColor }}>
        <Flex alignItems={'center'} gap={'10px'}>
        <Icon as={FaEnvelope} boxSize={6} />
        <Link href="mailto:pritamawatade@gmail.com" isExternal mx={2} id='contact-email'>
        pritamawatade@gmail.com
        </Link>
       
        </Flex>

        <Flex alignItems={'center'} gap={'10px'}>
        <Icon as={IoMdCall} boxSize={6} />
        <Link id='contact-phone'
            href="tel:+919763657894" // Replace with your actual phone number
            isExternal 
            mx={2}
        >
            +919763657894
        </Link>
        </Flex>

        <Flex alignItems={'center'} gap={'10px'}>
        <Icon as={FaMapMarkerAlt} boxSize={6} />
            <Text>Pune, Maharashtra </Text>
        </Flex>
   </Flex>
  )
}

export default ContactDetails
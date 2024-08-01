import React from 'react';
import { Box, HStack, IconButton, Link } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <Box textAlign="center" my={4}>
      <HStack spacing={4} justify="center">
        <Link href="https://www.linkedin.com/in/pritamawatade/" isExternal id='contact-linkedin'>
          <IconButton
            icon={<FaLinkedin size={30}/>}
            isRound
            size="lg"
            bg="#319795"
            color="white"
            _hover={{ bg: '#EDBB3C' }}
            aria-label="LinkedIn"
          />
        </Link>
        <Link href="https://github.com/awatadepritam" isExternal id='contact-github'>
          <IconButton
            icon={<FaGithub size={30}/>}
            isRound
            size="lg"
            bg="#319795"
            color="white"
            _hover={{ bg: '#EDBB3C' }}
            aria-label="GitHub"
          />
        </Link>
      </HStack>
    </Box>
  );
};

export default ContactInfo;

import React from 'react';
import { Box, Text, Link, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box fontSize={'small'} w={'100%'} bg="gray.700" color="white" py={3}>
      <Flex 
        direction={{ base: 'column-reverse', md: 'row-reverse' }} 
        justifyContent="center"
        gap={['10px','10px','10px','80px']} 
        alignItems="center" 
        mx="auto" 
        w={['90%','80%','80%','80%']}
        px={4}
        
      >
        <Text mb={{ base: 1, md: 0 }}  >© {new Date().getFullYear()} Pritam Awatade. All rights reserved.</Text>
        
        <Flex >
        <Link 
            href="tel:+919763657894" // Replace with your actual phone number
            isExternal 
            mx={2}
        >
            Phone
        </Link>
        <Link href="mailto:mr.pritamawatade@gmail.com" isExternal mx={2}>
            Email
        </Link>
        <Link href="https://github.com/awatadepritam" isExternal mx={2}>
            GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/pritamawatade/" isExternal mx={2}>
            LinkedIn
        </Link>
          
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
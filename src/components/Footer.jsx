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
        

      </Flex>
    </Box>
  );
};

export default Footer;
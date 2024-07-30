import React from 'react';
import { Badge, Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import myPhoto from '../Images/myPhoto.png'
const Aboutme = () => {
  return (
    <Flex mx="auto" p={5} direction="column" width="90%" justifyContent={'center'} alignItems={'center'}>
    <Heading as="h2" size="xl" mb={5} textAlign="center">
      About Me
    </Heading>
     <Flex w={"100%"} gap={"30px"} padding={"20px 0px"} direction={['column','column','column','row']}  justifyContent={'center'} alignItems={'center'} >
        <Flex w={["50%","40%","40%","30%"]}  justifyContent={"center"} alignItems={"center"}>
           <Image  src={myPhoto} w={"80%"} />
        </Flex>
        <Flex w={["90%","90%","90%","70%"]} direction={'column'} justifyContent={"center"} alignItems={"center"} >
        <Text fontSize="lg">
        Passionate <Badge colorScheme="teal">Full Stack Web Developer</Badge> with 1.5 years at Tata Consultancy Services. Transitioned to web development with a <Badge colorScheme="purple">1-year MERN stack bootcamp</Badge> at Masai School, where I honed skills in <Badge colorScheme="green">React, Node.js, Express.js, and MongoDB</Badge>.
      </Text>
      <br/>
      <Text fontSize="lg">
        Proficient in <Badge colorScheme="blue">JavaScript, HTML5, and CSS</Badge>. Portfolio includes clones of the <Badge colorScheme="orange">Reliance online shopping</Badge> and <Badge colorScheme="red">KFC website</Badge>, demonstrating best practices in web development.
      </Text>
      <br/>
      <Text fontSize="lg">
        Eager to contribute as a <Badge colorScheme="teal">React JS Developer</Badge> with backend expertise, bringing skills, creativity, and enthusiasm to make a meaningful impact in web development.
      </Text>
        </Flex>
     </Flex>
    </Flex>
  
  );
};

export default Aboutme;

import React from 'react';
import { Box, Heading, SimpleGrid, Text, Badge, Stack, Icon, Flex, useColorMode } from '@chakra-ui/react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGitAlt } from 'react-icons/fa';
import {SiRedux } from 'react-icons/si'
import { SiReactos } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";





const skills = [
  { name: 'HTML5', icon: FaHtml5 , category:'Frontend' },
  { name: 'CSS3', icon: FaCss3Alt,category:'Frontend' },
  { name: 'JavaScript', icon: FaJs,category:'Frontend' },
  { name: 'React', icon: FaReact,category:'Frontend'},
  { name: 'Node.js', icon: FaNode,category:'Backend' },
  { name: 'Express.js', icon: SiExpress,category:'Backend' },
  { name: 'MongoDB', icon: SiMongodb,category:'Backend' },
  { name: 'Git', icon: FaGitAlt,category:'VersionControl' },
  { name: 'Redux', icon: SiRedux,category:'StateManagement' },
  {name: 'Context', icon:SiReactos ,category:'StateManagement'},
 
  { name: 'Github', icon: FaGithub,category:'VersionControl' }
  
];

const SkillsSection = () => {
    const { colorMode } = useColorMode();
    const boxShadowColor = colorMode === 'dark' ? '0 4px 12px rgba(255, 255, 255, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.4)';
  return (
    <Flex w={'90%'} flexWrap={'wrap'} justifyContent={"center"} alignItems={"100%"} gap={'25px'}  >
        <Flex py={10} px={5}  direction={"column"} justifyContent={"center"} alignItems={"center"} gap={"40px"}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Technical Skills
      </Heading>
      {/* <SimpleGrid columns={[1, 2, 3, 4]} spacing={20} >
        {skills.map((skill) => (
          <Box key={skill.name}  cursor={'pointer'} p={5} shadow="md" borderWidth="1px" borderRadius="md" textAlign="center" _hover={{ boxShadow: boxShadowColor }}>
            <Stack align="center">
              <Icon as={skill.icon} boxSize={10} color="teal.500" />
              <Text mt={2} fontSize="xl" fontWeight="bold">{skill.name}</Text>
              <Badge colorScheme="green" mt={2}>{skill.level}</Badge>
            </Stack>
          </Box>
        ))}
      </SimpleGrid> */}

      <Flex   direction={'column'} w={'100%'} justifyContent={'center'} alignItems={'center'} gap={'25px'}>
        <Heading size={'lg'}>
          Frontend 
        </Heading>
        <Flex  gap={'50px'}  flexWrap={'wrap'} justifyContent={'center'} data-aos="fade-down" >
                  {skills.map((skill) =>{
          if(skill.category==='Frontend'){
            return(
              <Box key={skill.name}  minWidth={'120px'} cursor={'pointer'} p={5} shadow="md" borderWidth="1px" borderRadius="md" textAlign="center" _hover={{ boxShadow: boxShadowColor }}>
            <Stack align="center">
              <Icon as={skill.icon} boxSize={10} color="teal.500" />
              <Text mt={2} fontSize="xl" fontWeight="bold">{skill.name}</Text>
              <Badge colorScheme="green" mt={2}>{skill.level}</Badge>
            </Stack>
          </Box>
            )
          }
        })}
      </Flex>
      </Flex>

      <Flex  flexWrap={'wrap'} direction={'column'} w={'100%'} justifyContent={'center'} alignItems={'center'} gap={'25px'}>
        <Heading size={'lg'}>
          Backend 
        </Heading>
        <Flex  gap={'50px'}  flexWrap={'wrap'} justifyContent={'center'} data-aos="fade-right" >
                  {skills.map((skill) =>{
          if(skill.category==='Backend'){
            return(
              <Box key={skill.name}  minWidth={'120px'} cursor={'pointer'} p={5} shadow="md" borderWidth="1px" borderRadius="md" textAlign="center" _hover={{ boxShadow: boxShadowColor }}>
            <Stack align="center">
              <Icon as={skill.icon} boxSize={10} color="teal.500" />
              <Text mt={2} fontSize="xl" fontWeight="bold">{skill.name}</Text>
              <Badge colorScheme="green" mt={2}>{skill.level}</Badge>
            </Stack>
          </Box>
            )
          }
        })}
      </Flex>
      </Flex>
      
      <Flex flexWrap={'wrap'}  direction={'column'} w={'100%'} justifyContent={'center'} alignItems={'center'} gap={'25px'}>
        <Heading size={'lg'}>
          State Management 
        </Heading>
      <Flex gap={'50px'}  flexWrap={'wrap'} justifyContent={'center'} data-aos="fade-left"  >
        {skills.map((skill) =>{
          if(skill.category==='StateManagement'){
            return(
              <Box key={skill.name} minW={'120px'} cursor={'pointer'} p={5} shadow="md" borderWidth="1px" borderRadius="md" textAlign="center" _hover={{ boxShadow: boxShadowColor }}>
            <Stack align="center">
              <Icon as={skill.icon} boxSize={10} color="teal.500" />
              <Text mt={2} fontSize="xl" fontWeight="bold">{skill.name}</Text>
              <Badge colorScheme="green" mt={2}>{skill.level}</Badge>
            </Stack>
          </Box>
            )
          }
        })}
      </Flex>
      </Flex>
      
      <Flex  flexWrap={'wrap'} direction={'column'} w={'100%'} justifyContent={'center'} alignItems={'center'} gap={'25px'}>
        <Heading size={'lg'}>
          Version Control
        </Heading>
      <Flex  gap={'50px'}  flexWrap={'wrap'} justifyContent={'center'}  data-aos="fade-up" >
        {skills.map((skill) =>{
          if(skill.category==='VersionControl'){
            return(
              <Box key={skill.name} minWidth={'120px'} cursor={'pointer'} p={5} shadow="md" borderWidth="1px" borderRadius="md" textAlign="center" _hover={{ boxShadow: boxShadowColor }}>
            <Stack align="center">
              <Icon as={skill.icon} boxSize={10} color="teal.500" />
              <Text mt={2} fontSize="xl" fontWeight="bold">{skill.name}</Text>
              <Badge colorScheme="green" mt={2}>{skill.level}</Badge>
            </Stack>
          </Box>
            )
          }
        })}
      </Flex>
      </Flex>
     


    </Flex>
    </Flex>
  );
};

export default SkillsSection;

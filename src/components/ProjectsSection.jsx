import React from 'react';
import { Box, Image, Text, Button, Grid, Heading, Flex, useColorMode } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';
import reliancedigital from '../Images/reliancedigital.png'
import kfcclone from '../Images/kfcclone.png'



const ProjectCard = ({ image, title,description, liveDemo, githubRepo }) => {
    const { colorMode } = useColorMode();
   const boxShadowColor = colorMode === 'dark' ? '0 4px 12px rgba(255, 255, 255, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.4)';


  return (
    <Box 
      width={"450px"}
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      _hover={{ boxShadow: boxShadowColor }} 
      className='project-card'
      p={5}
    >
      <Image src={image}  borderRadius="md" width={"100%"} height={"200px"}/>
      <Text mt={2} fontSize="larger" fontWeight="semibold" p={"5px 0px"} className='project-title'>
        {title}
      </Text>
      <Text mt={2}  fontWeight="semibold"  p={"5px 0px"} className='project-description'>
      {description.length > 100 ? `${description.slice(0, 100)}...` :description}
      </Text>
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button as="a" href={liveDemo} colorScheme="yellow" target="_blank" leftIcon={<ExternalLinkIcon />} className='project-deployed-link'>
          Live Demo
        </Button>
        <Button as="a" href={githubRepo} colorScheme="gray" target="_blank" leftIcon={<FaGithub />} className='project-github-link'>
          GitHub Repo
        </Button>
      </Box>
    </Box>
  );
};

const ProjectsSection = () => {
    const projects = [
        {
          image: reliancedigital,
          title: "Reliance Digital Clone ",
          description: 'A dynamic and responsive web application mimicking the Reliance Digital online shopping experience. Built with React, Chakra UI, and MongoDB, this project showcases a complete e-commerce platform with product listings, detailed product pages, and a shopping cart functionality.',
          liveDemo: 'https://reliance-app-clone.vercel.app/',
          githubRepo: 'https://github.com/AwatadePritam/reliance_app_clone',
        },
        {
            image:kfcclone,
            title: "KFC Clone ",
            description: 'A functional replica of the KFC website, created using JavaScript, HTML5, CSS3, MongoDB. This project includes interactive elements, image sliders, and a responsive design, offering a seamless user experience similar to the original site.',
            liveDemo: 'https://kfc-clone-pi.vercel.app/',
            githubRepo: 'https://github.com/AwatadePritam/KFC_Clone',
        },
        // Add more projects as needed
      ];
  return (
    <Flex w={"100%"} justifyContent={"center"} alignItems={"center"} cursor={'pointer'}>
       <Flex p={5}width={"80%"} direction={"column"} alignItems={"center"} justifyContent={"center"}data-aos="zoom-in" >
      <Heading as="h2" size="xl" mb={5} textAlign="center">
        Projects
      </Heading>
      <Grid templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]} gap={6} >
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            liveDemo={project.liveDemo}
            githubRepo={project.githubRepo}
          />
        ))}
      </Grid>
    </Flex>

    </Flex>
  );
};

export default ProjectsSection;

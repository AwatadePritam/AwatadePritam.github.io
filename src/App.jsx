import React, { useEffect } from 'react';
import './App.css';
import NavbarTwo from './components/navbar/NavbarTwo';
import { Box, Flex, useColorMode } from '@chakra-ui/react';
import Herosection from './components/Herosection';
import WhiteSpace from './components/WhiteSpace';
import AboutMe from './components/Aboutme';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import GitHubStatistics from './components/GitHubStatistics';
import Experience from './components/Experience';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const { toggleColorMode } = useColorMode();

  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration
      delay: 300, // Delay (in ms) before the animation starts
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: true, // Whether elements should animate out while scrolling past them
    });
    toggleColorMode();
  }, []);

  return (
    <Flex direction={'column'} w={'100%'} justifyContent={'center'} alignItems={'center'} overflowX={'hidden'}>
      <NavbarTwo />
      <Box className='section'  id="home">
        <Herosection />
      </Box>
      <WhiteSpace />
      <Box   className='section' id="about">
        <AboutMe />
      </Box>
      <Box  className='section' id="projects">
        <ProjectsSection />
      </Box>
      <Box   className='section' id="experience">
        <Experience />
      </Box>
     
      <Box   className='section' id="skills">
        <SkillsSection />
      </Box>
      <Box  className='section' id="statistics">
        <GitHubStatistics username="AwatadePritam" />
      </Box>
      <Box   className='section' id="contact" w={'100%'}>
        <ContactSection />
      </Box>
      <Footer/>
    </Flex>
  );
}

export default App;

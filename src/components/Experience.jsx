import React from 'react';
import { Box, Heading, Text, VStack, HStack, Divider, SimpleGrid, Flex, useColorMode } from '@chakra-ui/react';

const Experience = () => {
    const { colorMode } = useColorMode();
    const boxShadowColor = colorMode === 'dark' ? '0 4px 12px rgba(255, 255, 255, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.4)';
  const experiences = [
    {
      title: 'Full Stack Web Developer',
      date: 'Oct 2023 - Present',
      institution: "Masai School",
      degree: '',
      grade: '',
    },
    {
      title: 'System Engineer',
      date: 'Dec 2021 - June 2023',
      institution: 'Tata Consultancy Services',
      degree: 'Worked on IT operations and managed server services using Linux systems',
      grade: '',
    },
    {
      title: 'BACHELOR OF ENGINEERING',
      date: '2016-2020',
      institution: 'SKN Sinhgad College of Engineering,Pandharpur',
      degree: 'BE in Mech',
      grade: '72.00%',
    },
    {
        title: 'Higher Secondary',
        date: ' Jun 2015- May 2016',
        institution: 'K.B.P. College , Pandharpur',
        degree: 'Science Stream',
        grade: '66.00%',
      },
      {
        title: 'SECONDARY',
        date: '2014',
        institution: 'D.H.Kawathekar Prashala, Pandharpur',
        degree: '',
        grade: '85.20%',
      },

  ];

  return (
   <Flex direction={'column'} w={'100%'} justifyContent={'center'} alignItems={'center'} minH={'60vh'} gap={'50px'}   >
     <Heading as="h2" size="xl" mb={5} textAlign="center">
        Experience
      </Heading>
     <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="80%"   >
      {experiences.map((exp, index) => (
        <Box key={index} borderWidth="1px" borderRadius="md" p={4} cursor={'pointer'} shadow="md" data-aos="zoom-in-up" _hover={{ boxShadow: boxShadowColor }} >
          <HStack spacing={4} align="start" w="100%">
           
            <VStack align="start" spacing={1} flex="9">
              <Heading as="h3" size="md">
                {exp.title}
              </Heading>
              <Box
                bg={'#319795'}
                color={'white'}
                px={2}
                py={1}
                borderRadius="md"
                fontWeight="bold"
                fontSize="sm"
              >
                {exp.date}
              </Box >
              <Text>{exp.institution}</Text>
              <Text fontWeight="bold">{exp.degree}</Text>
              <Text>{exp.grade}</Text>
            </VStack>
          </HStack>
        </Box>
      ))}
    </SimpleGrid>
   </Flex>
  );
};

export default Experience;

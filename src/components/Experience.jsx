import React from 'react';
import { Box, Heading, Text, VStack, HStack, Divider, SimpleGrid, Flex } from '@chakra-ui/react';

const Experience = () => {
  const experiences = [
    {
      title: 'BACHELOR OF ENGINEERING',
      date: '2016 - 2020',
      institution: "SVERI's College of Engineering, Pandharpur",
      degree: 'BE in CSE',
      grade: '68%',
    },
    {
      title: 'HIGHER SECONDARY',
      date: '2014 - 2016',
      institution: 'St. Joseph jr. College of science, Solapur',
      degree: 'Science Stream',
      grade: '62.00%',
    },
    {
      title: 'SECONDARY',
      date: '2014',
      institution: 'Shri Siddeshwar English Medium High School, Solapur',
      degree: '',
      grade: '75.30%',
    },
    
  ];

  return (
   <Flex direction={'column'} w={'100%'} justifyContent={'center'} alignItems={'center'} minH={'60vh'} gap={'50px'} >
     <Heading as="h2" size="xl" mb={5} textAlign="center">
        Experience
      </Heading>
     <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="80%">
      {experiences.map((exp, index) => (
        <Box key={index} borderWidth="1px" borderRadius="md" p={4} shadow="md">
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
              </Box>
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

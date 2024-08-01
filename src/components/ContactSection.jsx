import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  Box, Heading, FormControl, FormLabel, Input, Textarea, Button, Stack, useToast, Text, Flex, useColorMode, Spinner
} from '@chakra-ui/react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';

const ContactSection = () => {
  const { colorMode } = useColorMode();
  const boxShadowColor = colorMode === 'dark' ? '0 4px 12px rgba(255, 255, 255, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.4)';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_hapbbii', // Replace with your EmailJS service ID
      'template_4qnr5mx', // Replace with your EmailJS template ID
      formData,
      'd6ClZrdV5JNrt6eDu' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast({
        title: 'Message Sent.',
        description: "We've received your message and will get back to you shortly.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setEmailSent(true);
      setLoading(false);
    }).catch((err) => {
      console.log('FAILED...', err);
      toast({
        title: 'Error.',
        description: "There was an error sending your message. Please try again later.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
    });
  };

  return (
    <Flex id="contact-me"   mx="auto" w={"100%"} padding={'30px 0px'} justifyContent={"center"} alignItems={"center"} direction={"column"} p={"10px"} data-aos="fade-up">

        <Flex>
        <Heading as="h3" size="lg" mb={6} textAlign="center">
        Social Presence
      </Heading>
     
        </Flex>
        <Flex  w={['70%','70%','70%','40%']} p={'30px'} justifyContent={'center'} >
        <ContactDetails/>
      </Flex>
      <Heading as="h2" size="xl" mb={6} textAlign="center" pt={'20px'}>
        Contact Me
      </Heading>

     

      <Flex w={["90%", "90%", "90%", "80%"]} gap={'30px'} alignItems={"center"} justifyContent={"center"}  padding={'30px 0px'}  >
        {!emailSent ? (
          <Flex as="form" w={["100%", "100%", "100%", "50%"]} onSubmit={handleSubmit} shadow="md" borderWidth="1px" borderRadius="md" textAlign="center"  padding={"20px"} _hover={{ boxShadow: boxShadowColor }} >
            <Stack spacing={5} w={'100%'}>
              <FormControl id="name" isRequired>
                <FormLabel>Your Name</FormLabel>
                <Input type="text" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea value={formData.message} onChange={handleChange} placeholder="Your message here..." />
              </FormControl>
              <Button colorScheme="teal" type="submit" isLoading={loading}>
                Send Message
              </Button>
            </Stack>
          </Flex>
        ) : (
          <Flex textAlign="center" direction={'column'} p={'50px 0px'}>
            <Text fontWeight={'700'} fontSize="lg">Thank you for your message! </Text>
            <Text fontSize="md">I'll get back to you shortly.</Text>
          </Flex>
        )}
      </Flex>
      <ContactInfo/>
      
    </Flex>
  );
};

export default ContactSection;

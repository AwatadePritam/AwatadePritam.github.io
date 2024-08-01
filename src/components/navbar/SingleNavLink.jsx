import { Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const SingleNavLink = ({linkName,linkId ,className}) => {
  return (
    <ScrollLink to={linkId} smooth={true} duration={500}>
        <Link as="span" cursor="pointer" _hover={{ textDecoration: 'none' }} className={className}>
  <Text textDecoration={'none'} fontSize={['md', 'md', 'lg', 'lg']}>{linkName}</Text>
</Link>

    </ScrollLink>
  )
}

export default SingleNavLink
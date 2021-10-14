import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { RocketSVG } from './RocketSVG';

export function HeroSection() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      w='100%'
      maxW={1920}
      p={['0', '2']}
      px={['0', '0', '20', '8', '28']}
      bgGradient='linear(to-tr, shape, background)'
    >
      <Flex
        mt={['16', '16', '16', '16', '20']}
        mb={['16', '16', '16', '10', '10']}
      >
        <SimpleGrid
          flex='1'
          px={['0', '0', '20', '10', '28']}
          gap='0'
          minChildWidth='320px'
          alignItems='center'
          justifyContent='center'
        >
          <Box textAlign={['center', 'left']}>
            <Text color='green' fontWeight='normal' fontSize={['sm', 'md']}>
              Intelligent Manufacturing
            </Text>
            <Heading
              mt={8}
              color='gray'
              fontWeight='black'
              lineHeight='shorter'
              fontSize={['2xl', '2xl', '4xl', '4xl', '5xl']}
              w={['auto', '340px', '480px', '380px', '580px']}
              px={['8', '0']}
            >
              Process technologies, equipment, plants, and systems
            </Heading>
            <Text
              mt={6}
              color='gray'
              fontWeight='medium'
              w={['auto', '340px', '480px', '340px', '480px']}
              px={['6', '0']}
              fontSize={['sm', 'sm', 'md', 'md', 'md']}
            >
              With technology, service solutions and customized solutions are
              the key to success. With technology.
            </Text>
            <Link href='#' passHref style={{ textDecoration: 'none' }}>
              <Button
                as='a'
                fontSize={['sm', 'md']}
                fontWeight='bold'
                size='lg'
                bg='primary'
                color='white'
                mt={['10', '10', '10', '8']}
                px={['16', '16', '16', '14']}
                py={7}
                _hover={{ bg: 'primaryHover' }}
              >
                GET TO KNOW
              </Button>
            </Link>
          </Box>
          {isWideVersion && (
            <Box w={['340px', '340px', '340px', '440px', '640px']}>
              <RocketSVG />
            </Box>
          )}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}

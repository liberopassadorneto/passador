import { Box, Heading as ChakraHeading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

interface FeatureItemProps {
  id?: string;
  subtitle: string;
  title: string;
  description: string;
  icon: string;
  isRight: boolean;
}

export function FeaturesItem({
  subtitle,
  title,
  description,
  icon,
  isRight,
}: FeatureItemProps) {
  return (
    <Stack
      direction={['column', 'row', 'row', 'row']}
      w='100%'
      px={['6', '6', '6', '0', '0']}
      align='center'
      justify={[
        'space-between',
        'space-evenly',
        'space-evenly',
        'space-evenly',
        'space-evenly',
      ]}
      textAlign={['center', 'inherit', 'inherit', 'inherit']}
    >
      {!isRight && (
        <Box w={['220px', '400px', '300px', '440px']}>
          <img src={`../assets/svg/${icon}.svg`} alt={title}></img>
        </Box>
      )}
      <Box px={['4', '0', '0', '0', '0']} mx='auto'>
        <Text
          fontSize={['xs', 'sm', 'sm', 'md']}
          color='primary'
          mb='2'
          textTransform='uppercase'
        >
          {subtitle}
        </Text>
        <ChakraHeading
          maxW='325px'
          fontSize={['2xl', '3xl', '3xl', '4xl']}
          color='gray'
          mb='2'
        >
          {title}
        </ChakraHeading>
        <Text
          maxW='300px'
          fontSize={['sm', 'sm', 'sm', 'md']}
          color='text'
          px={['2', '0', '0', '0']}
        >
          {description}
        </Text>
      </Box>
      {isRight && (
        <Box w={['220px', '400px', '300px', '440px']}>
          <img src={`../assets/svg/${icon}.svg`} alt={title}></img>
        </Box>
      )}
    </Stack>
  );
}

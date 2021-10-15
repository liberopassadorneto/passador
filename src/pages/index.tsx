import { Flex } from '@chakra-ui/react';
import React from 'react';
import { FeaturesSection } from '../components/FeaturesSection';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';

export default function Home() {
  return (
    <Flex direction='column' w='100vw' h='100vh' overflowX='hidden'>
      <Header />
      <HeroSection />
      <FeaturesSection />
    </Flex>
  );
}

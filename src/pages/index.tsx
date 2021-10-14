import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';

export default function Home() {
  return (
    <Flex direction='column' w='100vw' h='100vh' overflow='hidden'>
      <Header />
      <HeroSection />
      <motion.h1 animate={{ scale: 2 }} transition={{ duration: 0.5 }}>
        <h1>oi</h1>
      </motion.h1>
    </Flex>
  );
}

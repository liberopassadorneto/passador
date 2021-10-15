import { Box, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FactorySVG } from './svg/FactorySVG';
import { SecuritySVG } from './svg/SecuritySVG';

export function FeaturesSection() {
  return (
    <Flex direction='column' maxW={1480} mx='auto' px={10} mt='20'>
      <Stack
        maxW={620}
        mx='auto'
        mb='10'
        spacing={4}
        align='center'
        justify='center'
        textAlign='center'
      >
        <Heading color='gray' fontSize='5xl'>
          Montagem Industrial
        </Heading>
        <Text color='text'>
          Aplicação de novos métodos de trabalhos nos mais diversos segmentos de
          mercado, focando as atividades de Montagens Industriais, Calderaria e
          Manutenções.
        </Text>
      </Stack>

      <SimpleGrid
        columns={2}
        gap='4'
        mx='auto'
        mt='10'
        mb='10'
        alignItems='center'
        justifyContent='center'
      >
        <Box maxW='400px'>
          <Text fontSize='md' color='primary' mb='2' textTransform='uppercase'>
            Norma N-134 Petrobás
          </Text>
          <Heading fontSize='4xl' color='gray' mb='2'>
            Chumbador N-134 Petrobás
          </Heading>
          <Text fontSize='md' color='text'>
            Realizamos a contrução de todos os tipos de chumbadores utilizando a
            norma N-134.
          </Text>
        </Box>
        <Box w='500px'>
          <SecuritySVG />
        </Box>
      </SimpleGrid>

      <SimpleGrid
        columns={2}
        gap='16'
        mx='auto'
        mt='10'
        mb='10'
        alignItems='center'
        justifyContent='center'
      >
        <Box w='600px'>
          <FactorySVG />
        </Box>
        <Box maxW='400px'>
          <Text
            fontSize='md'
            color='primary'
            mb='2'
            textTransform='uppercase'
          ></Text>
          <Heading fontSize='4xl' color='gray' mb='2'>
            Construção Civil
          </Heading>
          <Text fontSize='md' color='text'>
            Exercemos a construção de bases quadradas, arruelas, base de
            ancoragem e dentro outras materias para a construção civil.
          </Text>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}

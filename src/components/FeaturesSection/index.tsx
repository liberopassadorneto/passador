import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Heading } from '../Heading/Heading';
import { FeaturesItems } from './FeaturesItems';

export function FeaturesSection() {
  return (
    <Box w='100%' maxW={1480} mx='auto' py={['20', '20', '20', '28']}>
      <Flex direction='column'>
        <Heading
          title={'Montagem Industrial'}
          subtitle={
            'Aplicação de novos métodos de trabalhos nos mais diversos segmentos de mercado, focando as atividades de Montagens Industriais, Calderaria e Manutenções.'
          }
        />
        <FeaturesItems />
      </Flex>
    </Box>
  );
}

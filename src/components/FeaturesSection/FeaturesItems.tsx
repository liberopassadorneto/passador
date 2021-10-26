import { useBreakpointValue, VStack } from '@chakra-ui/react';
import React from 'react';
import { featureData } from './data';
import { FeaturesItem } from './FeaturesItem';

export function FeaturesItems() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <VStack spacing={28} mt={['0', '0', '0', '10']} px={['6', '6', '6', '0']}>
      {featureData?.map((item) => {
        return (
          <FeaturesItem
            key={item.id}
            subtitle={item.subtitle}
            title={item.title}
            description={item.description}
            icon={item.icon}
            isRight={item.isRight}
          />
        );
      })}
    </VStack>
  );
}

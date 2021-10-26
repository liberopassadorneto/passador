import { Grid } from '@chakra-ui/react';
import React from 'react';
import { CustomerItem } from './CustomerItem';
import { customerData } from './data';

export function CustomerItems() {
  return (
    <Grid
      w='100%'
      mt={['8', '8', '20', '20']}
      mx='auto'
      templateRows='repeat(2, 1fr)'
      templateColumns={[
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(4, 1fr)',
        'repeat(4, 1fr)',
      ]}
      columnGap={['14', '0', '0', '0']}
      rowGap={['14', '10', '10', '20']}
      px='16'
      pb='20'
      justifyItems='center'
      alignItems='center'
    >
      {customerData.map((item) => {
        return <CustomerItem key={item.id} title={item.title} />;
      })}
    </Grid>
  );
}

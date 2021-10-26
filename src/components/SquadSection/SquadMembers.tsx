import { Grid } from '@chakra-ui/react';
import React from 'react';
import { SquadMember } from './SquadMember';

export function SquadMembers() {
  return (
    <Grid
      w='100%'
      mt={['8', '8', '8', '8', '20']}
      mx='auto'
      templateRows='repeat(1, 1fr)'
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
      ]}
      columnGap={['0', '0', '16', '28', '28']}
      rowGap={['14', '10', '10', '20']}
      px={['4', '4', '4', '4']}
      pb='20'
      justifyItems='center'
      alignItems='center'
    >
      <SquadMember />
    </Grid>
  );
}

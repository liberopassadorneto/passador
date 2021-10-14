import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Link,
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';

interface ButtonCTAProps extends ChakraButtonProps {
  label: string;
  icon?: ReactElement;
}

export function ButtonCTA({ label, icon, ...rest }: ButtonCTAProps) {
  return (
    <Link href='#' passHref style={{ textDecoration: 'none' }}>
      <ChakraButton
        rightIcon={icon}
        as='a'
        fontSize='sm'
        bg='primary'
        color='white'
        _hover={{ bg: 'primaryHover' }}
        px='6'
        py='4'
        mt={['10', '10', '10', '0']}
      >
        {label}
      </ChakraButton>
    </Link>
  );
}

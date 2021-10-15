import { Stack } from '@chakra-ui/layout';
import React from 'react';
import { ButtonCTA } from '../Button/ButtonCTA';
import { NavItem } from './NavItem';

export function NavMenu() {
  return (
    <>
      <Stack spacing={12} direction={['column', 'column', 'column', 'row']}>
        <NavItem title='Home' />
        <NavItem title='Serviços' />
        <NavItem title='Clientes' />
        <NavItem title='Equipe' />
      </Stack>

      <ButtonCTA label='Entrar em contato' />
    </>
  );
}

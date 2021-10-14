import { Link, Text } from '@chakra-ui/react';
import React from 'react';

interface NavItemProps {
  title: string;
}

export function NavItem({ title }: NavItemProps) {
  return (
    <Link
      href='#'
      passHref
      color='gray'
      _hover={{ color: 'white' }}
      style={{ textDecoration: 'none' }}
    >
      <Text>{title}</Text>
    </Link>
  );
}

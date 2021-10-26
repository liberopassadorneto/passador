import {
  Avatar,
  Badge,
  Box,
  Button,
  Heading as ChakraHeading,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export function SquadMember() {
  return (
    <>
      <Box
        maxW={'320px'}
        w={'full'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        borderWidth={1}
        borderColor={'primaryDarker'}
        bgGradient={[
          'linear(to-tl, #1d1929, #121214)',
          'linear(to-bl, #1d1929, #121214)',
        ]}
      >
        <Avatar
          size={'xl'}
          src='./assets/images/steve-jobs.jpeg'
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <ChakraHeading color='gray' fontSize={'2xl'}>
          Líbero Passador
        </ChakraHeading>
        <Text fontWeight={600} color={'primary'} mb={4}>
          @diretor_executivo
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg='transparent'
            color='support'
            fontWeight={'400'}
          >
            #cycling
          </Badge>
          <Badge px={2} py={1} color='support' fontWeight={'400'}>
            #coffee
          </Badge>
          <Badge px={2} py={1} color='support' fontWeight={'400'}>
            #cinephilia
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            borderRadius={8}
            bg={'shapeHover'}
            color={'primary'}
            _hover={{
              bg: 'shape',
            }}
            _focus={{
              bg: 'shape',
            }}
          >
            Entrar em contato
          </Button>
        </Stack>
      </Box>

      <Box
        maxW={'320px'}
        w={'full'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        borderWidth={1}
        borderColor={'orangeDarker'}
        bgGradient={[
          'linear(to-tl, #2a1f15, #121214)',
          'linear(to-bl, #2a1f15, #121214)',
        ]}
      >
        <Avatar
          size={'xl'}
          src='./assets/images/marlene.jpg'
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <ChakraHeading color='gray' fontSize={'2xl'}>
          Marlene Passador
        </ChakraHeading>
        <Text fontWeight={600} color={'attention'} mb={4}>
          @gestor_financeiro
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg='transparent'
            color='support'
            fontWeight={'400'}
          >
            #cycling
          </Badge>
          <Badge px={2} py={1} color='support' fontWeight={'400'}>
            #coffee
          </Badge>
          <Badge px={2} py={1} color='support' fontWeight={'400'}>
            #cinephilia
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            borderRadius={8}
            bg={'shapeHover'}
            color={'attention'}
            _hover={{
              bg: 'shape',
            }}
            _focus={{
              bg: 'shape',
            }}
          >
            Entrar em contato
          </Button>
        </Stack>
      </Box>

      <Box
        maxW={'320px'}
        w={'full'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        borderWidth={1}
        borderColor={'#182328'}
        bgGradient={[
          'linear(to-tl, #182328, #121214)',
          'linear(to-bl, #182328, #121214)',
        ]}
      >
        <Avatar
          size={'xl'}
          src='./assets/images/ana.jfif'
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <ChakraHeading color='gray' fontSize={'2xl'}>
          Magda ...
        </ChakraHeading>
        <Text fontWeight={600} color={'react'} mb={4}>
          @gerente_administrativo
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg='transparent'
            color='support'
            fontWeight={'400'}
          >
            #cycling
          </Badge>
          <Badge px={2} py={1} color='support' fontWeight={'400'}>
            #coffee
          </Badge>
          <Badge px={2} py={1} color='support' fontWeight={'400'}>
            #cinephilia
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            borderRadius={8}
            bg={'shapeHover'}
            color={'react'}
            _hover={{
              bg: 'shape',
            }}
            _focus={{
              bg: 'shape',
            }}
          >
            Entrar em contato
          </Button>
        </Stack>
      </Box>
    </>
  );
}

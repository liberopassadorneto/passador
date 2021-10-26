import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Heading as ChakraHeading,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Heading } from '../Heading/Heading';

export function SquadSection() {
  return (
    <Box maxW={1440} mx='auto' mt='28'>
      <Flex direction='column'>
        <Heading
          title={'Uma equipe capacitada focada em qualidade e produtividade'}
          subtitle={
            'A equipe da Passador conta com mais de 10 profissionais com foco na montagem industrial, corte de plasma CNC e calderaria. Temos no nosso time um engenheiro responsável pelas todas nossas fabricações e um setor responsável pela gestão e finanças da empresa.'
          }
        />

        <Grid
          w='100%'
          mt={['8', '8', '8', '8', '20']}
          mx='auto'
          templateRows='repeat(1, 1fr)'
          templateColumns={[
            'repeat(3, 1fr)',
            'repeat(3, 1fr)',
            'repeat(3, 1fr)',
            'repeat(3, 1fr)',
            'repeat(3, 1fr)',
          ]}
          columnGap={['14', '0', '0', '28']}
          rowGap={['14', '10', '10', '20']}
          px='16'
          pb='20'
          justifyItems='center'
          alignItems='center'
        >
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
              src='./assets/images/lisa.jpg'
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
            borderColor={'orangeDarker'}
            bgGradient={[
              'linear(to-tl, #2a1f15, #121214)',
              'linear(to-bl, #2a1f15, #121214)',
            ]}
          >
            <Avatar
              size={'xl'}
              src='./assets/images/lisa.jpg'
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
        </Grid>
      </Flex>
    </Box>
  );
}

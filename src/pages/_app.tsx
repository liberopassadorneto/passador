import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React from 'react';
// import 'rc-drawer/assets/index.css';
// import 'react-modal-video/css/modal-video.min.css';
// import 'react-multi-carousel/lib/styles.css';
// import 'typeface-dm-sans';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
export default MyApp;

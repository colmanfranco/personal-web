import Head from 'next/head';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { isPreviewMode } from '../utils/isPreview';
import { PreviewProvider } from '@providers/previewProvider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const isPreview = isPreviewMode();
const token: string | undefined = isPreview ? process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_KEY : process.env.NEXT_PUBLIC_STORYBLOK_KEY;

storyblokInit({
  accessToken: atob(token as string),
  use: [apiPlugin],
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PreviewProvider isPreview={isPreview}>
      <Head>
        <title>Franco Colman Mendoza | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
        <CssBaseline />
      </ThemeProvider>
    </PreviewProvider>
  );
}

export default MyApp

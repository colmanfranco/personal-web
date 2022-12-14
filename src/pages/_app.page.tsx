import Head from 'next/head';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { isPreviewMode } from '@utils/isPreview';
import { PreviewProvider } from '@providers/previewProvider';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme, {colorTheme} from '@styles/theme';
import { decode } from "@utils/encoder";
import {Layout} from "@components/Layout";


const isPreview = isPreviewMode();
const token = isPreview ? process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_KEY : process.env.NEXT_PUBLIC_STORYBLOK_KEY;

storyblokInit({
  accessToken: decode(token as string),
  use: [apiPlugin],
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PreviewProvider isPreview={isPreview}>
      <Head>
        <title>Franco Colman Mendoza | Software Engineer</title>
        <link rel="icon" href="/static/white-background-logo.svg" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
          <Layout>
              <main style={{ height: '100%'}}>
                <Component {...pageProps} />
                <CssBaseline />
              </main>
          </Layout>
      </ThemeProvider>
    </PreviewProvider>
  );
}

export default MyApp

import Head from 'next/head';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { isPreviewMode } from '../utils/isPreview';
import { PreviewProvider } from '@providers/previewProvider';

const isPreview = isPreviewMode();
const token = isPreview ? process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_KEY : process.env.NEXT_PUBLIC_STORYBLOK_KEY;

storyblokInit({
  accessToken: token,
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
      <Component {...pageProps} />
    </PreviewProvider>
  );
}

export default MyApp

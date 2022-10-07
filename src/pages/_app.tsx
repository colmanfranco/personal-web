import Head from 'next/head';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { storyblokInit, apiPlugin } from "@storyblok/react";

const isPreview = isPreviewMode();
const token = isPreview ? process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_KEY : process.env.NEXT_PUBLIC_STORYBLOK_KEY;

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
    <Head>
      <title>Franco Colman Mendoza | Software Engineer</title>
      <meta name="robots" content="noindex,nofollow" />
    </Head>
    <Component {...pageProps} />
      </>
  );
}

export default MyApp

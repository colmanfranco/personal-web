const sha1 = require('js-sha1');

export const isPreviewMode = (): boolean => {
  if (typeof window === 'undefined') return false;

  const urlParams = new URLSearchParams(window.location.search);
  const previewKey: string = process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_KEY as string;
  const spaceId = urlParams.get('_storyblok_tk[space_id]');
  const timestamp = urlParams.get('_storyblok_tk[timestamp]');
  const decodedPreviewKey = atob(previewKey);
  const validationString = `${spaceId}:${decodedPreviewKey}:${timestamp}`;
  const validationToken = require('js-sha1').hex(validationString);
  const token = urlParams.get('_storyblok_tk[token]');

  return token === validationToken && isTokenOlderThan(3600, urlParams);
};

const isTokenOlderThan = (time: number, urlParams: URLSearchParams): boolean => {
  return parseInt(urlParams.get('_storyblok_tk[timestamp]') as string) > Math.floor(Date.now() / 1000) - time;
};
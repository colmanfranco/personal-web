import { ISbStoryData } from '@storyblok/react';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { prepareBridgeEvents } from './utils';

type Previews = {
  [slug: string]: ISbStoryData;
};

type PreviewType = {
  previews: Previews;
  isPreview?: boolean;
};

type PreviewProviderProps = {
  children: ReactNode;
  isPreview: boolean;
};

const PreviewContext = createContext<PreviewType>({ previews: {} });

export function PreviewProvider({ children, isPreview }: PreviewProviderProps) {
  const [previews, setPreviews] = useState({});

  useEffect(() => {
    if (!isPreview || document.getElementById('storyblokBridge')) return;

    const script = document.createElement('script');
    script.src = '//app.storyblok.com/f/storyblok-v2-latest.js';
    script.id = 'storyblokBridge';
    document.body.insertBefore(script, document.body.childNodes[0]);

    script.onload = prepareBridgeEvents({
      onInput: (event?) => {
        setPreviews((prevs) => ({
          ...prevs,
          [event?.story?.slug as string]: event?.story,
        }));
      },
    });

    return () => {
      document.body.removeChild(script);
    };
  }, [isPreview]);

  return <PreviewContext.Provider value={{ previews, isPreview }}>{children}</PreviewContext.Provider>;
}

export function usePreviewStory(slug: string) {
  const { previews } = useContext(PreviewContext);

  return previews[slug];
}

export function useIsPreview() {
  const { isPreview } = useContext(PreviewContext);

  return isPreview;
}
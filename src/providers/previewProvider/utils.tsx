import { ISbEventPayload } from '@storyblok/js';


type PrepareBridgeEventsType = {
    onInput: (payload?: ISbEventPayload) => void;
  };
  
  export function prepareBridgeEvents({ onInput }: PrepareBridgeEventsType) {
    return () => {
      const { StoryblokBridge } = window;
      const bridge = new StoryblokBridge();
  
      bridge.on('input', onInput);
  
      bridge.on(['change', 'published'], () => {
        window.location.reload();
      });
    };
  }
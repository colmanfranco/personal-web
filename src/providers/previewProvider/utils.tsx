type PrepareBridgeEventsType = {
    onInput: (payload?: StoryblokEventPayload) => void;
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
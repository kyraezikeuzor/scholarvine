'use client'
import { useEffect, useRef } from 'react';

// Define the Tally interface
interface TallyInterface {
  loadEmbeds: () => void;
}

// Extend the Window interface to include Tally
declare global {
  interface Window {
    Tally?: TallyInterface;
  }
}

const TallyFormEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const loadTallyEmbeds = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      } else {
        const iframe = iframeRef.current;
        if (iframe && !iframe.src && iframe.dataset.tallySrc) {
          iframe.src = iframe.dataset.tallySrc;
        }
      }
    };

    if (!window.Tally && !document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.onload = loadTallyEmbeds;
      script.onerror = loadTallyEmbeds;
      document.body.appendChild(script);
    } else {
      loadTallyEmbeds();
    }

    return () => {
      const script = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="w-full">
      <iframe
        ref={iframeRef}
        data-tally-src="https://tally.so/embed/3qYgVO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="656"
        title="Submit An Academic Opportunity to ScholarVine: The Search Tool for Programs"
        className="border-0"
        data-testid="tally-form"
      />
    </div>
  );
};

export default TallyFormEmbed;
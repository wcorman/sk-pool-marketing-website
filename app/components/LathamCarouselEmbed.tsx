"use client";

import { useEffect, useRef } from "react";

const LathamCarouselEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Ensure the container div exists
    if (!containerRef.current || scriptLoadedRef.current) {
      return;
    }

    // Check if script already exists to prevent duplicate loading
    const existingScript = document.querySelector('script[src*="lathamprositetool.com"]');
    if (existingScript) {
      scriptLoadedRef.current = true;
      return;
    }

    // Execute the exact embed code as provided
    // Note: Using window.location.href instead of d.location for proper string conversion
    try {
      (function(w: any, d: any, t: any, u: any, a: any, m: any) {
        a = d.createElement(t);
        m = d.getElementsByTagName(t)[0];
        a.async = 1;
        // Use window.location.href to ensure proper URL string conversion
        a.src = u + '/' + w.location.href;
        m.parentNode.insertBefore(a, m);
      })(window, document, 'script', 'https://www.lathamprositetool.com/wp-json/latham/v1/embed/3431/4/carousel', undefined, undefined);
      scriptLoadedRef.current = true;
    } catch (error) {
      console.error('Error loading Latham carousel:', error);
    }
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div id="latham-embed-3431-4-carousel" ref={containerRef}></div>
      </div>
    </section>
  );
};

export default LathamCarouselEmbed;


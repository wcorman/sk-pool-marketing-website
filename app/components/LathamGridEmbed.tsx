"use client";

import { useEffect, useRef } from "react";

const LathamGridEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Ensure the container div exists
    if (!containerRef.current || scriptLoadedRef.current) {
      return;
    }

    // Check if grid script already exists to prevent duplicate loading
    // The script src will contain the grid endpoint URL
    const existingGridScript = document.querySelector('script[src*="/embed/3431/4/grid"]');
    if (existingGridScript) {
      scriptLoadedRef.current = true;
      return;
    }

    // Execute the embed code for grid - matching original embed format exactly
    try {
      (function(w: any, d: any, t: any, u: any, a: any, m: any) {
        a = d.createElement(t);
        m = d.getElementsByTagName(t)[0];
        a.async = 1;
        a.src = u + '/' + d.location;
        m.parentNode.insertBefore(a, m);
      })(window, document, 'script', 'https://www.lathamprositetool.com/wp-json/latham/v1/embed/3431/4/grid', undefined, undefined);
      scriptLoadedRef.current = true;
    } catch (error) {
      console.error('Error loading Latham grid:', error);
    }
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div id="latham-embed-3431-4-grid" ref={containerRef}></div>
      </div>
    </section>
  );
};

export default LathamGridEmbed;

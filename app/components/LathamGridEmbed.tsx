"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const LathamGridEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset state when pathname changes (navigation occurred)
    scriptLoadedRef.current = false;

    // Clear the container to remove any stale content
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // Remove any existing grid scripts to ensure clean initialization
    const existingGridScripts = document.querySelectorAll('script[src*="/embed/3431/4/grid"]');
    existingGridScripts.forEach((script) => {
      script.remove();
    });

    // Small delay to ensure DOM is ready and page has scrolled to top
    const initTimer = setTimeout(() => {
      // Ensure the container div exists
      if (!containerRef.current || scriptLoadedRef.current) {
        return;
      }

      // Execute the embed code for grid - using window.location.href for consistency
      try {
        (function(w: any, d: any, t: any, u: any, a: any, m: any) {
          a = d.createElement(t);
          m = d.getElementsByTagName(t)[0];
          a.async = 1;
          // Use window.location.href to ensure proper URL string conversion
          a.src = u + '/' + w.location.href;
          m.parentNode.insertBefore(a, m);
        })(window, document, 'script', 'https://www.lathamprositetool.com/wp-json/latham/v1/embed/3431/4/grid', undefined, undefined);
        scriptLoadedRef.current = true;
      } catch (error) {
        console.error('Error loading Latham grid:', error);
      }
    }, 200);

    return () => {
      clearTimeout(initTimer);
    };
  }, [pathname]);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div id="latham-embed-3431-4-grid" ref={containerRef}></div>
      </div>
    </section>
  );
};

export default LathamGridEmbed;

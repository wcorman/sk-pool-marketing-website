"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const LathamGridEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const retryCountRef = useRef(0);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const MAX_RETRIES = 3;
  const RETRY_DELAY = 1000;

  const loadEmbedScript = () => {
    // Ensure the container div exists
    if (!containerRef.current || scriptLoadedRef.current) {
      return false;
    }

    // Clear any existing content
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // Remove any existing grid scripts to ensure clean initialization
    const existingGridScripts = document.querySelectorAll('script[src*="/embed/3431/4/grid"]');
    existingGridScripts.forEach((script) => {
      script.remove();
    });

    // Add cache-busting query parameter to prevent caching issues
    const cacheBuster = `?_t=${Date.now()}&_r=${Math.random().toString(36).substring(7)}`;
    const currentUrl = window.location.href;
    
    try {
      // Create the embed script with cache-busting
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.lathamprositetool.com/wp-json/latham/v1/embed/3431/4/grid/${encodeURIComponent(currentUrl)}${cacheBuster}`;
      
      // Add error handler
      script.onerror = () => {
        console.error('Failed to load Latham grid embed script');
        scriptLoadedRef.current = false;
        
        // Retry logic
        if (retryCountRef.current < MAX_RETRIES) {
          retryCountRef.current += 1;
          timeoutIdRef.current = setTimeout(() => {
            loadEmbedScript();
          }, RETRY_DELAY * retryCountRef.current);
        } else {
          setHasError(true);
          setIsLoading(false);
        }
      };

      // Add load handler
      script.onload = () => {
        scriptLoadedRef.current = true;
        setIsLoading(false);
        setHasError(false);
        
        // Wait a bit to check if content was actually injected
        setTimeout(() => {
          if (containerRef.current && containerRef.current.innerHTML.trim() === '') {
            // Content didn't load, try again if retries available
            if (retryCountRef.current < MAX_RETRIES) {
              scriptLoadedRef.current = false;
              retryCountRef.current += 1;
              timeoutIdRef.current = setTimeout(() => {
                loadEmbedScript();
              }, RETRY_DELAY * retryCountRef.current);
            } else {
              setHasError(true);
              setIsLoading(false);
            }
          }
        }, 2000);
      };

      // Insert the script
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      } else {
        document.head.appendChild(script);
      }

      return true;
    } catch (error) {
      console.error('Error loading Latham grid:', error);
      scriptLoadedRef.current = false;
      
      if (retryCountRef.current < MAX_RETRIES) {
        retryCountRef.current += 1;
        timeoutIdRef.current = setTimeout(() => {
          loadEmbedScript();
        }, RETRY_DELAY * retryCountRef.current);
      } else {
        setHasError(true);
        setIsLoading(false);
      }
      return false;
    }
  };

  useEffect(() => {
    // Reset state when pathname changes (navigation occurred)
    scriptLoadedRef.current = false;
    retryCountRef.current = 0;
    setIsLoading(true);
    setHasError(false);

    // Clear any pending timeouts
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }

    // Clear the container to remove any stale content
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // Small delay to ensure DOM is ready
    const initTimer = setTimeout(() => {
      loadEmbedScript();
    }, 100);

    return () => {
      clearTimeout(initTimer);
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      
      // Clean up scripts on unmount
      const existingGridScripts = document.querySelectorAll('script[src*="/embed/3431/4/grid"]');
      existingGridScripts.forEach((script) => {
        script.remove();
      });
    };
  }, [pathname]);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {hasError && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 mb-4">
              Unable to load pool selection at this time.
            </p>
            <button
              onClick={() => {
                scriptLoadedRef.current = false;
                retryCountRef.current = 0;
                setIsLoading(true);
                setHasError(false);
                loadEmbedScript();
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Try Again
            </button>
          </div>
        )}
        {isLoading && !hasError && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading pool selection...</p>
          </div>
        )}
        <div id="latham-embed-3431-4-grid" ref={containerRef}></div>
      </div>
    </section>
  );
};

export default LathamGridEmbed;

"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const LathamGridEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [iframeSrc, setIframeSrc] = useState("");
  const [iframeHeight, setIframeHeight] = useState(1200);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [reloadNonce, setReloadNonce] = useState(0);

  const IFRAME_TIMEOUT_MS = 12000;

  const nextIframeSrc = useMemo(() => {
    const cacheBuster = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${reloadNonce}`;
    return `/pool-selection/latham-grid-embed?cb=${cacheBuster}&target=${encodeURIComponent("/pool-selection")}`;
  }, [reloadNonce]);

  useEffect(() => {
    setIframeSrc(nextIframeSrc);
    setIsLoading(true);
    setHasError(false);
    setIframeHeight(1200);

    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }

    timeoutIdRef.current = setTimeout(() => {
      setHasError(true);
      setIsLoading(false);
    }, IFRAME_TIMEOUT_MS);

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) {
        return;
      }

      const data = event.data as { type?: string; height?: number };
      if (!data?.type) {
        return;
      }

      if (data.type === "latham-grid-loaded") {
        setIsLoading(false);
        setHasError(false);
        if (timeoutIdRef.current) {
          clearTimeout(timeoutIdRef.current);
          timeoutIdRef.current = null;
        }
      }

      if (data.type === "latham-grid-height" && typeof data.height === "number") {
        setIframeHeight(Math.max(800, data.height));
      }

      if (data.type === "latham-grid-error") {
        setHasError(true);
        setIsLoading(false);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
    };
  }, [nextIframeSrc]);

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
                setReloadNonce((prev) => prev + 1);
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
        {iframeSrc && (
          <iframe
            ref={iframeRef}
            src={iframeSrc}
            title="Pool selection embed"
            className="w-full border-0"
            style={{ height: `${iframeHeight}px` }}
            loading="eager"
          />
        )}
      </div>
    </section>
  );
};

export default LathamGridEmbed;

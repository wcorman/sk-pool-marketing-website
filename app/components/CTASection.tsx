"use client";

import ImageWithFallback from "./ImageWithFallback";
import Script from "next/script";
import { useCallback, useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CTASection = () => {
  useEffect(() => {
    const linkId = "calendly-widget-css";
    if (document.getElementById(linkId)) {
      return;
    }

    const link = document.createElement("link");
    link.id = linkId;
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }, []);

  const handleOpenCalendly = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.Calendly?.initPopupWidget({
      url: "https://calendly.com/skpool-info/30min",
    });
  }, []);

  return (
    <section className="relative py-32 px-4">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/images/Upsilon (2).jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-blue-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
        <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
          Ready to Build Your Dream Pool?
        </h2>
        <p className="mt-4 text-xl text-white/90">
          Schedule a paid consultation with our pool experts to discuss your vision, get personalized recommendations, and receive a detailed quote.
        </p>
        <div className="pt-4">
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
          <button
            type="button"
            onClick={handleOpenCalendly}
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;


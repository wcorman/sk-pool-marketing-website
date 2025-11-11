"use client";

import ImageWithFallback from "./ImageWithFallback";
import Script from "next/script";
import { createElement } from "react";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type StripeBuyButtonProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const StripeBuyButton = (props: StripeBuyButtonProps) => {
  return createElement("stripe-buy-button" as unknown as string, props);
};

const CTASection = () => {
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
          <Script async src="https://js.stripe.com/v3/buy-button.js" />
          <StripeBuyButton
            buy-button-id="buy_btn_1SS6eYEYa5qOXbfqIbAGUhw8"
            publishable-key="pk_live_LgGJSFG3Xj8yb3le23h4QPLN"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;


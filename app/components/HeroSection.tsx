"use client";

import Image from "next/image";
import { useCallback } from "react";
import { WavesLadder } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

type ScrollIndicatorProps = {
  onClick: () => void;
};

const ScrollIndicator = ({ onClick }: ScrollIndicatorProps) => (
  <div className="pointer-events-none absolute bottom-16 left-1/2 hidden -translate-x-1/2 transform animate-bounce lg:block">
    <button
      type="button"
      onClick={onClick}
      className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/70 text-white/90 shadow-lg transition-all hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      aria-label="Scroll to learn more about SK Pool"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
);

const PoolIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block ml-2"
    aria-hidden="true"
  >
    <path
      d="M2 12C2 8.686 4.686 6 8 6H16C19.314 6 22 8.686 22 12C22 15.314 19.314 18 16 18H8C4.686 18 2 15.314 2 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 12H18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeroSection = () => {
  const handleScrollToAbout = useCallback(() => {
    const target = document.getElementById("about-sk-pool");

    if (!target) {
      return;
    }

    const navbarOffset = 120;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = Math.max(0, targetPosition - navbarOffset);

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center bg-transparent py-12 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl xl:leading-[70px] font-bold text-gray-900 leading-tight">
              We build the best pools, right here in{" "}
              <span className="inline-flex  items-center gap-2 xl:leading-[70px] text-red-600 font-extrabold">
                Canada
                <Image
                  src="/images/Maple_Leaf.svg"
                  alt="Canadian maple leaf"
                  width={28}
                  height={28}
                  priority={false}
                />
              </span>
              
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Owning a pool is the fun part, let us handle the rest.
            </p>
            <div className="relative inline-flex">
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/50 animate-ripple"
                aria-hidden="true"
                style={{ border: "2px solid #1e3a8a", width: "100px", height: "100px" }}
              />
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/40 animate-ripple"
                style={{ animationDelay: "1.4s", border: "2px solid #1e3a8a", width: "100px", height: "100px" }}
                aria-hidden="true"
                
              />
              <button
                type="button"
                onClick={handleScrollToAbout}
                className="relative inline-flex items-center px-5 py-3.5 bg-white border-2 border-blue-600 rounded-[50px] text-[#1e3a8a] font-semibold text-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-label="Scroll to learn more about SK Pool"
              >
                <WavesLadder className="mr-2 h-10 w-10" aria-hidden="true" />
                <span>Dive in to learn more</span>
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
            <ImageWithFallback
              src="/images/Upsilon (8).jpg"
              alt="Luxury infinity pool overlooking tropical landscape"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
      <ScrollIndicator onClick={handleScrollToAbout} />
    </section>
  );
};

export default HeroSection;


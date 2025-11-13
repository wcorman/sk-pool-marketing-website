"use client";

import Image from "next/image";
import { useCallback } from "react";
import { WavesLadder } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

const HeroSectionAlt = () => {
  const handleGetStarted = useCallback(() => {
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
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="grid lg:grid-cols-2 w-full h-full min-h-[85vh]">
        {/* Left Side - Blue Panel with Text */}
        <div className="relative flex items-center justify-center px-8 lg:px-12 py-16 lg:py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #155a94 0%, #1E7ABF 40%)' }}>          
          {/* Content - White Card */}
          <div className="relative z-10 max-w-lg w-full bg-white rounded-2xl shadow-2xl p-8 lg:p-10 space-y-8 overflow-hidden">
            <h1 className="text-4xl lg:text-5xl xl:text-5xl xl:leading-[60px] mb-0 font-bold text-gray-900 leading-tight">
            Owning a pool is the fun part,
              <span className="inline items-center gap-2 xl:leading-[60px] text-blue-600 font-extrabold">
               &nbsp;let us handle the rest.
                {/* <Image
                  src="/images/Maple_Leaf.svg"
                  alt="Canadian maple leaf"
                  width={28}
                  height={28}
                  priority={false}
                /> */}
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              
              Built for our climate, right here in{" "} <span className="inline-flex items-center gap-2 xl:leading-[70px] text-red-600 font-extrabold">
                Canada
                <Image
                  src="/images/Maple_Leaf.svg"
                  alt="Canadian maple leaf"
                  width={28}
                  height={28}
                  priority={false}
                />
              </span>
            </p>
            <div className="relative inline-flex">
              <button
                type="button"
                onClick={handleGetStarted}
                className="relative inline-flex items-center px-5 py-3.5 bg-white border-2 border-blue-600 rounded-[50px] text-[#1e3a8a] font-semibold text-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-label="Scroll to learn more about SK Pool"
              >
                <WavesLadder className="mr-2 h-10 w-10" aria-hidden="true" />
                <span>Dive In</span>
              </button>
            </div>
            
            {/* Infinite wave effect at bottom of card */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden rounded-b-2xl">
              <svg
                className="absolute bottom-0 left-0 w-full h-full"
                viewBox="0 0 1600 200"
                preserveAspectRatio="xMidYMax slice"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="wave-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="rgba(30, 122, 191, 0.45)" />
                    <stop offset="50%" stopColor="rgba(30, 122, 191, 0.25)" />
                    <stop offset="100%" stopColor="rgba(30, 122, 191, 0.15)" />
                  </linearGradient>
                  <path
                    id="wave-path"
                    fill="url(#wave-gradient)"
                    stroke="none"
                    d="M-363.852,150c0,0,236.988-41.997,505.475,0s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v200H-363.852V150z"
                  />
                </defs>
                <g transform="translate(0, -50)">
                  <use href="#wave-path" opacity="0.3">
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="translate"
                      dur="10s"
                      calcMode="spline"
                      values="270 50; -334 50; 270 50"
                      keyTimes="0; .5; 1"
                      keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                      repeatCount="indefinite"
                    />
                  </use>
                  <use href="#wave-path" opacity="0.6">
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="translate"
                      dur="8s"
                      calcMode="spline"
                      values="-270 50;243 50;-270 50"
                      keyTimes="0; .6; 1"
                      keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                      repeatCount="indefinite"
                    />
                  </use>
                  <use href="#wave-path" opacity="0.9">
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="translate"
                      dur="6s"
                      calcMode="spline"
                      values="0 50;-140 50;0 50"
                      keyTimes="0; .4; 1"
                      keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                      repeatCount="indefinite"
                    />
                  </use>
                </g>
              </svg>
            </div>
          </div>

        </div>

        {/* Right Side - Pool Image */}
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <ImageWithFallback
            src="/images/thumbnail_image3.jpg"
            alt="Luxury outdoor swimming pool with beautiful landscaping"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Wave Divider - Single smooth curve, full height */}
      <div className="absolute left-1/2 top-0 bottom-0 w-32 lg:w-40 -translate-x-1/2 pointer-events-none z-10 hidden lg:block">
        <svg
          className="absolute left-0 top-0 bottom-0 h-full w-full"
          viewBox="0 0 200 1000"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Single smooth curve extending full height */}
          <path
            d="M0,0 
               C100,250 100,750 0,1000
               L200,1000
               C100,750 100,250 200,0
               Z"
            fill="#1E7ABF"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSectionAlt;


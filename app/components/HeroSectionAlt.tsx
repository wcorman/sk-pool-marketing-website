"use client";

import Image from "next/image";
import { useCallback, useRef, useEffect, useState } from "react";
import { WavesLadder } from "lucide-react";
import { gsap } from "gsap";
import ImageWithFallback from "./ImageWithFallback";

const HeroSectionAlt = () => {
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const stickmanRef = useRef<SVGSVGElement>(null);
  const leftArmRef = useRef<SVGGElement>(null);
  const rightArmRef = useRef<SVGGElement>(null);
  const leftLegRef = useRef<SVGGElement>(null);
  const rightLegRef = useRef<SVGGElement>(null);
  const [isOnCooldown, setIsOnCooldown] = useState(false);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

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

  const handleButtonHover = useCallback(() => {
    // Don't trigger if on cooldown or if refs aren't ready
    if (isOnCooldown || !buttonContainerRef.current || !stickmanRef.current) {
      return;
    }

    // Don't restart if animation is already playing
    if (animationRef.current && animationRef.current.isActive()) {
      return;
    }

    // Kill any existing animation that's not active (just in case)
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Get button and card container dimensions
    const buttonContainer = buttonContainerRef.current;
    const button = buttonContainer.querySelector("button");
    const cardContainer = buttonContainer.closest(".bg-white");

    if (!button || !cardContainer) {
      return;
    }

    // Get positions relative to the button container
    const buttonRect = button.getBoundingClientRect();
    const containerRect = buttonContainer.getBoundingClientRect();
    const cardRect = cardContainer.getBoundingClientRect();

    // Calculate initial position (top-right edge of button relative to container)
    // Since the stickman SVG is positioned absolutely within the container,
    // we calculate positions relative to the container's origin (0,0)
    const buttonLeft = buttonRect.left - containerRect.left;
    const buttonTop = buttonRect.top - containerRect.top;
    const buttonWidth = buttonRect.width;
    const buttonHeight = buttonRect.height;

    // Initial position: standing on top edge of button, near the right edge
    // Position stickman so his feet are at the top edge of the button
    const initialX = buttonLeft + buttonWidth - 20; // Near right edge, 15px from right (moved left)
    const initialY = buttonTop - 26; // Position slightly higher

    // Calculate final position relative to container
    // We want to go below the card container border
    const cardBottom = cardRect.bottom - containerRect.top;
    const finalY = cardBottom + 40; // Below card + extra distance
    const finalX = initialX + 30; // Slight forward arc to the right

    // Set initial position and state
    gsap.set(stickmanRef.current, {
      x: initialX - 15, // Offset by half stickman width (15px) to position correctly
      y: initialY,
      opacity: 0,
      rotation: 0,
      transformOrigin: "center center",
    });

    // Set initial arm positions (arms at sides, pointing down and slightly out)
    // The arms are lines from shoulder (15, 14) to hand positions
    // We'll rotate them around the shoulder point using svgOrigin
    if (leftArmRef.current && rightArmRef.current) {
      gsap.set(leftArmRef.current, {
        rotation: 0, // Start at natural drawn position
        svgOrigin: "15 14", // Shoulder joint position in SVG coordinates
      });
      gsap.set(rightArmRef.current, {
        rotation: 0, // Start at natural drawn position
        svgOrigin: "15 14", // Shoulder joint position in SVG coordinates
      });
    }

    // Set initial leg positions (legs at sides, pointing down)
    // The legs are lines from hip (15, 20) to foot positions
    // We'll rotate them around the hip point using svgOrigin
    if (leftLegRef.current && rightLegRef.current) {
      gsap.set(leftLegRef.current, {
        rotation: 0, // Start at natural drawn position
        svgOrigin: "15 20", // Hip joint position in SVG coordinates
      });
      gsap.set(rightLegRef.current, {
        rotation: 0, // Start at natural drawn position
        svgOrigin: "15 20", // Hip joint position in SVG coordinates
      });
    }

    // Create animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setIsOnCooldown(true);
        // Reset cooldown after 2 seconds
        setTimeout(() => {
          setIsOnCooldown(false);
          // Reset arm and leg positions
          if (leftArmRef.current && rightArmRef.current) {
            gsap.set(leftArmRef.current, { rotation: 0, svgOrigin: "15 14" });
            gsap.set(rightArmRef.current, { rotation: 0, svgOrigin: "15 14" });
          }
          if (leftLegRef.current && rightLegRef.current) {
            gsap.set(leftLegRef.current, { rotation: 0, svgOrigin: "15 20" });
            gsap.set(rightLegRef.current, { rotation: 0, svgOrigin: "15 20" });
          }
        }, 2000);
      },
    });

    // Fade in quickly
    tl.to(stickmanRef.current, {
      opacity: 1,
      duration: 0.45,
      ease: "power2.out",
    });

    // Stand still for 0.10 seconds
    tl.to({}, { duration: 0.10 });

    // Lift arms overhead (0.9 seconds)
    // Left arm line: from (15,14) to (10,17) - currently points down-left
    // Right arm line: from (15,14) to (20,17) - currently points down-right
    // To point overhead: both need to rotate so they point upward
    // Left arm needs to rotate clockwise (~60-70°)
    // Right arm needs to rotate counter-clockwise (~60-70°)
    if (leftArmRef.current && rightArmRef.current) {
      tl.to(leftArmRef.current, {
        rotation: 65, // Rotate clockwise to point up overhead
        duration: 0.9,
        ease: "power2.inOut",
        svgOrigin: "15 14", // Ensure rotation around shoulder
      });
      tl.to(
        rightArmRef.current,
        {
          rotation: -65, // Rotate counter-clockwise to point up overhead
          duration: 0.9,
          ease: "power2.inOut",
          svgOrigin: "15 14", // Ensure rotation around shoulder
        },
        "<" // Start at the same time as left arm
      );
    }

    // Cannonball jump - smooth arc trajectory
    // First, jump up and forward to create the upward arc
    const peakX = finalX - 15 + 20; // Peak of arc - further forward
    const peakY = initialY - 35; // Peak of arc - higher up
    
    // Jump up to peak position (upward phase of arc)
    // Legs start to cross as he reaches the peak
    tl.to(stickmanRef.current, {
      x: peakX,
      y: peakY,
      rotation: 0, // No rotation for cannonball - stays upright
      duration: 0.4,
      ease: "power2.out", // Fast start, slows at peak
    });
    
    // Start crossing legs at the peak (cannonball position)
    if (leftLegRef.current && rightLegRef.current) {
      tl.to(
        [leftLegRef.current, rightLegRef.current],
        {
          rotation: (i) => (i === 0 ? 25 : -25), // Left leg rotates right, right leg rotates left to cross
          duration: 0.3,
          ease: "power2.inOut",
        },
        "-=0.2" // Start slightly before reaching peak
      );
    }
    
    // Fall down from peak (downward phase of arc) - legs stay crossed
    tl.to(stickmanRef.current, {
      x: finalX - 15, // Final X position
      y: finalY, // Fall down past card border
      rotation: 0, // Stay upright for cannonball
      duration: 0.8,
      ease: "power2.in", // Accelerates as it falls
    });

    // Fade out as it disappears
    tl.to(
      stickmanRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      },
      "-=0.3"
    );

    animationRef.current = tl;
  }, [isOnCooldown]);

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  // Auto-trigger animation on mobile devices on page load
  useEffect(() => {
    const isMobile = window.innerWidth < 1024; // Match lg breakpoint (mobile/tablet)
    
    if (isMobile && buttonContainerRef.current && stickmanRef.current) {
      // Small delay to ensure page is loaded and elements are ready
      const timeoutId = setTimeout(() => {
        if (buttonContainerRef.current && stickmanRef.current && !isOnCooldown) {
          handleButtonHover();
        }
      }, 500); // 500ms delay after page load
      
      return () => clearTimeout(timeoutId);
    }
    // Only run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="grid lg:grid-cols-2 w-full h-full min-h-[85vh]">
        {/* Left Side - Blue Panel with Text */}
        <div className="relative flex items-center justify-center px-8 lg:px-12 py-16 lg:py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #155a94 0%, #1E7ABF 40%)' }}>
          {/* Subtle wave pattern background */}
          <div 
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            style={{
              backgroundImage: 'url(/images/just-waves.webp)',
              backgroundRepeat: 'repeat',
              backgroundSize: '120%',
            }}
            aria-hidden="true"
          />
          
          {/* Left-to-right gradient overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, transparent 0%, #1E7ABF 100%, #1E7ABF 100%)',
            }}
            aria-hidden="true"
          />
          
          {/* Content - White Card */}
          <div className="relative z-10 max-w-lg w-full bg-white rounded-2xl shadow-2xl p-8 lg:p-10 space-y-8 overflow-hidden">
            <h1 className="text-4xl lg:text-5xl xl:text-5xl xl:leading-[60px] mb-4 lg:mb-0 font-bold text-gray-900 leading-tight">
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
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
              
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
            <div
              ref={buttonContainerRef}
              className="relative inline-flex mt-6"
              onMouseEnter={handleButtonHover}
              style={{ zIndex: 0 }}
            >
              <button
                type="button"
                onClick={handleGetStarted}
                className="relative inline-flex items-center px-5 py-3.5 bg-white border-2 border-blue-600 rounded-[22px] text-[#1e3a8a] font-semibold text-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-label="Scroll to learn more about SK Pool"
              >
                <WavesLadder className="mr-2 h-10 w-10" aria-hidden="true" />
                <span>Jump In</span>
              </button>
              {/* Stickman SVG */}
              <svg
                ref={stickmanRef}
                className="absolute pointer-events-none"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                style={{
                  opacity: 0,
                  willChange: "transform, opacity",
                  zIndex: 0,
                }}
                aria-hidden="true"
              >
                {/* Head */}
                <circle
                  cx="15"
                  cy="8"
                  r="4"
                  fill="black"
                  stroke="none"
                />
                {/* Body */}
                <line
                  x1="15"
                  y1="12"
                  x2="15"
                  y2="20"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Left Arm - animated */}
                <g ref={leftArmRef}>
                  <line
                    x1="15"
                    y1="14"
                    x2="10"
                    y2="17"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
                {/* Right Arm - animated */}
                <g ref={rightArmRef}>
                  <line
                    x1="15"
                    y1="14"
                    x2="20"
                    y2="17"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
                {/* Left Leg - animated */}
                <g ref={leftLegRef}>
                  <line
                    x1="15"
                    y1="20"
                    x2="11"
                    y2="26"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
                {/* Right Leg - animated */}
                <g ref={rightLegRef}>
                  <line
                    x1="15"
                    y1="20"
                    x2="19"
                    y2="26"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
            
            {/* Infinite wave effect at bottom of card */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden rounded-b-2xl" style={{ zIndex: 10 }}>
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


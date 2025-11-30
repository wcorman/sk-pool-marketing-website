"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { Check, Sparkles, CircleDot } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

// ─────────────────────────────────────────────────────────────────────────────
// Data Model
// ─────────────────────────────────────────────────────────────────────────────

type FinishType = "classic" | "crystal";

type PoolColor = {
  id: string;
  name: string;
  finishType: FinishType;
  tierLabel: "Included" | "Upgrade";
  tagline: string;
  description: string;
  imageSrc: string;
  swatchSrc: string;
  imageAlt: string;
  swatchColor: string; // Fallback color for placeholder
};

// ─────────────────────────────────────────────────────────────────────────────
// Color Data
// ─────────────────────────────────────────────────────────────────────────────

const POOL_COLORS: PoolColor[] = [
  // Crystite Classic (Included)
  {
    id: "ocean-blue-classic",
    name: "Ocean Blue",
    finishType: "classic",
    tierLabel: "Included",
    tagline: "A timeless deep blue that evokes the open sea",
    description:
      "Our Ocean Blue finish captures the essence of the deep sea, creating a tranquil and inviting atmosphere. This classic shade transforms your backyard into a serene coastal retreat, with rich blue tones that shimmer beautifully in natural sunlight.",
    imageSrc: "/images/Crystite Classic Collection/Crystite_Classic_Ocean_Blue.jpg",
    swatchSrc: "/images/Crystite Classic Collection/Classic_Ocean_Blue-swatch.jpg",
    imageAlt: "Fiberglass pool with Ocean Blue Crystite Classic finish",
    swatchColor: "#1a5f7a",
  },
  {
    id: "sapphire-blue-classic",
    name: "Sapphire Blue",
    finishType: "classic",
    tierLabel: "Included",
    tagline: "Brilliant jewel tones for a striking statement",
    description:
      "Sapphire Blue delivers a vibrant, jewel-toned finish that makes your pool the centerpiece of your outdoor space. This bold yet elegant color creates stunning reflections and pairs beautifully with modern landscaping.",
    imageSrc: "/images/Crystite Classic Collection/Crystite_Classic_Sapphire_Blue.jpg",
    swatchSrc: "/images/Crystite Classic Collection/Classic_Sapphire_Blue-swatch.jpg",
    imageAlt: "Fiberglass pool with Sapphire Blue Crystite Classic finish",
    swatchColor: "#0f4c81",
  },
  {
    id: "night-sky-classic",
    name: "Night Sky",
    finishType: "classic",
    tierLabel: "Included",
    tagline: "A dark, deep blue that embodies the night sky",
    description:
      "Night Sky brings dramatic elegance to your pool with its deep, midnight blue tones. This sophisticated finish creates a mirror-like surface that reflects the stars above, perfect for evening gatherings and late-night swims.",
    imageSrc: "/images/Crystite Classic Collection/Crystite_Classic_Night_Sky.jpg",
    swatchSrc: "/images/Crystite Classic Collection/Classic_Night_Sky-swatch.jpg",
    imageAlt: "Fiberglass pool with Night Sky Crystite Classic finish",
    swatchColor: "#1a2744",
  },
  {
    id: "shale-gray-classic",
    name: "Shale Gray",
    finishType: "classic",
    tierLabel: "Included",
    tagline: "Modern sophistication with natural stone tones",
    description:
      "Shale Gray offers a contemporary aesthetic with its refined gray tones inspired by natural stone. This versatile finish complements any architectural style and creates a sleek, modern pool environment.",
    imageSrc: "/images/Crystite Classic Collection/Crystite_Classic_Shale_Gray.jpg",
    swatchSrc: "/images/Crystite Classic Collection/Classic_Shale_Grey-swatch.jpg",
    imageAlt: "Fiberglass pool with Shale Gray Crystite Classic finish",
    swatchColor: "#5a6a7a",
  },
  {
    id: "coastal-bronze-classic",
    name: "Coastal Bronze",
    finishType: "classic",
    tierLabel: "Included",
    tagline: "Warm earth tones meet coastal elegance",
    description:
      "Coastal Bronze blends warm bronze undertones with subtle sandy hues, evoking the natural beauty of sun-kissed beaches. This unique finish creates a warm, welcoming atmosphere perfect for resort-style living.",
    imageSrc: "/images/Crystite Classic Collection/Crystite_Classic_Coastal_Bronze.jpg",
    swatchSrc: "/images/Crystite Classic Collection/Classic_Coastal_Bronze-swatch.jpg",
    imageAlt: "Fiberglass pool with Coastal Bronze Crystite Classic finish",
    swatchColor: "#8b7355",
  },
  {
    id: "whisper-white-classic",
    name: "Whisper White",
    finishType: "classic",
    tierLabel: "Included",
    tagline: "Pure and pristine for a clean, bright look",
    description:
      "Whisper White delivers a pristine, luminous finish that maximizes light reflection and creates a bright, airy pool environment. This clean aesthetic is perfect for those seeking a fresh, contemporary look.",
    imageSrc: "/images/Crystite Classic Collection/Standard_Gel_Coat_Whisper_White.jpg",
    swatchSrc: "/images/Crystite Classic Collection/Classic_Whisper_White-swatch.jpg",
    imageAlt: "Fiberglass pool with Whisper White Crystite Classic finish",
    swatchColor: "#e8e4df",
  },

  // Crystite Crystal (Upgrade)
  {
    id: "ocean-blue-crystal",
    name: "Ocean Blue Crystal",
    finishType: "crystal",
    tierLabel: "Upgrade",
    tagline: "Sparkling deep blue with crystalline shimmer",
    description:
      "Ocean Blue Crystal elevates our classic Ocean Blue with embedded crystalline particles that catch and reflect light. The result is a mesmerizing, three-dimensional sparkle effect that transforms your pool into a shimmering oasis.",
    imageSrc: "/images/Crystite Crystal Collection/Crystite_Crystal_Ocean_Blue.jpg",
    swatchSrc: "/images/Crystite Crystal Collection/Crystal_Ocean_Blue-swatch.jpg",
    imageAlt: "Fiberglass pool with Ocean Blue Crystite Crystal finish",
    swatchColor: "#2980b9",
  },
  {
    id: "sapphire-blue-crystal",
    name: "Sapphire Blue Crystal",
    finishType: "crystal",
    tierLabel: "Upgrade",
    tagline: "Jewel-toned brilliance with radiant sparkle",
    description:
      "Sapphire Blue Crystal combines rich jewel tones with our premium crystalline finish for unmatched brilliance. Light dances across the surface, creating an ever-changing display of color and sparkle.",
    imageSrc: "/images/Crystite Crystal Collection/Crystite_Crystal_Sapphire_Blue.jpg",
    swatchSrc: "/images/Crystite Crystal Collection/Crystal_Sapphire_Blue-swatch.jpg",
    imageAlt: "Fiberglass pool with Sapphire Blue Crystite Crystal finish",
    swatchColor: "#2471a3",
  },
  {
    id: "night-sky-crystal",
    name: "Night Sky Crystal",
    finishType: "crystal",
    tierLabel: "Upgrade",
    tagline: "Deep midnight blue with starlight sparkle",
    description:
      "Night Sky Crystal takes our dramatic Night Sky finish to new heights with crystalline particles that mimic starlight. The deep blue base combined with shimmering accents creates a truly celestial swimming experience.",
    imageSrc: "/images/Crystite Crystal Collection/Crystite_Crystal_Night_Sky.jpg",
    swatchSrc: "/images/Crystite Crystal Collection/Crystal_Night_Sky-swatch.jpg",
    imageAlt: "Fiberglass pool with Night Sky Crystite Crystal finish",
    swatchColor: "#2c3e50",
  },
  {
    id: "shale-gray-crystal",
    name: "Shale Gray Crystal",
    finishType: "crystal",
    tierLabel: "Upgrade",
    tagline: "Contemporary gray with luminous shimmer",
    description:
      "Shale Gray Crystal adds sophisticated sparkle to our modern gray finish. The crystalline accents catch light throughout the day, adding depth and dimension to the sleek, contemporary aesthetic.",
    imageSrc: "/images/Crystite Crystal Collection/Crystite_Crystal_Shale_Gray.jpg",
    swatchSrc: "/images/Crystite Crystal Collection/Crystal_Shale_Grey-swatch.jpg",
    imageAlt: "Fiberglass pool with Shale Gray Crystite Crystal finish",
    swatchColor: "#6c7a89",
  },
  {
    id: "coastal-bronze-crystal",
    name: "Coastal Bronze Crystal",
    finishType: "crystal",
    tierLabel: "Upgrade",
    tagline: "Warm bronze tones with golden sparkle",
    description:
      "Coastal Bronze Crystal enhances our warm bronze finish with golden crystalline particles. The result is a luxurious, sun-kissed appearance that glimmers with every ripple of water.",
    imageSrc: "/images/Crystite Crystal Collection/Crystite_Crystal_Coastal_Bronze.jpg",
    swatchSrc: "/images/Crystite Crystal Collection/Crystal_Coastal_Bronze-swatch.jpg",
    imageAlt: "Fiberglass pool with Coastal Bronze Crystite Crystal finish",
    swatchColor: "#a0826d",
  },
  {
    id: "pearl-white-crystal",
    name: "Pearl White Crystal",
    finishType: "crystal",
    tierLabel: "Upgrade",
    tagline: "Luminous white with iridescent glow",
    description:
      "Pearl White Crystal delivers the ultimate in refined elegance with its iridescent, pearl-like finish. The crystalline particles create a soft, ethereal glow that transforms your pool into a sanctuary of light.",
    imageSrc: "/images/Crystite Crystal Collection/Crystite_Crystal_Pearl_White.jpg",
    swatchSrc: "/images/Crystite Crystal Collection/Crystal_Pearl_White-swatch.jpg",
    imageAlt: "Fiberglass pool with Pearl White Crystite Crystal finish",
    swatchColor: "#f5f0e8",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

type FinishTabProps = {
  finishType: FinishType;
  activeFinish: FinishType;
  onSelect: (finish: FinishType) => void;
};

const FinishTab = ({ finishType, activeFinish, onSelect }: FinishTabProps) => {
  const isActive = finishType === activeFinish;
  const isClassic = finishType === "classic";

  const handleClick = useCallback(() => {
    onSelect(finishType);
  }, [finishType, onSelect]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onSelect(finishType);
      }
    },
    [finishType, onSelect]
  );

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`
        relative flex items-center gap-3 px-6 py-4 rounded-full font-medium text-base
        transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${
          isActive
            ? "bg-slate-900 text-white shadow-lg shadow-slate-900/25"
            : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
        }
      `}
      aria-pressed={isActive}
      aria-label={`Select ${isClassic ? "Crystite Classic" : "Crystite Crystal"} finish`}
    >
      {isClassic ? (
        <CircleDot className="w-5 h-5" aria-hidden="true" />
      ) : (
        <Sparkles className="w-5 h-5" aria-hidden="true" />
      )}
      <span className="flex flex-col items-start">
        <span className="font-semibold tracking-wide">
          {isClassic ? "Crystite Classic" : "Crystite Crystal"}
        </span>
        <span
          className={`text-xs ${isActive ? "text-slate-300" : "text-slate-400"}`}
        >
          {isClassic ? "Included" : "Premium Upgrade"}
        </span>
      </span>
    </button>
  );
};

type ColorCardProps = {
  color: PoolColor;
  isSelected: boolean;
  onSelect: (color: PoolColor) => void;
  index: number;
};

const ColorCard = ({ color, isSelected, onSelect, index }: ColorCardProps) => {
  const handleClick = useCallback(() => {
    onSelect(color);
  }, [color, onSelect]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onSelect(color);
      }
    },
    [color, onSelect]
  );

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`
        group relative flex flex-col rounded-2xl overflow-hidden bg-white
        transition-all duration-300 ease-out text-left
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-4
        ${
          isSelected
            ? "ring-2 ring-slate-900 shadow-xl shadow-slate-900/15 scale-[1.02]"
            : "shadow-md hover:shadow-lg hover:scale-[1.01] border border-slate-100"
        }
      `}
      aria-pressed={isSelected}
      aria-label={`Select ${color.name} finish`}
      tabIndex={0}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Selection checkmark */}
      <div
        className={`
          absolute top-4 left-4 z-10 w-7 h-7 rounded-full flex items-center justify-center
          transition-all duration-300 ease-out
          ${
            isSelected
              ? "bg-slate-900 text-white scale-100 opacity-100"
              : "bg-white/80 text-transparent scale-75 opacity-0 group-hover:opacity-60 group-hover:scale-90"
          }
        `}
        aria-hidden="true"
      >
        <Check className="w-4 h-4" strokeWidth={3} />
      </div>

      {/* Tier badge */}
      <div
        className={`
          absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold tracking-wide
          ${
            color.tierLabel === "Included"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }
        `}
      >
        {color.tierLabel}
      </div>

      {/* Swatch image area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
          <ImageWithFallback
            src={color.swatchSrc}
            alt={`${color.name} color swatch`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content area */}
      <div className="p-5 space-y-2">
        <h3 className="text-lg font-semibold text-slate-900 tracking-tight">
          {color.name}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
          {color.tagline}
        </p>
      </div>
    </button>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────

type ColorFinishPickerProps = {
  showColorGrid?: boolean;
  showHeader?: boolean;
};

const ColorFinishPicker = ({ showColorGrid = true, showHeader = false }: ColorFinishPickerProps = {}) => {
  const [activeFinish, setActiveFinish] = useState<FinishType>("classic");
  const [selectedColor, setSelectedColor] = useState<PoolColor>(POOL_COLORS[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSwatchHovered, setIsSwatchHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  // Filter colors by active finish
  const filteredColors = POOL_COLORS.filter(
    (c) => c.finishType === activeFinish
  );

  // Handle finish type change
  const handleFinishChange = useCallback(
    (finish: FinishType) => {
      if (finish === activeFinish) return;

      setActiveFinish(finish);
      
      // Special case: Whisper White (Classic) <-> Pearl White Crystal (Crystal)
      const isWhisperWhite = selectedColor.name === "Whisper White";
      const isPearlWhiteCrystal = selectedColor.name === "Pearl White Crystal";
      
      let correspondingColor: PoolColor | undefined;
      
      if (isWhisperWhite && finish === "crystal") {
        // Classic "Whisper White" -> Crystal "Pearl White Crystal"
        correspondingColor = POOL_COLORS.find(
          (c) => c.finishType === "crystal" && c.name === "Pearl White Crystal"
        );
      } else if (isPearlWhiteCrystal && finish === "classic") {
        // Crystal "Pearl White Crystal" -> Classic "Whisper White"
        correspondingColor = POOL_COLORS.find(
          (c) => c.finishType === "classic" && c.name === "Whisper White"
        );
      } else {
        // Standard mapping for all other colors
        // Extract base color name (remove " Crystal" suffix if present)
        const baseColorName = selectedColor.name.replace(" Crystal", "");
        
        // Find the corresponding color in the new finish type
        // For Classic -> Crystal: look for "BaseName Crystal"
        // For Crystal -> Classic: look for just "BaseName"
        const targetColorName = finish === "crystal" 
          ? `${baseColorName} Crystal`
          : baseColorName;
        
        correspondingColor = POOL_COLORS.find(
          (c) => c.finishType === finish && c.name === targetColorName
        );
      }
      
      // If found, use it; otherwise fall back to first color of the new type
      const colorToSelect = correspondingColor || POOL_COLORS.find((c) => c.finishType === finish);
      
      if (colorToSelect) {
        setIsTransitioning(true);
        setTimeout(() => {
          setSelectedColor(colorToSelect);
          setIsTransitioning(false);
        }, 150);
      }
    },
    [activeFinish, selectedColor]
  );

  // Handle color selection
  const handleColorSelect = useCallback((color: PoolColor) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedColor(color);
      setIsTransitioning(false);
    }, 150);
  }, []);

  // Handle previous color (cycles within active finish type)
  const handlePreviousColor = useCallback(() => {
    const currentIndex = filteredColors.findIndex(
      (c) => c.id === selectedColor.id
    );
    // Wrap around to last color if at the beginning
    const newIndex = currentIndex <= 0 ? filteredColors.length - 1 : currentIndex - 1;
    handleColorSelect(filteredColors[newIndex]);
  }, [filteredColors, selectedColor, handleColorSelect]);

  // Handle next color (cycles within active finish type)
  const handleNextColor = useCallback(() => {
    const currentIndex = filteredColors.findIndex(
      (c) => c.id === selectedColor.id
    );
    // Wrap around to first color if at the end
    const newIndex = currentIndex >= filteredColors.length - 1 ? 0 : currentIndex + 1;
    handleColorSelect(filteredColors[newIndex]);
  }, [filteredColors, selectedColor, handleColorSelect]);

  // Keyboard navigation for color grid
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
        return;
      }

      const currentIndex = filteredColors.findIndex(
        (c) => c.id === selectedColor.id
      );
      if (currentIndex === -1) return;

      let newIndex = currentIndex;
      const columns = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;

      switch (e.key) {
        case "ArrowRight":
          newIndex = Math.min(currentIndex + 1, filteredColors.length - 1);
          break;
        case "ArrowLeft":
          newIndex = Math.max(currentIndex - 1, 0);
          break;
        case "ArrowDown":
          newIndex = Math.min(currentIndex + columns, filteredColors.length - 1);
          break;
        case "ArrowUp":
          newIndex = Math.max(currentIndex - columns, 0);
          break;
      }

      if (newIndex !== currentIndex) {
        e.preventDefault();
        handleColorSelect(filteredColors[newIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredColors, selectedColor, handleColorSelect]);

  // Mouse tracking for 3D swatch effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!rightPanelRef.current) return;

      const rect = rightPanelRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate relative position (-1 to 1)
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);

      setMousePosition({ x, y });
    };

    const rightPanel = rightPanelRef.current;
    if (rightPanel) {
      rightPanel.addEventListener("mousemove", handleMouseMove);
      return () => {
        rightPanel.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  // Keyboard support for lightbox (ESC to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    if (isLightboxOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen]);

  // Calculate 3D transform for swatch
  const swatchTransform = {
    rotateX: mousePosition.y * 8, // Max 8 degrees
    rotateY: mousePosition.x * 8, // Max 8 degrees
    translateX: mousePosition.x * 4, // Max 4px
    translateY: mousePosition.y * 4, // Max 4px
    scale: isSwatchHovered ? 1.15 : 1, // Scale up on hover
  };

  return (
    <section className="w-full bg-slate-50">
      {/* Page Header */}
      {showHeader && (
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
          {/* Pool pattern background */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: 'url(/images/pool-pattern.webp)',
              backgroundRepeat: 'repeat',
              backgroundSize: '400px 400px',
              mixBlendMode: 'overlay',
            }}
          />
          
          {/* Subtle ripple circles */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-blue-400/20"
              style={{
                animation: 'rippleExpand 6s ease-out infinite',
              }}
            />
            <div 
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-blue-300/20"
              style={{
                animation: 'rippleExpand 8s ease-out infinite',
                animationDelay: '2s',
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4">
                Finish Selection
              </p>
              <h2
                className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-6"
                style={{ fontFamily: "Arial, Helvetica, sans-serifserif" }}
              >
                Choose Your Perfect
                <br />
                <span className="text-blue-400">Pool Finish</span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                Our Crystite finishes are designed to transform your backyard into
                a stunning retreat. From classic elegance to crystalline sparkle,
                find the perfect color for your dream pool.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - 50/50 Layout */}
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[450px] lg:min-h-[500px]">
          {/* Left: Hero Image */}
          <div
            ref={heroRef}
            className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-slate-200"
          >
            {/* Hero image with fade transition */}
            <div
              className={`
                absolute inset-0 transition-opacity duration-500 ease-out
                ${isTransitioning ? "opacity-0" : "opacity-100"}
              `}
            >
              <ImageWithFallback
                src={selectedColor.imageSrc}
                alt={selectedColor.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={selectedColor.id === POOL_COLORS[0].id}
                loading={selectedColor.id === POOL_COLORS[0].id ? "eager" : "lazy"}
              />
            </div>

            {/* Navigation arrows */}
            <button
              type="button"
              onClick={handlePreviousColor}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-slate-700 hover:bg-white hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous color"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNextColor}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-slate-700 hover:bg-white hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next color"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Color indicator dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {filteredColors.map((color, index) => (
                <button
                  key={color.id}
                  type="button"
                  onClick={() => handleColorSelect(color)}
                  className={`
                    w-2.5 h-2.5 rounded-full transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                    ${
                      selectedColor.id === color.id
                        ? "bg-white scale-125 shadow-md"
                        : "bg-white/50 hover:bg-white/70"
                    }
                  `}
                  aria-label={`Select ${color.name}`}
                  aria-current={selectedColor.id === color.id ? "true" : undefined}
                />
              ))}
            </div>
          </div>

          {/* Right: Content Panel */}
          <div
            ref={rightPanelRef}
            className="relative flex flex-col justify-center px-6 lg:px-10 xl:px-12 py-10 lg:py-12 bg-white"
          >
            <div
              className={`
                space-y-4 transition-opacity duration-300 ease-out
                ${isTransitioning ? "opacity-0" : "opacity-100"}
              `}
            >
              {/* Collection label */}
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                {selectedColor.finishType === "classic"
                  ? "Crystite Classic Collection"
                  : "Crystite Crystal Collection"}
              </p>

              {/* Color name - Serif display font */}
              <h3 
                className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900"
                style={{ fontFamily: "Arial, Helvetica, sans-serifserif" }}
              >
                {selectedColor.name}
              </h3>

              {/* Description */}
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                {selectedColor.description}
              </p>

              {/* Tier indicator */}
              <div className="flex items-center gap-3 pt-2">
                <span
                  className={`
                    inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                    ${
                      selectedColor.tierLabel === "Included"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }
                  `}
                >
                  {selectedColor.tierLabel === "Upgrade" && (
                    <Sparkles className="w-4 h-4" />
                  )}
                  {selectedColor.tierLabel === "Included"
                    ? "Included in Base Price"
                    : "Premium Upgrade"}
                </span>
              </div>
            </div>

            {/* 3D Color Swatch */}
            <div
              className={`
                absolute bottom-6 right-6 lg:bottom-8 lg:right-8 w-20 h-20 lg:w-24 lg:h-24
                transition-all duration-300 ease-out cursor-pointer
                ${isTransitioning ? "opacity-0 scale-90" : "opacity-100 scale-100"}
              `}
              onMouseEnter={() => setIsSwatchHovered(true)}
              onMouseLeave={() => setIsSwatchHovered(false)}
              onClick={() => setIsLightboxOpen(true)}
              style={{
                transform: `perspective(1000px) rotateX(${swatchTransform.rotateX}deg) rotateY(${swatchTransform.rotateY}deg) translateX(${swatchTransform.translateX}px) translateY(${swatchTransform.translateY}px) scale(${swatchTransform.scale})`,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl ring-2 ring-white/50">
                <ImageWithFallback
                  src={selectedColor.swatchSrc}
                  alt={`${selectedColor.name} color swatch`}
                  fill
                  className="object-cover"
                  sizes="96px"
                  loading="lazy"
                />
                {/* 3D depth effect with shadow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: `
                      inset 0 1px 0 rgba(255, 255, 255, 0.3),
                      0 8px 24px rgba(0, 0, 0, 0.2),
                      0 4px 8px rgba(0, 0, 0, 0.15)
                    `,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Finish Type Selector */}
      <div className="w-full bg-slate-100/50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
              Finish Type
            </span>
            <div className="flex flex-wrap gap-3">
              <FinishTab
                finishType="classic"
                activeFinish={activeFinish}
                onSelect={handleFinishChange}
              />
              <FinishTab
                finishType="crystal"
                activeFinish={activeFinish}
                onSelect={handleFinishChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Color Grid */}
      {showColorGrid && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              {activeFinish === "classic"
                ? "Classic Finishes"
                : "Crystal Finishes"}
            </h3>
            <p className="text-slate-500">
              {activeFinish === "classic"
                ? "Our standard finishes included with every pool"
                : "Premium sparkle finishes for an elevated look"}
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            role="listbox"
            aria-label="Pool color options"
          >
            {filteredColors.map((color, index) => (
              <ColorCard
                key={color.id}
                color={color}
                isSelected={selectedColor.id === color.id}
                onSelect={handleColorSelect}
                index={index}
              />
            ))}
          </div>

          {/* Keyboard navigation hint */}
          <p className="mt-8 text-center text-sm text-slate-400">
            Use arrow keys to navigate between colors
          </p>
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl mx-4 aspect-square max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Large swatch image */}
            <ImageWithFallback
              src={selectedColor.swatchSrc}
              alt={`${selectedColor.name} color swatch`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              loading="eager"
            />
            
            {/* Bottom gradient overlay (25% from bottom) */}
            <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none" />
            
            {/* Color name on gradient */}
            <div className="absolute bottom-6 left-0 right-0 px-6 text-center pointer-events-none">
              <h3
                className="text-3xl lg:text-4xl font-light tracking-tight text-slate-900"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {selectedColor.name}
              </h3>
              <p className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wide">
                {selectedColor.finishType === "classic"
                  ? "Crystite Classic Collection"
                  : "Crystite Crystal Collection"}
              </p>
            </div>
            
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-slate-700 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close lightbox"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ColorFinishPicker;
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
};

const ImageWithFallback = ({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  sizes,
  priority = false,
  loading = "lazy",
}: ImageWithFallbackProps) => {
  const [hasError, setHasError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const placeholderColors = [
    "bg-gradient-to-br from-blue-400 to-blue-600",
    "bg-gradient-to-br from-blue-300 to-blue-500",
    "bg-gradient-to-br from-cyan-400 to-blue-500",
    "bg-gradient-to-br from-blue-500 to-indigo-600",
  ];

  const colorIndex =
    src.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    placeholderColors.length;

  const handleError = () => {
    setHasError(true);
  };

  // Show placeholder immediately if we know the image will fail
  // For development, we'll show placeholder for images that don't exist
  if (hasError) {
    if (fill) {
      return (
        <div
          className={`${placeholderColors[colorIndex]} ${className} flex items-center justify-center text-white text-xs font-semibold p-4 text-center`}
        >
          <span className="px-4">{alt}</span>
        </div>
      );
    }
    return (
      <div
        className={`${placeholderColors[colorIndex]} ${className} flex items-center justify-center text-white text-xs font-semibold p-4 text-center`}
        style={{ width, height }}
      >
        <span className="px-4">{alt}</span>
      </div>
    );
  }

  // Try to load image, fallback to placeholder if it fails
  // We'll use a wrapper div to handle errors
  if (fill) {
    return (
      <div className={`relative ${className}`} style={{ width: "100%", height: "100%" }}>
        <img
          src={imgSrc}
          alt={alt}
          className="w-full h-full object-cover"
          loading={priority ? "eager" : loading}
          onError={handleError}
          onLoad={() => setHasError(false)}
          style={{ display: hasError ? "none" : "block" }}
        />
        {hasError && (
          <div
            className={`${placeholderColors[colorIndex]} absolute inset-0 flex items-center justify-center text-white text-xs font-semibold p-4 text-center`}
          >
            <span className="px-4">{alt}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative inline-block">
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : loading}
        onError={handleError}
        onLoad={() => setHasError(false)}
        style={{ display: hasError ? "none" : "block" }}
      />
      {hasError && (
        <div
          className={`${placeholderColors[colorIndex]} ${className} flex items-center justify-center text-white text-xs font-semibold p-4 text-center`}
          style={{ width, height }}
        >
          <span className="px-4">{alt}</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;


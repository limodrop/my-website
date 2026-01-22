"use client";

import { useState } from "react";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function SmartImage({ src, alt, className = "" }: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`
          w-full h-full object-cover transition-opacity duration-700
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
      />

      {!loaded && (
        <div
          className="
            absolute inset-0 bg-[var(--border)]
            animate-pulse
          "
        />
      )}
    </div>
  );
}

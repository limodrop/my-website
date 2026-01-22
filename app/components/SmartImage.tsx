"use client";

import { useState } from "react";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

export function SmartImage({ 
  src, 
  alt, 
  className = "",
  fallback = "/images/fallback.jpg" 
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={error ? fallback : src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`
          w-full h-full object-cover transition-opacity duration-700
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
      />

      {!loaded && !error && (
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

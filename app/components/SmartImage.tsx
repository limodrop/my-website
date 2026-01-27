"use client";

import Image, { ImageProps } from "next/image";

interface SmartImageProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  fallback?: string;
  priority?: boolean;
  sizes?: string;
}

export function SmartImage({
  src,
  alt,
  fallback = "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&q=80",
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  ...props
}: SmartImageProps) {
  // next/image does not support fallback natively, so fallback logic would need to be handled externally if desired
  return (
    <Image
      src={src}
      alt={alt}
      fill={props.fill}
      width={props.width}
      height={props.height}
      priority={priority}
      sizes={sizes}
      placeholder={props.placeholder || "empty"}
      style={props.style}
      className={props.className}
    />
  );
}

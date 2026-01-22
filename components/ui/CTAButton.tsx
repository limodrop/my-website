"use client";

import { trackCTAClick } from "@/lib/tracking/analytics";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  location: string;
  locale?: string;
  className?: string;
}

export function CTAButton({ 
  href, 
  children, 
  location, 
  locale = "en",
  className = "inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
}: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackCTAClick(location, locale);
    // For external URLs, tracking completes immediately as it's synchronous
    // If async tracking is needed, consider adding a delay or using navigator.sendBeacon
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

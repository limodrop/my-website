"use client";

import { track } from "@/app/lib/track";

interface BookButtonProps {
  location: "hero" | "fleet_detail" | "scroll_cta" | "exit_intent";
  locale?: string;
  className?: string;
  children: React.ReactNode;
  href?: string;
}

export default function BookButton({ location, locale = "en", className = "", children, href = "https://book.oregontowncar.com" }: BookButtonProps) {
  const handleClick = () => {
    track("cta_click", { location, locale });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}

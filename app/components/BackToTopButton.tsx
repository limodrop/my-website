"use client";

import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      title="Back to top"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[var(--primary)] bg-opacity-60 hover:bg-opacity-80 text-white shadow-lg transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
      style={{ opacity: 0.7, display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  ) : null;
}

"use client";

import { useState, useEffect } from "react";

export function useTheme() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setMode(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      setMode(defaultTheme);
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  }, []);

  const setThemeMode = (newMode: "light" | "dark") => {
    if (!mounted) return;
    setMode(newMode);
    localStorage.setItem("theme", newMode);
    document.documentElement.setAttribute("data-theme", newMode);
  };

  return { mode, setMode: setThemeMode };
}

"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved && (saved === "light" || saved === "dark")) {
      setMode(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = mode;
      localStorage.setItem("theme", mode);
    }
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { mode, setMode, toggleTheme };
}

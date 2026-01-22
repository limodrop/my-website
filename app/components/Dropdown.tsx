"use client";

import { useState, useRef, useEffect, ReactNode } from "react";

interface DropdownItem {
  label: string | ReactNode;
  onClick: () => void;
  icon?: ReactNode;
}

interface DropdownProps {
  label: string | ReactNode;
  items: DropdownItem[];
  align?: "left" | "right";
}

export function Dropdown({ label, items, align = "right" }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="
          px-2 py-2 sm:px-3 rounded-md border border-[var(--border)]
          bg-[var(--surface)] text-[var(--text)] text-sm sm:text-base
          hover:bg-[var(--background)]
          transition min-h-[44px]
        "
      >
        {label}
      </button>

      {open && (
        <div
          className={`
            absolute ${align === "right" ? "right-0" : "left-0"} mt-2 w-48 sm:w-56 rounded-md shadow-lg
            bg-[var(--surface)] border border-[var(--border)]
            animate-fade
            z-50
          `}
        >
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
              className="
                w-full text-left px-3 py-2 sm:px-4 text-xs sm:text-sm
                hover:bg-[var(--background)]
                transition
                flex items-center gap-2
                text-[var(--text)]
                min-h-[44px]
              "
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

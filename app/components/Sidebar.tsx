"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";

interface SidebarLink {
  href: string;
  label: string;
  icon?: ReactNode;
}

interface SidebarProps {
  locale: string;
  links: SidebarLink[];
  title?: string;
}

export function Sidebar({ locale, links, title = "Navigation" }: SidebarProps) {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`
        h-screen border-r border-[var(--border)]
        bg-[var(--surface)] transition-all duration-300
        flex flex-col
        ${open ? "w-64" : "w-16"}
      `}
    >
      {/* Toggle Button */}
      <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
        {open && <h2 className="font-semibold text-[var(--text)]">{title}</h2>}
        <button
          onClick={() => setOpen(!open)}
          className="
            p-2 rounded-md
            text-[var(--text)]
            hover:bg-[var(--background)]
            transition
          "
          aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
        >
          {open ? "←" : "→"}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-2 space-y-1">
        {links.map((link, i) => (
          <Link
            key={i}
            href={`/${locale}${link.href}`}
            className="
              flex items-center gap-3 px-3 py-2 rounded-md
              text-[var(--text)]
              hover:bg-[var(--background)]
              transition
            "
          >
            {link.icon && <span className="text-lg">{link.icon}</span>}
            {open && <span className="text-sm">{link.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}

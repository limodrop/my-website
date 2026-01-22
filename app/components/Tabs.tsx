"use client";

import { useState, ReactNode } from "react";

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: number;
}

export function Tabs({ tabs, defaultTab = 0 }: TabsProps) {
  const [active, setActive] = useState(defaultTab);

  return (
    <div>
      <div className="flex gap-4 border-b border-[var(--border)] mb-6">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`
              pb-2 px-1 text-sm font-medium transition
              ${
                active === i
                  ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
                  : "text-[var(--textMuted)] hover:text-[var(--text)]"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>{tabs[active]?.content}</div>
    </div>
  );
}

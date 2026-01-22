"use client";

import { useState, ReactNode } from "react";

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = openItems.includes(i);

        return (
          <div
            key={i}
            className="
              border border-[var(--border)]
              rounded-lg bg-[var(--surface)]
              transition
            "
          >
            <button
              onClick={() => toggleItem(i)}
              className="
                w-full text-left px-4 py-3
                text-[var(--text)]
                font-medium
                flex items-center justify-between
                hover:bg-[var(--background)]
                transition
              "
            >
              <span>{item.title}</span>
              <span
                className={`text-[var(--textMuted)] transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 text-[var(--textMuted)] animate-fade">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

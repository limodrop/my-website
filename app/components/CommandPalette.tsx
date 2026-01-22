"use client";

import { useState, useEffect } from "react";

interface Command {
  label: string;
  action: () => void;
  shortcut?: string;
  group?: string;
}

interface CommandPaletteProps {
  commands: Command[];
}

export function CommandPalette({ commands }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to open
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
      // Escape to close
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].action();
      setOpen(false);
      setQuery("");
    }
  };

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 bg-black/40 backdrop-blur-sm z-50
        flex items-start justify-center pt-12 sm:pt-20 p-2 sm:p-4
      "
      onClick={() => setOpen(false)}
    >
      <div
        className="
          w-full max-w-lg rounded-lg shadow-lg
          bg-[var(--surface)] border border-[var(--border)]
          p-3 sm:p-4 animate-scale
        "
        onClick={(e) => e.stopPropagation()}
      >
        <input
          autoFocus
          placeholder="Type a command..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="
            w-full px-3 py-2 mb-2 sm:mb-3 rounded-md text-sm sm:text-base
            bg-[var(--background)]
            border border-[var(--border)]
            text-[var(--text)]
            outline-none
            focus:border-[var(--primary)]
          "
        />

        <div className="text-xs text-[var(--textMuted)] mb-2 px-1">
          <span className="hidden sm:inline">Use ↑↓ to navigate, Enter to select, Esc to close</span>
          <span className="sm:hidden">↑↓ navigate • Enter select</span>
        </div>

        <div className="max-h-64 overflow-auto">
          {filtered.length === 0 && (
            <p className="text-center py-4 text-[var(--textMuted)]">
              No commands found
            </p>
          )}

          {filtered.map((cmd, i) => (
            <button
              key={i}
              onClick={() => {
                cmd.action();
                setOpen(false);
                setQuery("");
              }}
              className={`
                w-full text-left px-3 py-2 rounded-md
                transition flex items-center justify-between
                ${
                  i === selectedIndex
                    ? "bg-[var(--primary)] text-white"
                    : "hover:bg-[var(--background)] text-[var(--text)]"
                }
              `}
            >
              <span>{cmd.label}</span>
              {cmd.shortcut && (
                <span className="text-xs opacity-70">{cmd.shortcut}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

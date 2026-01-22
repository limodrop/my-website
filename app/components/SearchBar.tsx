"use client";

import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  defaultValue?: string;
}

export function SearchBar({ 
  placeholder = "Search...", 
  onSearch,
  defaultValue = "" 
}: SearchBarProps) {
  const [value, setValue] = useState(defaultValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center gap-3 mb-6">
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          // Live search as user types
          if (e.target.value === "") {
            onSearch("");
          }
        }}
        placeholder={placeholder}
        className="
          flex-1 px-4 py-2 rounded-md
          bg-[var(--background)]
          border border-[var(--border)]
          text-[var(--text)]
          placeholder:text-[var(--textMuted)]
          focus:border-[var(--primary)]
          transition
          outline-none
        "
      />

      <button
        type="submit"
        className="
          px-6 py-2 rounded-md
          bg-[var(--primary)] text-white
          hover:bg-[var(--primaryHover)]
          transition
          font-medium
        "
      >
        Search
      </button>
    </form>
  );
}

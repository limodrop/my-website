"use client";

import { useState } from "react";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterBarProps {
  options: FilterOption[];
  onChange: (value: string) => void;
  defaultValue?: string;
  label?: string;
}

export function FilterBar({ 
  options, 
  onChange, 
  defaultValue = "",
  label = "Filter by"
}: FilterBarProps) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      {label && (
        <label className="text-sm font-medium text-[var(--text)]">
          {label}:
        </label>
      )}
      
      <select
        value={value}
        onChange={handleChange}
        className="
          px-4 py-2 rounded-md
          bg-[var(--surface)]
          border border-[var(--border)]
          text-[var(--text)]
          focus:border-[var(--primary)]
          transition
          outline-none
          cursor-pointer
        "
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

"use client";

import { useState } from "react";
import { SearchBar } from "@/app/components/SearchBar";
import { FilterBar } from "@/app/components/FilterBar";

// Example usage for Services, Fleet, or Cities pages
export function SearchAndFilterDemo() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");

  // Mock data - replace with real data from your API
  const allItems = [
    { id: 1, name: "Luxury Sedan", category: "sedan", location: "Portland" },
    { id: 2, name: "Executive SUV", category: "suv", location: "Seattle" },
    { id: 3, name: "Sprinter Van", category: "sprinter", location: "Los Angeles" },
    { id: 4, name: "Premium Sedan", category: "sedan", location: "Portland" },
    { id: 5, name: "Large SUV", category: "suv", location: "San Francisco" },
  ];

  // Filter and search logic
  const filteredItems = allItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "" || item.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold text-[var(--text)] mb-8">
        Fleet Search & Filter Demo
      </h1>

      {/* Search Bar */}
      <SearchBar
        placeholder="Search vehicles..."
        onSearch={setSearchQuery}
      />

      {/* Filter Bar */}
      <FilterBar
        label="Vehicle Type"
        options={[
          { label: "Sedans", value: "sedan" },
          { label: "SUVs", value: "suv" },
          { label: "Sprinters", value: "sprinter" },
        ]}
        onChange={setFilter}
      />

      {/* Results Count */}
      <p className="text-sm text-[var(--textMuted)] mb-6">
        Showing {filteredItems.length} of {allItems.length} vehicles
      </p>

      {/* Results Grid - Using new grid-responsive class */}
      <div className="grid-responsive">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="
              p-6 rounded-lg
              bg-[var(--surface)]
              border border-[var(--border)]
              hover:border-[var(--primary)]
              transition
            "
          >
            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
              {item.name}
            </h3>
            <p className="text-sm text-[var(--textMuted)] mb-1">
              Category: {item.category}
            </p>
            <p className="text-sm text-[var(--textMuted)]">
              Location: {item.location}
            </p>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-[var(--textMuted)]">
            No vehicles found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}

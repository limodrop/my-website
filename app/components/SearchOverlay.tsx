"use client";

import { useState, useEffect } from "react";

interface SearchResult {
  title: string;
  description?: string;
  category: string;
  url: string;
}

interface SearchOverlayProps {
  onSearch: (query: string) => SearchResult[] | Promise<SearchResult[]>;
}

export function SearchOverlay({ onSearch }: SearchOverlayProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Cmd+/ or Ctrl+/ to open
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    try {
      const searchResults = await Promise.resolve(onSearch(query));
      setResults(searchResults);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setQuery("");
    setResults([]);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
          px-3 py-2 rounded-md border border-[var(--border)]
          bg-[var(--surface)] text-[var(--text)]
          hover:bg-[var(--background)]
          transition
        "
      >
        🔍 Search
      </button>

      {open && (
        <div
          className="
            fixed inset-0 bg-black/40 backdrop-blur-sm z-50
            flex items-center justify-center p-4
          "
          onClick={handleClose}
        >
          <div
            className="
              w-full max-w-2xl rounded-lg shadow-lg
              bg-[var(--surface)] border border-[var(--border)]
              p-6 animate-scale
              max-h-[80vh] overflow-auto
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-3 mb-4">
              <input
                autoFocus
                placeholder="Search services, fleet, cities, pages..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                  if (e.key === "Escape") handleClose();
                }}
                className="
                  flex-1 px-4 py-3 rounded-md
                  bg-[var(--background)]
                  border border-[var(--border)]
                  text-[var(--text)]
                  outline-none
                  focus:border-[var(--primary)]
                "
              />

              <button
                onClick={handleSearch}
                disabled={loading}
                className="
                  px-6 py-3 rounded-md
                  bg-[var(--primary)] text-white
                  hover:bg-[var(--primaryHover)]
                  disabled:opacity-50
                  transition
                  font-medium
                "
              >
                {loading ? "Searching..." : "Search"}
              </button>
            </div>

            {results.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  {results.length} results found
                </p>

                {results.map((result, i) => (
                  <a
                    key={i}
                    href={result.url}
                    onClick={handleClose}
                    className="
                      block p-4 rounded-lg
                      border border-[var(--border)]
                      hover:border-[var(--primary)]
                      hover:bg-[var(--background)]
                      transition
                    "
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-medium text-[var(--text)] mb-1">
                          {result.title}
                        </h3>
                        {result.description && (
                          <p className="text-sm text-[var(--textMuted)]">
                            {result.description}
                          </p>
                        )}
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-[var(--background)] text-[var(--textMuted)]">
                        {result.category}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {query && !loading && results.length === 0 && (
              <p className="text-center py-8 text-[var(--textMuted)]">
                No results found for "{query}"
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

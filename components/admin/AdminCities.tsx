"use client";

import { useState, useEffect } from "react";

export default function AdminCities() {
  const [cities, setCities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/cities")
      .then((r) => r.json())
      .then((data) => {
        setCities(data);
        setLoading(false);
      });
  }, []);

  const update = (i: number, field: string, value: string | string[]) => {
    const copy = [...cities];
    copy[i][field] = value;
    setCities(copy);
  };

  const save = () => {
    fetch("/api/admin/cities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cities),
    }).then(() => {
      alert("Cities saved successfully!");
    });
  };

  if (loading) {
    return <div className="p-4">Loading cities...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Cities</h2>
        <button
          onClick={save}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Save Changes
        </button>
      </div>

      {cities.map((c, i) => (
        <div
          key={c.slug}
          className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm space-y-4"
        >
          <h3 className="font-semibold text-lg text-gray-900">{c.name}</h3>

          <div className="space-y-2">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Slug</span>
              <input
                className="mt-1 w-full p-2 rounded border border-gray-300 bg-gray-100"
                value={c.slug}
                disabled
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Name</span>
              <input
                className="mt-1 w-full p-2 rounded border border-gray-300 bg-white"
                value={c.name}
                onChange={(e) => update(i, "name", e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Country</span>
              <input
                className="mt-1 w-full p-2 rounded border border-gray-300 bg-white"
                value={c.country}
                onChange={(e) => update(i, "country", e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Tagline</span>
              <input
                className="mt-1 w-full p-2 rounded border border-gray-300 bg-white"
                value={c.tagline}
                onChange={(e) => update(i, "tagline", e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">SEO Description</span>
              <textarea
                className="mt-1 w-full p-2 rounded border border-gray-300 bg-white"
                rows={3}
                value={c.seoDescription}
                onChange={(e) => update(i, "seoDescription", e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                Primary Use Cases (comma-separated)
              </span>
              <input
                className="mt-1 w-full p-2 rounded border border-gray-300 bg-white"
                value={c.primaryUseCases.join(", ")}
                onChange={(e) =>
                  update(
                    i,
                    "primaryUseCases",
                    e.target.value.split(",").map((s) => s.trim())
                  )
                }
              />
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

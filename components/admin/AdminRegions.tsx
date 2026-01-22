"use client";

import { useState, useEffect } from "react";

export default function AdminRegions() {
  const [regions, setRegions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/regions")
      .then((r) => r.json())
      .then((data) => {
        setRegions(data);
        setLoading(false);
      });
  }, []);

  const update = (i: number, field: string, value: string) => {
    const copy = [...regions];
    copy[i][field] = value;
    setRegions(copy);
  };

  const save = () => {
    fetch("/api/admin/regions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(regions),
    }).then(() => {
      alert("Regions saved successfully!");
    });
  };

  if (loading) {
    return <div className="p-4">Loading regions...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Regions</h2>
        <button
          onClick={save}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Save Changes
        </button>
      </div>

      {regions.map((r, i) => (
        <div
          key={r.slug}
          className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm space-y-4"
        >
          <h3 className="font-semibold text-lg text-gray-900">{r.slug}</h3>

          <div className="space-y-2">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Headline</span>
              <input
                className="mt-1 w-full p-2 rounded border border-gray-300 bg-white"
                value={r.headline}
                onChange={(e) => update(i, "headline", e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Subheadline</span>
              <textarea
                className="mt-1 w-full p-2 rounded border border-gray-300 bg-white"
                rows={2}
                value={r.subheadline}
                onChange={(e) => update(i, "subheadline", e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">SEO Description</span>
              <textarea
                className="mt-1 w-full p-2 rounded border border-gray-300 bg-white"
                rows={3}
                value={r.seoDescription}
                onChange={(e) => update(i, "seoDescription", e.target.value)}
              />
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

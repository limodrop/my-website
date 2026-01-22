"use client";

import { useState, useEffect } from "react";

export default function AdminRegions() {
  const [regions, setRegions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/regions")
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch regions");
        return r.json();
      })
      .then((data) => {
        setRegions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const update = (i: number, field: string, value: string) => {
    const copy = [...regions];
    copy[i][field] = value;
    setRegions(copy);
  };

  const save = () => {
    setSaveStatus("Saving...");
    fetch("/api/admin/regions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(regions),
    })
      .then((r) => {
        if (!r.ok) throw new Error("Failed to save regions");
        return r.json();
      })
      .then(() => {
        setSaveStatus("Saved successfully!");
        setTimeout(() => setSaveStatus(null), 3000);
      })
      .catch((err) => {
        setSaveStatus(`Error: ${err.message}`);
        setTimeout(() => setSaveStatus(null), 5000);
      });
  };

  if (loading) {
    return <div className="p-4">Loading regions...</div>;
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded text-red-800">
        Error loading regions: {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Regions</h2>
        <div className="flex items-center gap-3">
          {saveStatus && (
            <span className={`text-sm ${saveStatus.includes("Error") ? "text-red-600" : "text-green-600"}`}>
              {saveStatus}
            </span>
          )}
          <button
            onClick={save}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Save Changes
          </button>
        </div>
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

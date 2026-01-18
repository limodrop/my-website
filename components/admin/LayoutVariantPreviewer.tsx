"use client"

import { useState } from "react"
import fs from "fs"
import path from "path"
import { HomepageBlock } from "@/lib/layout/homepageLayout"
import { BlockRenderer } from "@/components/layout/BlockRenderer"

const GIT_VARIANT_DIR = path.resolve(process.cwd(), "layout-variants")

function loadVariant(filename: string): { id: string; label: string; layout: HomepageBlock[] } | null {
  try {
    const filepath = path.join(GIT_VARIANT_DIR, filename)
    const json = fs.readFileSync(filepath, "utf-8")
    const parsed = JSON.parse(json)
    if (!parsed.layout || !Array.isArray(parsed.layout)) return null
    return parsed
  } catch {
    return null
  }
}

export default function LayoutVariantPreviewer() {
  const [files, setFiles] = useState<string[]>([])
  const [selected, setSelected] = useState("")
  const [variant, setVariant] = useState<any>(null)

  function loadFiles() {
    try {
      const f = fs.readdirSync(GIT_VARIANT_DIR).filter((f) => f.endsWith(".json"))
      setFiles(f)
    } catch {
      setFiles([])
    }
  }

  function preview() {
    const v = loadVariant(selected)
    setVariant(v)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Variant Previewer</h3>

      <button
        onClick={loadFiles}
        className="px-3 py-1 bg-gray-200 rounded"
      >
        Refresh Variant List
      </button>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="">Choose variant file</option>
        {files.map((f) => (
          <option key={f} value={f}>
            {f}
          </option>
        ))}
      </select>

      <button
        onClick={preview}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Preview Layout
      </button>

      {variant && (
        <div className="mt-4 border rounded p-4 bg-gray-50">
          <h4 className="text-md font-semibold mb-2">
            Preview: {variant.label} ({variant.id})
          </h4>
          <div className="space-y-4">
            {variant.layout.map((block: HomepageBlock, i: number) => (
              <BlockRenderer key={i} block={block} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

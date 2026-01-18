import fs from "fs"
import path from "path"
import { HomepageBlock } from "./homepageLayout"
import { listLayoutVariants } from "./layoutPerformance"
import { defineLayoutVariant } from "./layoutABTest"

const GIT_VARIANT_DIR = path.resolve(process.cwd(), "layout-variants")

export function exportLayoutVariantsToGit(): string[] {
  const variants = listLayoutVariants()
  const messages: string[] = []

  try {
    fs.mkdirSync(GIT_VARIANT_DIR, { recursive: true })

    for (const v of variants) {
      const filename = `${v.label.replace(/\s+/g, "_")}_${v.id}.json`
      const filepath = path.join(GIT_VARIANT_DIR, filename)
      fs.writeFileSync(
        filepath,
        JSON.stringify({ id: v.id, label: v.label, layout: v.layout }, null, 2),
        "utf-8"
      )
      messages.push(`✅ Exported ${v.label} → ${filename}`)
    }

    return messages
  } catch {
    return ["❌ Failed to write layout variants to Git"]
  }
}

export function listGitVariantFiles(): string[] {
  try {
    return fs.readdirSync(GIT_VARIANT_DIR).filter((f) => f.endsWith(".json"))
  } catch {
    return []
  }
}

export function importLayoutVariantFromGit(filename: string): string {
  try {
    const filepath = path.join(GIT_VARIANT_DIR, filename)
    const json = fs.readFileSync(filepath, "utf-8")
    const parsed = JSON.parse(json)

    if (!parsed.id || !parsed.label || !Array.isArray(parsed.layout)) {
      return "❌ Invalid variant file format"
    }

    defineLayoutVariant(parsed.id, parsed.label, parsed.layout, 1)
    return `✅ Imported layout variant "${parsed.label}" from ${filename}`
  } catch {
    return "❌ Failed to import layout variant from Git"
  }
}

export function loadVariantById(id: string): { id: string; label: string; layout: HomepageBlock[] } | null {
  const variants = listLayoutVariants()
  return variants.find((v) => v.id === id) || null
}

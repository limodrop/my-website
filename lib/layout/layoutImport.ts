import { HomepageBlock } from "./homepageLayout"
import { updateHomepageLayout } from "./homepageLayout"
import { saveLayoutSnapshot } from "./layoutHistory"

export function importLayoutFromJSON(json: string): string {
  try {
    const parsed = JSON.parse(json)

    if (!Array.isArray(parsed.layout)) return "❌ Invalid layout format"

    const layout: HomepageBlock[] = parsed.layout.map((b: any) => ({
      id: b.id,
      label: b.label,
      enabled: !!b.enabled
    }))

    updateHomepageLayout(layout)

    saveLayoutSnapshot(parsed.label || "Imported Layout", layout, "import")

    const auditEntry = {
      actor: "admin",
      action: "layout_imported",
      target: parsed.id || "unknown",
      meta: { label: parsed.label || "Imported", source: parsed.source || "manual" }
    }

    return `✅ Imported layout "${parsed.label || "Unnamed"}" successfully`
  } catch (e) {
    return "❌ Failed to parse JSON"
  }
}

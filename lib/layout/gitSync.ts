import fs from "fs"
import path from "path"
import { listLayoutHistory } from "./layoutHistory"
import { importLayoutFromJSON } from "./layoutImport"

const GIT_LAYOUT_DIR = path.resolve(process.cwd(), "layout-snapshots")

export function pushLayoutToGit(id: string): string {
  const history = listLayoutHistory()
  const snap = history.find((s) => s.id === id)
  if (!snap) return "❌ Snapshot not found"

  const filename = `${snap.label.replace(/\s+/g, "_")}_${snap.id}.json`
  const filepath = path.join(GIT_LAYOUT_DIR, filename)

  try {
    fs.mkdirSync(GIT_LAYOUT_DIR, { recursive: true })
    fs.writeFileSync(filepath, JSON.stringify(snap, null, 2), "utf-8")
    return `✅ Pushed layout to Git: ${filename}`
  } catch (e) {
    return "❌ Failed to write to Git directory"
  }
}

export function pullLayoutFromGit(filename: string): string {
  const filepath = path.join(GIT_LAYOUT_DIR, filename)

  try {
    const json = fs.readFileSync(filepath, "utf-8")
    return importLayoutFromJSON(json)
  } catch (e) {
    return "❌ Failed to read layout file"
  }
}

export function listGitLayoutFiles(): string[] {
  try {
    return fs.readdirSync(GIT_LAYOUT_DIR).filter((f) => f.endsWith(".json"))
  } catch {
    return []
  }
}

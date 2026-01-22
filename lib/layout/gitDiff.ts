import fs from "fs"
import path from "path"
import { HomepageBlock, getHomepageLayout } from "./homepageLayout"
import { diffLayouts, DiffResult } from "./layoutDiff"

const GIT_LAYOUT_DIR = path.resolve(process.cwd(), "layout-snapshots")

export function diffGitLayout(filename: string): DiffResult[] | null {
  try {
    const filepath = path.join(GIT_LAYOUT_DIR, filename)
    const json = fs.readFileSync(filepath, "utf-8")
    const parsed = JSON.parse(json)

    if (!Array.isArray(parsed.layout)) return null

    const from = parsed.layout as HomepageBlock[]
    const to = getHomepageLayout()

    return diffLayouts(from, to)
  } catch {
    return null
  }
}

export function listGitLayoutFiles(): string[] {
  try {
    return fs.readdirSync(GIT_LAYOUT_DIR).filter((f) => f.endsWith(".json"))
  } catch {
    return []
  }
}

import { HomepageBlock } from "./homepageLayout"

export interface DiffResult {
  id: string
  label: string
  from?: boolean
  to?: boolean
  changed?: boolean
}

export function diffLayouts(
  from: HomepageBlock[],
  to: HomepageBlock[]
): DiffResult[] {
  const allIds = new Set([...from.map((b) => b.id), ...to.map((b) => b.id)])

  const result: DiffResult[] = []

  for (const id of allIds) {
    const f = from.find((b) => b.id === id)
    const t = to.find((b) => b.id === id)

    result.push({
      id,
      label: f?.label || t?.label || id,
      from: !!f?.enabled,
      to: !!t?.enabled,
      changed: f?.enabled !== t?.enabled
    })
  }

  return result
}

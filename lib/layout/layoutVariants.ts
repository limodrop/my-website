import { SessionProfile } from "../intel/sessionProfile"
import { HomepageBlock } from "./homepageLayout"

interface LayoutVariant {
  id: string
  label: string
  rules: Partial<SessionProfile>
  layout: HomepageBlock[]
}

const variants: LayoutVariant[] = [
  {
    id: "default",
    label: "Default Layout",
    rules: {},
    layout: [
      { id: "hero", label: "Hero Block", enabled: true },
      { id: "personalized", label: "Personalized Block", enabled: true },
      { id: "fleet", label: "Fleet Carousel", enabled: true },
      { id: "promos", label: "Promo Highlights", enabled: false },
      { id: "footer", label: "Power Footer", enabled: true }
    ]
  }
]

export function listLayoutVariants(): LayoutVariant[] {
  return variants
}

export function addLayoutVariant(v: Omit<LayoutVariant, "id">) {
  variants.push({
    ...v,
    id: `var-${Math.random().toString(36).slice(2, 8)}`
  })
}

export function resolveLayout(profile: SessionProfile): HomepageBlock[] {
  for (const v of variants) {
    const match = Object.entries(v.rules).every(([k, val]) => (profile as any)[k] === val)
    if (match) return v.layout
  }
  return variants[0].layout
}

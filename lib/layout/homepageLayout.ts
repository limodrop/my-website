export interface HomepageBlock {
  id: string
  label: string
  enabled: boolean
}

let layout: HomepageBlock[] = [
  { id: "hero", label: "Hero Block", enabled: true },
  { id: "personalized", label: "Personalized Block", enabled: true },
  { id: "fleet", label: "Fleet Carousel", enabled: true },
  { id: "promos", label: "Promo Highlights", enabled: false },
  { id: "footer", label: "Power Footer", enabled: true }
]

export function getHomepageLayout(): HomepageBlock[] {
  return layout
}

export function updateHomepageLayout(newLayout: HomepageBlock[]) {
  layout = newLayout
}

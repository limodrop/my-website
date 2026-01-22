// Homepage layout configuration
export interface HomepageBlock {
  type: string;
  props?: Record<string, any>;
}

let currentLayout: HomepageBlock[] = [
  { type: "hero" },
  { type: "services" },
  { type: "cities" },
  { type: "fleet" },
];

export function getHomepageLayout(): HomepageBlock[] {
  return [...currentLayout];
}

export function defineHomepageLayout(blocks: HomepageBlock[]): HomepageBlock[] {
  return blocks;
}

export function updateHomepageLayout(blocks: HomepageBlock[]): void {
  currentLayout = [...blocks];
}

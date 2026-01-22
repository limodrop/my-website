import { HomepageBlock } from "./homepageLayout";

interface LayoutSnapshot {
  timestamp: number;
  reason: string;
  layout: HomepageBlock[];
  source: string;
}

const history: LayoutSnapshot[] = [];

export function saveLayoutSnapshot(
  reason: string,
  layout: HomepageBlock[],
  source: string
): void {
  history.push({
    timestamp: Date.now(),
    reason,
    layout: [...layout],
    source,
  });
}

export function getLayoutHistory(): LayoutSnapshot[] {
  return [...history];
}

import { CrossPageRule, ContentClusters } from "./relationships.types"

export const mockLinks: CrossPageRule[] = [
  {
    id: "link-1",
    entityType: "service",
    entityId: "airport",
    related: ["corporate", "long_distance"],
    reason: "Airport travelers often need corporate or long-distance rides"
  },
  {
    id: "link-2",
    entityType: "city",
    entityId: "portland",
    related: ["beaverton", "hillsboro"],
    reason: "Nearby cities with overlapping service areas"
  }
]

export const mockClusters: ContentClusters = {
  travel: ["airport", "long_distance"],
  business: ["corporate", "executive"],
  leisure: ["wine", "wedding"]
}

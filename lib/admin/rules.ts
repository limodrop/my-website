import { RuleDefinition } from "./types"

export const mockRules: RuleDefinition[] = [
  {
    id: "rule-1",
    engine: "bookingIntent",
    key: "device",
    condition: "equals",
    value: "desktop"
  },
  {
    id: "rule-2",
    engine: "decay",
    key: "traffic30d",
    condition: "less_than",
    value: "50"
  }
]

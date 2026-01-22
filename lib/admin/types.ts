export interface RuleDefinition {
  id: string
  engine: "bookingIntent" | "decay" | "nba" | "personalization"
  key: string
  condition: "equals" | "greater_than" | "less_than"
  value: string
}

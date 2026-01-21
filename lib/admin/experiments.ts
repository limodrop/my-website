import { ABTestRule } from "./experiments.types"

export const mockExperiments: ABTestRule[] = [
  {
    id: "exp-1",
    name: "Homepage CTA Test",
    condition: "geoCountry == US",
    variants: ["A", "B"]
  },
  {
    id: "exp-2",
    name: "Winter Promo",
    condition: "season == winter",
    variants: ["control", "promo"]
  }
]

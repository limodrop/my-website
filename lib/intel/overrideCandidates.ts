interface OverrideCandidate {
  text: string
  confidence: number
  tone: "formal" | "friendly" | "urgent" | "luxury"
}

export function generateOverrideCandidates(
  channel: "email" | "cta" | "social",
  target: string,
  lang: string,
  city: string,
  service: string
): OverrideCandidate[] {
  const base = [
    { text: "Book your winter ride now", tone: "urgent" },
    { text: "Reserve your luxury SUV today", tone: "luxury" },
    { text: "Your premium ride awaits", tone: "friendly" },
    { text: "Travel in comfort this season", tone: "formal" }
  ]

  return base.map((b) => ({
    ...b,
    confidence: scoreCandidate(b.text, channel, lang, city, service)
  }))
}

function scoreCandidate(
  text: string,
  channel: string,
  lang: string,
  city: string,
  service: string
): number {
  const hash = text.length + city.length + service.length
  return 60 + (hash % 40)
}

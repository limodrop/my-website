export interface SessionProfile {
  city: string
  service: string
  fleet: string
  lang: string
  intent: "low" | "medium" | "high"
}

export function getSessionProfile(): SessionProfile {
  return {
    city: "Portland",
    service: "airport",
    fleet: "suv",
    lang: "en",
    intent: "high"
  }
}

export function getSessionDebug(): Record<string, string> {
  return {
    city: getCookie("session_city") || "unknown",
    service: getCookie("session_service") || "unknown",
    fleet: getCookie("session_fleet") || "unknown",
    lang: getCookie("session_lang") || "unknown",
    intent: getCookie("session_intent") || "unknown",
    source: getCookie("session_source") || "unknown"
  }
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))
  return match ? decodeURIComponent(match[2]) : null
}

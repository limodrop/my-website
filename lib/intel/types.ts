// Shared types for all intelligence engines

export type DeviceType = "desktop" | "mobile"
export type IntentLevel = "low" | "medium" | "high" | "very_high"
export type DecayLevel = "none" | "low" | "medium" | "high" | "critical"
export type NextBestAction =
  | "show_soft_cta"
  | "show_strong_cta"
  | "refresh_content"
  | "do_nothing"

export interface BaseContext {
  lang: string
  geoCountry: string
  season: "winter" | "spring" | "summer" | "fall"
}

export interface BookingIntentContext extends BaseContext {
  sessionId: string
  device: DeviceType
  serviceType?: string
}

export interface BookingIntentPrediction {
  id: string
  context: BookingIntentContext
  intent: IntentLevel
  score: number
  reason: string
  generatedAt: number
  source: "rule"
}

export interface ContentDecayContext extends BaseContext {
  pageSlug: string
  lastUpdated: number
  traffic30d: number
  rankScore: number
}

export interface ContentDecay {
  id: string
  context: ContentDecayContext
  decayLevel: DecayLevel
  score: number
  action: string
  reason: string
  generatedAt: number
  source: "rule"
}

export interface NBAContext extends BaseContext {
  sessionId: string
  device: DeviceType
}

export interface NBAResult {
  id: string
  context: NBAContext
  action: NextBestAction
  target?: string
  reason: string
  generatedAt: number
  source: "rule"
}

export interface MultiPageContext extends BaseContext {
  sessionId: string
  device: DeviceType
}

export interface MultiPageProfile {
  id: string
  context: MultiPageContext
  intent: IntentLevel
  interests: string[]
  preferredCity?: string
  preferredFleet?: string
  recommendedServices: string[]
  recommendedCities: string[]
  ctaStrength: "normal" | "strong"
  promo?: string
  generatedAt: number
  source: "rule"
}

export interface FleetServiceMatchContext extends BaseContext {
  serviceType: string
}

export interface FleetServiceMatch {
  id: string
  context: FleetServiceMatchContext
  primaryFleet: string
  secondaryFleets: string[]
  reason: string
  generatedAt: number
  source: "rule"
}

export interface CityServiceMatchContext extends BaseContext {
  citySlug: string
}

export interface CityServiceMatch {
  id: string
  context: CityServiceMatchContext
  primaryServices: string[]
  secondaryServices: string[]
  reason: string
  generatedAt: number
  source: "rule"
}

export interface CrossPageContext extends BaseContext {
  entityType: "service" | "city" | "fleet" | "blog"
  entityId: string
}

export interface CrossPageRecommendation {
  id: string
  context: CrossPageContext
  related: string[]
  reason: string
  generatedAt: number
  source: "rule"
}

export interface NavigationContext extends BaseContext {
  sessionId?: string
}

export interface NavigationLayout {
  id: string
  context: NavigationContext
  top: { label: string; href: string }[]
  bottom: { label: string; href: string }[]
  generatedAt: number
  source: "rule"
}

export interface ABTestContext extends BaseContext {
  sessionId: string
}

export interface ABTestResult {
  id: string
  context: ABTestContext
  variant: string
  reason: string
  generatedAt: number
  source: "rule"
}

export interface PriceMessagingContext extends BaseContext {
  city: string
  service: string
  fleet: string
}

export interface PriceMessagingResult {
  id: string
  context: PriceMessagingContext
  messages: string[]
  label: string
  generatedAt: number
  source: "rule"
}

export interface SocialContext {
  city: string
  service: string
  fleet: string
  season: "winter" | "spring" | "summer" | "fall"
  lang: string
}

export interface ScheduledPost {
  id: string
  platform: "instagram" | "facebook" | "email"
  lang: string
  scheduledFor: number
  content: string
  tags: string[]
  context: SocialContext
  source: "rule"
}

export interface Promotion {
  id: string
  title: string
  message: string
  city?: string
  service?: string
  fleet?: string
  season?: string
  lang?: string
  active: boolean
  expiresAt?: number
}

export interface PromotionContext {
  city: string
  service: string
  fleet: string
  season: string
  lang: string
}

export interface RuleTrace {
  ruleId: string
  matched: boolean
  reason: string
  output?: any
}

export interface PricingContext {
  city: string
  service: string
  fleet: string
  season: string
}

export interface PricingResult {
  id: string
  context: PricingContext
  basePrice: number
  currency: string
  reason: string
  generatedAt: number
  source: string
  ruleTrace?: RuleTrace[]
}

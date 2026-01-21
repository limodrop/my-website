import { ReactNode } from "react"

type HeadingLevel = 1 | 2 | 3 | 4
type HeadingVariant = "hero" | "section" | "card"

interface HeadingProps {
  level: HeadingLevel
  variant?: HeadingVariant
  children: ReactNode
  className?: string
}

export function Heading({ level, variant = "section", children, className = "" }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const variantClasses = {
    hero: "text-5xl md:text-7xl font-bold tracking-tight",
    section: "text-4xl md:text-5xl font-bold",
    card: "text-2xl font-bold"
  }

  const levelDefaults = {
    1: "text-5xl md:text-6xl font-bold",
    2: "text-4xl md:text-5xl font-bold",
    3: "text-3xl md:text-4xl font-bold",
    4: "text-2xl md:text-3xl font-semibold"
  }

  const finalClass = variant ? variantClasses[variant] : levelDefaults[level]

  return <Tag className={`${finalClass} ${className}`}>{children}</Tag>
}

import { ReactNode } from "react"
import { theme } from "@/app/ui/theme"

type HeadingLevel = 1 | 2 | 3 | 4

interface HeadingProps {
  level?: HeadingLevel
  children: ReactNode
  className?: string
}

export function Heading({ level = 2, children, className = "" }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const sizeClasses = {
    1: "text-5xl md:text-6xl",
    2: "text-3xl md:text-4xl",
    3: "text-2xl md:text-3xl",
    4: "text-xl md:text-2xl"
  }

  return (
    <Tag 
      className={`font-semibold tracking-tight ${sizeClasses[level]} ${className}`}
      style={{ color: theme.colors.text }}
    >
      {children}
    </Tag>
  )
}

import { ReactNode } from "react"
import { theme } from "@/app/ui/theme"

interface TextProps {
  muted?: boolean
  children: ReactNode
  className?: string
  as?: "p" | "span" | "div"
}

export function Text({ muted = false, children, className = "", as = "p" }: TextProps) {
  const Tag = as

  return (
    <Tag 
      className={`leading-relaxed ${className}`}
      style={{
        color: muted ? theme.colors.textMuted : theme.colors.text,
      }}
    >
      {children}
    </Tag>
  )
}

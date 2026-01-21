import { ReactNode } from "react"

type TextVariant = "body" | "muted" | "label" | "large"

interface TextProps {
  variant?: TextVariant
  children: ReactNode
  className?: string
  as?: "p" | "span" | "div"
}

export function Text({ variant = "body", children, className = "", as = "p" }: TextProps) {
  const Tag = as

  const variantClasses = {
    body: "text-base md:text-lg text-gray-700 dark:text-gray-300",
    muted: "text-sm md:text-base text-gray-600 dark:text-gray-400",
    label: "text-sm font-semibold text-gray-800 dark:text-gray-200",
    large: "text-xl md:text-2xl text-gray-700 dark:text-gray-300"
  }

  return <Tag className={`${variantClasses[variant]} ${className}`}>{children}</Tag>
}

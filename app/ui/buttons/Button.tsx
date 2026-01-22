import { ReactNode } from "react"
import { theme } from "@/app/ui/theme"

type ButtonVariant = "primary" | "secondary" | "ghost"
type ButtonAs = "button" | "a"

interface ButtonProps {
  variant?: ButtonVariant
  as?: ButtonAs
  href?: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function Button({ 
  variant = "primary", 
  as = "button",
  href,
  children, 
  className = "",
  onClick
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-5 py-2.5 font-medium transition-colors duration-200"
  
  const variantStyles: Record<ButtonVariant, { className: string; style?: React.CSSProperties }> = {
    primary: {
      className: `${baseClasses} text-white ${className}`,
      style: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.radius.button,
      }
    },
    secondary: {
      className: `${baseClasses} hover:bg-[#E6F0FA] ${className}`,
      style: {
        border: `1px solid ${theme.colors.primary}`,
        color: theme.colors.primary,
        borderRadius: theme.radius.button,
      }
    },
    ghost: {
      className: `${baseClasses} bg-transparent hover:underline ${className}`,
      style: {
        color: theme.colors.primary,
      }
    },
  }

  const { className: variantClass, style: variantStyle } = variantStyles[variant]

  if (as === "a" && href) {
    return (
      <a href={href} className={variantClass} style={variantStyle}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={variantClass} style={variantStyle}>
      {children}
    </button>
  )
}

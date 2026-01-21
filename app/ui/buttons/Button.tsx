import { ReactNode } from "react"

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
  const variantClasses = {
    primary: "bg-yellow-600 text-black hover:bg-yellow-500 font-bold shadow-lg",
    secondary: "bg-black text-white hover:bg-gray-900 font-bold",
    ghost: "bg-white/10 text-white hover:bg-white/20 backdrop-blur border border-white/20 font-semibold"
  }

  const baseClasses = "inline-block px-8 py-4 rounded-lg transition-all"
  const finalClass = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (as === "a" && href) {
    return (
      <a href={href} className={finalClass}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={finalClass}>
      {children}
    </button>
  )
}

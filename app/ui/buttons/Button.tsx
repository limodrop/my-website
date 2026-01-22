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
    primary: "bg-[#0067B8] text-white hover:bg-[#005A9E] font-bold shadow-lg",
    secondary: "bg-white text-[#0067B8] hover:bg-[#E6F0FA] font-bold border-2 border-[#0067B8]",
    ghost: "bg-transparent text-[#0067B8] hover:underline font-semibold"
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

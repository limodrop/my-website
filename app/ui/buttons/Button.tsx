"use client";

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
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export function Button({ 
  variant = "primary", 
  as = "button",
  href,
  children, 
  className = "",
  onClick,
  type = "button",
  disabled = false
}: ButtonProps) {
  const base = "inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variants = {
    primary: `
      bg-[var(--primary)]
      text-[var(--primaryText)]
      hover:bg-[var(--primaryHover)]
      hover:text-white
      focus:ring-[var(--primaryRing)]
      shadow-sm hover:shadow-md
      disabled:opacity-50 disabled:cursor-not-allowed
      tracking-[0.2px]
    `,
    secondary: `
      bg-[var(--surface)]
      text-[var(--text)]
      border border-[var(--border)]
      hover:border-[var(--primary)]
      hover:text-[var(--primary)]
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
    ghost: `
      text-[var(--text)]
      hover:text-[var(--primary)]
      hover:bg-[var(--background)]
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (as === "a" && href) {
    return (
      <a 
        href={href} 
        className={classes}
        onMouseEnter={() => {
          // Prefetch link on hover for better performance
          const link = document.createElement('link')
          link.rel = 'prefetch'
          link.href = href
          document.head.appendChild(link)
        }}
      >
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} type={type} disabled={disabled}>
      {children}
    </button>
  )
}

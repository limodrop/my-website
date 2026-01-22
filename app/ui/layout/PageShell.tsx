import { ReactNode } from "react"
import { theme } from "@/app/ui/theme"

interface PageShellProps {
  children: ReactNode
  className?: string
}

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div
      className="w-full min-h-screen"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      <div
        className={`max-w-7xl mx-auto px-6 py-10 ${className}`}
        style={{
          backgroundColor: theme.colors.surface,
          borderRadius: theme.radius.card,
          border: `1px solid ${theme.colors.border}`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

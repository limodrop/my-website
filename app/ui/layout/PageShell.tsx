import { ReactNode } from "react"

interface PageShellProps {
  children: ReactNode
  className?: string
}

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {children}
    </div>
  )
}

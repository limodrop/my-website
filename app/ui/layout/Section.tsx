import { ReactNode } from "react"
import { theme } from "@/app/ui/theme"

interface SectionProps {
  children: ReactNode
  title?: string
  subtitle?: string
  className?: string
}

export function Section({ 
  children, 
  title, 
  subtitle, 
  className = ""
}: SectionProps) {
  return (
    <section className={`w-full mb-12 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-3xl font-semibold mb-2" style={{ color: theme.colors.text }}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg" style={{ color: theme.colors.textMuted }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div
        className="rounded-lg p-6"
        style={{
          backgroundColor: theme.colors.surface,
          border: `1px solid ${theme.colors.border}`,
          boxShadow: theme.shadow.card,
        }}
      >
        {children}
      </div>
    </section>
  )
}

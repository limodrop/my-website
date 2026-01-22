import { ReactNode } from "react"

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
    <section className={`w-full mb-[var(--space-section)] ${className}`}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-3xl font-semibold mb-2 text-[var(--text)]">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-[var(--textMuted)]">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {children}
    </section>
  )
}

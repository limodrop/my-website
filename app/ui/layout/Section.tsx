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
    <section className={`w-full mb-10 sm:mb-[var(--space-section)] ${className}`}>
      {(title || subtitle) && (
        <div className="mb-4 sm:mb-6">
          {title && (
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 text-[var(--text)]">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base lg:text-lg text-[var(--textMuted)]">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {children}
    </section>
  )
}

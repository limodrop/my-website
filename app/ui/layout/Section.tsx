import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  title?: string
  subtitle?: string
  className?: string
  background?: "light" | "dark" | "gradient"
}

export function Section({ 
  children, 
  title, 
  subtitle, 
  className = "",
  background = "light"
}: SectionProps) {
  const bgClasses = {
    light: "bg-white",
    dark: "bg-gray-900 text-white",
    gradient: "bg-gradient-to-br from-black via-gray-900 to-black text-white"
  }

  return (
    <section className={`py-16 px-4 ${bgClasses[background]} ${className}`}>
      <div className="container mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12 space-y-4">
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

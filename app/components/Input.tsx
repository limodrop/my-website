import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, className = "", id, ...props }: InputProps) {
  // Generate a unique ID if not provided
  const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-')}-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label 
          htmlFor={inputId}
          className="text-sm text-[var(--textMuted)]"
        >
          {label}
        </label>
      )}
      <input
        {...props}
        id={inputId}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`
          rounded-md px-3 py-2
          bg-[var(--background)]
          border ${error ? 'border-red-500' : 'border-[var(--border)]'}
          text-[var(--text)]
          outline-none
          focus:border-[var(--primary)]
          transition
          ${className}
        `}
      />
      {error && (
        <span 
          id={`${inputId}-error`}
          className="text-xs text-red-600"
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  )
}

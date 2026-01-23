import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-[var(--textMuted)]">{label}</label>}
      <input
        {...props}
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
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  )
}

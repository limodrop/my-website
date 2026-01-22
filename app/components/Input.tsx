import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-[var(--textMuted)]">{label}</label>}
      <input
        {...props}
        className={`
          rounded-md px-3 py-2
          bg-[var(--background)]
          border border-[var(--border)]
          text-[var(--text)]
          outline-none
          focus:border-[var(--primary)]
          transition
          ${className}
        `}
      />
    </div>
  )
}

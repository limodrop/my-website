import { TextareaHTMLAttributes } from "react"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export function TextArea({ label, className = "", ...props }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-[var(--textMuted)]">{label}</label>}
      <textarea
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

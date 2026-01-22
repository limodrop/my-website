import React from "react";

export function Input({ 
  label, 
  ...props 
}: { 
  label?: string;
  [key: string]: any;
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-[var(--textMuted)]">{label}</label>}
      <input
        {...props}
        className="
          rounded-md px-3 py-2
          bg-[var(--background)]
          border border-[var(--border)]
          text-[var(--text)]
          outline-none
          focus:border-[var(--primary)]
          transition
        "
      />
    </div>
  );
}

export function TextArea({ 
  label, 
  ...props 
}: { 
  label?: string;
  [key: string]: any;
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-[var(--textMuted)]">{label}</label>}
      <textarea
        {...props}
        className="
          rounded-md px-3 py-2
          bg-[var(--background)]
          border border-[var(--border)]
          text-[var(--text)]
          outline-none
          focus:border-[var(--primary)]
          transition
        "
      />
    </div>
  );
}

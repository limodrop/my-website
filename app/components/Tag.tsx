import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span
      className="
        inline-block px-3 py-1 rounded-full text-xs
        bg-[var(--surface)]
        border border-[var(--border)]
        text-[var(--textMuted)]
      "
    >
      {children}
    </span>
  );
}

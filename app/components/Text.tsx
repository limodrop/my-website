import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  muted?: boolean;
}

export default function Text({ children, muted = false }: TextProps) {
  const colorClass = muted ? "text-[var(--textMuted)]" : "text-[var(--text)]";

  return <p className={colorClass}>{children}</p>;
}

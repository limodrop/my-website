import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  muted?: boolean;
  className?: string;
};

export default function Text({ children, muted = false, className = "" }: TextProps) {
  const textClass = muted
    ? `text-[var(--textMuted)] ${className}`
    : `text-[var(--text)] ${className}`;

  return <p className={textClass}>{children}</p>;
}

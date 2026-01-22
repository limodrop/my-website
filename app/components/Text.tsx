import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  muted?: boolean;
  className?: string;
}

export default function Text({ children, muted = false, className = "" }: TextProps) {
  const textColor = muted ? "text-[var(--textMuted)]" : "text-[var(--text)]";
  
  return (
    <p className={`leading-relaxed ${textColor} ${className}`}>
      {children}
    </p>
  );
}

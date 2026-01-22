import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  muted?: boolean;
  className?: string;
}

export default function Text({ children, muted = false, className = "" }: TextProps) {
  const mutedClass = muted ? "text-gray-600 dark:text-gray-400" : "text-[var(--text)]";
  
  return (
    <p className={`${mutedClass} ${className}`}>
      {children}
    </p>
  );
}

import { ReactNode } from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  children: ReactNode;
}

export default function Heading({ level, children }: HeadingProps) {
  const baseClasses = "font-bold text-[var(--text)]";
  
  const sizeClasses = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${baseClasses} ${sizeClasses[level]}`}>
      {children}
    </Tag>
  );
}

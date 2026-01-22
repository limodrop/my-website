import { ReactNode } from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

export default function Heading({ level, children, className = "" }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const styles = {
    1: "text-4xl font-bold mb-4",
    2: "text-3xl font-bold mb-3",
    3: "text-2xl font-semibold mb-3",
    4: "text-xl font-semibold mb-2",
    5: "text-lg font-semibold mb-2",
    6: "text-base font-semibold mb-2",
  };

  return (
    <Tag className={`${styles[level]} ${className}`}>
      {children}
    </Tag>
  );
}

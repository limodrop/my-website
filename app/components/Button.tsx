import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ 
  children, 
  variant = "primary", 
  as = "button",
  href,
  onClick,
  className = "",
  type = "button"
}: ButtonProps) {
  const baseStyles = "inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-200";
  
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
    secondary: "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:opacity-80",
    outline: "border-2 border-[var(--text)] text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--surface)]"
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (as === "a" && href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}

import React from "react";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  [key: string]: any;
}) {
  const base =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-md font-medium transition-all duration-200";

  const variants = {
    primary: `
      bg-[var(--primary)]
      text-white
      hover:bg-[var(--primaryHover)]
      shadow-sm hover:shadow-md
    `,
    secondary: `
      bg-[var(--surface)]
      text-[var(--text)]
      border border-[var(--border)]
      hover:border-[var(--primary)]
      hover:text-[var(--primary)]
    `,
    ghost: `
      text-[var(--text)]
      hover:text-[var(--primary)]
      hover:bg-[var(--background)]
    `,
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

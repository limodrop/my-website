import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  as = "button",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded font-medium transition-all";
  const variantStyles =
    variant === "primary"
      ? "bg-[var(--primary)] text-white hover:opacity-90"
      : "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surfaceHover)]";

  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`;

  if (as === "a" && href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}

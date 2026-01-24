"use client";

interface QuoteButtonProps {
  variant?: "primary" | "white" | "outline";
  children?: React.ReactNode;
  className?: string;
}

export function QuoteButton({ variant = "primary", children, className = "" }: QuoteButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('openQuoteModal'));
  };

  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-colors";
  
  const variantStyles = {
    primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90",
    white: "bg-white text-[var(--primary)] hover:bg-gray-100",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10"
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children || "Get a Quote"}
    </button>
  );
}

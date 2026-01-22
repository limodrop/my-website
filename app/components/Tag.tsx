import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "error";
  onRemove?: () => void;
}

export function Tag({ children, variant = "default", onRemove }: TagProps) {
  const variants = {
    default: "bg-[var(--surface)] border-[var(--border)] text-[var(--text)]",
    primary: "bg-blue-100 border-blue-300 text-blue-800",
    success: "bg-green-100 border-green-300 text-green-800",
    warning: "bg-yellow-100 border-yellow-300 text-yellow-800",
    error: "bg-red-100 border-red-300 text-red-800",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-2
        px-3 py-1 rounded-full text-sm
        border
        ${variants[variant]}
      `}
    >
      {children}
      
      {onRemove && (
        <button
          onClick={onRemove}
          className="
            ml-1 text-xs hover:opacity-70 transition
            font-bold
          "
          aria-label="Remove tag"
        >
          ×
        </button>
      )}
    </span>
  );
}

import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  action,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left";

  return (
    <div className={`mb-8 sm:mb-10 lg:mb-12 ${alignClass}`}>
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--text)] mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base lg:text-lg text-[var(--textMuted)] max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
        {action && <div className="flex-shrink-0">{action}</div>}
      </div>
    </div>
  );
}

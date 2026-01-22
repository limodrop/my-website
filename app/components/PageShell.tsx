import { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {children}
    </div>
  );
}

// Block renderer for layout system
import { HomepageBlock } from "@/lib/layout/homepageLayout";

interface BlockRendererProps {
  block: HomepageBlock;
}

export function BlockRenderer({ block }: BlockRendererProps) {
  // Simple block renderer - can be extended later
  return (
    <div className="p-4 border rounded" style={{ 
      backgroundColor: "var(--background)",
      borderColor: "var(--border)"
    }}>
      <div className="text-sm font-medium" style={{ color: "var(--text)" }}>
        Block Type: {block.type}
      </div>
      {block.props && (
        <div className="text-xs mt-2" style={{ color: "var(--text-secondary)" }}>
          Props: {JSON.stringify(block.props)}
        </div>
      )}
    </div>
  );
}

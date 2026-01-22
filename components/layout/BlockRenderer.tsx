// Block renderer for layout system
import { HomepageBlock } from "@/lib/layout/homepageLayout";

interface BlockRendererProps {
  block: HomepageBlock;
}

export function BlockRenderer({ block }: BlockRendererProps) {
  // Simple block renderer - can be extended later
  return (
    <div className="p-4 border rounded bg-gray-50">
      <div className="text-sm font-medium">Block Type: {block.type}</div>
      {block.props && (
        <div className="text-xs text-gray-600 mt-2">
          Props: {JSON.stringify(block.props)}
        </div>
      )}
    </div>
  );
}

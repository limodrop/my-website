interface Column {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
}

export function Table({ columns, data }: TableProps) {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <table className="w-full border-collapse min-w-[600px] sm:min-w-full">
        <thead>
          <tr className="bg-[var(--surface)] border-b border-[var(--border)]">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`
                  px-3 py-2 sm:px-4 sm:py-3 text-[var(--textMuted)] text-xs sm:text-sm font-semibold
                  text-${col.align || "left"}
                `}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="
                border-b border-[var(--border)]
                hover:bg-[var(--background)]
                transition
              "
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`
                    px-3 py-2 sm:px-4 sm:py-3 text-[var(--text)] text-xs sm:text-sm
                    text-${col.align || "left"}
                  `}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {data.length === 0 && (
        <div className="text-center py-8">
          <p className="text-[var(--textMuted)]">No data available</p>
        </div>
      )}
    </div>
  );
}

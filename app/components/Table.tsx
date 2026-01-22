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
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[var(--surface)] border-b border-[var(--border)]">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`
                  px-4 py-3 text-[var(--textMuted)] text-sm font-semibold
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
                    px-4 py-3 text-[var(--text)]
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

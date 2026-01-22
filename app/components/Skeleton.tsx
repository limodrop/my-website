interface SkeletonProps {
  className?: string
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`
        animate-pulse bg-[var(--border)]
        rounded-md ${className}
      `}
    />
  )
}

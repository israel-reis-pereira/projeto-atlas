import type { LucideIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  description: string
  icon: LucideIcon
  iconColor?: string
}

export function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  iconColor = 'text-[#2F6B4F]',
}: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-[#E3E9E5] bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-[#647067]">
            {title}
          </p>

          <p className="mt-2 text-3xl font-bold tracking-tight text-[#17211B]">
            {value}
          </p>

          <p className="mt-1 text-xs text-[#7A847D]">
            {description}
          </p>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF5F0] ${iconColor}`}
        >
          <Icon size={21} strokeWidth={2} />
        </div>
      </div>
    </div>
  )
}

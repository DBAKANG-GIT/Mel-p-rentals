import { ReactNode } from 'react'

interface StayTypeProps {
  icon: ReactNode
  title: string
  description: string
  iconColor: string
}

export function StayType({ icon, title, description, iconColor }: StayTypeProps) {
  return (
    <div className="flex items-start space-x-4 mb-6">
      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${iconColor}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#101828] mb-1">{title}</h3>
        <p className="text-sm text-[#667085]">{description}</p>
      </div>
    </div>
  )
}


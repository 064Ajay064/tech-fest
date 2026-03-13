'use client'
import { Day } from '../types/schedule.types'

interface DaySelectorProps {
  activeDay: Day
  onDayChange: (day: Day) => void
}

export default function DaySelector({ activeDay, onDayChange }: DaySelectorProps) {
  const days: { id: Day; date: string }[] = [
    { id: 'DAY 01', date: 'MARCH 14' },
    { id: 'DAY 02', date: 'MARCH 15' }
  ]

  return (
    <div className="flex justify-center gap-6 mb-20 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
      {days.map((day) => (
        <button
          key={day.id}
          onClick={() => onDayChange(day.id)}
          className={`group flex flex-col items-center min-w-[160px] p-6 rounded-3xl transition-all duration-500 border-2 ${
            activeDay === day.id
              ? 'bg-primary border-primary text-white shadow-[0_0_30px_rgba(152,6,249,0.5)] scale-105'
              : 'glass border-white/5 text-gray-500 hover:border-primary/50 hover:text-white'
          }`}
        >
          <span className="text-[10px] font-black tracking-[0.3em] mb-1 opacity-70">
            {day.date}
          </span>
          <span className="text-2xl font-black tracking-tight">{day.id}</span>
          
          {/* Active Indicator */}
          {activeDay === day.id && (
            <div className="mt-3 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
          )}
        </button>
      ))}
    </div>
  )
}

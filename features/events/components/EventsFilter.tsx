'use client'
import { useState } from 'react'

const categories = [
  'All Events',
  'Hackathons',
  'Programming',
  'Robotics',
  'Workshops',
  'Gaming'
]

export default function EventsFilter({ onFilterChange }: { onFilterChange: (category: string) => void }) {
  const [active, setActive] = useState('All Events')

  const handleSelect = (category: string) => {
    setActive(category)
    onFilterChange(category)
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-20 px-4 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleSelect(cat)}
          className={`px-8 py-3 rounded-full text-xs font-black tracking-widest transition-all duration-500 border-2 ${
            active === cat 
              ? 'bg-primary border-primary text-white shadow-[0_0_20px_rgba(152,6,249,0.5)] scale-105' 
              : 'glass border-white/5 text-gray-400 hover:border-primary/50 hover:text-white'
          }`}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

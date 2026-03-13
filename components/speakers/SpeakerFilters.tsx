'use client'
import { useState } from 'react'

const domains = [
  'All Domains',
  'Artificial Intelligence',
  'Cybersecurity',
  'Web3 & Blockchain',
  'Robotics',
  'Data Science'
]

export default function SpeakerFilters({ onFilterChange }: { onFilterChange: (domain: string) => void }) {
  const [active, setActive] = useState('All Domains')

  const handleSelect = (domain: string) => {
    setActive(domain)
    onFilterChange(domain)
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-20 px-4 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
      {domains.map((domain) => (
        <button
          key={domain}
          onClick={() => handleSelect(domain)}
          className={`px-6 py-3 rounded-xl text-xs font-black tracking-widest transition-all duration-500 border-2 ${
            active === domain 
              ? 'bg-primary text-white border-primary shadow-[0_0_20px_rgba(139,92,246,0.5)]' 
              : 'glass border-white/5 text-gray-400 hover:border-primary/50 hover:text-white'
          }`}
        >
          {domain.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

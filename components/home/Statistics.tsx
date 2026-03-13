'use client'
import { useState, useEffect } from 'react'

export default function Statistics() {
  const stats = [
    { icon: '🎮', value: 40, label: 'UNIQUE EVENTS', suffix: '+' },
    { icon: '💰', value: 2, label: 'LAKHS PRIZE POOL', suffix: 'L+' },
    { icon: '👥', value: 1500, label: 'PARTICIPANTS', suffix: '+' }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, delay }: { stat: any, delay: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = stat.value
    if (start === end) return

    let totalMilestones = 50
    let duration = 2000
    let increment = end / totalMilestones
    let timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, duration / totalMilestones)

    return () => clearInterval(timer)
  }, [stat.value])

  return (
    <div
      className="glass p-10 rounded-3xl text-center shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-500 group animate-fadeInUp"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-5xl mb-6 group-hover:animate-bounce transition-all">{stat.icon}</div>
      <div className="text-5xl font-black text-white mb-3 tracking-tighter">
        {count}{stat.suffix}
      </div>
      <div className="text-primary-light uppercase tracking-[0.2em] text-xs font-black">{stat.label}</div>
    </div>
  )
}
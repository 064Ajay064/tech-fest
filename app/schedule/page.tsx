'use client'
import { useState } from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import { AnimatedBackground } from '@/features/events' // Reusing the high-quality bk
import { 
  ScheduleHero, 
  DaySelector, 
  Timeline, 
  ScheduleCTA, 
  scheduleData,
  Day
} from '@/features/schedule'

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState<Day>('DAY 01')

  return (
    <div className="min-h-screen text-white selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Cinematic Background */}
      <AnimatedBackground />

      <Header />
      
      <main>
        <ScheduleHero />
        
        <DaySelector 
          activeDay={activeDay} 
          onDayChange={(day) => setActiveDay(day)} 
        />
        
        <Timeline items={scheduleData[activeDay]} />
        
        <ScheduleCTA />
      </main>

      <Footer />
    </div>
  )
}
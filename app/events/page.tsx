'use client'
import { useState } from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import {
  EventsHero,
  EventsGrid,
  AnimatedBackground
} from '@/features/events'
import {
  DaySelector,
  Timeline,
  ScheduleCTA,
  scheduleData,
  Day
} from '@/features/schedule'

export default function EventsPage() {
  const [activeDay, setActiveDay] = useState<Day>('DAY 01')

  return (
    <div className="min-h-screen text-white selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Cinematic Background Layer */}
      <AnimatedBackground />

      {/* Global Header */}
      <Header />
      
      <main>
        {/* Event Discovery Section */}
        <EventsHero />
        <EventsGrid />

        {/* Unified Schedule Section */}
        <section id="schedule" className="pt-24 border-t border-white/5 bg-background-deep/50">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tight">
              EVENT <span className="text-primary italic">TIMELINE</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto px-4">
              Switch between days to see the full sequence of innovation and competition.
            </p>
          </div>

          <DaySelector 
            activeDay={activeDay} 
            onDayChange={(day: Day) => setActiveDay(day)} 
          />
          
          <Timeline items={scheduleData[activeDay]} />
          
          <ScheduleCTA />
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}
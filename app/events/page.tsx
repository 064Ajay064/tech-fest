'use client'

import { useState } from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import PageTransition from '@/components/shared/PageTransition'
import ScrollReveal from '@/components/shared/ScrollReveal'
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
  Day,
  ScheduleHero
} from '@/features/schedule'

export default function EventsPage() {
  const [activeDay, setActiveDay] = useState<Day>('DAY 01')

  return (
    <div className="min-h-screen bg-background-deep text-white selection:bg-primary selection:text-white">
      {/* Cinematic Background Layer */}
      <AnimatedBackground />

      {/* Global Header */}
      <Header />
      
      <main className="pt-20 overflow-hidden">
        <PageTransition>
          {/* Event Discovery Section */}
          <EventsHero />
          
          <ScrollReveal delay={0.2}>
            <div className="py-10">
              <EventsGrid />
            </div>
          </ScrollReveal>

          {/* Unified Schedule Section */}
          <ScrollReveal delay={0.3}>
            <section id="schedule" className="pt-24 border-t border-white/5">
              <ScheduleHero />
              
              <DaySelector 
                activeDay={activeDay} 
                onDayChange={(day: Day) => setActiveDay(day)} 
              />
              
              <Timeline items={scheduleData[activeDay]} />
              
              <ScheduleCTA />
            </section>
          </ScrollReveal>
        </PageTransition>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}
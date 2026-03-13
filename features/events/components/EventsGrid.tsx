'use client'
import { useState } from 'react'
import { events } from '../mock/events.mock'
import EventCard from './EventCard'
import SuggestEventCard from './SuggestEventCard'
import EventsFilter from './EventsFilter'
import Container from '@/components/shared/Container'

export default function EventsGrid() {
  const [filter, setFilter] = useState('All Events')

  const filteredEvents = filter === 'All Events' 
    ? events 
    : events.filter(e => e.category === filter)

  return (
    <section className="pb-32 px-4 relative z-10" id="events-grid">
      <EventsFilter onFilterChange={setFilter} />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}

          {/* Special Last Card */}
          <SuggestEventCard />
        </div>
      </Container>

      {/* Grid decorative element */}
      <div className="absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </section>
  )
}

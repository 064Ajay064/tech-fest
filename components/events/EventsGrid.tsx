import Image from 'next/image'
import { events } from '@/lib/data'
import Button from '../shared/Button'

export default function EventsGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-deep/50" id="events">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tighter">
              BATTLE OF <span className="text-primary italic">BRAINS</span>
            </h2>
            <p className="text-gray-400 font-medium">
              Choose your arena and prove your skills. Compete with the best minds from across the country.
            </p>
          </div>
          <Button variant="outline">VIEW ALL EVENTS</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id}
              className="group glass rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all duration-500 animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 glass-purple px-4 py-1 rounded-full text-[10px] font-black tracking-widest text-white">
                  {event.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary-light text-xs font-bold tracking-widest">{event.date}</span>
                  <span className="text-accent text-xs font-bold">{event.prize}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-2">
                  {event.description}
                </p>
                <Button variant="secondary" className="w-full py-4 text-xs tracking-widest font-black border-white/5 group-hover:border-primary/30">
                  REGISTER NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
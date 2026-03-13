import { Event } from '../types/event.types'
import Button from '@/components/shared/Button'

export default function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <div
      className="group relative h-full animate-fadeInUp"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow Effect Background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[2.5rem] blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

      {/* Main Glass Card */}
      <div className="relative h-full glass rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-primary/20">

        {/* Top: Event Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-transparent to-transparent opacity-90"></div>

          {/* Badge */}
          {event.badge && (
            <div className="absolute top-6 left-6 glass-purple px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest text-primary-light border border-primary/20">
              {event.badge.toUpperCase()}
            </div>
          )}

          {/* Icon */}
          <div className="absolute bottom-6 left-8 text-4xl transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
            {event.icon === 'terminal' ? '💻' :
              event.icon === 'code' ? '⌨️' :
                event.icon === 'box' ? '🤖' :
                  event.icon === 'cpu' ? '🧠' :
                    event.icon === 'shield' ? '🛡️' :
                      event.icon === 'target' ? '🎯' : '🔥'}
          </div>
        </div>

        {/* Middle: Content */}
        <div className="p-8 flex-grow">
          <h3 className="text-3xl font-black text-white mb-3 tracking-tighter group-hover:text-primary-light transition-colors">
            {event.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium italic">
            "{event.description}"
          </p>

          {/* Info Row */}
          <div className="flex items-center gap-6 pt-4 border-t border-white/5">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-primary-light tracking-widest uppercase mb-1">Duration</span>
              <span className="text-white text-sm font-bold">{event.duration}</span>
            </div>
            <div className="w-px h-8 bg-white/5"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-primary-light tracking-widest uppercase mb-1">Team Size</span>
              <span className="text-white text-sm font-bold">{event.teamSize}</span>
            </div>
          </div>
        </div>

        {/* Bottom: Action */}
        <div className="p-8 pt-0 mt-auto">
          <Button variant="outline" className="w-full py-4 text-xs tracking-[0.2em] font-black border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10">
            VIEW DETAILS
          </Button>
        </div>
      </div>
    </div>
  )
}

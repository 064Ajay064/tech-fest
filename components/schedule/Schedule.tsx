'use client'

import { schedule } from '@/lib/data'

export default function Schedule() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" id="schedule">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tighter italic uppercase">
            FESTIVAL <span className="text-primary drop-shadow-[0_0_30px_rgba(152,6,249,0.5)]">TIMELINE</span>
          </h2>
          <p className="text-gray-400 font-medium italic max-w-xl mx-auto">
            The multi-dimensional roadmap of innovation. Track every step of the techfest evolution.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line - Centered on ALL screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent opacity-30"></div>

          <div className="space-y-16">
            {schedule.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center animate-fadeInUp ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Content */}
                <div className="md:w-1/2 w-full px-4 md:px-0">
                  <div className={`glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden text-center ${
                    index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
                  }`}>
                    {/* Inner Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-primary pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4 relative z-10">
                       <div className="glass-purple px-4 py-1.5 rounded-full text-[10px] font-black text-primary-light tracking-widest uppercase shadow-lg">
                         {item.time}
                       </div>
                       <div className="hidden md:block w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(6,249,249,0.8)]"></div>
                       <span className="text-[9px] text-gray-500 font-black uppercase tracking-[0.2em]">{item.type}</span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors tracking-tighter uppercase italic">
                      {item.event}
                    </h3>
                    <p className="text-gray-400 text-sm mt-3 font-medium italic flex flex-col md:flex-row items-center justify-center gap-2">
                       <span className="text-primary opacity-50 block md:inline font-black text-[10px] tracking-widest">LOCATION //</span> {item.location}
                    </p>
                  </div>
                </div>

                {/* Dot - Centered on ALL screens */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[-12px] md:top-auto w-6 h-6 rounded-xl bg-background-deep border-4 border-primary z-10 shadow-[0_0_20px_rgba(152,6,249,0.6)] group-hover:rotate-45 transition-transform duration-500"></div>

                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

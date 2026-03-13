import { schedule } from '@/lib/data'

export default function Schedule() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" id="schedule">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tighter">
            FESTIVAL <span className="text-primary italic">TIMELINE</span>
          </h2>
          <p className="text-gray-400 font-medium">Mark your calendars. Here's what's happening and when.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent opacity-30"></div>

          <div className="space-y-12">
            {schedule.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Content */}
                <div className="md:w-1/2 w-full pl-8 md:pl-0">
                  <div className={`glass p-6 rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-300 group ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="flex items-center gap-3 mb-2">
                       <span className="text-primary font-black text-sm tracking-widest">{item.time}</span>
                       <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                       <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{item.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.event}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.location}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background-deep border-4 border-primary z-10 shadow-[0_0_15px_rgba(139,92,246,0.6)]"></div>

                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

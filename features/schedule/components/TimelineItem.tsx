import { ScheduleItem } from '../types/schedule.types'

export default function TimelineItem({ item, index }: { item: ScheduleItem; index: number }) {
  return (
    <div className="relative pl-12 sm:pl-20 mb-12 last:mb-0 group animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
      {/* Timeline Node */}
      <div className="absolute left-0 top-0 w-10 h-10 sm:w-14 sm:h-14 glass-purple rounded-full flex items-center justify-center text-xl sm:text-2xl z-20 border border-primary/30 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(152,6,249,0.5)] transition-all duration-500">
        {item.icon}
      </div>

      {/* Connection Line (Visual continuation) */}
      <div className="absolute left-[19px] sm:left-[27px] top-10 sm:top-14 bottom-[-48px] w-0.5 bg-gradient-to-b from-primary/50 to-transparent z-10 hidden group-last:hidden sm:block"></div>

      {/* Main Glass Card */}
      <div className="glass rounded-[2rem] p-8 sm:p-10 border border-white/5 transition-all duration-500 group-hover:translate-x-2 group-hover:border-primary/20 group-hover:shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            {/* Category Badge */}
            <span className="glass-purple px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest text-primary-light border border-primary/20 uppercase">
              {item.category}
            </span>
            
            {/* Time & Location */}
            <div className="flex items-center gap-4 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-primary-light">🕒</span> {item.time}
              </span>
              <span className="hidden sm:inline text-white/10">|</span>
              <span className="flex items-center gap-1.5">
                <span className="text-primary-light">📍</span> {item.location}
              </span>
            </div>
          </div>

          {/* Top Badge (Optional) */}
          {item.badge && (
            <span className="self-start lg:self-center px-4 py-1.5 bg-accent/20 text-accent rounded-full text-[10px] font-black tracking-widest animate-pulse border border-accent/30">
              {item.badge.toUpperCase()}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-3xl font-black text-white mb-3 tracking-tight group-hover:text-primary-light transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl font-medium">
          {item.description}
        </p>

        {/* Extra Info Row */}
        {(item.prizePool || item.mentors || item.teams) && (
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/5">
            {item.prizePool && (
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-primary-light tracking-widest uppercase mb-1">Prize Pool</span>
                <span className="text-white text-base font-bold">₹{item.prizePool}</span>
              </div>
            )}
            {item.teams && (
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-primary-light tracking-widest uppercase mb-1">Total Teams</span>
                <span className="text-white text-base font-bold">{item.teams} Slots</span>
              </div>
            )}
            {item.mentors && (
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-primary-light tracking-widest uppercase mb-1">Mentors</span>
                <div className="flex -space-x-2 mt-1">
                  {[1, 2].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background-deep bg-white/10 flex items-center justify-center text-[10px] font-bold">
                      👤
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

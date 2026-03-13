import Container from '@/components/shared/Container'

export default function ScheduleHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <Container className="relative z-10 text-center">
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 glass-purple rounded-full border border-primary/30 text-primary-light text-xs font-black tracking-[0.3em] mb-10 animate-fadeInUp">
          <span className="text-lg">📅</span>
          EVENT TIMELINE
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-none animate-fadeInUp" style={{ animationDelay: '100ms' }}>
          FULL <span className="text-primary italic drop-shadow-[0_0_20px_rgba(152,6,249,0.3)]">SCHEDULE</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 text-lg sm:text-2xl font-medium max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          Experience two days of intensive innovation, coding battles, and futuristic workshops. 
          Sync your calendar with the official SNS Techfest timeline.
        </p>
      </Container>
    </section>
  )
}

import Button from '@/components/shared/Button'
import Container from '@/components/shared/Container'

export default function EventsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <Container className="relative z-10 text-center">
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 glass-purple rounded-full border border-primary/30 text-primary-light text-xs font-black tracking-[0.3em] mb-10 animate-fadeInUp">
          <span className="text-lg">🚀</span>
          FUTURE TECH IS HERE
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-none animate-fadeInUp" style={{ animationDelay: '100ms' }}>
          EXPLORE THE<br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(152,6,249,0.5)] italic">
            MULTIVERSE
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 text-lg sm:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-12 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          Dive into the most prestigious technical arena where innovation meets execution. 
          Compete with the best minds in the country.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp" style={{ animationDelay: '300ms' }}>
          <Button variant="primary" className="px-12 py-5 text-sm tracking-widest font-black uppercase">
            REGISTER NOW
          </Button>
          <Button variant="outline" className="px-12 py-5 text-sm tracking-widest font-black uppercase border-white/20">
            VIEW ROADMAP
          </Button>
        </div>
      </Container>
    </section>
  )
}

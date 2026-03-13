import Button from '../shared/Button'

export default function DetailedSpeakersHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Parallax Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[15%] w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Wireframe Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 glass-purple rounded-full border border-primary/30 text-primary-light text-xs font-black tracking-[0.3em] mb-10 animate-fadeInUp">
          <span className="text-lg">✨</span>
          THE VISIONARIES
        </div>

        {/* Main Title */}
        <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black text-white mb-8 tracking-[0.1em] leading-none animate-fadeInUp" style={{ animationDelay: '100ms' }}>
          MEET THE<br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
            FUTURE
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg sm:text-2xl font-medium max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          Join world-renowned engineers, architects, and innovators as they unveil the future of artificial intelligence, decentralized systems, and intelligent automation.
        </p>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce opacity-30">
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent mx-auto"></div>
        </div>
      </div>

      {/* Abstract Tech Elements */}
      <div className="absolute top-1/2 left-0 w-24 h-24 border border-primary/20 rounded-full animate-float opacity-20"></div>
      <div className="absolute bottom-1/4 right-0 w-40 h-40 border-2 border-accent/20 rotate-45 animate-float opacity-10" style={{ animationDelay: '1.5s' }}></div>
    </section>
  )
}

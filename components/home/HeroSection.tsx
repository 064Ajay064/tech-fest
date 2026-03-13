import Button from '@/components/shared/Button'
import CountdownTimer from './CountdownTimer'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 glass-purple rounded-full text-primary-light text-sm font-bold mb-8 animate-fadeInUp">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          REGISTRATION OPEN FOR 2K26
        </div>
 
        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-white mb-6 tracking-tighter animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            SNS TECHFEST
          </span>
          <br />
          <span className="text-primary drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">2K26</span>
        </h1>
 
        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium tracking-wide animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          THE ULTIMATE JUNCTION OF INNOVATION, CODING, AND ROBOTICS. JOIN THE LEAGUE OF TECH ENTHUSIASTS.
        </p>
 
        {/* Countdown Timer Wrapper */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <CountdownTimer />
        </div>
 
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <Button variant="primary" className="w-full sm:w-auto px-10 py-4 text-lg">
            REGISTER NOW
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto px-10 py-4 text-lg border-white/10">
            VIEW ALL EVENTS
          </Button>
        </div>
      </div>
 
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <span className="text-2xl text-white">↓</span>
      </div>
    </section>
  )
}
import Container from '@/components/shared/Container'
import Button from '@/components/shared/Button'

export default function ScheduleCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Container className="relative z-10">
        <div className="glass p-12 sm:p-20 rounded-[4rem] text-center border border-white/5 relative group bg-gradient-to-br from-primary/5 to-transparent">
          {/* Animated Glow */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl"></div>
          
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tighter animate-fadeInUp">
            REGISTRATION <span className="text-primary italic drop-shadow-[0_0_15px_rgba(152,6,249,0.3)]">CLOSING SOON!</span>
          </h2>
          
          <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto mb-12 leading-relaxed animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            All workshops and flagship competitions require pre-registration via the official mobile app. 
            Don't miss the chance to be part of the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <Button variant="primary" className="px-10 py-5 text-xs tracking-[0.2em] font-black uppercase">
              DOWNLOAD PDF SCHEDULE
            </Button>
            <Button variant="outline" className="px-10 py-5 text-xs tracking-[0.2em] font-black uppercase border-white/10 group-hover:border-primary/50">
              GET MOBILE APP
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

import Button from '@/components/shared/Button'

export default function AboutSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-deep/30" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Text */}
          <div className="animate-fadeInUp text-center lg:text-left">
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tighter leading-none italic">
              WHERE <span className="text-primary italic">INNOVATION</span> MEETS NEXUS
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              SNS Techfest 2K26 is more than just a symposium; it's a high-octane arena for the brightest minds in engineering. 
              Designed with a futuristic glassmorphism aesthetic, our platform bridges the gap between today's learning and tomorrow's technology.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <Button variant="outline" className="border-primary/30 text-primary-light">READ MANIFESTO</Button>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="flex justify-center animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass p-16 rounded-[3rem] border-white/5 shadow-2xl flex flex-col items-center">
                <div className="text-9xl mb-8 animate-float">🤖</div>
                <div className="h-2 w-32 bg-primary/30 rounded-full blur-sm mb-6"></div>
                <p className="text-primary-light font-black tracking-[0.4em] text-[10px]">CORE ENGINE ACTIVATED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
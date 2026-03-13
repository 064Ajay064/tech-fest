import Button from '../shared/Button'

export default function JoinStageCTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="glass p-12 sm:p-20 rounded-[4rem] text-center border-white/5 relative group">
          {/* Animated Highlight Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:w-full transition-all duration-1000"></div>
          
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tighter uppercase animate-fadeInUp">
            WANT TO <span className="text-primary italic drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">JOIN THE STAGE?</span>
          </h2>
          
          <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto mb-12 leading-relaxed animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            We are still accepting applications for lightning talks and workshop sessions. Share your innovations with thousands of tech enthusiasts.
          </p>

          <div className="flex justify-center animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <button className="group relative bg-primary px-12 py-5 rounded-2xl text-white font-black tracking-[0.2em] text-sm overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              <span className="relative z-10">APPLY AS SPEAKER</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

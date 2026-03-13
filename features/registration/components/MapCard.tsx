export default function MapCard() {
  return (
    <div className="glass-purple p-2 rounded-[2.5rem] mt-12 group overflow-hidden border border-white/5 shadow-2xl relative">
      <div className="relative h-[400px] w-full rounded-[2.2rem] overflow-hidden">
        {/* Mock Map Background */}
        <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8">
          <div className="absolute inset-0 opacity-20 grayscale scale-125 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-4xl text-accent mb-6 animate-pulse">
              📍
            </div>
            <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
              Interactive Map <span className="text-accent italic">Location</span>
            </h3>
            <p className="text-gray-400 text-sm font-medium mb-8">
              Coimbatore, TN, India
            </p>
            
            <button className="glass px-8 py-4 rounded-xl border border-accent/30 text-accent font-black tracking-widest uppercase text-xs hover:bg-accent hover:text-background-deep transition-all duration-300 flex items-center gap-2">
              <span>Get Directions</span>
              <span>↗️</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Corner Glow */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 blur-[60px] rounded-full"></div>
    </div>
  )
}

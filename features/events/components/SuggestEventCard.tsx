export default function SuggestEventCard() {
  return (
    <div className="relative group h-full animate-fadeInUp" style={{ animationDelay: '600ms' }}>
      <div className="relative h-full bg-white/5 border-2 border-dashed border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-2 cursor-pointer">

        {/* Plus Icon */}
        <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-4xl text-primary-light mb-8 group-hover:scale-110 group-hover:rotate-90 transition-transform duration-500">
          +
        </div>

        <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">
          Suggest an <span className="text-primary italic">Event</span>
        </h3>

        <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-[200px]">
          Have a unique idea? Share it with us and lead the innovation.
        </p>

        {/* Decorative Particles */}
        <div className="absolute top-10 right-10 w-2 h-2 bg-primary/20 rounded-full group-hover:translate-x-4 transition-transform duration-700"></div>
        <div className="absolute bottom-10 left-10 w-2 h-2 bg-accent/20 rounded-full group-hover:-translate-x-4 transition-transform duration-700"></div>
      </div>
    </div>
  )
}

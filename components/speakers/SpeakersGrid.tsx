import { speakers } from '@/lib/data'

export default function SpeakersGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-deep" id="speakers">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tighter">
            GUEST <span className="text-primary italic">SPEAKERS</span>
          </h2>
          <p className="text-gray-400 font-medium">Learn from the visionaries shaping the future of technology.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.id}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Speaker Card */}
              <div className="glass p-4 rounded-[2.5rem] overflow-hidden transition-all duration-500 group-hover:shadow-primary/20 group-hover:-translate-y-2">
                <div className="relative h-80 w-full overflow-hidden rounded-[2rem]">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-black text-white group-hover:text-primary-light transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-primary-light text-xs font-bold tracking-[0.2em] mt-1 mb-2">
                    {speaker.designation.toUpperCase()}
                  </p>
                  <p className="text-gray-500 text-sm font-medium italic">
                    {speaker.organization}
                  </p>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/10 blur-2xl rounded-full group-hover:bg-primary/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
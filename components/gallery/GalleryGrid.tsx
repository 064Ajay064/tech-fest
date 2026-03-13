import { gallery } from '@/lib/data'

export default function GalleryGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-deep/50" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tighter">
            MEMORIES IN <span className="text-primary italic">MOTION</span>
          </h2>
          <p className="text-gray-400 font-medium">Chimps reaching for the stars. Highlights from our previous chapters.</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {gallery.map((image, index) => (
            <div 
              key={image.id}
              className="relative group overflow-hidden rounded-3xl animate-fadeInUp break-inside-avoid"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background-deep/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold tracking-widest text-xs">{image.title.toUpperCase()}</p>
              </div>
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 rounded-3xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
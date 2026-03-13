import { Workshop } from '@/types/workshop.types'

interface WorkshopCardProps {
  workshop: Workshop
  onClick: () => void
  index: number
}

export default function WorkshopCard({ workshop, onClick, index }: WorkshopCardProps) {
  const progressPercentage = (workshop.registered / workshop.capacity) * 100
  const isAlmostFull = progressPercentage > 80

  return (
    <div
      className="bg-white/5 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-fadeInUp cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
    >
      <div className="mb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
            {workshop.title}
          </h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            workshop.level === 'Beginner' ? 'bg-green-500/20 text-green-300' :
            workshop.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
            'bg-red-500/20 text-red-300'
          }`}>
            {workshop.level}
          </span>
        </div>
        <p className="text-purple-300 font-medium">{workshop.instructor}</p>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-400">{workshop.date}</p>
        <p className="text-sm text-gray-400">{workshop.time}</p>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
        {workshop.description}
      </p>

      {/* Capacity Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-400">Capacity</span>
          <span className={`font-medium ${isAlmostFull ? 'text-red-400' : 'text-green-400'}`}>
            {workshop.registered}/{workshop.capacity}
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              isAlmostFull ? 'bg-red-500' : 'bg-purple-500'
            }`}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {workshop.tags.slice(0, 3).map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 px-6 rounded-lg font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 transition-all duration-300 neon-glow">
        Register for Workshop
      </button>
    </div>
  )
}
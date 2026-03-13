import { Workshop } from '@/types/workshop.types'

interface WorkshopModalProps {
  workshop: Workshop | null
  isOpen: boolean
  onClose: () => void
}

export default function WorkshopModal({ workshop, isOpen, onClose }: WorkshopModalProps) {
  if (!isOpen || !workshop) return null

  const progressPercentage = (workshop.registered / workshop.capacity) * 100

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-gray-900/95 backdrop-blur-md border border-purple-500/30 rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-purple-500/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-white">{workshop.title}</h2>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              workshop.level === 'Beginner' ? 'bg-green-500/20 text-green-300' :
              workshop.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
              'bg-red-500/20 text-red-300'
            }`}>
              {workshop.level}
            </span>
          </div>
          <p className="text-purple-300 text-lg font-medium">{workshop.instructor}</p>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Schedule</h3>
            <p className="text-gray-300">{workshop.date}</p>
            <p className="text-gray-300">{workshop.time}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Capacity</h3>
            <div className="flex items-center gap-2">
              <span className="text-gray-300">{workshop.registered}/{workshop.capacity} registered</span>
              <div className="flex-1 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
          <p className="text-gray-300 leading-relaxed">{workshop.description}</p>
        </div>

        {/* Prerequisites */}
        {workshop.prerequisites && workshop.prerequisites.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Prerequisites</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {workshop.prerequisites.map((prereq, index) => (
                <li key={index}>{prereq}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-2">Topics Covered</h3>
          <div className="flex flex-wrap gap-2">
            {workshop.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 px-6 rounded-lg font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 transition-all duration-300 neon-glow">
            Register for Workshop
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 border border-purple-500/50 text-purple-300 rounded-lg font-semibold hover:bg-purple-500/20 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
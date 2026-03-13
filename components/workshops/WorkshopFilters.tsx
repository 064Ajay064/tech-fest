interface WorkshopFiltersProps {
  categories: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export default function WorkshopFilters({ categories, activeFilter, onFilterChange }: WorkshopFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeFilter === filter
              ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-500/50 scale-105'
              : 'bg-white/5 backdrop-blur-md border border-purple-500/30 text-gray-300 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-white'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
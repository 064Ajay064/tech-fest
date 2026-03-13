'use client'

import { useState } from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import { useWorkshops } from '@/hooks/useWorkshops'
import { Workshop } from '@/types/workshop.types'
import WorkshopFilters from '@/components/workshops/WorkshopFilters'
import WorkshopCard from '@/components/workshops/WorkshopCard'
import WorkshopModal from '@/components/workshops/WorkshopModal'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

export default function Workshops() {
  const { workshops, loading, activeFilter, setActiveFilter, categories } = useWorkshops()
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleWorkshopClick = (workshop: Workshop) => {
    setSelectedWorkshop(workshop)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedWorkshop(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white relative overflow-hidden">
      <Header />
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-4xl opacity-20 animate-float">💻</div>
        <div className="absolute top-40 right-32 text-3xl opacity-15 animate-pulse">🔗</div>
        <div className="absolute bottom-32 left-1/4 text-5xl opacity-10 animate-float delay-500">🛡️</div>
        <div className="absolute bottom-20 right-20 text-4xl opacity-20 animate-pulse delay-700">⚡</div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-purple-500/50 rounded-full text-purple-300 mb-8 animate-pulse">
              Event Dates: March 15-20, 2026
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
              Unlock the{' '}
              <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent animate-pulse">
                Future
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join hands-on technical workshops led by industry experts and technology pioneers.
              Master cutting-edge skills and unlock your potential in the world of technology.
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <WorkshopFilters
              categories={categories}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>
        </section>

        {/* Workshop Cards Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <LoadingSpinner />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workshops.map((workshop, index) => (
                  <WorkshopCard
                    key={workshop.id}
                    workshop={workshop}
                    onClick={() => handleWorkshopClick(workshop)}
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Bulk Registration CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-purple-500/30 rounded-xl p-8 text-center shadow-lg shadow-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Level Up Your Skills?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Register for multiple workshops and save time. Get access to exclusive sessions,
                networking opportunities, and certification upon completion.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 px-8 rounded-lg font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 transition-all duration-300 neon-glow">
                  Register for Multiple Workshops
                </button>
                <button className="border-2 border-purple-500 text-purple-300 py-4 px-8 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                  View Schedule PDF
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <WorkshopModal
        workshop={selectedWorkshop}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <Footer />
    </div>
  )
}
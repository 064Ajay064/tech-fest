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
import PageTransition from '@/components/shared/PageTransition'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { AnimatedBackground } from '@/features/events'

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
    <div className="min-h-screen bg-background-deep text-white relative selection:bg-primary selection:text-white overflow-x-hidden">
      <AnimatedBackground />
      <Header />

      <main className="relative z-10 pt-20">
        <PageTransition>
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal delay={0.1}>
                {/* Badge */}
                <div className="inline-block px-6 py-3 glass-purple border border-primary/30 rounded-full text-primary-light mb-8 uppercase tracking-widest text-[10px] font-black">
                  Event Dates: March 15-20, 2026
                </div>

                {/* Title */}
                <h1 className="text-6xl sm:text-8xl font-black mb-6 tracking-tighter leading-none italic">
                  UNLOCK THE{' '}
                  <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(152,6,249,0.5)]">
                    FUTURE
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed italic font-medium">
                  Join hands-on technical workshops led by industry experts and technology pioneers.
                  Master cutting-edge skills and unlock your potential in the world of technology.
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* Filter Buttons */}
          <ScrollReveal delay={0.3}>
            <section className="py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <WorkshopFilters
                  categories={categories}
                  activeFilter={activeFilter}
                  onFilterChange={setActiveFilter}
                />
              </div>
            </section>
          </ScrollReveal>

          {/* Workshop Cards Grid */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {loading ? (
                <div className="flex justify-center py-20">
                  <LoadingSpinner />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                  {workshops.map((workshop, index) => (
                    <ScrollReveal key={workshop.id} delay={index * 0.1}>
                      <WorkshopCard
                        workshop={workshop}
                        onClick={() => handleWorkshopClick(workshop)}
                        index={index}
                      />
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Bulk Registration CTA */}
          <ScrollReveal delay={0.2}>
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="glass-purple p-12 rounded-[2.5rem] border border-primary/20 text-center relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-[50px] rounded-full group-hover:bg-primary/20 transition-colors"></div>
                  
                  <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter italic">
                    Ready to Level Up Your <span className="text-primary">Skills?</span>
                  </h2>
                  <p className="text-gray-400 mb-10 max-w-2xl mx-auto italic font-medium leading-relaxed">
                    Register for multiple workshops and save time. Get access to exclusive sessions,
                    networking opportunities, and certification upon completion.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="bg-primary hover:bg-primary-dark text-white py-5 px-10 rounded-2xl font-black tracking-widest uppercase text-xs shadow-[0_0_20px_rgba(152,6,249,0.3)] hover:shadow-[0_0_30px_rgba(152,6,249,0.5)] transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                      Register for Multiple Workshops
                    </button>
                    <button className="glass px-10 py-5 rounded-2xl border border-primary/30 text-primary-light font-black tracking-widest uppercase text-xs hover:bg-primary hover:text-white transition-all duration-300">
                      View Schedule PDF
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        </PageTransition>
      </main>

      <WorkshopModal
        workshop={selectedWorkshop}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <Footer />
    </div>
  )
}
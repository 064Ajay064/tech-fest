'use client'

import { useState } from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import DetailedSpeakersHero from '@/components/speakers/DetailedSpeakersHero'
import SpeakerFilters from '@/components/speakers/SpeakerFilters'
import SpeakersPageGrid from '@/components/speakers/SpeakersPageGrid'
import JoinStageCTA from '@/components/speakers/JoinStageCTA'
import PageTransition from '@/components/shared/PageTransition'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { AnimatedBackground } from '@/features/events'

export default function SpeakersPage() {
  const [filter, setFilter] = useState('All Domains')

  return (
    <div className="min-h-screen bg-background-deep text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      
      <main className="relative z-10 pt-20">
        <PageTransition>
          <DetailedSpeakersHero />
          
          <ScrollReveal delay={0.2}>
            <SpeakerFilters onFilterChange={(domain) => setFilter(domain)} />
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <SpeakersPageGrid filter={filter} />
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <JoinStageCTA />
          </ScrollReveal>
        </PageTransition>
      </main>

      <Footer />
    </div>
  )
}
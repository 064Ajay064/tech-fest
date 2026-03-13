'use client'
import { useState } from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import DetailedSpeakersHero from '@/components/speakers/DetailedSpeakersHero'
import SpeakerFilters from '@/components/speakers/SpeakerFilters'
import SpeakersPageGrid from '@/components/speakers/SpeakersPageGrid'
import JoinStageCTA from '@/components/speakers/JoinStageCTA'

export default function SpeakersPage() {
  const [filter, setFilter] = useState('All Domains')

  return (
    <div className="min-h-screen bg-background-deep text-white selection:bg-primary selection:text-white overflow-hidden">
      <Header />
      
      <main>
        {/* Dynamic Background Grid Pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-deep to-background-deep"></div>
        </div>

        <DetailedSpeakersHero />
        
        <SpeakerFilters onFilterChange={(domain) => setFilter(domain)} />
        
        <SpeakersPageGrid filter={filter} />
        
        <JoinStageCTA />
      </main>

      <Footer />

      {/* Parallax Floating Shapes */}
      <div className="fixed top-20 right-[5%] w-32 h-32 bg-primary/10 rounded-full blur-[80px] animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-40 left-[2%] w-48 h-48 bg-accent/10 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
    </div>
  )
}
'use client'
import { useState } from 'react'
import { speakers } from '@/lib/data'
import Button from '../shared/Button'

export default function SpeakersPageGrid({ filter }: { filter: string }) {
  const filteredSpeakers = filter === 'All Domains' 
    ? speakers 
    : speakers.filter(s => s.domain === filter)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      {filteredSpeakers.map((speaker, index) => (
        <div 
          key={speaker.id}
          className="group relative animate-fadeInUp"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Main Card */}
          <div className="glass rounded-[2.5rem] overflow-hidden border-white/5 shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-2">
            {/* Image Section */}
            <div className="relative h-96 overflow-hidden">
              <img 
                src={speaker.image} 
                alt={speaker.name}
                className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-transparent to-transparent opacity-80"></div>
              
              {/* Domain Label */}
              <div className="absolute top-6 right-6 glass-purple px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest text-primary-light border-primary/20">
                {speaker.domain.toUpperCase()}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-10">
              <h3 className="text-3xl font-black text-white mb-2 tracking-tight group-hover:text-primary-light transition-colors font-orbitron">
                {speaker.name}
              </h3>
              <p className="text-primary-light text-xs font-black tracking-[0.2em] mb-6 uppercase">
                {speaker.designation} <span className="text-gray-600">@</span> {speaker.organization}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-10 font-medium italic">
                "{speaker.bio}"
              </p>

              <div className="flex items-center justify-between">
                {/* Social Links */}
                <div className="flex gap-4">
                  {Object.entries(speaker.socials).map(([platform, link]) => (
                    <a 
                      key={platform} 
                      href={link}
                      className="w-10 h-10 glass-purple rounded-xl flex items-center justify-center text-primary-light hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <SocialIcon type={platform} />
                    </a>
                  ))}
                </div>

                {/* Profile Button */}
                <button className="flex items-center gap-2 text-xs font-black tracking-widest text-white group/btn">
                  PROFILE 
                  <span className="text-primary transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Glowing Aura */}
          <div className="absolute -z-10 inset-0 bg-primary/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      ))}
    </div>
  )
}

function SocialIcon({ type }: { type: string }) {
  switch (type) {
    case 'linkedin': return <span>In</span>
    case 'github': return <span>Gh</span>
    case 'website': return <span>Wb</span>
    default: return null
  }
}

'use client'

import { motion } from 'framer-motion'
import { ContactInfo } from '../types/register.types'

export default function ContactCard({ contact }: { contact: ContactInfo }) {
  const isPurple = contact.accent === 'purple'
  
  return (
    <motion.div 
      whileHover={{ scale: 1.02, x: 10 }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass group p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 cursor-pointer shadow-xl relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
        isPurple ? 'bg-primary' : 'bg-accent'
      }`}></div>

      <div className="flex items-start gap-6 relative z-10">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 ${
          isPurple ? 'glass-purple text-primary-light group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(152,6,249,0.5)]' 
                   : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background-deep group-hover:shadow-[0_0_20px_rgba(6,249,249,0.5)]'
        }`}>
          {contact.icon === 'location_on' ? '📍' : 
           contact.icon === 'call' ? '📞' : '✉️'}
        </div>
        
        <div>
          <h3 className="text-lg font-black text-white mb-3 tracking-tight group-hover:text-primary-light transition-colors uppercase">
            {contact.title}
          </h3>
          <div className="space-y-1">
            {contact.description.map((line, idx) => (
              <p key={idx} className="text-gray-400 text-sm font-medium leading-relaxed italic">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

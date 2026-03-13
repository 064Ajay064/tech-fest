'use client'

import { motion } from 'framer-motion'

interface StatisticsProps {
  // Add props if needed in future
}

const stats = [
  { label: 'Total Events', value: '40+', icon: '🎮' },
  { label: 'Prize Pool', value: '₹5L+', icon: '🏆' },
  { label: 'Participants', value: '2500+', icon: '👥' },
  { label: 'Tech Workshops', value: '15+', icon: '💻' },
]

export default function Statistics() {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-8 rounded-[2rem] border border-white/5 text-center flex flex-col items-center group transition-all duration-500 hover:border-primary/30"
            >
              <div className="w-14 h-14 glass-purple rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all">
                {stat.icon}
              </div>
              <h3 className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tighter italic">
                {stat.value}
              </h3>
              <p className="text-primary-light text-[10px] font-black tracking-widest uppercase opacity-60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
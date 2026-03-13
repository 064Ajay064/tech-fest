'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Event } from '../types/event.types'
import { formatDate } from '@/lib/formatDate'

interface EventCardProps {
  event: Event
  index: number
}

export default function EventCard({ event, index }: EventCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = (mouseX / width) - 0.5
    const yPct = (mouseY / height) - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card group rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 shadow-2xl relative"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none"></div>
      
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-background-deep/40 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-6 right-6 glass-purple px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase text-white shadow-lg">
          {event.category}
        </div>

        {/* Date & Time Overlay */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
          <div className="space-y-1">
            <p className="text-primary-light text-[10px] font-black tracking-tighter uppercase leading-none opacity-80">Event Schedule</p>
            <p className="text-white text-lg font-black tracking-tighter leading-none italic uppercase">
              {formatDate(event.date)}
            </p>
          </div>
          <div className="glass px-3 py-1.5 rounded-lg text-[9px] font-black text-accent uppercase tracking-tighter shadow-xl">
             {event.time}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6 relative z-10 text-center" style={{ transform: "translateZ(30px)" }}>
        <div className="space-y-3">
          <h3 className="text-2xl font-black text-white tracking-tighter leading-tight group-hover:text-primary-light transition-colors uppercase italic underline decoration-primary/30 underline-offset-8 decoration-2">
            {event.title}
          </h3>
          <p className="text-gray-400 text-sm font-medium leading-relaxed line-clamp-2 mx-auto">
            {event.description}
          </p>
        </div>

        {/* Prize Pool */}
        <div className="flex flex-col items-center gap-6 pt-4 border-t border-white/5">
          <div className="space-y-1">
            <p className="text-gray-600 text-[10px] font-black tracking-widest uppercase">Prize Pool</p>
            <p className="text-xl font-black text-white italic group-hover:text-accent transition-colors">
              {event.prizePool}
            </p>
          </div>
          
          <button className="w-full h-12 glass rounded-xl flex items-center justify-center text-xl hover:bg-primary hover:text-white transition-all transform group-hover:scale-105 duration-300 shadow-xl">
            VIEW DETAILS ↗️
          </button>
        </div>
      </div>

      {/* Corner Decorative Glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors"></div>
    </motion.div>
  )
}

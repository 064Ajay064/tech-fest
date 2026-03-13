'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  width?: "fit-content" | "100%"
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  width = "fit-content" 
}: ScrollRevealProps) {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  }

  return (
    <div style={{ position: 'relative', width, overflow: 'visible' }}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            ...directions[direction],
            scale: 0.95 
          },
          visible: { 
            opacity: 1, 
            x: 0, 
            y: 0, 
            scale: 1 
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          delay, 
          ease: [0.22, 1, 0.36, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

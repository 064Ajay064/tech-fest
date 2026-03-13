'use client'

import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5)
      mouseY.set((e.clientY / window.innerHeight) - 0.5)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const layer1X = useTransform(x, [-0.5, 0.5], [-20, 20])
  const layer1Y = useTransform(y, [-0.5, 0.5], [-20, 20])
  const layer2X = useTransform(x, [-0.5, 0.5], [-50, 50])
  const layer2Y = useTransform(y, [-0.5, 0.5], [-50, 50])

  const floatingIcons = [
    { icon: '<code>', top: '15%', left: '10%', delay: 0 },
    { icon: '{ }', top: '45%', right: '8%', delay: 2 },
    { icon: '< />', bottom: '20%', left: '15%', delay: 4 },
    { icon: '[ ]', top: '70%', right: '12%', delay: 1 },
    { icon: '( )', bottom: '40%', right: '25%', delay: 3 },
  ]

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background-deep">
      {/* Layer 1: Starfield Dots */}
      <motion.div style={{ x: layer1X, y: layer1Y }} className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_20px_30px,#fff,transparent)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_100px_100px,#fff,transparent)] bg-[size:120px_120px]"></div>
      </motion.div>

      {/* Layer 2: Neon Glows */}
      <motion.div style={{ x: layer2X, y: layer2Y }} className="absolute inset-0">
        <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[180px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </motion.div>

      {/* Layer 3: Floating Gamified Icons */}
      {floatingIcons.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            y: [0, -40, 0],
            rotate: [0, 20, 0]
          }}
          transition={{ 
            duration: 10 + idx * 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: item.delay 
          }}
          style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
          className="absolute text-primary-light font-mono font-black text-2xl tracking-tighter opacity-10 select-none blur-[1px]"
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Floating Blobs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] w-32 h-32 border border-primary/10 rounded-2xl opacity-10"
        />
        <motion.div
          animate={{ y: [0, 40, 0], rotate: [0, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[30%] left-[10%] w-56 h-56 border border-accent/10 rounded-full opacity-10"
        />
      </div>
      
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
    </div>
  )
}

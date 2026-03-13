'use client'

import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  onClick?: () => void
  className?: string
  pulse?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  pulse = false,
  type = 'button'
}: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-xl font-black transition-all duration-300 flex items-center justify-center gap-2 tracking-widest uppercase text-xs"

  const variants = {
    primary: "bg-primary text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]",
    secondary: "bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
    outline: "border-2 border-primary text-primary-light hover:bg-primary/10 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
  }

  return (
    <motion.button
      type={type}
      whileHover={{ 
        scale: 1.05, 
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
      animate={pulse ? {
        boxShadow: [
          "0 0 0 0px rgba(139, 92, 246, 0.4)",
          "0 0 0 20px rgba(139, 92, 246, 0)",
        ],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut" as const
        }
      } : {}}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
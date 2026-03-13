interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  onClick?: () => void
  className?: string
}

export default function Button({ children, variant = 'primary', onClick, className = '' }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-bold transition-all duration-400 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"

  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary-dark text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]",
    secondary: "bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-white/10",
    outline: "border-2 border-primary text-primary-light hover:bg-primary hover:text-white"
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
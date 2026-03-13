import Link from 'next/link'
import Button from './Button'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-3xl animate-float">🚀</span>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tighter leading-none">SNS TECHFEST</span>
              <span className="text-[10px] text-primary-light font-bold tracking-[0.2em]">2K26 SYMPOSIUM</span>
            </div>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'Events', 'Workshops', 'Schedule', 'Speakers', 'Gallery', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="text-sm font-medium text-gray-300 hover:text-primary-light transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Register Button */}
          <Button variant="primary" className="hidden md:flex">REGISTER</Button>
          
          {/* Mobile Menu Button Placeholder */}
          <button className="md:hidden text-white p-2">
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
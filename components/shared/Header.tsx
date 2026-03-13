'use client'
import Link from 'next/link'
import Container from './Container'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] glass border-b border-white/5 backdrop-blur-xl">
      <Container className="flex items-center justify-between h-20">
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 glass-purple rounded-xl flex items-center justify-center text-xl group-hover:scale-110 group-hover:rotate-12 transition-all">
            🚀
          </div>
          <span className="text-xl font-black text-white tracking-tighter uppercase">
            SNS TECHFEST <span className="text-primary italic">2K26</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Events', 'Workshops', 'Speakers'].map((link) => (
            <Link
              key={link}
              href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
              className="text-sm font-black text-gray-400 hover:text-white tracking-widest transition-colors uppercase"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Right Side: Search & Profile */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center glass border-white/5 rounded-full px-4 py-2 w-64 group focus-within:border-primary/50 transition-colors">
            <span className="text-gray-500 text-sm mr-2">🔍</span>
            <input
              type="text"
              placeholder="Find event..."
              className="bg-transparent border-none outline-none text-white text-xs font-medium w-full"
            />
          </div>

          <button className="w-10 h-10 glass rounded-full flex items-center justify-center text-primary-light hover:bg-primary hover:text-white transition-all">
            👤
          </button>
        </div>
      </Container>
    </header>
  )
}

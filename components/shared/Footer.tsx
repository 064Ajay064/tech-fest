import Link from 'next/link'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="glass border-t border-white/5 py-24 relative mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🚀</span>
              <span className="text-xl font-black text-white tracking-tighter uppercase">
                SNS TECHFEST 2K26
              </span>
            </div>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              Dive into the most prestigious technical arena where innovation meets execution.
              Engineered for excellence.
            </p>
          </div>

          {/* Guidelines Links */}
          <div>
            <h4 className="text-xs font-black text-primary-light tracking-[0.2em] mb-8 uppercase">RESOURCES</h4>
            <ul className="space-y-4">
              {['Guidelines', 'Accommodations', 'FAQs', 'Sponsorship'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments Section */}
          <div>
            <h4 className="text-xs font-black text-primary-light tracking-[0.2em] mb-8 uppercase">DEPARTMENTS</h4>
            <ul className="space-y-4">
              {['Computer Science', 'Robotics & AI', 'Mechanical', 'Electronics'].map((dept) => (
                <li key={dept}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xs font-black text-primary-light tracking-[0.2em] mb-8 uppercase">CONNECT</h4>
            <div className="text-gray-400 space-y-4 text-sm font-medium">
              <p className="flex items-center gap-3">
                <span className="text-primary-light">✉️</span> techfest@sns.edu.in
              </p>
              <p className="flex items-center gap-3">
                <span className="text-primary-light">📞</span> +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <span className="text-primary-light">📍</span> Coimbatore, Tamil Nadu
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-black tracking-[0.3em] uppercase underline decoration-primary/30 underline-offset-4">
            © 2026 SNS Techfest. Developed by Department of IT, SNSCT.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'FAQ'].map((link) => (
              <Link 
                key={link}
                href="#" 
                className="text-gray-600 hover:text-primary transition-colors text-[10px] font-black tracking-widest uppercase"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
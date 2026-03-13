export default function ContactSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-deep/50" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="glass rounded-[3rem] overflow-hidden min-h-[400px] border-white/5 animate-fadeInUp">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.481604051059!2d76.9242!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjUiTiA3NsKwNTUnMjcuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy"
               className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <h2 className="text-4xl font-black text-white mb-8 tracking-tighter">
              GET IN <span className="text-primary italic">TOUCH</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 glass-purple rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  📍
                </div>
                <div>
                  <h4 className="text-white font-black text-lg mb-1">VENUE</h4>
                  <p className="text-gray-400 font-medium">SNS College of Technology, Coimbatore, Tamil Nadu - 641035</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 glass-purple rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  ✉️
                </div>
                <div>
                  <h4 className="text-white font-black text-lg mb-1">EMAIL</h4>
                  <p className="text-gray-400 font-medium">contact@snstechfest.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 glass-purple rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  📞
                </div>
                <div>
                  <h4 className="text-white font-black text-lg mb-1">PHONE</h4>
                  <p className="text-gray-400 font-medium">+91 98765 43210 / +91 87654 32109</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-12">
              {['Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map((social) => (
                <a key={social} href="#" className="glass px-6 py-3 rounded-xl text-xs font-black tracking-widest text-primary-light hover:bg-primary hover:text-white transition-all duration-300">
                  {social.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

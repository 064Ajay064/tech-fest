export default function ContactSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-deep/50" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tighter italic uppercase">
            GET IN <span className="text-primary drop-shadow-[0_0_30px_rgba(152,6,249,0.5)]">TOUCH</span>
          </h2>
          <p className="text-gray-400 font-medium italic max-w-xl mx-auto">
            Ready to participate or have a query? Our transmission lines are always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Map Section */}
          <div className="glass rounded-[3rem] overflow-hidden min-h-[450px] border border-white/5 animate-fadeInUp shadow-2xl relative">
             <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.481604051059!2d76.9242!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjUiTiA3NsKwNTUnMjcuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy"
               className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <div className="space-y-10">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 glass-purple rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                  📍
                </div>
                <div>
                  <h4 className="text-primary-light font-black text-xs tracking-widest uppercase mb-2">VENUE NAVIGATION</h4>
                  <p className="text-white text-xl font-bold leading-tight">SNS College of Technology, Coimbatore, TN - 641035</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 glass-purple rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                  ✉️
                </div>
                <div>
                  <h4 className="text-primary-light font-black text-xs tracking-widest uppercase mb-2">SECURE EMAIL</h4>
                  <p className="text-white text-xl font-bold leading-tight">contact@snstechfest.com</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 glass-purple rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                  📞
                </div>
                <div>
                  <h4 className="text-primary-light font-black text-xs tracking-widest uppercase mb-2">COMM LINK</h4>
                  <p className="text-white text-xl font-bold leading-tight">+91 98765 43210</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mt-16">
              {['Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map((social) => (
                <a key={social} href="#" className="glass px-8 py-4 rounded-2xl text-[10px] font-black tracking-[0.2em] text-white hover:bg-primary transition-all duration-300 shadow-xl italic">
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

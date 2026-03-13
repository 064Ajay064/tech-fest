export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background-deep">
      {/* Layer 1: Starfield Dots */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_20px_30px,#fff,transparent)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_100px_100px,#fff,transparent)] bg-[size:120px_120px]"></div>
      </div>

      {/* Layer 2: Purple Radial Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full animate-pulse"></div>

      {/* Layer 3: Blue Neon Glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Layer 4: Floating Shapes */}
      <div className="absolute top-[20%] right-[15%] w-32 h-32 border border-primary/20 rounded-lg animate-float opacity-20 rotate-12"></div>
      <div className="absolute bottom-[30%] left-[10%] w-48 h-48 border border-accent/20 rounded-full animate-float opacity-20" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-[60%] left-[20%] w-24 h-24 border border-white/10 rounded-xl animate-float opacity-10" style={{ animationDelay: '3s' }}></div>
      
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
    </div>
  )
}

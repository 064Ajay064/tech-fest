export default function SocialLinks() {
  const socials = [
    { name: 'Website', icon: '🌐', color: 'purple' },
    { name: 'Email', icon: '✉️', color: 'cyan' },
    { name: 'Share', icon: '🔗', color: 'purple' }
  ]

  return (
    <div className="flex gap-4 mt-8">
      {socials.map((social) => (
        <button
          key={social.name}
          className={`w-14 h-14 glass rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
            social.color === 'purple' 
              ? 'hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(152,6,249,0.3)]' 
              : 'hover:bg-accent/20 hover:shadow-[0_0_20px_rgba(6,249,249,0.3)]'
          }`}
          title={social.name}
        >
          {social.icon}
        </button>
      ))}
    </div>
  )
}

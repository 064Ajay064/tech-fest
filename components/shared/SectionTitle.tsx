interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionTitle({ title, subtitle, align = 'center', className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
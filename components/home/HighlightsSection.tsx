export default function HighlightsSection() {
  const highlights = [
    {
      icon: '💻',
      title: 'Hack-The-Verse',
      description: 'A 24-hour marathon where developers build futuristic solutions for real-world problems.',
      link: '#'
    },
    {
      icon: '🤖',
      title: 'Robo-War 2.0',
      description: 'Witness the clash of titanium titans in our custom-built arena for mechanical supremacy.',
      link: '#'
    },
    {
      icon: '🧠',
      title: 'AI Masterclass',
      description: 'Deep dive into neural networks and large language models with industry pioneers.',
      link: '#'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Highlights</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Pushing the boundaries of technology through competition and collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
              <p className="text-gray-300 mb-4">{highlight.description}</p>
              <a href={highlight.link} className="text-purple-400 hover:text-purple-300 transition-colors">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
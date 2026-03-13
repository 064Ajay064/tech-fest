'use client'
import { useState } from 'react'
import Button from '../shared/Button'
import { events } from '@/lib/data'

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    event: events[0].id,
    phone: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Registration submitted! We will contact you soon.')
    console.log(formData)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-deep" id="registration">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fadeInUp">
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
              READY TO <span className="text-primary italic">CONQUER?</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium mb-10 max-w-lg">
              Secure your spot in the most awaited technical symposium of the year. Limited slots available for all major events.
            </p>
            
            <div className="space-y-6">
              {[
                { label: 'Step 1', text: 'Choose your preferred event from the list.' },
                { label: 'Step 2', text: 'Fill in your personal and college details.' },
                { label: 'Step 3', text: 'Receive confirmation and event guidelines.' }
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-12 h-12 glass-purple rounded-xl flex items-center justify-center text-primary font-black text-sm uppercase">
                    {step.label.split(' ')[1]}
                  </span>
                  <div>
                    <h4 className="text-white font-bold">{step.label}</h4>
                    <p className="text-gray-500 text-sm">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="glass p-8 sm:p-12 rounded-[3rem] border-white/5 shadow-2xl animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-primary-light tracking-widest uppercase ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-primary-light tracking-widest uppercase ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-primary-light tracking-widest uppercase ml-1">College / Organization</label>
                <input 
                  type="text" 
                  required
                  placeholder="University Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  value={formData.college}
                  onChange={(e) => setFormData({...formData, college: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-primary-light tracking-widest uppercase ml-1">Select Event</label>
                <select 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                  value={formData.event}
                  onChange={(e) => setFormData({...formData, event: e.target.value})}
                >
                  {events.map((event) => (
                    <option key={event.id} value={event.id} className="bg-background-dark text-white">
                      {event.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-4">
                <Button variant="primary" className="w-full py-5 text-sm tracking-[0.2em] font-black">
                  SUBMIT REGISTRATION
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
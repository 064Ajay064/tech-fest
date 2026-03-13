'use client'

import { useState } from 'react'
import { departments, eventOptions } from '../mock/registerData'
import { RegistrationFormData } from '../types/register.types'

export default function RegisterForm() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    department: '',
    college: '',
    eventsInterested: []
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (event: string) => {
    setFormData(prev => {
      const events = prev.eventsInterested.includes(event)
        ? prev.eventsInterested.filter(e => e !== event)
        : [...prev.eventsInterested, event]
      return { ...prev, eventsInterested: events }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Registration Data:', formData)
    alert('Registration submitted successfully! Check console for details.')
  }

  return (
    <div className="glass-purple p-8 sm:p-12 rounded-[2.5rem] border border-primary/20 relative overflow-hidden group">
      {/* Glowing Blob Decoration */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-colors duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-2xl text-primary-light">
            📝
          </div>
          <h2 className="text-3xl font-black text-white tracking-tighter uppercase">
            Secure Your <span className="text-primary italic">Spot</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-primary-light tracking-widest uppercase">Full Name</label>
              <input
                required
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-primary/50 outline-none transition-all placeholder:text-gray-600"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-primary-light tracking-widest uppercase">Email Address</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-primary/50 outline-none transition-all placeholder:text-gray-600"
              />
            </div>
          </div>

          {/* Row 2: Department */}
          <div className="space-y-2">
            <label className="text-xs font-black text-primary-light tracking-widest uppercase">Department</label>
            <select
              required
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-primary/50 outline-none transition-all appearance-none"
            >
              <option value="" disabled className="bg-background-deep text-gray-400">Select Department</option>
              {departments.map(dept => (
                <option key={dept} value={dept} className="bg-background-deep text-white">{dept}</option>
              ))}
            </select>
          </div>

          {/* Row 3: College */}
          <div className="space-y-2">
            <label className="text-xs font-black text-primary-light tracking-widest uppercase">College / University</label>
            <input
              required
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="Enter your institution"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-primary/50 outline-none transition-all placeholder:text-gray-600"
            />
          </div>

          {/* Row 4: Events Interested */}
          <div className="space-y-4">
            <label className="text-xs font-black text-primary-light tracking-widest uppercase">Events Interested</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {eventOptions.map(event => (
                <label key={event} className="flex items-center gap-3 cursor-pointer group/item">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={formData.eventsInterested.includes(event)}
                      onChange={() => handleCheckboxChange(event)}
                      className="peer hidden"
                    />
                    <div className="w-5 h-5 border-2 border-white/10 rounded-md peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover/item:text-white transition-colors">{event}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 tracking-widest uppercase shadow-[0_0_20px_rgba(152,6,249,0.3)] hover:shadow-[0_0_30px_rgba(152,6,249,0.5)] transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>Register Now</span>
            <span className="text-xl">🚀</span>
          </button>
        </form>
      </div>
    </div>
  )
}

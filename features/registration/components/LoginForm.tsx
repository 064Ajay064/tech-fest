'use client'

import { useState } from 'react'

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt:', formData)
    alert('Login attempt recorded. System integration pending.')
  }

  return (
    <div className="glass-purple p-8 sm:p-12 rounded-[2.5rem] border border-primary/20 relative overflow-hidden group">
      {/* Glowing Blob Decoration */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-colors duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-2xl text-primary-light">
            🔐
          </div>
          <h2 className="text-3xl font-black text-white tracking-tighter uppercase">
            Login to <span className="text-primary italic">Portal</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label className="text-xs font-black text-primary-light tracking-widest uppercase">Email Address</label>
            <input
              required
              type="email"
              placeholder="user@sns.edu.in"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-primary/50 outline-none transition-all placeholder:text-gray-600"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-black text-primary-light tracking-widest uppercase">Password</label>
              <button type="button" className="text-[10px] font-black text-gray-500 hover:text-primary transition-colors tracking-widest uppercase">
                Forgot?
              </button>
            </div>
            <input
              required
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-primary/50 outline-none transition-all placeholder:text-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 tracking-widest uppercase shadow-[0_0_20px_rgba(152,6,249,0.3)] hover:shadow-[0_0_30px_rgba(152,6,249,0.5)] transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>Access Account</span>
            <span className="text-xl">⚡</span>
          </button>
          
          <p className="text-center text-gray-500 text-xs font-medium italic">
            Don't have an account? <span className="text-primary-light cursor-pointer hover:underline">Register here</span>
          </p>
        </form>
      </div>
    </div>
  )
}

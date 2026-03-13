export default function CountdownTimer() {
  const timeUnits = [
    { label: 'DAYS', value: '05' },
    { label: 'HRS', value: '12' },
    { label: 'MINS', value: '30' },
    { label: 'SECS', value: '45' }
  ]

  return (
    <div className="flex justify-center gap-3 sm:gap-6 mb-8">
      {timeUnits.map((unit, index) => (
        <div
          key={index}
          className="glass-purple rounded-2xl p-4 sm:p-6 text-center min-w-[75px] sm:min-w-[110px] shadow-2xl relative overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-primary/20 hover:border-primary/40 border border-transparent"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tighter group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.3)]">{unit.value}</div>
          <div className="text-[10px] sm:text-xs text-primary-light font-bold tracking-[0.2em] group-hover:text-white transition-colors">{unit.label}</div>
        </div>
      ))}
    </div>
  )
}
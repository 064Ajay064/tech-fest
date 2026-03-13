import { useState, useEffect } from 'react'
import { Workshop } from '@/types/workshop.types'
import { workshopsMock } from '@/features/workshops/mock/workshops.mock'

export function useWorkshops() {
  const [workshops, setWorkshops] = useState<Workshop[]>([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('All Tracks')

  useEffect(() => {
    // Simulate API call
    const loadWorkshops = async () => {
      setLoading(true)
      // In real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 500))
      setWorkshops(workshopsMock)
      setLoading(false)
    }

    loadWorkshops()
  }, [])

  const filteredWorkshops = activeFilter === 'All Tracks'
    ? workshops
    : workshops.filter(workshop => workshop.category === activeFilter)

  const categories = ['All Tracks', ...Array.from(new Set(workshops.map(w => w.category)))]

  return {
    workshops: filteredWorkshops,
    allWorkshops: workshops,
    loading,
    activeFilter,
    setActiveFilter,
    categories
  }
}
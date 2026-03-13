import { useState, useEffect } from 'react'

export function useEvents() {
  const [events, setEvents] = useState([])
  // logic here
  return { events }
}
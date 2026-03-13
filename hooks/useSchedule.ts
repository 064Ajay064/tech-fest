import { useState, useEffect } from 'react'

export function useSchedule() {
  const [schedule, setSchedule] = useState([])
  // logic here
  return { schedule }
}
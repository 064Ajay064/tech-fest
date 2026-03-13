import { useState, useEffect } from 'react'

export function useSpeakers() {
  const [speakers, setSpeakers] = useState([])
  // logic here
  return { speakers }
}
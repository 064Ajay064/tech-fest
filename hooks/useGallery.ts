import { useState, useEffect } from 'react'

export function useGallery() {
  const [gallery, setGallery] = useState([])
  // logic here
  return { gallery }
}
'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'sb-xguazjfiurfowasruirz-auth-token'

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const hasToken = !!localStorage.getItem(STORAGE_KEY)
    setIsLoggedIn(hasToken)
    setIsLoading(false)

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setIsLoggedIn(!!e.newValue)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return { isLoggedIn, isLoading }
}

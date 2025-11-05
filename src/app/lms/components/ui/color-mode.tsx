'use client'

import { ClientOnly } from '@chakra-ui/react'
import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

// Create a context to manage color mode
const ColorModeContext = createContext({
  colorMode: 'light',
  toggleColorMode: () => {},
})

// Simple implementation for ColorModeProvider in Chakra UI v3
export function ColorModeProvider({ children }: { children: ReactNode }) {
  // Use React's useState to manage color mode
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light')
  
  // Check system preference on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check for system dark mode preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setColorMode(prefersDark ? 'dark' : 'light')
      
      // Listen for changes to system preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent) => {
        setColorMode(e.matches ? 'dark' : 'light')
      }
      
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])
  
  // Toggle between light and dark
  const toggleColorMode = () => {
    setColorMode(prev => prev === 'light' ? 'dark' : 'light')
  }
  
  // Provide color mode context to children
  return (
    <ColorModeContext.Provider 
      value={{ 
        colorMode, 
        toggleColorMode
      }}
    >
      <ClientOnly>
        {children}
      </ClientOnly>
    </ColorModeContext.Provider>
  )
}

// Custom hook to access color mode
export function useCustomColorMode() {
  return useContext(ColorModeContext)
}

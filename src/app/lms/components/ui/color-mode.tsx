'use client'

import { createContext, useContext, ReactNode } from 'react'

// Create a simplified context - no state, just structure
const ColorModeContext = createContext({
  colorMode: 'light',
  toggleColorMode: () => {},
})

// Simplified ColorModeProvider that doesn't use media queries or state
// This is hydration-safe because it doesn't attempt to detect color mode on the client
export function ColorModeProvider({ children }: { children: ReactNode }) {
  // Just wrap children without any dynamic behavior
  // We're handling dark appearance at the component level now
  return (
    <ColorModeContext.Provider 
      value={{ 
        colorMode: 'light', 
        toggleColorMode: () => {}
      }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}

// Custom hook to access color mode
export function useCustomColorMode() {
  return useContext(ColorModeContext)
}

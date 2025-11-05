'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ReactNode } from 'react'

// Simple customization that avoids the complex structure that was causing hydration issues
const customSystem = {
  ...defaultSystem,
  // We'll use the existing Chakra UI system without any modifications
  // This ensures compatibility with mobile and prevents hydration errors
}

export default function ChakraProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={customSystem}>
      {children}
    </ChakraProvider>
  )
}

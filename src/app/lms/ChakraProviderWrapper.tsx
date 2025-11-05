'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { ColorModeProvider } from './components/ui/color-mode'

// Using default system to avoid hydration mismatches
const system = defaultSystem

export default function ChakraProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  )
}

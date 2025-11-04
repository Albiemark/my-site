'use client'

import { ReactNode } from 'react'
import ChakraProviderWrapper from './ChakraProviderWrapper'
import './lms-globals.css'
import SurveyProvider from './components/SurveyProvider'

export default function LMSLayout({ children }: { children: ReactNode }) {
  return (
    <ChakraProviderWrapper>
      <div className="lms-app">
        <SurveyProvider>
          <div className="lms-container">
            {children}
          </div>
        </SurveyProvider>
      </div>
    </ChakraProviderWrapper>
  )
}
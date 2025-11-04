'use client'

import { ReactNode } from 'react'
import { useSurveyStore } from '../store/useSurveyStore'
import ProgressStepper from './ProgressStepper'

export default function SurveyProvider({ children }: { children: ReactNode }) {
  const { currentStep, steps } = useSurveyStore()
  
  return (
    <div className="survey-container">
      <ProgressStepper 
        currentStep={currentStep}
        totalSteps={steps.length}
        steps={steps}
      />
      {children}
    </div>
  )
}
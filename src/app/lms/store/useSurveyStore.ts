'use client'

import { create } from 'zustand'

interface SurveyState {
  currentStep: number
  answers: Record<string, string>
  steps: string[]
  setAnswer: (questionId: string, answer: string) => void
  nextStep: () => void
  prevStep: () => void
  reset: () => void
  setCurrentStep: (stepIndex: number) => void
}

export const useSurveyStore = create<SurveyState>((set) => ({
  currentStep: 0,
  answers: {},
  steps: [
    'Personal Info',
    'Insurance Needs', 
    'Health History',
    'Review'
  ],
  setAnswer: (questionId: string, answer: string) => 
    set((state: SurveyState) => ({
      answers: { ...state.answers, [questionId]: answer }
    })),
  nextStep: () => 
    set((state: SurveyState) => ({ 
      currentStep: Math.min(state.currentStep + 1, state.steps.length - 1)
    })),
  prevStep: () => 
    set((state: SurveyState) => ({
      currentStep: Math.max(state.currentStep - 1, 0)
    })),
  reset: () =>
    set({
      currentStep: 0,
      answers: {}
    }),
  setCurrentStep: (stepIndex: number) =>
    set({ currentStep: stepIndex })
}))

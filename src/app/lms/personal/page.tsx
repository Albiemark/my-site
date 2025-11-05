'use client'

import QuestionCard from '../components/QuestionCard'
import { useSurveyStore } from '../store/useSurveyStore'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Container, VStack, Heading, Text, Button, Flex, Box } from '@chakra-ui/react'

interface Question {
  id: string
  question: string
  inputType: 'text' | 'radio' | 'checkbox' | 'select'
  required: boolean
  validate?: (value: string) => string | null
}

export default function PersonalInfoPage() {
  const { answers, setAnswer, setCurrentStep } = useSurveyStore()
  const router = useRouter()

  useEffect(() => {
    setCurrentStep(0)
  }, [setCurrentStep])

  const [errors, setErrors] = useState<Record<string, string>>({})
  const isDev = process.env.NODE_ENV === 'development'

  const validateEmail = (email: string) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Please enter a valid email address'
    }
    return null
  }

  const questions: Question[] = [
    {
      id: 'fullName',
      question: 'Full Name',
      inputType: 'text',
      required: true,
      validate: (value) => !value ? 'Name is required' : null
    },
    {
      id: 'email',
      question: 'Email Address',
      inputType: 'text',
      required: true,
      validate: validateEmail
    },
    {
      id: 'phone',
      question: 'Phone Number',
      inputType: 'text',
      required: false
    }
  ]

  const handleContinue = () => {
    const newErrors: Record<string, string> = {}
    questions.forEach(q => {
      if (q.required && !answers[q.id]) {
        newErrors[q.id] = 'This field is required'
      } else if (q.validate) {
        const error = q.validate(answers[q.id] || '')
        if (error) newErrors[q.id] = error
      }
    })

    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      router.push('/lms/insurance')
    }
  }

  const fillTestData = () => {
    setAnswer('fullName', 'Test User')
    setAnswer('email', 'test@example.com')
    setAnswer('phone', '555-123-4567')
  }

  return (
    <Container maxW="3xl" py="8">
      <VStack gap="6" align="stretch">
        <Box>
          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="bold"
            color="gray.400"
            mb="2"
            textTransform="uppercase"
          >
            Personal Information
          </Heading>
          <Text color="gray.600" fontSize="md">
            Let&apos;s start with some basic information about you
          </Text>
        </Box>

        {questions.map((q) => (
          <QuestionCard
            key={q.id}
            question={q.question}
            inputType={q.inputType}
            required={q.required}
            value={answers[q.id] || ''}
            onChange={(value) => setAnswer(q.id, value)}
            error={errors[q.id]}
          />
        ))}

        <Flex gap="4" justify="flex-end" pt="4">
          {isDev && (
            <Button
              onClick={fillTestData}
              variant="outline"
              colorScheme="gray"
            >
              Fill Test Data
            </Button>
          )}
          <Button
            onClick={handleContinue}
            bg="blue.500"
            color="white"
            px="8"
            fontSize="md"
            fontWeight="bold"
            _hover={{
              bg: 'blue.600',
              transform: 'translateY(-1px)',
              boxShadow: 'md'
            }}
            transition="all 0.2s"
          >
            Continue →
          </Button>
        </Flex>
      </VStack>
    </Container>
  )
}

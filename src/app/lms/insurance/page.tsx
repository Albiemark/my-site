'use client'

import QuestionCard from '../components/QuestionCard'
import { useSurveyStore } from '../store/useSurveyStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Container, VStack, Heading, Text, Button, Flex, Box } from '@chakra-ui/react'

interface Question {
  id: string
  question: string
  inputType: 'text' | 'radio' | 'checkbox' | 'select'
  options?: string[]
  required: boolean
}

export default function InsuranceNeedsPage() {
  const { answers, setAnswer, setCurrentStep } = useSurveyStore()
  const router = useRouter()

  useEffect(() => {
    setCurrentStep(1)
  }, [setCurrentStep])

  const isDev = process.env.NODE_ENV === 'development'

  const questions: Question[] = [
    {
      id: 'insuranceType',
      question: 'What type of insurance are you interested in?',
      inputType: 'radio',
      options: ['Life', 'Health', 'Auto', 'Home'],
      required: true
    },
    {
      id: 'coverageAmount',
      question: 'Desired coverage amount',
      inputType: 'radio',
      options: ['$100k', '$250k', '$500k', '$1M+'],
      required: true
    }
  ]

  const fillTestData = () => {
    setAnswer('insuranceType', 'Health')
    setAnswer('coverageAmount', '$500k')
  }

  return (
    <Container maxW="3xl" py="8">
      <VStack gap="6" align="stretch">
        <Box>
          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="bold"
            color="blue.900"
            mb="2"
            textTransform="uppercase"
          >
            Insurance Needs
          </Heading>
          <Text color="black" fontWeight="medium" fontSize="md">
            Tell us about the coverage you&apos;re looking for
          </Text>
        </Box>

        {questions.map((q) => (
          <QuestionCard
            key={q.id}
            question={q.question}
            inputType={q.inputType}
            options={q.options}
            required={q.required}
            value={answers[q.id] || ''}
            onChange={(value) => setAnswer(q.id, value)}
          />
        ))}

        <Flex gap="4" justify="space-between" pt="4">
          <Button
            onClick={() => router.push('/lms/personal')}
            variant="outline"
            colorScheme="gray"
            px="8"
          >
            ← Back
          </Button>
          <Flex gap="4">
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
              onClick={() => router.push('/lms/health')}
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
        </Flex>
      </VStack>
    </Container>
  )
}

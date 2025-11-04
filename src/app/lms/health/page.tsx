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
  hidden?: boolean
}

export default function HealthHistoryPage() {
  const { answers, setAnswer, setCurrentStep } = useSurveyStore()
  const router = useRouter()

  useEffect(() => {
    setCurrentStep(2)
  }, [setCurrentStep])

  const isDev = process.env.NODE_ENV === 'development'

  const questions: Question[] = [
    {
      id: 'hasConditions',
      question: 'Do you have any pre-existing medical conditions?',
      inputType: 'radio',
      options: ['Yes', 'No'],
      required: true
    },
    {
      id: 'conditions',
      question: 'Please list any conditions',
      inputType: 'text',
      required: false,
      hidden: answers['hasConditions'] !== 'Yes'
    },
    {
      id: 'tobaccoUse',
      question: 'Do you use tobacco products?',
      inputType: 'radio',
      options: ['Yes', 'No'],
      required: true
    }
  ]

  const fillTestData = () => {
    setAnswer('hasConditions', 'No')
    setAnswer('tobaccoUse', 'No')
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
            Health History
          </Heading>
          <Text color="gray.600" fontSize="md">
            Help us understand your health profile
          </Text>
        </Box>

        {questions
          .filter(q => !q.hidden)
          .map((q) => (
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
            onClick={() => router.push('/lms/insurance')}
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
              onClick={() => router.push('/lms/review')}
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

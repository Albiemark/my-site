'use client'

import { useSurveyStore } from '../store/useSurveyStore'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Container, VStack, Heading, Text, Button, Flex, Box, Grid } from '@chakra-ui/react'
 
export default function ReviewPage() {
  const { answers, setCurrentStep } = useSurveyStore()
  
  useEffect(() => {
    setCurrentStep(3)
  }, [setCurrentStep])

  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError('')
    try {
      const response = await fetch('/lms/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...answers,
          submittedAt: new Date().toISOString()
        })
      })

      if (!response.ok) throw new Error('Submission failed')
      router.push('/lms/thank-you')
    } catch (error) {
      console.error('Submission error:', error)
      setError('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const InfoItem = ({ label, value }: { label: string; value: string }) => (
    <Box>
      <Text fontSize="sm" fontWeight="600" color="gray.600" mb="1">
        {label}
      </Text>
      <Text fontSize="md" color="gray.800">
        {value || 'Not provided'}
      </Text>
    </Box>
  )

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
            Review Your Information
          </Heading>
          <Text color="gray.600" fontSize="md">
            Please verify all details before submitting your application
          </Text>
        </Box>

        {/* Personal Information Section */}
        <Box
          bg="white"
          p="6"
          borderRadius="xl"
          border="1px"
          borderColor="blue.100"
          boxShadow="sm"
        >
          <Heading as="h2" size="md" mb="4" color="blue.900">
            PERSONAL INFORMATION
          </Heading>
          <Grid gap="4">
            <InfoItem label="Full Name" value={answers.fullName} />
            <InfoItem label="Email Address" value={answers.email} />
            <InfoItem label="Phone Number" value={answers.phone} />
          </Grid>
        </Box>

        {/* Insurance Needs Section */}
        <Box
          bg="white"
          p="6"
          borderRadius="xl"
          border="1px"
          borderColor="blue.100"
          boxShadow="sm"
        >
          <Heading as="h2" size="md" mb="4" color="blue.900">
            INSURANCE NEEDS
          </Heading>
          <Grid gap="4">
            <InfoItem label="Insurance Type" value={answers.insuranceType} />
            <InfoItem label="Coverage Amount" value={answers.coverageAmount} />
          </Grid>
        </Box>

        {/* Health History Section */}
        <Box
          bg="white"
          p="6"
          borderRadius="xl"
          border="1px"
          borderColor="blue.100"
          boxShadow="sm"
        >
          <Heading as="h2" size="md" mb="4" color="blue.900">
            HEALTH HISTORY
          </Heading>
          <Grid gap="4">
            <InfoItem 
              label="Pre-existing Conditions" 
              value={answers.hasConditions === 'Yes' 
                ? answers.conditions || 'Not specified' 
                : 'None'
              } 
            />
            <InfoItem label="Tobacco Use" value={answers.tobaccoUse} />
          </Grid>
        </Box>

        {error && (
          <Box
            bg="red.50"
            border="1px"
            borderColor="red.200"
            borderRadius="md"
            p="4"
          >
            <Text color="red.600" fontWeight="500">
              {error}
            </Text>
          </Box>
        )}

        <Flex gap="4" justify="space-between" pt="4">
          <Button
            onClick={() => router.push('/lms/health')}
            variant="outline"
            colorScheme="gray"
            px="8"
            disabled={isSubmitting}
          >
            ← Back
          </Button>
          <Button
            onClick={handleSubmit}
            loading={isSubmitting}
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
            _disabled={{
              bg: 'gray.400',
              cursor: 'not-allowed'
            }}
            transition="all 0.2s"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </Flex>
      </VStack>
    </Container>
  )
}

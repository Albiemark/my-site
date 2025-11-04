'use client'

import { Container, VStack, Heading, Text, Button, Box } from '@chakra-ui/react'
import { LuCheck } from 'react-icons/lu'
import Link from 'next/link'
import { useSurveyStore } from '../store/useSurveyStore'
import { useEffect } from 'react'

export default function ThankYouPage() {
  const { reset } = useSurveyStore()

  useEffect(() => {
    // Reset the survey store when user lands on thank you page
    const timer = setTimeout(() => {
      reset()
    }, 1000)
    return () => clearTimeout(timer)
  }, [reset])

  return (
    <Container maxW="3xl" py="12">
      <VStack gap="8" align="center" textAlign="center">
        <Box
          bg="green.50"
          borderRadius="full"
          p="8"
          border="2px"
          borderColor="green.200"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <LuCheck size={80} color="#22c55e" strokeWidth={3} />
        </Box>

        <VStack gap="4" maxW="2xl">
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            color="blue.900"
            textTransform="uppercase"
          >
            Application Submitted!
          </Heading>
          
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600">
            Thank you for completing your insurance quote application.
          </Text>
        </VStack>

        <Box
          bg="blue.50"
          p="6"
          borderRadius="xl"
          border="1px"
          borderColor="blue.100"
          maxW="2xl"
          w="full"
        >
          <Heading as="h2" size="md" mb="3" color="blue.900">
            WHAT HAPPENS NEXT?
          </Heading>
          <VStack gap="3" align="start">
            <Text fontSize="md" color="gray.700" textAlign="left">
              📧 You&apos;ll receive a confirmation email shortly
            </Text>
            <Text fontSize="md" color="gray.700" textAlign="left">
              📞 Our team will review your application and contact you within 1-2 business days
            </Text>
            <Text fontSize="md" color="gray.700" textAlign="left">
              💼 We&apos;ll work with you to find the best insurance plan for your needs
            </Text>
          </VStack>
        </Box>

        <VStack gap="4" pt="4">
          <Link href="/lms">
            <Button
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
              Start Another Quote
            </Button>
          </Link>
          
          <Link href="/">
            <Button
              variant="ghost"
              colorScheme="gray"
              fontSize="md"
            >
              Return to Home
            </Button>
          </Link>
        </VStack>

        <Box pt="8">
          <Text fontSize="sm" color="gray.500">
            Questions? Contact us at{' '}
            <Text as="span" color="blue.500" fontWeight="600">
              support@insurance.com
            </Text>
            {' '}or call{' '}
            <Text as="span" color="blue.500" fontWeight="600">
              1-800-555-0123
            </Text>
          </Text>
        </Box>
      </VStack>
    </Container>
  )
}

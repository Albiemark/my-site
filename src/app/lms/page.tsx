import Link from 'next/link'
import { Box, Heading, Text, VStack, Container, Button, Icon, Flex } from '@chakra-ui/react'
import { LuClipboardCheck, LuShield, LuClock } from 'react-icons/lu'

export default function LMSPage() {
  return (
    <Container maxW="4xl" py="8">
      <VStack gap="8" align="stretch">
        {/* Hero Section */}
        <Box textAlign="center" py="8">
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            color="blue.900"
            mb="4"
            textTransform="uppercase"
          >
            Get Your Insurance Quote
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="black" fontWeight="medium" maxW="2xl" mx="auto">
            Answer a few quick questions to receive a personalized insurance quote tailored to your needs
          </Text>
        </Box>

        {/* Features Grid */}
        <Flex
          gap="6"
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          justify="center"
        >
          <Box
            flex="1"
            minW="200px"
            p="6"
            bg="blue.50"
            borderRadius="lg"
            textAlign="center"
            border="1px"
            borderColor="blue.100"
          >
            <Icon fontSize="3xl" color="blue.500" mb="3">
              <LuClock />
            </Icon>
            <Heading as="h3" size="sm" mb="2" color="blue.900">
              Quick & Easy
            </Heading>
            <Text fontSize="sm" color="black" fontWeight="medium">
              Complete in 5 minutes
            </Text>
          </Box>

          <Box
            flex="1"
            minW="200px"
            p="6"
            bg="blue.50"
            borderRadius="lg"
            textAlign="center"
            border="1px"
            borderColor="blue.100"
          >
            <Icon fontSize="3xl" color="blue.500" mb="3">
              <LuShield />
            </Icon>
            <Heading as="h3" size="sm" mb="2" color="blue.900">
              Secure & Private
            </Heading>
            <Text fontSize="sm" color="black" fontWeight="medium">
              Your data is protected
            </Text>
          </Box>

          <Box
            flex="1"
            minW="200px"
            p="6"
            bg="blue.50"
            borderRadius="lg"
            textAlign="center"
            border="1px"
            borderColor="blue.100"
          >
            <Icon fontSize="3xl" color="blue.500" mb="3">
              <LuClipboardCheck />
            </Icon>
            <Heading as="h3" size="sm" mb="2" color="blue.900">
              Personalized
            </Heading>
            <Text fontSize="sm" color="black" fontWeight="medium">
              Quotes tailored to you
            </Text>
          </Box>
        </Flex>

        {/* Process Steps */}
        <Box
          bg="white"
          p="8"
          borderRadius="xl"
          border="1px"
          borderColor="gray.200"
          boxShadow="sm"
        >
          <Heading as="h2" size="md" mb="6" color="blue.900" textAlign="center">
            HOW IT WORKS
          </Heading>
          <VStack gap="4" align="stretch">
            <Flex gap="4" align="start">
              <Box
                minW="8"
                h="8"
                bg="blue.500"
                color="white"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontWeight="bold"
              >
                1
              </Box>
              <Box>
                <Heading as="h3" size="sm" mb="1" color="blue.900">
                  Personal Information
                </Heading>
                <Text fontSize="sm" color="black" fontWeight="medium">
                  Tell us about yourself
                </Text>
              </Box>
            </Flex>

            <Flex gap="4" align="start">
              <Box
                minW="8"
                h="8"
                bg="blue.500"
                color="white"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontWeight="bold"
              >
                2
              </Box>
              <Box>
                <Heading as="h3" size="sm" mb="1" color="blue.900">
                  Insurance Needs
                </Heading>
                <Text fontSize="sm" color="black" fontWeight="medium">
                  Select your coverage preferences
                </Text>
              </Box>
            </Flex>

            <Flex gap="4" align="start">
              <Box
                minW="8"
                h="8"
                bg="blue.500"
                color="white"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontWeight="bold"
              >
                3
              </Box>
              <Box>
                <Heading as="h3" size="sm" mb="1" color="blue.900">
                  Health History
                </Heading>
                <Text fontSize="sm" color="black" fontWeight="medium">
                  Share relevant health information
                </Text>
              </Box>
            </Flex>

            <Flex gap="4" align="start">
              <Box
                minW="8"
                h="8"
                bg="blue.500"
                color="white"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontWeight="bold"
              >
                4
              </Box>
              <Box>
                <Heading as="h3" size="sm" mb="1" color="blue.900">
                  Review & Submit
                </Heading>
                <Text fontSize="sm" color="black" fontWeight="medium">
                  Confirm your information and get your quote
                </Text>
              </Box>
            </Flex>
          </VStack>
        </Box>

        {/* CTA Button */}
        <Box textAlign="center" pt="4">
          <Link href="/lms/personal">
            <Button
              size="lg"
              bg="blue.500"
              color="white"
              px="12"
              py="7"
              fontSize="lg"
              fontWeight="bold"
              borderRadius="lg"
              _hover={{
                bg: 'blue.600',
                transform: 'translateY(-2px)',
                boxShadow: 'lg'
              }}
              transition="all 0.3s"
            >
              Start Your Quote →
            </Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  )
}

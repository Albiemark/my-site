import { Box, Flex, Text, Circle } from '@chakra-ui/react';

interface ProgressStepperProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export default function ProgressStepper({
  currentStep,
  steps
}: ProgressStepperProps) {
  return (
    <Box className="progress-stepper" position="relative" mb="2rem">
      {/* Horizontal line connecting steps */}
      <Box
        position="absolute"
        top="15px"
        left="10%"
        right="10%"
        height="2px"
        bg="blue.100" // light-blue
        zIndex={0}
      />

      <Flex className="steps" justify="space-between" width="100%" position="relative" zIndex={1}>
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          
          const stepNumberBg = isCompleted || isActive ? 'blue.500' : 'white';
          const stepNumberBorder = isCompleted || isActive ? 'blue.500' : 'blue.100';
          const stepNumberColor = isCompleted || isActive ? 'white' : 'blue.500';
          const stepLabelColor = isCompleted || isActive ? 'blue.500' : 'gray.600';

          return (
            <Flex
              key={step}
              className="step"
              direction="column"
              align="center"
              flex="1"
              textAlign="center"
              position="relative"
            >
              <Circle
                size="30px"
                bg={stepNumberBg}
                border="2px solid"
                borderColor={stepNumberBorder}
                fontWeight="700"
                color={stepNumberColor}
                transition="all 0.3s"
                zIndex={1}
              >
                {index + 1}
              </Circle>
              <Text mt="0.5rem" fontSize="0.9rem" color={stepLabelColor} fontWeight={isCompleted ? '600' : 'normal'}>
                {step}
              </Text>
            </Flex>
          )
        })}
      </Flex>
    </Box>
  )
}
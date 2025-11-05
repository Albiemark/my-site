import React from 'react';
import {
  Box,
  Heading,
  Text,
  Input,
  Stack,
  Field,
  NativeSelectRoot,
  NativeSelectField,
} from '@chakra-ui/react';

interface QuestionCardProps {
  question: string;
  description?: string;
  inputType: 'text' | 'radio' | 'checkbox' | 'select';
  options?: string[];
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function QuestionCard({
  question,
  description,
  inputType,
  options,
  required,
  value,
  onChange,
  error
}: QuestionCardProps) {
  const isInvalid = !!error;

  return (
    <Field.Root invalid={isInvalid}>
      <Box
        border="1px"
        borderColor="blue.100"
        borderRadius="xl"
        boxShadow="0 4px 10px rgba(0, 51, 102, 0.05)"
        transition="all 0.3s ease"
        _hover={{ boxShadow: '0 6px 15px rgba(0, 51, 102, 0.1)' }}
        overflow="hidden"
        bg="white"
      >
        <Heading
          as="h3"
          size="sm"
          p="1.25rem 1.5rem"
          bg="blue.50"
          borderBottom="1px"
          borderColor="blue.100"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          fontWeight="bold"
          textTransform="uppercase"
          color="blue.900"
        >
          {question}
          {required && <Text as="span" color="red.500" ml="0.25rem">*</Text>}
        </Heading>

        {description && (
          <Text color="black" fontWeight="medium" fontSize="sm" p="0 1.5rem 1rem 1.5rem">
            {description}
          </Text>
        )}

        {inputType === 'text' && (
          <Box
            borderTop="1px"
            borderColor="blue.100"
            p="1rem 1.5rem"
            w="full"
          >
            <Input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              required={required}
              border="1px"
              borderColor="blue.200"
              borderRadius="md"
              p="0.5rem 0.75rem"
              width="100%"
              maxWidth="none"
              minWidth="0"
              bg="white"
              color="black"
              flex="1"
              style={{ width: '100%', maxWidth: 'none' }}
              _focus={{ 
                borderColor: 'blue.500',
                boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)'
              }}
            />
          </Box>
        )}

        {inputType === 'select' && (
          <NativeSelectRoot>
            <NativeSelectField
              value={value}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
              p="1rem 1.5rem"
              borderTop="1px"
              borderColor="blue.100"
              bg="white"
              color="black"
            >
              <option value="" disabled>Select an option</option>
              {options?.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </NativeSelectField>
          </NativeSelectRoot>
        )}

        {inputType === 'radio' && (
          <Box borderTop="1px" borderColor="blue.100" p="1rem 1.5rem">
            <Stack direction="column" gap="3">
              {options?.map((option) => (
                <Box 
                  key={option}
                  onClick={() => onChange(option)}
                  display="flex"
                  alignItems="center"
                  cursor="pointer"
                  p="2"
                  borderRadius="md"
                  _hover={{
                    bg: 'blue.50'
                  }}
                >
                  <Box
                    w="4"
                    h="4"
                    borderRadius="full"
                    borderWidth="2px"
                    borderColor={value === option ? 'blue.500' : 'gray.300'}
                    mr="3"
                    position="relative"
                  >
                    {value === option && (
                      <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        w="2"
                        h="2"
                        borderRadius="full"
                        bg="blue.500"
                      />
                    )}
                  </Box>
                  <Text color="black" fontWeight="medium">{option}</Text>
                </Box>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
      {isInvalid && (
        <Field.ErrorText mt="0.5rem" fontSize="sm" color="red.400">
          {error}
        </Field.ErrorText>
      )}
    </Field.Root>
  )
}

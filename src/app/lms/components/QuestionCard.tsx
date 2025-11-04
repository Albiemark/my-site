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
import { Radio, RadioGroup } from './ui/radio';

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
          <Text color="gray.600" fontSize="sm" p="0 1.5rem 1rem 1.5rem">
            {description}
          </Text>
        )}

        {inputType === 'text' && (
          <Box
            borderTop="1px"
            borderColor="gray.200"
            p="1rem 1.5rem"
            w="full"
          >
            <Input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              required={required}
              border="1px"
              borderColor="gray.300"
              borderRadius="md"
              p="0.5rem 0.75rem"
              width="100%"
              maxWidth="none"
              minWidth="0"
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
              borderColor="gray.200"
            >
              <option value="" disabled>Select an option</option>
              {options?.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </NativeSelectField>
          </NativeSelectRoot>
        )}

        {inputType === 'radio' && (
          <RadioGroup value={value} onValueChange={(details: { value: string | null }) => details.value && onChange(details.value)} name={question}>
            <Stack direction="column" p="1rem 1.5rem" gap="3" borderTop="1px" borderColor="gray.200">
              {options?.map((option) => (
                <Radio
                  key={option}
                  value={option}
                  colorPalette="blue"
                >
                  {option}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        )}
      </Box>
      {isInvalid && (
        <Field.ErrorText mt="0.5rem" fontSize="sm">
          {error}
        </Field.ErrorText>
      )}
    </Field.Root>
  )
}

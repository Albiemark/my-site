# Test Data Feature Documentation

## Overview
The LMS includes a test data feature that allows developers to quickly populate form fields with sample data for testing purposes.

## Implementation
- Available on all form pages
- Accessed via "Fill Test Data" button
- Populates fields with realistic sample values
- Helps verify form validation and submission

## Test Data Values

### Personal Information
- Full Name: "Test User"
- Email: "test@example.com"
- Phone: "555-123-4567"

### Insurance Needs
- Insurance Type: "Health"
- Coverage Amount: "$500k"

### Health History
- Pre-existing Conditions: "No"
- Tobacco Use: "No"

## Usage Guidelines
1. Only enabled in development mode
2. Should be removed before production deployment
3. Useful for:
   - Manual testing
   - Debugging
   - Demonstration purposes

## Removal Instructions
To disable before production:
1. Remove test buttons from all pages
2. Remove test button styles
3. Verify no test data functions remain
# LMS Test Cases

## Test Scenarios

### 1. Complete Form Submission
1. Navigate to http://localhost:3000/lms
2. Fill out personal information
3. Proceed to insurance needs
4. Select insurance preferences
5. Complete health history
6. Review all information
7. Submit form
8. Verify thank-you page appears

### 2. Form Validation
1. Attempt to proceed without required fields
2. Verify error messages appear
3. Enter invalid email format
4. Verify email validation works

### 3. Navigation Flow
1. Test back button between steps
2. Verify progress stepper updates
3. Test direct URL access to steps
4. Verify proper redirection

### 4. Data Persistence
1. Refresh page mid-form
2. Verify data is preserved
3. Test reset functionality
4. Verify all data clears

### 5. Submission Handling
1. Test successful submission
2. Simulate network failure
3. Verify error handling
4. Test resubmission after error

## Test Data

```json
{
  "fullName": "Test User",
  "email": "test@example.com",
  "phone": "555-123-4567",
  "insuranceType": "Health",
  "coverageAmount": "$500k",
  "hasConditions": "No",
  "tobaccoUse": "No"
}
```

## Expected Results
- All steps should complete without errors
- Data should persist between steps
- Validation should prevent invalid submissions
- Thank-you page should appear after successful submission
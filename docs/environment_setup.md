# LMS Environment Setup Guide

## Development Environment
1. Create `.env.local` file in project root
2. Add required variables:
```env
NODE_ENV=development
```

## Production Environment
1. Set environment variables in deployment platform (Vercel/Netlify)
2. Required variables:
```env
NODE_ENV=production
```

## Environment-Specific Behavior
| Feature               | Development | Production |
|-----------------------|-------------|------------|
| Test data buttons     | Visible     | Hidden     |
| Debug logging         | Enabled     | Disabled   |
| Analytics             | Mocked      | Real       |

## Verification
Check current environment:
```javascript
console.log('Running in:', process.env.NODE_ENV)
```

## Build Process
1. Development build:
```bash
npm run dev
```
2. Production build:
```bash
npm run build
```

## Testing Production Locally
```bash
npm run build && npm run start
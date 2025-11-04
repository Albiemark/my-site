# LMS Deployment Guide

## Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure project settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Node Version: 18.x
3. Set environment variables:
   - `NODE_ENV=production`

## Environment Variables
| Variable       | Required | Description               |
|----------------|----------|---------------------------|
| `NODE_ENV`     | Yes      | `production` or `development` |

## Deployment Steps
1. Push changes to main branch
2. Vercel will automatically:
   - Install dependencies
   - Run build
   - Deploy to production

## Post-Deployment Checks
1. Verify test buttons are hidden
2. Test form submission flow
3. Check console for errors
4. Verify analytics are working

## Rollback Procedure
1. Go to Vercel dashboard
2. Select previous deployment
3. Click "Promote to Production"
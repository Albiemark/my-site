# LMS Subdomain Implementation Plan

[Previous sections remain unchanged...]

## Deployment Timeline
```mermaid
gantt
    title Deployment Phases
    dateFormat  YYYY-MM-DD
    section Preparation
    DNS Configuration       :done, des1, 2025-11-05, 1d
    Vercel Setup            :active, des2, 2025-11-06, 1d
    section Development
    Middleware Implementation : des3, 2025-11-07, 2d
    LMS Page Structure      : des4, 2025-11-09, 2d
    section Testing
    Local Testing           : des5, 2025-11-11, 1d
    Staging Deployment      : des6, 2025-11-12, 1d
    section Production
    DNS Propagation         : des7, 2025-11-13, 1d
    Final Verification      : des8, 2025-11-14, 1d
```

## Rollback Procedures
1. **DNS Rollback**:
   - Remove CNAME record
   - Update nameservers if needed

2. **Code Rollback**:
```bash
git revert HEAD # Undo last commit
vercel --prod   # Redeploy previous version
```

3. **Vercel Rollback**:
   - Use Vercel dashboard to revert to previous deployment

## Monitoring Setup
1. **Required Metrics**:
   - Subdomain traffic volume
   - Error rates (404s, 500s)
   - Response times

2. **Vercel Analytics**:
   - Enable in project settings
   - Set up alerts for errors

3. **Custom Monitoring**:
```typescript
// _middleware.ts
export function reportError(error: Error) {
  fetch('https://api.vercel.com/v1/events', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.VERCEL_ANALYTICS_TOKEN}`
    },
    body: JSON.stringify({
      event: 'subdomain_error',
      payload: { error: error.message }
    })
  })
}
```

## Next Steps
1. Verify DNS access
2. Create LMS page templates
3. Implement middleware
4. Test locally
5. Deploy to staging
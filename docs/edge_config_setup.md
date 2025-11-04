# Vercel Edge Config Setup Guide

## Prerequisites
1. Vercel project with Edge Functions enabled
2. Vercel CLI installed (`npm i -g vercel`)

## Setup Steps
1. Create Edge Config:
```bash
vercel edge-config create my-config
```

2. Add connection string to environment variables:
```env
EDGE_CONFIG_ID=ecfg_xxxxxxxxxxxxxxxx
EDGE_CONFIG_TOKEN=ecpt_xxxxxxxxxxxxxxxx
```

3. Add items to config:
```bash
vercel edge-config items set ecfg_xxxxxxxxxxxxxxxx '{"visit_counter":"0"}'
```

## Verification
1. Check config items:
```bash
vercel edge-config items get ecfg_xxxxxxxxxxxxxxxx
```

2. Test locally:
```bash
vercel dev
```

## Troubleshooting
- Ensure proper permissions for the token
- Verify network connectivity to Vercel API
- Check for typos in config IDs
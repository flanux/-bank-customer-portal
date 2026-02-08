# Customer Portal - Public Facing

**Repo**: `flanux/customer-portal`  
**Access**: Public Internet  
**URL**: https://online.flanuxbank.com  

## Quick Start

```bash
npm install
npm start
```

Runs on port 3000.

## Environment Setup

```bash
cp .env.example .env
```

Edit `.env`:
```
REACT_APP_API_URL=https://api.flanuxbank.com/customer
```

## Build for Production

```bash
npm run build
```

Deploy `build/` folder to AWS S3 + CloudFront.

## Security

- Only accesses customer-owned data
- Rate limited: 100 req/min per user
- WAF protected
- DDoS mitigation via CloudFront

## API Restrictions

Can ONLY call:
- `/auth/login`
- `/accounts/my`
- `/transactions/my`
- `/transfers` (own accounts)
- `/loans/my`
- `/cards/my`

CANNOT access:
- Admin endpoints
- Other customers' data
- Branch operations
- Compliance tools

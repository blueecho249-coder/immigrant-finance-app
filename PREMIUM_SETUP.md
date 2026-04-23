# Premium Feature Setup Guide

## Quick Start

Your premium claim feature is ready. Users can click **"I've already purchased"** on the Account page to unlock premium access.

## Deployment Steps

### 1. Deploy to Vercel (GitHub → Vercel)

Your code is already on GitHub. Connect to Vercel:

1. Go to https://vercel.com/new
2. Import your GitHub repo: `blueecho249-coder/immigrant-finance-app`
3. Framework Preset: **Vite**
4. Click **Deploy**

### 2. Set Environment Variables

After deployment, go to **Project Settings → Environment Variables**:

#### Option A: Simple Email List (Easiest)
Add comma-separated emails of users who purchased:
```
VERIFIED_PREMIUM_EMAILS=purchaser1@email.com,purchaser2@email.com
```

#### Option B: Gumroad API (Automated)
For automatic verification via Gumroad:
```
GUMROAD_ACCESS_TOKEN=your_token_here
GUMROAD_PRODUCT_ID=your_product_id
```

**Get Gumroad Token:**
1. https://app.gumroad.com/settings/developer
2. Create Access Token
3. Find Product ID in your product URL: `gumroad.com/l/PRODUCT_ID`

### 3. Redeploy

After adding env variables, redeploy:
- **Git method:** Push any commit
- **Dashboard:** Click "Redeploy" on latest deployment

## Managing Premium Users

### Add a user manually (Option A):
1. Go to Vercel Dashboard → Environment Variables
2. Edit `VERIFIED_PREMIUM_EMAILS`
3. Add new email with comma separator
4. Redeploy

### Add via script (local development):
```bash
node scripts/add-premium-user.js user@example.com
```

## Testing the Feature

1. Open your deployed app
2. Go to **Account** page
3. Click **"I've already purchased"**
4. Enter a verified email
5. Should show **"Premium Unlocked!"**

## How It Works

```
User clicks "I've already purchased"
        ↓
Modal opens, user enters email
        ↓
Frontend calls /api/verify-purchase
        ↓
API checks against VERIFIED_PREMIUM_EMAILS
        ↓
If match → Unlock premium access
```

## Security Notes

- Emails are normalized (lowercase, trimmed)
- API runs server-side (users can't see the email list)
- In production, use Gumroad API for real-time verification
- Consider adding rate limiting for the API endpoint

## Troubleshooting

**"Purchase not found" error:**
- Email not in `VERIFIED_PREMIUM_EMAILS`
- Check spelling and capitalization
- Verify env variable is deployed

**API not working:**
- Check Vercel Functions logs
- Verify env variables are set
- Ensure `vercel.json` has API route config

**Changes not reflecting:**
- Redeploy after changing env variables
- Clear browser cache
- Check deployment succeeded

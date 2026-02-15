# 🚀 SAAAF Demo Setup Guide

This guide will help you run the SAAAF demo quickly without needing to set up AWS Bedrock or Supabase.

## ✅ What's Been Set Up

The demo is now configured to run with:
- **Demo Mode Enabled**: Uses mock data from `lib/demo-data.ts`
- **No Database Required**: Works without Supabase connection
- **No AWS Required**: Works without AWS Bedrock credentials
- **Sample Reports**: 5 pre-loaded demo reports with different categories and severities

## 🏃 Quick Start

1. **Install Dependencies** (if not already done):
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Your Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 What You'll See

The demo includes:
- **5 Sample Reports**: Pothole, Garbage, Streetlight, Fire Hazard, Water Leakage
- **Interactive Map**: View reports on a map with severity-based markers
- **Feed View**: Scroll through reports in a card-based feed
- **Statistics Dashboard**: See open, in-progress, and resolved reports
- **Emergency Alerts**: High-severity reports (9+) show in a banner

## 🔧 Switching Between Demo and Production

### Demo Mode (Current Setting)
In `app/page.tsx`, line 8:
```typescript
const DEMO_MODE = true; // Enable demo mode with mock data
```

### Production Mode
To use real Supabase data:
1. Set `DEMO_MODE = false` in `app/page.tsx`
2. Update `.env.local` with your real credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_actual_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key
   AWS_ACCESS_KEY_ID=your_actual_aws_key
   AWS_SECRET_ACCESS_KEY=your_actual_aws_secret
   AWS_REGION=us-east-1
   ```

## 📝 Demo Data Details

The mock reports are located in `lib/demo-data.ts` and include:

1. **Pothole** (Severity: 7) - Open
2. **Garbage Overflow** (Severity: 5) - In Progress
3. **Broken Streetlight** (Severity: 4) - Open
4. **Fire Hazard** (Severity: 9) - Open (Shows in emergency banner)
5. **Water Leakage** (Severity: 6) - Resolved

## 🎨 Features to Explore

- **Map/Feed Toggle**: Switch between map and list views
- **Category Filters**: Filter reports by category
- **Report Cards**: Click on reports to see details
- **Upvote System**: See community engagement metrics
- **Status Badges**: Visual indicators for report status

## ⚠️ Known Limitations in Demo Mode

- New report submission requires AWS Bedrock (disabled in demo)
- Officer dashboard requires Supabase authentication
- Real-time updates are not available
- Image uploads won't work without storage bucket

## 🔄 Next Steps

To enable full functionality:
1. Set up a Supabase project
2. Run the schema from `supabase_schema.sql`
3. Configure AWS Bedrock access
4. Update environment variables
5. Set `DEMO_MODE = false`

## 📚 Additional Resources

- [Full README](./README.md)
- [Project Requirements](./requirements.md)
- [Deployment Guide](./docs/DEPLOY_FIX_PLAN.md)

---

**Happy Testing! 🎉**

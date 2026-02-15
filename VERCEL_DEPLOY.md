# 🚀 Deploy SAAAF to Vercel

## Quick Deploy

### Option 1: Using Vercel CLI (Recommended)

```bash
# Login to Vercel (if not already logged in)
npx vercel login

# Deploy to production
npx vercel --prod
```

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

## Environment Variables

Since the app is in DEMO_MODE, no environment variables are required for deployment.

If you want to use production mode later, add these in Vercel Dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
   AWS_ACCESS_KEY_ID=your_aws_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret
   AWS_REGION=us-east-1
   ```

## Vercel Configuration

The project includes `vercel.json` with:
- Build command: `npm run build`
- Install command: `npm install --legacy-peer-deps`
- Framework: Next.js
- Output directory: `.next`

## Deployment Steps

1. **Login to Vercel**
   ```bash
   npx vercel login
   ```

2. **Deploy**
   ```bash
   npx vercel --prod
   ```

3. **Follow prompts**:
   - Set up and deploy? **Y**
   - Which scope? (Select your account)
   - Link to existing project? **N** (first time)
   - Project name? **saaaf** (or your choice)
   - Directory? **./** (press Enter)
   - Override settings? **N**

4. **Wait for deployment** (2-3 minutes)

5. **Get your URL**
   - Vercel will provide a URL like: `https://saaaf-xxx.vercel.app`

## Post-Deployment

After deployment:
- ✅ Demo mode will work immediately
- ✅ 5 mock reports will be visible
- ✅ All features functional
- ✅ No database required

## Troubleshooting

### Build Fails
- Check Node.js version in Vercel settings (set to 20.x)
- Verify `vercel.json` has `--legacy-peer-deps` in install command

### Environment Variables Not Working
- Ensure variables are set in Vercel Dashboard
- Redeploy after adding variables

### 404 Errors
- Check that `outputDirectory` is set to `.next`
- Verify Next.js build completed successfully

## Custom Domain (Optional)

1. Go to project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Continuous Deployment

If you push to Git:
- Vercel auto-deploys on every push to main branch
- Preview deployments for pull requests
- Instant rollbacks available

---

**Ready to deploy!** Run `npx vercel --prod` to get started.

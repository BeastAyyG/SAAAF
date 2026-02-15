# 🚀 Deploy SAAAF to Vercel - Complete Guide

## 🎯 Three Ways to Deploy

### Method 1: Automated Script (Easiest)

```bash
# First, login to Vercel
npx vercel login

# Then run the deployment script
./deploy.sh
```

### Method 2: Manual CLI Deployment

```bash
# Login to Vercel
npx vercel login

# Deploy to production
npx vercel --prod --yes
```

### Method 3: GitHub + Vercel Dashboard (Recommended for Continuous Deployment)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure (Auto-detected)**:
   - Framework: Next.js ✅
   - Build Command: `npm run build` ✅
   - Install Command: `npm install --legacy-peer-deps` ✅
   - Output Directory: `.next` ✅

4. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes
   - Get your live URL!

## 📋 Pre-Deployment Checklist

- [✓] Demo mode enabled (`DEMO_MODE = true` in `app/page.tsx`)
- [✓] Dependencies installed
- [✓] `vercel.json` configured
- [✓] `.env.local` created (optional for demo)
- [✓] No build errors

## 🔑 Environment Variables (Optional for Demo)

The app works in demo mode without any environment variables!

To enable production features later:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add these variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
```

3. Redeploy for changes to take effect

## 🎨 What Gets Deployed

Your deployed app will include:
- ✅ 5 demo reports (Pothole, Garbage, Streetlight, Fire, Water)
- ✅ Interactive map with markers
- ✅ Feed view with report cards
- ✅ Emergency alert banner
- ✅ Statistics dashboard
- ✅ Mobile-responsive design
- ✅ Category filters
- ✅ Map/Feed toggle

## 📊 Deployment Timeline

1. **Build Phase** (1-2 min)
   - Installing dependencies
   - Building Next.js app
   - Optimizing assets

2. **Deploy Phase** (30 sec)
   - Uploading to Vercel CDN
   - Configuring routes
   - Generating preview

3. **Live!** 🎉
   - Your app is accessible worldwide
   - HTTPS enabled automatically
   - CDN-optimized delivery

## 🌐 After Deployment

You'll get a URL like:
```
https://saaaf-xxx.vercel.app
```

Or with custom domain:
```
https://your-domain.com
```

### Test Your Deployment

1. Open the URL in your browser
2. Verify you see 5 demo reports
3. Test map view toggle
4. Check mobile responsiveness
5. Verify emergency banner appears

## 🔧 Vercel Project Settings

Recommended settings in Vercel Dashboard:

### Build & Development Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Install Command**: `npm install --legacy-peer-deps`
- **Output Directory**: `.next`
- **Node.js Version**: 20.x (recommended)

### Environment Variables
- None required for demo mode
- Add production credentials when ready

### Domains
- Auto-generated: `saaaf-xxx.vercel.app`
- Add custom domain in settings

## 🐛 Troubleshooting

### Build Fails with Dependency Errors
**Solution**: Ensure `vercel.json` has `--legacy-peer-deps`:
```json
{
  "installCommand": "npm install --legacy-peer-deps"
}
```

### Node Version Error
**Solution**: Set Node.js version to 20.x in Vercel settings:
- Go to Settings → General → Node.js Version
- Select `20.x`
- Redeploy

### 404 on Routes
**Solution**: Verify Next.js configuration:
- Check `next.config.ts` is present
- Ensure `outputDirectory` is `.next`
- Redeploy

### Environment Variables Not Working
**Solution**: 
- Add variables in Vercel Dashboard (not `.env.local`)
- Redeploy after adding variables
- Check variable names match exactly

### Demo Data Not Showing
**Solution**: Verify `DEMO_MODE = true` in `app/page.tsx`

## 🔄 Continuous Deployment

Once connected to GitHub:
- **Auto-deploy** on every push to main
- **Preview deployments** for pull requests
- **Instant rollbacks** to previous versions
- **Branch previews** for testing

## 📈 Post-Deployment Optimization

### Performance
- Vercel automatically optimizes images
- CDN caching enabled globally
- Edge functions for fast API routes

### Monitoring
- View analytics in Vercel Dashboard
- Monitor build times and errors
- Track deployment history

### Scaling
- Automatic scaling based on traffic
- No configuration needed
- Pay-as-you-grow pricing

## 🎯 Quick Commands Reference

```bash
# Login to Vercel
npx vercel login

# Deploy to production
npx vercel --prod --yes

# Deploy to preview
npx vercel

# Check deployment status
npx vercel ls

# View logs
npx vercel logs

# Remove deployment
npx vercel rm [deployment-url]
```

## 🌟 Next Steps After Deployment

1. **Share your URL** with stakeholders
2. **Test all features** on mobile and desktop
3. **Monitor performance** in Vercel Dashboard
4. **Add custom domain** (optional)
5. **Set up production database** when ready
6. **Configure AWS Bedrock** for AI features
7. **Disable demo mode** for production use

## 📞 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Project Docs**: See `README.md` and `DEMO_SETUP.md`

---

## 🚀 Ready to Deploy?

Choose your method:

**Quick Deploy (CLI)**:
```bash
npx vercel login && npx vercel --prod --yes
```

**Or use the script**:
```bash
./deploy.sh
```

**Or connect via GitHub**:
Visit [vercel.com/new](https://vercel.com/new)

---

**Your SAAAF app will be live in minutes! 🎉**

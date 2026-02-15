#!/bin/bash

echo "🚀 Deploying SAAAF to Vercel..."
echo ""
echo "This script will guide you through the deployment process."
echo ""

# Check if user is logged in to Vercel
echo "Step 1: Checking Vercel authentication..."
if ! npx vercel whoami > /dev/null 2>&1; then
    echo "❌ Not logged in to Vercel"
    echo "Please run: npx vercel login"
    echo "Then run this script again."
    exit 1
fi

echo "✅ Logged in to Vercel"
echo ""

# Deploy to Vercel
echo "Step 2: Deploying to Vercel..."
echo "This may take 2-3 minutes..."
echo ""

npx vercel --prod --yes

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Your SAAAF app is now live on Vercel!"
echo "Check the URL above to access your deployed app."

# Vercel Deployment Setup Guide

Your blog is now in GitHub with CI/CD workflows configured for both **staging** and **main** branches!

## 🎯 Current Setup

✅ **GitHub Repository:** https://github.com/Brigadirk/dirkswebsite  
✅ **Main Branch:** Production-ready code  
✅ **Staging Branch:** Testing/preview environment  
✅ **CI/CD Workflows:** Configured and ready  

## 🚀 Quick Vercel Setup (Recommended - Easiest)

### Option 1: Automatic Vercel Integration (5 minutes)

This is the easiest way - Vercel handles everything automatically:

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select `Brigadirk/dirkswebsite`
   - Click "Import"

3. **Configure:**
   - Framework Preset: **Astro** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - **No changes needed!**

4. **Deploy:**
   - Click "Deploy"
   - Wait ~1 minute
   - Done! 🎉

**What you get:**
- Production: Deploys from `main` branch
- Preview: Automatic preview for every commit/PR
- Custom domain support
- Automatic HTTPS
- Global CDN

### Option 2: Manual Vercel CLI Setup (Advanced)

If you want to use the GitHub Actions workflows I created:

#### Step 1: Get Vercel Credentials

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link your project (run in your blog directory)
cd /Users/dirk/Documents/Code/blog
vercel link

# Follow prompts:
# - Link to existing project? No
# - Project name: dirkswebsite
# - Directory: ./
# - Overwrite settings? Yes
```

#### Step 2: Get Required Tokens

```bash
# Get your Vercel token
# Go to: https://vercel.com/account/tokens
# Create new token, copy it

# Get your project details
cat .vercel/project.json
# This shows your VERCEL_ORG_ID and VERCEL_PROJECT_ID
```

#### Step 3: Add GitHub Secrets

Go to: https://github.com/Brigadirk/dirkswebsite/settings/secrets/actions

Add these secrets:
- `VERCEL_TOKEN` - Your Vercel token
- `VERCEL_ORG_ID` - From `.vercel/project.json`
- `VERCEL_PROJECT_ID` - From `.vercel/project.json`

#### Step 4: Enable Workflows

The workflows are already created! They will:
- **CI/CD Workflow:** Build and test on every push
- **Vercel Deploy Workflow:** Deploy staging/production automatically

## 📋 Workflow Details

### `ci-cd.yml` - Build and Test
- Triggers on push/PR to `main` or `staging`
- Runs on Node.js 18.20.8
- Builds the project
- Uploads artifacts
- Ready for deployment

### `vercel-deploy.yml` - Deployment
- **Staging Branch:** Deploys preview to Vercel
- **Main Branch:** Deploys to production
- Automatic environment URLs
- PR comments with preview links

## 🌿 Branch Strategy

```
main (production)
├── Protected branch
├── Deploys to: your-site.vercel.app
└── Requires passing CI

staging (preview)
├── Testing environment
├── Deploys to: preview-*.vercel.app
└── Safe for experiments
```

## 📝 Workflow

### For New Features:
```bash
# Work on staging
git checkout staging
# Make changes
git add .
git commit -m "Add new feature"
git push origin staging
# ✅ Auto-deploys to staging preview

# When ready for production
git checkout main
git merge staging
git push origin main
# ✅ Auto-deploys to production
```

### For Hotfixes:
```bash
# Quick fix on main
git checkout main
# Make changes
git add .
git commit -m "Fix urgent issue"
git push origin main
# ✅ Auto-deploys to production
```

## 🔧 Configuration Files

Created for you:
- `.github/workflows/ci-cd.yml` - Build and test workflow
- `.github/workflows/vercel-deploy.yml` - Deployment workflow
- Both staging and production environments

## ✅ What's Working Now

- ✅ GitHub repository created
- ✅ Main branch pushed
- ✅ Staging branch created
- ✅ CI/CD workflows configured
- ✅ Ready for Vercel deployment

## 🎯 Next Steps

### Quick Path (Recommended):
1. Go to [vercel.com](https://vercel.com)
2. Import `Brigadirk/dirkswebsite`
3. Click Deploy
4. Done! Your site is live

### Advanced Path:
1. Follow "Option 2" above
2. Add GitHub secrets
3. Push a commit to test workflows
4. Watch automatic deployments

## 🌐 After Deployment

Once deployed, you'll get:
- **Production URL:** `dirkswebsite.vercel.app` (or custom domain)
- **Staging URL:** `staging-dirkswebsite.vercel.app`
- **Preview URLs:** Unique URL for each PR

### Add Custom Domain:
1. Go to Vercel dashboard
2. Project Settings → Domains
3. Add your domain
4. Update DNS records as instructed

## 📊 Monitoring

Vercel provides:
- Real-time deployment logs
- Build analytics
- Performance metrics
- Error tracking

## 🔄 Automatic Updates

Every time you push:
- To `staging`: New preview deployment
- To `main`: Production deployment
- Creates PR: Preview deployment with comment

## 🛠️ Troubleshooting

### Deployment fails?
- Check Node.js version is 18.20.8+ in workflow
- Verify build command: `npm run build`
- Check output directory: `dist`

### Secrets not working?
- Verify secret names exactly match
- Re-generate Vercel token if expired
- Check project is linked correctly

### Build succeeds but site errors?
- Check Giscus configuration
- Verify environment variables
- Test build locally first

## 📚 Resources

- [Vercel Docs](https://vercel.com/docs)
- [GitHub Actions Docs](https://docs.github.com/actions)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/vercel/)

## 🎉 Summary

You now have:
- ✅ Code on GitHub
- ✅ Two branches (main, staging)
- ✅ Automated CI/CD workflows
- ✅ Ready for one-click Vercel deployment

**Recommended:** Use Vercel's automatic GitHub integration. It's the easiest and handles everything for you automatically!

Just go to vercel.com, import your repo, and click deploy. That's it! 🚀

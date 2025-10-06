# Deployment Guide

This Astro blog can be deployed to various platforms. Here are the most popular options:

## Vercel (Recommended)

Vercel offers zero-configuration deployment for Astro projects.

### Steps:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Astro and configure everything
6. Click "Deploy"

### Environment Variables:

No environment variables needed for basic setup. After deployment:
- Update Giscus configuration in `src/components/Comments.tsx` with your production domain
- Update `astro.config.mjs` with your production URL

## Netlify

Netlify also provides excellent Astro support.

### Steps:

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

### netlify.toml (Optional)

Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18.20.8"
```

## Cloudflare Pages

### Steps:

1. Push your code to GitHub
2. Visit [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click "Create a project"
4. Select your repository
5. Configure build:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: 18.20.8 or higher
6. Click "Save and Deploy"

## GitHub Pages

### Steps:

1. Install the GitHub Pages adapter:
   ```bash
   npm install @astrojs/adapter-static
   ```

2. Update `astro.config.mjs`:
   ```javascript
   import { defineConfig } from 'astro/config';
   
   export default defineConfig({
     site: 'https://yourusername.github.io',
     base: '/your-repo-name',
   });
   ```

3. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
     workflow_dispatch:
   
   permissions:
     contents: read
     pages: write
     id-token: write
   
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: '18.20.8'
         
         - name: Install dependencies
           run: npm install
         
         - name: Build
           run: npm run build
         
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: ./dist
     
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v3
   ```

4. Enable GitHub Pages in repository settings

## Railway

### Steps:

1. Visit [railway.app](https://railway.app)
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo"
4. Select your repository
5. Railway will auto-detect and deploy

## Custom Server / VPS

Build locally and deploy the `dist` folder:

```bash
npm run build
```

Upload the `dist` folder to your server and serve with:
- Nginx
- Apache
- Caddy
- Any static file server

### Nginx Example:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/blog/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /404.html;
    }
}
```

## Post-Deployment Checklist

After deploying to any platform:

### 1. Update Site URL
Edit `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://your-actual-domain.com',
});
```

### 2. Configure Giscus
Update `src/components/Comments.tsx` with your GitHub repository:
```tsx
<Giscus
  repo="your-username/your-repo"
  repoId="YOUR_REPO_ID"
  category="General"
  categoryId="YOUR_CATEGORY_ID"
  // ...
/>
```

Get these values from [giscus.app](https://giscus.app)

### 3. Test Everything
- [ ] Homepage loads correctly
- [ ] Blog listing shows all posts
- [ ] Individual posts open properly
- [ ] Theme toggle works and persists
- [ ] Dark/light mode respects system preference
- [ ] Comments section appears (if Giscus configured)
- [ ] RSS feed works (`/rss.xml`)
- [ ] Sitemap generates (`/sitemap-index.xml`)
- [ ] Images load properly
- [ ] Mobile responsive design works

### 4. SEO Setup
- Update meta tags in posts
- Submit sitemap to Google Search Console
- Verify social media cards (Open Graph/Twitter)

### 5. Performance
- Run Lighthouse audit
- Check Core Web Vitals
- Test on various devices

## Domain Setup

### Custom Domain on Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Custom Domain on Netlify:
1. Go to Site Settings → Domain management
2. Add custom domain
3. Configure DNS

## Environment-Specific Builds

If you need different configs per environment:

```javascript
// astro.config.mjs
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: isProd ? 'https://yourdomain.com' : 'http://localhost:4321',
  // ...
});
```

## Continuous Deployment

All platforms mentioned support automatic deployment:
- Push to `main` branch → automatic deployment
- Pull requests → preview deployments
- Rollback to previous versions easily

## Troubleshooting

### Build fails with Node.js version error
Update Node.js version in platform settings to >= 18.20.8

### Images not loading
Check that `astro.config.mjs` has the correct `site` URL

### Comments not appearing
Verify Giscus configuration and that GitHub Discussions are enabled

### 404 on routes
Ensure your hosting platform is configured for SPA routing (though Astro is static, so this shouldn't be an issue)

## Need Help?

- [Astro Deployment Docs](https://docs.astro.build/en/guides/deploy/)
- [Vercel Astro Guide](https://vercel.com/guides/deploying-astro-with-vercel)
- [Netlify Astro Guide](https://docs.netlify.com/integrations/frameworks/astro/)

Happy deploying! 🚀

# Quick Setup Guide

## ⚠️ Important: Node.js Version

Your current Node.js version (**v18.18.0**) is below the required minimum (**18.20.8**). You have two options:

### Option 1: Upgrade Node.js (Recommended)

Using nvm:
```bash
nvm install 18.20.8
nvm use 18.20.8
```

Using fnm:
```bash
fnm install 18.20.8
fnm use 18.20.8
```

Or download from [nodejs.org](https://nodejs.org/)

### Option 2: Try Running Anyway (May Work)

Despite the version warning, the project might still work for development. Try:

```bash
npm run dev -- --host
```

If you see errors, you'll need to upgrade Node.js.

## Setting Up Giscus Comments

1. **Enable GitHub Discussions** on your repository:
   - Go to Settings → Features → Check "Discussions"

2. **Install Giscus App**:
   - Visit: https://github.com/apps/giscus
   - Install it for your repository

3. **Get Configuration**:
   - Go to: https://giscus.app/
   - Enter your repository name
   - Select "Discussions" as the mapping
   - Choose a category (or create "Comments")
   - Select your preferred theme options
   - Copy the generated configuration

4. **Update Comments Component**:
   - Edit: `src/components/Comments.tsx`
   - Replace these values:
     ```tsx
     repo="your-username/your-repo"
     repoId="YOUR_REPO_ID"
     category="General"
     categoryId="YOUR_CATEGORY_ID"
     ```

## Customizing Your Blog

### Site Information
Edit `src/consts.ts`:
```typescript
export const SITE_TITLE = 'Your Blog Name';
export const SITE_DESCRIPTION = 'Your description';
```

### Site URL
Edit `astro.config.mjs`:
```javascript
site: 'https://yourdomain.com',
```

### Colors and Styling
- Main styles: `src/styles/global.css`
- Theme colors: Update Tailwind classes in components
- Dark mode colors: Adjust `dark:` classes throughout

## Creating Your First Post

Create a new file in `src/content/blog/`:

```markdown
---
title: 'My First Post'
description: 'This is my first blog post'
pubDate: 2024-10-06
heroImage: '../../assets/blog-placeholder-1.jpg'
---

# Hello World!

This is my first blog post...
```

## Testing Your Blog

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

## What's Included

✅ Dark/Light theme toggle with localStorage persistence  
✅ Theme respects system preference by default  
✅ Giscus comments on blog posts (needs configuration)  
✅ Responsive design with Tailwind CSS  
✅ Two sample blog posts  
✅ TypeScript for type safety  
✅ SEO meta tags configured  
✅ RSS feed  
✅ Sitemap generation

## File Structure Overview

```
src/
├── components/       # UI components
│   ├── Header.astro         # Navigation with theme toggle
│   ├── Footer.astro         # Footer
│   ├── ThemeToggle.astro    # Theme switcher button
│   └── Comments.tsx         # Giscus comments (React)
├── layouts/         # Page layouts
│   ├── Layout.astro         # Main layout wrapper
│   └── BlogPost.astro       # Blog post layout
├── pages/           # Routes
│   ├── index.astro          # Homepage
│   ├── about.astro          # About page
│   └── blog/
│       ├── index.astro      # Blog listing
│       └── [...slug].astro  # Dynamic post pages
├── content/blog/    # Blog posts (Markdown)
├── scripts/         # Client scripts
│   └── theme.ts             # Theme management
└── styles/
    └── global.css           # Global styles + Tailwind
```

## Next Steps

1. Upgrade Node.js to >= 18.20.8
2. Run `npm run dev` to start the dev server
3. Configure Giscus for comments
4. Update site information in `src/consts.ts`
5. Write your first blog post!
6. Deploy to Vercel, Netlify, or your preferred host

## Need Help?

- Astro Docs: https://docs.astro.build
- Giscus Setup: https://giscus.app
- Tailwind Docs: https://tailwindcss.com/docs

Enjoy your new blog! 🚀

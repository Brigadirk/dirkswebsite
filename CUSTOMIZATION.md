# Customization Guide

This guide will help you personalize your Astro blog to match your brand and preferences.

## 🎨 Visual Customization

### Colors

#### Update Theme Colors

Edit `tailwind.config.mjs` to add custom colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... add your brand colors
        900: '#0c4a6e',
      },
    },
  },
},
```

Then use in components:
```astro
<button class="bg-primary-600 hover:bg-primary-700">
```

#### Update Dark Mode Colors

Edit component classes throughout `src/`:
```astro
<!-- Light mode → Dark mode -->
<div class="bg-gray-100 dark:bg-gray-800">
<h1 class="text-gray-900 dark:text-white">
```

#### Update Accent Colors

Find and replace throughout components:
- `blue-600` → your color
- `blue-400` → your light color

### Typography

#### Change Fonts

1. **Add Google Fonts** in `src/components/BaseHead.astro`:
```astro
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

2. **Update Tailwind config**:
```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Montserrat', 'sans-serif'],
    },
  },
},
```

3. **Apply in components**:
```astro
<h1 class="font-heading">
<p class="font-sans">
```

#### Or Keep Custom Fonts

The project includes Atkinson fonts. Replace files in `public/fonts/`:
- `atkinson-regular.woff`
- `atkinson-bold.woff`

Then update `src/styles/global.css` font-face declarations.

### Layout & Spacing

#### Max Width

Update container widths in `src/layouts/Layout.astro`:
```astro
<!-- Change from max-w-4xl to: -->
<main class="flex-1 max-w-6xl w-full mx-auto">
```

#### Header Style

Edit `src/components/Header.astro`:
```astro
<!-- Sticky header (current) -->
<header class="sticky top-0">

<!-- Or fixed header -->
<header class="fixed top-0 left-0 right-0">

<!-- Or normal header -->
<header class="relative">
```

## 📝 Content Customization

### Site Information

Edit `src/consts.ts`:
```typescript
export const SITE_TITLE = 'Your Name - Blog';
export const SITE_DESCRIPTION = 'Thoughts on web development, design, and technology';
```

### Site URL

Edit `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

### Homepage Content

Edit `src/pages/index.astro` to customize:
- Welcome message
- About section
- Featured content
- Call-to-action buttons

### About Page

Update `src/pages/about.astro` with:
- Your bio
- Your photo (replace `AboutHeroImage`)
- Social links
- Professional experience

### Navigation Links

Edit `src/components/Header.astro`:
```astro
<a href="/">Home</a>
<a href="/blog">Blog</a>
<a href="/about">About</a>
<!-- Add more: -->
<a href="/projects">Projects</a>
<a href="/contact">Contact</a>
```

### Footer Content

Edit `src/components/Footer.astro`:
```astro
<p>&copy; {today.getFullYear()} Your Name. All rights reserved.</p>
<!-- Add social links, newsletter signup, etc. -->
```

## 🎯 Feature Customization

### Comments (Giscus)

Configure in `src/components/Comments.tsx`:

```tsx
<Giscus
  repo="username/repo"
  repoId="YOUR_REPO_ID"
  category="General"
  categoryId="YOUR_CATEGORY_ID"
  mapping="pathname"        // or "title", "url", etc.
  reactionsEnabled="1"      // "0" to disable
  emitMetadata="0"
  inputPosition="top"       // or "bottom"
  theme={theme}
  lang="en"                 // or your language
  loading="lazy"
/>
```

Get config from [giscus.app](https://giscus.app)

#### Disable Comments on Specific Posts

In `src/layouts/BlogPost.astro`:
```astro
---
type Props = CollectionEntry<'blog'>['data'] & {
  hideComments?: boolean;
};

const { hideComments = false } = Astro.props;
---

<!-- Then conditionally render: -->
{!hideComments && <Comments client:idle />}
```

### Theme Toggle Position

Move theme toggle in `src/components/Header.astro`:
```astro
<!-- Current: right side of header -->
<ThemeToggle />

<!-- Or: add to footer -->
<!-- In Footer.astro: -->
<ThemeToggle />
```

### Add Search

Install Pagefind:
```bash
npm install -D pagefind
```

Add to `package.json`:
```json
"scripts": {
  "build": "astro build && pagefind --source dist"
}
```

Create search component and add to header.

### Add Newsletter Signup

Use services like:
- ConvertKit
- Mailchimp
- Buttondown

Add form to Footer or create dedicated page.

### Add View Counter

Use services like:
- Vercel Analytics
- Plausible
- Umami (self-hosted)

Add script to `BaseHead.astro`.

## 📱 Blog Post Customization

### Post Layout

Edit `src/layouts/BlogPost.astro`:
- Change hero image size/position
- Adjust typography
- Add author info
- Add reading time
- Add tags/categories

### Add Reading Time

Install reading-time:
```bash
npm install reading-time
```

Use in blog post frontmatter processing.

### Add Tags/Categories

Update `src/content.config.ts`:
```typescript
schema: ({ image }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    // ...
  }),
```

Display in BlogPost layout.

### Code Block Themes

The project uses Prism for syntax highlighting.

Change theme by importing different Prism CSS in `BaseHead.astro`:
```astro
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1/themes/prism-tomorrow.css">
```

Or use Shiki (built into Astro):
```javascript
// astro.config.mjs
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
```

## 🖼️ Image Customization

### Add Your Images

Replace placeholder images in `src/assets/`:
- Blog post hero images
- About page image
- Favicon at `public/favicon.svg`

### Image Optimization

Astro automatically optimizes images using Sharp.

Configure in `astro.config.mjs`:
```javascript
image: {
  domains: ['example.com'],
  remotePatterns: [{ protocol: 'https' }],
},
```

## 🔧 Advanced Customization

### Add Dark Mode Variants

Create multiple themes beyond light/dark:
1. Update theme.ts with theme options
2. Add CSS classes for each theme
3. Update ThemeToggle with dropdown

### Add Animations

Install framer-motion:
```bash
npm install framer-motion
```

Use in React components or add CSS animations.

### Add MDX Components

Create custom MDX components in `src/components/mdx/`:
```tsx
// src/components/mdx/Callout.tsx
export default function Callout({ children, type = 'info' }) {
  return <div className={`callout callout-${type}`}>{children}</div>
}
```

Use in MDX posts:
```mdx
import Callout from '../../components/mdx/Callout.tsx'

<Callout type="warning">
  Important note here!
</Callout>
```

### Add RSS Customization

Edit `src/pages/rss.xml.js` to:
- Customize feed items
- Add full content
- Add author information
- Include images

### Add Redirects

For Netlify, create `public/_redirects`:
```
/old-url  /new-url  301
```

For Vercel, create `vercel.json`:
```json
{
  "redirects": [
    { "source": "/old-url", "destination": "/new-url", "permanent": true }
  ]
}
```

## 📊 Analytics & SEO

### Add Analytics

Edit `src/components/BaseHead.astro`:

**Google Analytics:**
```astro
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Plausible:**
```astro
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### Improve SEO

1. **Add structured data** in BlogPost.astro:
```astro
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{title}",
  "datePublished": "{pubDate}",
  // ...
}
</script>
```

2. **Add meta tags** for each post
3. **Generate sitemap** (already included)
4. **Add robots.txt** in `public/robots.txt`

## 🎭 Style Presets

### Minimal Style
- Remove hero images
- Simplify header
- Use system fonts
- Reduce colors to grayscale

### Bold Style
- Larger typography
- Vibrant accent colors
- Animated transitions
- Complex gradients

### Professional Style
- Serif fonts for content
- Muted color palette
- Structured layout grid
- Business-focused content

## Need Help?

- [Astro Docs](https://docs.astro.build)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Community Discord](https://astro.build/chat)

Happy customizing! ✨

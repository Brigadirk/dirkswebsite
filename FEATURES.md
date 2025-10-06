# Feature Documentation

Complete overview of all features in your Astro blog.

## 🎨 Theme System

### Dark/Light Mode Toggle

**Location:** `src/components/ThemeToggle.astro`

**Features:**
- ☀️ Sun icon for light mode
- 🌙 Moon icon for dark mode
- Click to toggle between modes
- Smooth transitions
- Positioned in header (top-right)

**How it works:**
1. Checks system preference on first visit
2. Allows manual override via toggle button
3. Stores preference in localStorage
4. Persists across sessions
5. Applies theme before page render (no flash)

**Technical Details:**
- Uses Tailwind's `dark:` classes
- Theme managed in `src/scripts/theme.ts`
- Inline script in `Layout.astro` prevents flash
- MutationObserver updates Giscus theme dynamically

**Customization:**
```typescript
// src/scripts/theme.ts
export type Theme = 'light' | 'dark';

// Add more themes:
export type Theme = 'light' | 'dark' | 'auto' | 'sepia';
```

## 💬 Comments System (Giscus)

**Location:** `src/components/Comments.tsx`

**Features:**
- GitHub Discussions-backed comments
- Automatic theme syncing (light/dark)
- Reactions support (👍 👎 ❤️ 🎉 etc.)
- Reply threading
- Markdown support in comments
- GitHub authentication required

**Setup Required:**
1. Enable GitHub Discussions on repository
2. Install Giscus app: https://github.com/apps/giscus
3. Configure at https://giscus.app/
4. Update values in `Comments.tsx`

**Configuration Options:**
```tsx
mapping="pathname"      // How comments map to pages
  - "pathname" (recommended)
  - "url"
  - "title"
  - "og:title"

reactionsEnabled="1"    // Enable emoji reactions
inputPosition="top"     // Comment input position
theme={theme}           // Auto-syncs with site theme
lang="en"               // Language
loading="lazy"          // Lazy load comments
```

**Where it appears:**
- Automatically on all blog post pages
- NOT on homepage, blog listing, or about page
- To add elsewhere: `<Comments client:idle />`

## 📝 Blog Posts

### Content Collections

**Location:** `src/content/blog/`

**Features:**
- Type-safe frontmatter validation
- Automatic route generation
- Sorted by date (newest first)
- MDX support (Markdown + JSX)
- Hero images with optimization
- Reading time (can be added)
- Tags/categories (can be added)

**Frontmatter Schema:**
```yaml
---
title: string (required)
description: string (required)
pubDate: date (required)
updatedDate: date (optional)
heroImage: image (optional)
---
```

**Create New Post:**
```bash
# Create file: src/content/blog/my-post.md
```

```markdown
---
title: 'My Amazing Post'
description: 'This post is amazing'
pubDate: 2024-10-06
heroImage: '../../assets/my-image.jpg'
---

Your content here with **Markdown** formatting!
```

### Blog Post Layout

**Location:** `src/layouts/BlogPost.astro`

**Features:**
- Hero image display (if provided)
- Title and metadata header
- Formatted publish date
- Last updated date (if provided)
- Prose styling (optimized typography)
- Dark mode support
- Comments section at bottom
- Responsive design

**Includes:**
- Tailwind Typography plugin
- Custom prose styling
- Code syntax highlighting
- Blockquote styling
- Link styling
- Image optimization

### Blog Listing Page

**Location:** `src/pages/blog/index.astro`

**Features:**
- Grid layout (2 columns on desktop)
- Responsive (1 column on mobile)
- Post previews with:
  - Hero image
  - Title
  - Description
  - Publish date
- Hover effects
- Sorted by date (newest first)
- Automatic pagination (can be added)

## 🏗️ Layout System

### Main Layout

**Location:** `src/layouts/Layout.astro`

**Features:**
- Consistent header/footer on all pages
- SEO meta tags via BaseHead
- Theme initialization script
- Responsive container
- Flex layout (sticky footer)
- Font loading

**Structure:**
```
<html>
  <head>
    - BaseHead (meta tags)
    - Theme script (inline)
  </head>
  <body>
    - Header (with theme toggle)
    - Main content area
    - Footer (auto-positioned at bottom)
  </body>
</html>
```

### Header

**Location:** `src/components/Header.astro`

**Features:**
- Sticky positioning (stays on scroll)
- Backdrop blur effect
- Site title (links to home)
- Navigation links (Home, Blog, About)
- Theme toggle button
- Responsive (hides nav on small screens - can be enhanced)
- Border bottom
- Semi-transparent background

### Footer

**Location:** `src/components/Footer.astro`

**Features:**
- Copyright notice with dynamic year
- "Built with Astro" attribution
- Centered layout
- Border top
- Muted colors
- Responsive design

## 🖼️ Image Handling

**Features:**
- Automatic optimization via Astro Image
- Responsive sizing
- Format conversion (WebP, AVIF)
- Lazy loading
- Blur placeholder (can be added)
- CDN-friendly

**Usage:**
```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/photo.jpg';
---

<Image src={myImage} alt="Description" width={720} height={360} />
```

**Hero Images:**
- Stored in `src/assets/`
- Referenced in frontmatter
- Automatically optimized
- Responsive rendering

## 🔍 SEO Features

### Meta Tags

**Location:** `src/components/BaseHead.astro`

**Includes:**
- Title and description
- Open Graph tags (Facebook)
- Twitter Card tags
- Canonical URL
- Favicon
- Font preloading
- Generator meta
- Viewport meta

### RSS Feed

**Location:** `src/pages/rss.xml.js`

**Features:**
- Automatic generation
- All blog posts included
- Valid RSS 2.0 format
- Accessible at `/rss.xml`

### Sitemap

**Features:**
- Auto-generated via @astrojs/sitemap
- Includes all pages
- Accessible at `/sitemap-index.xml`
- Submitted to search engines

## 📱 Responsive Design

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**Features:**
- Mobile-first approach
- Flexible grid layouts
- Responsive images
- Touch-friendly buttons
- Readable font sizes
- Proper spacing

**Testing:**
```bash
# Host on network for mobile testing
npm run dev -- --host
```

## ⚡ Performance Features

### Astro Optimizations

- Zero JavaScript by default
- Partial hydration (Islands)
- Automatic code splitting
- CSS scoping
- Asset optimization

### Component Hydration

```astro
<!-- No JavaScript (static) -->
<Component />

<!-- Hydrate immediately -->
<Component client:load />

<!-- Hydrate when idle -->
<Component client:idle />

<!-- Hydrate when visible -->
<Component client:visible />
```

**Current Usage:**
- Comments: `client:idle` (loads when browser idle)
- Theme toggle: Inline script (instant)

### Image Optimization

- Automatic resizing
- Format conversion
- Lazy loading
- Sharp processing
- Responsive srcset

## 🎯 Typography

**Font Family:**
- Primary: Atkinson (custom)
- Fallback: system sans-serif

**Font Sizes:**
- Base: 16px
- Headings: Responsive scale
- Mobile-optimized

**Features:**
- Optimized line height
- Proper letter spacing
- Readable line length
- Dark mode adjustments

## 🔧 Developer Features

### TypeScript

- Full TypeScript support
- Type-safe content collections
- Astro component types
- React component types

### Hot Module Replacement

- Instant updates during development
- Preserve component state
- No page refresh needed

### Content Collections

- Type-safe frontmatter
- Schema validation
- Automatic TypeScript types
- Query helpers

## 🚀 Build Features

### Static Site Generation

- All pages pre-rendered
- No server required
- Deploy anywhere
- CDN-friendly

### Build Output

```
dist/
├── index.html
├── blog/
│   ├── index.html
│   └── post-name/
│       └── index.html
├── about/
│   └── index.html
├── _astro/        # Optimized assets
├── rss.xml
└── sitemap-index.xml
```

## 📦 Included Integrations

1. **@astrojs/mdx** - MDX support
2. **@astrojs/sitemap** - Sitemap generation
3. **@astrojs/tailwind** - Tailwind CSS
4. **@astrojs/react** - React components
5. **@tailwindcss/typography** - Beautiful prose styling

## 🎨 Styling System

### Tailwind CSS

- Utility-first CSS
- Dark mode support (class strategy)
- Custom theme (can be extended)
- Responsive utilities
- Typography plugin

### Custom Styles

**Location:** `src/styles/global.css`

- Tailwind imports
- Custom fonts
- Base styles
- Dark mode transitions

## 🔐 Security Features

- No client-side secrets
- Content Security Policy ready
- XSS protection via framework
- Safe external links (can add rel="noopener")

## ♿ Accessibility

- Semantic HTML
- ARIA labels on icons
- Keyboard navigation
- Focus indicators (can be enhanced)
- Screen reader text (sr-only class)
- Sufficient color contrast

## 📊 Analytics Ready

Easy to add:
- Google Analytics
- Plausible
- Fathom
- Vercel Analytics
- Umami

Add scripts to `BaseHead.astro`.

## 🔄 Future Enhancements

Easy to add:
- [ ] Search functionality (Pagefind)
- [ ] Tags/categories
- [ ] Reading time
- [ ] Related posts
- [ ] Table of contents
- [ ] Social share buttons
- [ ] Newsletter signup
- [ ] Author profiles
- [ ] Draft posts
- [ ] Pagination
- [ ] View counter
- [ ] Mobile menu
- [ ] Breadcrumbs

## 📚 Documentation

- `README.md` - Main documentation
- `SETUP.md` - Quick setup guide
- `CUSTOMIZATION.md` - How to customize
- `DEPLOYMENT.md` - Deployment instructions
- `TROUBLESHOOTING.md` - Common issues
- `FEATURES.md` - This file!

## 🎓 Learning Resources

Built-in examples demonstrate:
- Astro components
- React integration
- Content collections
- Image optimization
- TypeScript usage
- Tailwind styling
- Dark mode implementation
- Layout composition

Study the code to learn these patterns!

---

**This is a fully-featured, production-ready blog.** Just configure Giscus, upgrade Node.js, and you're ready to start writing! ✨

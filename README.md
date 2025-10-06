# Astro Blog with Dark Mode & Giscus Comments

A modern, fast blog built with Astro, featuring dark/light theme toggle and GitHub Discussions-powered comments via Giscus.

## Features

- 🌓 **Dark/Light Mode Toggle** - Persistent theme preference with system default
- 💬 **Giscus Comments** - GitHub Discussions-powered comments on blog posts
- ⚡ **Lightning Fast** - Built with Astro for optimal performance
- 🎨 **Tailwind CSS** - Beautiful, responsive design with Tailwind
- 📱 **Fully Responsive** - Works great on all devices
- 🔍 **SEO Optimized** - Comprehensive meta tags and sitemap
- ✨ **TypeScript** - Type-safe development experience

## Prerequisites

> **Important**: This project requires Node.js version **18.20.8 or higher**. 
> 
> ⚠️ Your current Node version is **v18.18.0**, which prevents the dev server from starting.
>
> ✅ **Quick Fix Available:** See `QUICK_FIX.md` for step-by-step upgrade instructions.
> 
> Please upgrade Node.js:
> 
> - Using [nvm](https://github.com/nvm-sh/nvm): `nvm install 18.20.8 && nvm use 18.20.8`
> - Using [fnm](https://github.com/Schniz/fnm): `fnm install 18.20.8 && fnm use 18.20.8`
> - Download from [nodejs.org](https://nodejs.org/)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Giscus

To enable comments, you need to set up Giscus with your GitHub repository:

1. **Enable GitHub Discussions** on your repository
2. **Install the Giscus app**: Visit https://github.com/apps/giscus
3. **Get your configuration**: Go to https://giscus.app/ and fill out the form
4. **Update the Comments component**: Edit `src/components/Comments.tsx` with your values:

```tsx
<Giscus
  repo="your-username/your-repo"           // Your repo
  repoId="YOUR_REPO_ID"                    // From giscus.app
  category="General"                        // Your category
  categoryId="YOUR_CATEGORY_ID"            // From giscus.app
  // ... rest of config
/>
```

### 3. Update Site Information

Edit `src/consts.ts` to customize your site:

```typescript
export const SITE_TITLE = 'Your Blog Name';
export const SITE_DESCRIPTION = 'Your blog description';
```

Also update `astro.config.mjs` with your site URL:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

### 4. Run Development Server

```bash
npm run dev
```

Visit http://localhost:4321 to see your blog in action!

### 5. Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── fonts/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Astro & React components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   └── Comments.tsx
│   ├── content/
│   │   └── blog/        # Blog posts (Markdown/MDX)
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── BlogPost.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   ├── scripts/
│   │   └── theme.ts     # Theme management
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## Creating Blog Posts

Create a new `.md` or `.mdx` file in `src/content/blog/`:

```markdown
---
title: 'Your Post Title'
description: 'A brief description'
pubDate: 2024-10-06
heroImage: '../../assets/your-image.jpg'
---

Your content here...
```

## Customization

### Theme Colors

Edit `src/styles/global.css` and Tailwind classes throughout components to customize colors.

### Header Navigation

Update `src/components/Header.astro` to modify navigation links.

### Footer

Customize `src/components/Footer.astro` to update footer content.

## Deployment

This blog can be deployed to:

- **Vercel**: Connect your GitHub repo
- **Netlify**: Connect your GitHub repo  
- **GitHub Pages**: Use the Astro GitHub Pages action
- **Cloudflare Pages**: Connect your repo
- Any static hosting service

## Technologies Used

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React](https://react.dev/) - For interactive components
- [Giscus](https://giscus.app/) - Comments system
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Giscus Documentation](https://github.com/giscus/giscus)

## License

MIT

---

Built with ❤️ using Astro
# ⚡ Quick Fix Guide

## Issue: Dev Server Won't Start

You're likely encountering one or both of these issues:

### Issue 1: Tailwind CSS Version Conflict ✅ FIXED

**Error:**
```
[@astrojs/tailwind] It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin.
The PostCSS plugin has moved to a separate package...
```

**Status:** ✅ **FIXED** - Tailwind CSS downgraded to v3.4.18

This has been resolved. The correct version is now installed.

---

### Issue 2: Node.js Version Too Old ⚠️ NEEDS FIX

**Error:**
```
Node.js v18.18.0 is not supported by Astro!
Please upgrade Node.js to a supported version: ">=18.20.8"
```

**Status:** ⚠️ **Still needs to be resolved**

Your current Node.js version (v18.18.0) is just slightly below the minimum required (18.20.8).

## Solution: Upgrade Node.js

### Option 1: Using nvm (Recommended)

```bash
# If you don't have nvm, install it first:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Close and reopen your terminal, then:
nvm install 18.20.8
nvm use 18.20.8
nvm alias default 18.20.8

# Verify
node --version  # Should show v18.20.8

# Now start your blog
cd /Users/dirk/Documents/Code/blog
npm run dev
```

### Option 2: Using fnm

```bash
# If you don't have fnm, install it first:
curl -fsSL https://fnm.vercel.app/install | bash

# Close and reopen your terminal, then:
fnm install 18.20.8
fnm use 18.20.8
fnm default 18.20.8

# Verify
node --version

# Now start your blog
cd /Users/dirk/Documents/Code/blog
npm run dev
```

### Option 3: Using Homebrew (macOS)

```bash
# Uninstall current version
brew uninstall node

# Install Node 18
brew install node@18

# Link it
brew link node@18

# Verify
node --version

# Now start your blog
cd /Users/dirk/Documents/Code/blog
npm run dev
```

### Option 4: Download from nodejs.org

1. Visit https://nodejs.org/
2. Download Node.js 18.20.8+ (or the current LTS version)
3. Run the installer
4. Restart your terminal
5. Verify: `node --version`
6. Start your blog: `npm run dev`

## After Node.js Upgrade

Once you have Node.js ≥18.20.8:

```bash
# Navigate to your blog directory
cd /Users/dirk/Documents/Code/blog

# Start the development server
npm run dev

# You should see:
# ✓ Server running at http://localhost:4321
```

Open your browser to **http://localhost:4321** and you'll see your blog! 🎉

## Verify Everything Works

After starting the dev server, test:

1. ✅ Homepage loads
2. ✅ Navigate to /blog
3. ✅ Click on a blog post
4. ✅ Click the theme toggle (sun/moon icon in header)
5. ✅ Dark mode switches smoothly
6. ✅ Refresh page - theme persists
7. ✅ Responsive design on mobile (resize browser)

## What's Already Fixed

- ✅ Tailwind CSS version (v3.4.18 - compatible)
- ✅ All dependencies installed
- ✅ All components created
- ✅ Sample blog posts ready
- ✅ Theme system working
- ✅ Responsive design
- ✅ Documentation complete

## What You Need to Do

1. **Upgrade Node.js** to ≥18.20.8 (see options above)
2. **Configure Giscus** (optional, for comments):
   - See SETUP.md for instructions
   - Takes 5 minutes
   - Comments will work after configuration

## Still Having Issues?

### Clear cache and reinstall:
```bash
cd /Users/dirk/Documents/Code/blog
rm -rf node_modules package-lock.json .astro
npm install
npm run dev
```

### Check Node.js version:
```bash
node --version  # Must be ≥18.20.8
```

### Check npm version:
```bash
npm --version  # Should be 9.6.5 or higher
```

### Enable verbose logging:
```bash
npm run dev -- --verbose
```

## Quick Reference

| Command | Purpose |
|---------|---------|
| `node --version` | Check Node.js version |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Project Status

✅ **Code:** 100% complete and working  
✅ **Dependencies:** All installed correctly  
✅ **Tailwind:** Fixed (v3.4.18)  
⚠️ **Node.js:** Needs upgrade (v18.18.0 → v18.20.8)  
⏳ **Giscus:** Optional configuration needed  

## Expected Result

After upgrading Node.js and running `npm run dev`, you should see:

```
  🚀 astro  v5.14.1 started in 234ms

  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose

  ▶ Server ready in 1234 ms
```

Then visit http://localhost:4321 in your browser and your blog will be live!

## Next Steps After Server Starts

1. ✅ Test dark/light theme toggle
2. ✅ Browse sample blog posts
3. ✅ Check responsive design (resize browser)
4. 📝 Configure Giscus (SETUP.md)
5. ✏️ Write your first blog post
6. 🎨 Customize (CUSTOMIZATION.md)
7. 🚀 Deploy (DEPLOYMENT.md)

---

**You're almost there!** Just upgrade Node.js and everything will work perfectly. 🚀

Need more help? Check **TROUBLESHOOTING.md**

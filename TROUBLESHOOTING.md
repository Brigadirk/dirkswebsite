# Troubleshooting Guide

Common issues and solutions for your Astro blog.

## Node.js Version Error

**Error:**
```
Node.js v18.18.0 is not supported by Astro!
Please upgrade Node.js to a supported version: ">=18.20.8"
```

**Solution:**

### Option 1: Use nvm (Node Version Manager)

```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js 18.20.8
nvm install 18.20.8
nvm use 18.20.8

# Set as default
nvm alias default 18.20.8

# Verify
node --version  # Should show v18.20.8 or higher
```

### Option 2: Use fnm (Fast Node Manager)

```bash
# Install fnm
curl -fsSL https://fnm.vercel.app/install | bash

# Install and use Node.js 18.20.8
fnm install 18.20.8
fnm use 18.20.8

# Set as default
fnm default 18.20.8

# Verify
node --version
```

### Option 3: Download from nodejs.org

1. Visit https://nodejs.org/
2. Download Node.js 18.20.8 or higher (LTS recommended)
3. Install the package
4. Verify: `node --version`

## Build Issues

### "Cannot find module" errors

**Solution:**
```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors

**Solution:**
```bash
# Regenerate Astro types
npm run astro sync
```

### Tailwind styles not applying

**Solution:**
1. Check that `src/styles/global.css` is imported in `BaseHead.astro`
2. Verify Tailwind config has correct content paths
3. Restart dev server
4. Clear browser cache

### Images not loading

**Solution:**
1. Ensure images are in `src/assets/` (for optimized images)
2. Use correct import syntax:
   ```astro
   import myImage from '../assets/image.jpg';
   <Image src={myImage} alt="" />
   ```
3. Check file paths are correct

## Comments Not Showing

### Giscus comments not appearing

**Checklist:**
- [ ] GitHub Discussions enabled on your repository
- [ ] Giscus app installed on your repository
- [ ] Correct repo, repoId, category, categoryId in `Comments.tsx`
- [ ] Page URL matches Giscus mapping configuration
- [ ] No browser console errors

**Debug:**
1. Open browser console (F12)
2. Check for error messages
3. Verify Giscus iframe loads
4. Test on deployed site (comments may not work on localhost)

### Get your Giscus configuration

1. Visit https://giscus.app/
2. Enter your `username/repo`
3. Select mapping and features
4. Copy the configuration values
5. Update `src/components/Comments.tsx`

## Theme Toggle Issues

### Theme not persisting

**Solution:**
1. Check browser localStorage is enabled
2. Check browser console for errors
3. Verify `src/scripts/theme.ts` is loading
4. Clear browser cache and localStorage:
   ```javascript
   localStorage.clear()
   ```

### Theme flashing on page load

**Solution:**
The inline script in `Layout.astro` should prevent this. If it persists:
1. Ensure the script is in `<head>` before other content
2. Check that `is:inline` attribute is present
3. Verify no conflicting styles

### Dark mode colors look wrong

**Solution:**
1. Check Tailwind dark mode is set to 'class' in config
2. Verify all color classes have `dark:` variants
3. Test with browser DevTools in dark mode
4. Check prose plugin dark mode styles

## Development Server Issues

### Port already in use

**Error:**
```
Port 4321 is already in use
```

**Solution:**
```bash
# Find and kill the process
lsof -ti:4321 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### Dev server crashes

**Solution:**
```bash
# Clear .astro cache
rm -rf .astro

# Clear node_modules
rm -rf node_modules package-lock.json
npm install

# Restart dev server
npm run dev
```

### Hot reload not working

**Solution:**
1. Restart dev server
2. Check file watchers limit (on Linux):
   ```bash
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```
3. Try hard refresh in browser (Cmd+Shift+R / Ctrl+Shift+R)

## Build/Production Issues

### Build fails but dev works

**Solution:**
1. Check for environment-specific code
2. Verify all imports are correct (case-sensitive on Linux)
3. Check for client-side code running at build time
4. Use `client:load` or `client:idle` directives for interactive components

### Static paths not generating

**Solution:**
1. Check `getStaticPaths()` function
2. Verify content collection is properly configured
3. Run `npm run astro sync`
4. Check for errors in frontmatter

### Deployed site shows 404s

**Solution:**
1. Verify build completed successfully
2. Check deployment platform serves from `dist` folder
3. Ensure `site` in `astro.config.mjs` matches your domain
4. Check routing configuration on hosting platform

## Performance Issues

### Slow build times

**Solution:**
1. Optimize images before adding to `src/assets/`
2. Reduce number of blog posts during development
3. Use `--draft` flag for work-in-progress posts
4. Increase Node memory: `NODE_OPTIONS=--max-old-space-size=4096 npm run build`

### Large bundle size

**Solution:**
1. Check for unnecessary dependencies
2. Use `client:idle` or `client:visible` for React components
3. Optimize images
4. Remove unused Tailwind classes with purge

## Content Issues

### Markdown not rendering

**Solution:**
1. Check frontmatter YAML is valid
2. Ensure file is in `src/content/blog/`
3. Verify file extension is `.md` or `.mdx`
4. Check content collection schema matches frontmatter
5. Run `npm run astro sync`

### MDX components not working

**Solution:**
1. Ensure `@astrojs/mdx` is installed
2. Import components in MDX file
3. Use correct JSX syntax
4. Check for TypeScript errors

### Dates not displaying correctly

**Solution:**
1. Use ISO date format in frontmatter: `2024-10-06`
2. Or JavaScript date format: `October 6, 2024`
3. Check `FormattedDate` component
4. Verify timezone handling

## Dependency Issues

### Peer dependency warnings

**Solution:**
These are usually safe to ignore. If needed:
```bash
npm install --legacy-peer-deps
```

### Package version conflicts

**Solution:**
```bash
# Check for updates
npm outdated

# Update specific package
npm install package-name@latest

# Update all (careful!)
npm update
```

### Sharp installation fails

**Solution:**
Sharp (image processing) may have platform-specific issues:
```bash
# Clear npm cache
npm cache clean --force

# Reinstall
rm -rf node_modules
npm install
```

On Apple Silicon Macs:
```bash
npm install --platform=darwin --arch=arm64 sharp
```

## Browser-Specific Issues

### Styles look different in Safari

**Solution:**
1. Add vendor prefixes (Tailwind handles most)
2. Test with `-webkit-` prefixes for custom CSS
3. Check for unsupported CSS features

### Console errors in Firefox

**Solution:**
1. Check for missing polyfills
2. Verify ES module support
3. Test in Firefox DevTools

## Getting More Help

### Enable Debug Mode

```bash
# Verbose logging
npm run dev -- --verbose

# Debug mode
DEBUG=* npm run dev
```

### Check Logs

Look for errors in:
- Browser console (F12)
- Terminal output
- Build logs on deployment platform

### Community Resources

- [Astro Discord](https://astro.build/chat)
- [Astro GitHub Discussions](https://github.com/withastro/astro/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/astro)

### File an Issue

If you find a bug:
1. Check existing issues
2. Create minimal reproduction
3. Include version info: `npm run astro info`
4. Post to GitHub: https://github.com/withastro/astro/issues

## Quick Fixes Checklist

When something breaks, try these in order:

- [ ] Restart dev server
- [ ] Clear `.astro` cache: `rm -rf .astro`
- [ ] Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
- [ ] Check browser console for errors
- [ ] Verify Node.js version: `node --version`
- [ ] Reinstall dependencies: `rm -rf node_modules && npm install`
- [ ] Run `npm run astro sync`
- [ ] Check for typos in file names and imports
- [ ] Verify all required dependencies are installed
- [ ] Read error messages carefully

## Still Having Issues?

1. Check the [README.md](./README.md) for setup instructions
2. Review [SETUP.md](./SETUP.md) for configuration steps
3. Consult [CUSTOMIZATION.md](./CUSTOMIZATION.md) for modification help
4. Ask in Astro Discord or GitHub Discussions

Most issues can be resolved by upgrading Node.js and reinstalling dependencies! 🚀

# Deployment Guide - catno.ai

This guide will help you deploy the catno.ai website to Vercel.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Quick Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI globally:

   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:

   ```bash
   vercel login
   ```

3. Deploy to production:
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
4. Add environment variables (optional):
   - `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., `https://catno.ai`)
   - `NEXT_PUBLIC_SITE_NAME`: `catno.ai`
5. Click "Deploy"

## Environment Variables

For production, set these environment variables in Vercel:

```env
NEXT_PUBLIC_SITE_URL=https://catno.ai
NEXT_PUBLIC_SITE_NAME=catno.ai
```

## Custom Domain Setup

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., `catno.ai`)
4. Follow Vercel's instructions to configure your DNS:
   - Add an A record pointing to Vercel's IP: `76.76.21.21`
   - Or add a CNAME record pointing to your Vercel deployment URL

## Automatic Deployments

Once connected to Git:

- **Production**: Pushes to the `main` branch automatically deploy to production
- **Preview**: Pull requests and other branches get preview deployments
- **Rollback**: Easy rollback to previous deployments in Vercel dashboard

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test responsive design on mobile devices
- [ ] Check navigation and links
- [ ] Verify animations work smoothly
- [ ] Test forms (when backend is integrated)
- [ ] Check SEO meta tags
- [ ] Ensure HTTPS is working
- [ ] Set up custom domain
- [ ] Configure analytics (optional)

## Performance Optimization

The site is already optimized with:

- Static page generation
- Image optimization (when images are added)
- Code splitting
- Minification and compression

## Monitoring

Consider setting up:

- Vercel Analytics for performance insights
- Error tracking (Sentry, etc.)
- Uptime monitoring

## Support

For issues or questions:

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**Note**: This is a static site with no backend currently. When adding backend functionality (contact forms, etc.), you'll need to:

1. Set up API routes or serverless functions
2. Configure any necessary secrets/API keys
3. Set up database connections (if needed)

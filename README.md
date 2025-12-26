# catno.ai - AI Voice Agent Agency

A modern, futuristic website for catno.ai - an innovative AI Voice Agent Agency built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 15+** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom design system
- **Framer Motion** - Smooth animations and transitions
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags and Open Graph support
- **Dark Theme** - Futuristic dark aesthetic

## 📦 Tech Stack

- **Framework**: Next.js 16.1.1 (Next.js 15+ architecture)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Code Quality

```bash
# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check

# Type checking
npm run type-check
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing page
│   ├── contact/           # Contact page with form
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles and theme
├── components/
│   ├── layout/            # Layout components (Header, Footer)
│   └── ui/                # Reusable UI components
├── lib/
│   ├── animations.ts      # Framer Motion animation variants
│   └── utils.ts           # Utility functions
```

## 🎨 Design System

### Color Palette

- **Primary**: Purple gradient (#667eea - #764ba2)
- **Secondary**: Blue (#60a5fa)
- **Accent**: Cyan (#00f2fe)
- **Background**: Dark (#0a0a0a)

### Components

- **Button** - Multiple variants (default, gradient, outline, ghost)
- **Card** - Container with header, content, and footer
- **Hero** - Full-screen hero section with gradient background
- **Section** - Page section with consistent spacing
- **Container** - Max-width wrapper with responsive padding

## 🚢 Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables (if needed)
4. Deploy!

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=catno.ai
```

## 📄 Pages

- **Home** (`/`) - Hero section, features, and CTA
- **About** (`/about`) - Company story and values
- **Services** (`/services`) - AI voice agent services
- **Blog** (`/blog`) - Blog post listing
- **Contact** (`/contact`) - Contact form and information

## 🎯 Next Steps (Phase 2)

- [ ] Add actual blog CMS integration
- [ ] Implement contact form backend
- [ ] Add voice agent demo functionality
- [ ] Create pricing page
- [ ] Add testimonials section
- [ ] Implement analytics

## 📝 License

Private - All rights reserved © 2024 catno.ai

## 🤝 Contributing

This is a private project. Contact the team for contribution guidelines.

# Project Structure - catno.ai

## Overview

This document provides a detailed overview of the catno.ai project structure.

## Directory Structure

```
catno-ai/
├── .husky/                      # Git hooks configuration
│   └── pre-commit              # Pre-commit hook for linting and formatting
├── public/                      # Static assets
│   └── (static files)
├── src/                         # Source code
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About page
│   │   │   └── page.tsx
│   │   ├── blog/              # Blog listing page
│   │   │   └── page.tsx
│   │   ├── contact/           # Contact page with form
│   │   │   └── page.tsx
│   │   ├── services/          # Services page
│   │   │   └── page.tsx
│   │   ├── favicon.ico        # Site favicon
│   │   ├── globals.css        # Global styles and theme variables
│   │   ├── layout.tsx         # Root layout with Header/Footer
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── header.tsx    # Navigation header with mobile menu
│   │   │   └── footer.tsx    # Site footer with links
│   │   └── ui/                # Reusable UI components
│   │       ├── button.tsx    # Button component with variants
│   │       ├── card.tsx      # Card component with header/content/footer
│   │       ├── container.tsx # Max-width container wrapper
│   │       ├── hero.tsx      # Hero section with gradient background
│   │       └── section.tsx   # Page section with spacing
│   └── lib/
│       ├── animations.ts      # Framer Motion animation variants
│       └── utils.ts           # Utility functions (cn for className merging)
├── .env.example               # Example environment variables
├── .env.local                 # Local environment variables (gitignored)
├── .eslintrc                  # ESLint configuration
├── .gitignore                 # Git ignore patterns
├── .prettierignore            # Prettier ignore patterns
├── .prettierrc                # Prettier configuration
├── DEPLOYMENT.md              # Deployment guide
├── next.config.ts             # Next.js configuration
├── package.json               # Project dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── PROJECT_STRUCTURE.md       # This file
├── README.md                  # Project documentation
├── tsconfig.json              # TypeScript configuration
└── vercel.json                # Vercel deployment configuration
```

## Key Files Explained

### Configuration Files

- **package.json**: Project dependencies and npm scripts
  - `dev`: Start development server
  - `build`: Build for production
  - `start`: Start production server
  - `lint`: Run ESLint
  - `format`: Format code with Prettier
  - `type-check`: TypeScript type checking

- **tsconfig.json**: TypeScript configuration with strict mode enabled

- **eslint.config.mjs**: ESLint rules for code quality

- **.prettierrc**: Code formatting rules

### Source Code

#### App Router (`src/app/`)

Next.js 15+ uses the App Router pattern:

- **layout.tsx**: Root layout that wraps all pages
  - Includes Header and Footer components
  - Sets up global fonts and metadata
  - Applies dark theme class

- **page.tsx**: Home page with hero section and features

- **about/page.tsx**: About page with company story and values

- **services/page.tsx**: Services page with grid of offerings

- **blog/page.tsx**: Blog listing page (structure only, no CMS yet)

- **contact/page.tsx**: Contact page with form structure

- **globals.css**: Global styles including:
  - CSS custom properties for theme colors
  - Custom utility classes (gradient, glass, glow)
  - Animation keyframes
  - Tailwind CSS imports

#### Components (`src/components/`)

**Layout Components:**

- `header.tsx`: Responsive navigation with mobile menu, smooth scroll, and active link indicator
- `footer.tsx`: Site footer with links and social media icons

**UI Components:**

- `button.tsx`: Flexible button with multiple variants (default, gradient, outline, ghost, link)
- `card.tsx`: Card container with header, title, description, content, and footer sections
- `container.tsx`: Centered max-width container with responsive padding
- `hero.tsx`: Full-screen hero section with gradient background and animations
- `section.tsx`: Page section wrapper with consistent vertical spacing

#### Library (`src/lib/`)

- **animations.ts**: Pre-defined Framer Motion animation variants
  - fadeIn, fadeInUp, fadeInDown, fadeInLeft, fadeInRight
  - scaleIn, staggerContainer
  - slideIn (with direction parameter)

- **utils.ts**: Utility functions
  - `cn()`: Merges Tailwind CSS classes using clsx and tailwind-merge

## Design System

### Colors (HSL format)

- **Primary**: Purple gradient (270° 80% 65%)
- **Secondary**: Blue (210° 75% 60%)
- **Accent**: Cyan (180° 100% 50%)
- **Background**: Dark (240° 10% 3.9%)
- **Foreground**: Light (0° 0% 98%)
- **Muted**: Gray tones
- **Border**: Subtle borders (240° 5% 15%)

### Typography

- **Font**: Inter (Google Fonts)
- **Sizes**: Responsive with Tailwind scale
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing

- Consistent spacing using Tailwind's spacing scale
- Sections: py-16 (mobile) to py-24 (desktop)
- Containers: px-4 (mobile) to px-8 (desktop)

### Animations

- Framer Motion for page transitions and scroll animations
- Custom keyframe animations for gradients and floating effects
- Hover states on all interactive elements

## Technology Stack

- **Framework**: Next.js 16.1.1 (Next.js 15+ architecture)
- **Language**: TypeScript 5.x (strict mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12.x
- **Icons**: Lucide React
- **Development**: ESLint, Prettier, Husky (git hooks)

## Development Workflow

1. **Start development**: `npm run dev`
2. **Make changes**: Edit files in `src/`
3. **Auto-format**: Pre-commit hook runs automatically
4. **Type check**: `npm run type-check`
5. **Build**: `npm run build`
6. **Deploy**: Push to main branch (auto-deploy via Vercel)

## Best Practices

- All components use TypeScript with proper typing
- Consistent use of Tailwind CSS utilities
- Framer Motion for smooth animations
- Responsive design with mobile-first approach
- Semantic HTML for accessibility
- ESLint and Prettier for code consistency
- Git hooks ensure code quality before commits

## Future Enhancements (Phase 2)

- Blog CMS integration (e.g., Contentful, Sanity)
- Contact form backend API
- Voice agent demo functionality
- Pricing page
- Testimonials section
- Analytics integration
- Performance monitoring
- A/B testing framework

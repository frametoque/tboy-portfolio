# Tharul Bandara Portfolio

Official portfolio web application for **Tharul Bandara** — Professional Photographer, Graphics Designer, and Editor; Co-Founder of [Frametoque Digital Media](https://frametoque.com).

## Tech Stack

* **Framework**: Next.js 14 (App Router)
* **Language**: TypeScript (Strict Mode)
* **Styling**: Tailwind CSS & Custom CSS
* **Animations**: GSAP, Framer Motion, Lenis (Smooth Scroll)
* **Layouts**: React Masonry CSS
* **Linting**: ESLint (`next/core-web-vitals`)

## Prerequisites

* **Node.js**: `>= 18.17.0` (LTS recommended)
* **Package Manager**: `npm`

## Getting Started

### 1. Installation

```bash
npm install
```

### 2. Environment Configuration

Copy the example environment file and adjust the site URL if deploying under a custom domain:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used for SEO, Open Graph, and sitemaps | `https://tharulbandara.com` |

### 3. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `dev` | `next dev` | Start local development server |
| `build` | `next build` | Create an optimized production build (includes typecheck & lint) |
| `start` | `next start` | Run production server locally |
| `lint` | `next lint` | Run ESLint checks |
| `typecheck` | `tsc --noEmit` | Validate TypeScript types in strict mode |

## Project Structure

```
├── public/
│   ├── assets/              # Favicon, icons, fonts, CSS and runtime JS
│   └── designs/             # Portfolio work images and video assets
├── src/
│   ├── app/                 # Next.js App Router (pages, layout, robots, sitemap, health API)
│   ├── common/              # Type-safe client helper utilities
│   └── components/
│       ├── common/          # Global UI components (Navbar, Footer, Preloader, Scroll)
│       └── home-personal/   # Section components (Header, About, Portfolio, Services, Marquee)
├── next.config.js           # Next.js configuration and security headers
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration (strict, bundler module resolution)
```

## Production Deployment Checklist

1. **Environment Variables**: Configure `NEXT_PUBLIC_SITE_URL` in your hosting dashboard.
2. **Build Command**: `npm run build`
3. **Start Command**: `npm start`
4. **Health Check**: Monitor `GET /api/health` for uptime ping (returns HTTP 200).
5. **Security Headers**: Standard HTTP security headers (`nosniff`, `SAMEORIGIN`, `strict-origin-when-cross-origin`, HSTS) are applied automatically by `next.config.js`.

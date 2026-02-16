# Nishant Panchal — Portfolio Website

> A modern, dark-themed personal portfolio built with **React 19**, **Vite (Rolldown)**, **Tailwind CSS**, and **Framer Motion**.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages Overview](#pages-overview)
- [Page Sections Blueprint](#page-sections-blueprint)
- [Current Implementation Status](#current-implementation-status)
- [Improvement Suggestions & Roadmap](#improvement-suggestions--roadmap)
- [Getting Started](#getting-started)

---

## Tech Stack

| Layer          | Technology                                       |
| -------------- | ------------------------------------------------ |
| Framework      | React 19.2                                       |
| Bundler        | Vite (rolldown-vite 7.2.2)                       |
| Routing        | React Router DOM v6                              |
| Styling        | Tailwind CSS 3.4 + custom utility classes        |
| Animations     | Framer Motion 12                                 |
| HTTP Client    | Axios                                            |
| SEO            | react-helmet-async (per-page meta + Open Graph)  |
| Notifications  | react-hot-toast                                  |
| Icons          | react-icons (Feather, Simple Icons, VSCode)      |
| Backend        | Node.js + Express (contact form API)             |

---

## Project Structure

```
Portfolio/
├── frontend/
│   ├── src/
│   │   ├── main.jsx                    # Entry point (React 19 createRoot + StrictMode)
│   │   ├── App.jsx                     # Root: routing, providers, layout
│   │   ├── index.css                   # Global styles (Tailwind + custom utilities)
│   │   ├── pages/                      # 6 route-level page components (lazy-loaded)
│   │   │   ├── LandingPage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── ProjectsPage.jsx
│   │   │   ├── ProjectDetailPage.jsx
│   │   │   ├── ContactPage.jsx
│   │   │   └── NotFoundPage.jsx
│   │   ├── components/
│   │   │   ├── common/                 # ErrorBoundary, AnimatedSection, SEO
│   │   │   ├── layout/                 # Navbar, Footer, Layout wrapper
│   │   │   ├── sections/              # Landing page sections (Hero, About, Skills, etc.)
│   │   │   └── ui/                     # Reusable primitives (Button, Cards, Badges, etc.)
│   │   ├── data/                       # Static content (personalInfo, projects, skills, experience)
│   │   ├── hooks/                      # Custom hooks (useDocumentTitle, useScrollToTop)
│   │   └── utils/                      # API client, constants/config
│   ├── public/                         # Static assets (resume.pdf, favicon)
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
├── backend/
│   └── src/                            # Express API for contact form
└── README.md
```

---

## Pages Overview

| #  | Route              | Page                | Status |
| -- | ------------------ | ------------------- | ------ |
| 1  | `/`                | Home / Landing Page | Done   |
| 2  | `/projects`        | Projects Page       | Done   |
| 3  | `/about`           | About Page          | Done   |
| 4  | `/contact`         | Contact Page        | Done   |
| 5  | `/project/:id`     | Project Detail Page | Done   |
| 6  | `*`                | 404 Not Found Page  | Done   |

---

## Page Sections Blueprint

### 1. Home / Landing Page

| #  | Section                     | Description                                                              | Status |
| -- | --------------------------- | ------------------------------------------------------------------------ | ------ |
| 1  | **Hero Section**            | Name, role, tagline, decorative code block, CTA buttons, social links    | Done   |
| 2  | **About Preview**           | Short bio (3–4 lines), seeking roles, CTA: "Read More About Me"         | Done   |
| 3  | **Skills / Tech Stack**     | Icons/badges categorized (Frontend, Backend, Languages, Tools)           | Done   |
| 4  | **Featured Projects**       | Top 2–4 project cards with thumbnail, description, tech stack, CTA      | Done   |
| 5  | **Experience**              | Timeline of internships and learning journey                             | Done   |
| 6  | **Achievements**            | LeetCode stats, virtual experience certifications                        | Done   |
| 7  | **Testimonials**            | Client or colleague feedback                                             | TODO   |
| 8  | **Contact / CTA Section**   | "Let's Work Together" with email and contact page buttons                | Done   |

### 2. Projects Page

| #  | Section                      | Description                                                           | Status |
| -- | ---------------------------- | --------------------------------------------------------------------- | ------ |
| 1  | **Page Header / Intro**      | Title + subtitle                                                      | Done   |
| 2  | **Project Filters**          | Category tabs (All, MERN, Node.js)                                    | Done   |
| 3  | **Projects Grid**            | 2-col grid cards with thumbnail, description, tech stack, CTA links   | Done   |
| 4  | **Featured Project Highlight** | Bigger layout for standout project                                  | TODO   |
| 5  | **Pagination / Load More**   | Useful when >6 projects                                               | TODO   |
| 6  | **CTA Section (Bottom)**     | GitHub link + Contact button                                          | Done   |

### 3. About Page

| #  | Section                      | Description                                                           | Status |
| -- | ---------------------------- | --------------------------------------------------------------------- | ------ |
| 1  | **Introduction / Bio**       | Name, bio, personal statement, animated stats                         | Done   |
| 2  | **Skills & Tech Stack**      | Categorized skill badges with icons and colors                        | Done   |
| 3  | **Experience**               | Timeline cards for work experience                                    | Done   |
| 4  | **Education**                | Timeline cards for academic background                                | Done   |
| 5  | **Achievements**             | Certifications and milestones                                         | Done   |
| 6  | **Interests / Personality**  | Hobbies, side passions, what inspires you                             | TODO   |
| 7  | **CTA**                      | "Like what you see?" with Projects + Contact buttons                  | Done   |

### 4. Contact Page

| #  | Section                     | Description                                                            | Status |
| -- | --------------------------- | ---------------------------------------------------------------------- | ------ |
| 1  | **Page Header**             | Title + subtitle                                                       | Done   |
| 2  | **Contact Information**     | Email, phone, location with icons                                      | Done   |
| 3  | **Social Media Links**      | GitHub, LinkedIn, LeetCode icons                                       | Done   |
| 4  | **Resume Download**         | Button to download PDF resume                                          | Done   |
| 5  | **Contact Form**            | Name, email, message fields with validation + backend submission       | Done   |
| 6  | **Map / Location Embed**    | Visual map showing city/region                                         | TODO   |
| 7  | **CTA Section (Ending)**    | "Let's Work Together!" with email + projects buttons                   | Done   |

### 5. Project Detail Page

| #  | Section                      | Description                                                          | Status |
| -- | ---------------------------- | -------------------------------------------------------------------- | ------ |
| 1  | **Back Navigation**          | "Back to Projects" link                                              | Done   |
| 2  | **Project Header**           | Title, tagline, thumbnail/hero image, Live Demo + Source Code CTAs   | Done   |
| 3  | **Project Overview**         | Full description (purpose, audience, features)                       | Done   |
| 4  | **Tech Stack**               | Technology badges                                                    | Done   |
| 5  | **Key Features**             | Feature list with check icons in 2-col grid                         | Done   |
| 6  | **Challenges & Solutions**   | Problem-solving process cards                                        | Done   |
| 7  | **Results / Outcome**        | Measurable stats, user feedback, recognition                         | TODO   |
| 8  | **CTA / Next Steps**         | "Interested?" with More Projects + Contact buttons                   | Done   |

---

## Current Implementation Status

### What's Built

- [x] 6 pages with full content and routing
- [x] Lazy-loaded pages with code splitting
- [x] Responsive design (mobile hamburger menu, grid breakpoints)
- [x] Dark theme with glassmorphism UI
- [x] Framer Motion animations (scroll-triggered, page-load, hover)
- [x] SEO per page (title, description, Open Graph, Twitter Cards)
- [x] Contact form with Axios → Express backend
- [x] Toast notifications for form feedback
- [x] Error boundary for crash resilience
- [x] Reusable component library (Button, Cards, Badges, Headings)
- [x] Custom hooks (useDocumentTitle, useScrollToTop)
- [x] Centralized data layer (personalInfo, projects, skills, experience)

### What's Missing

- [ ] Project thumbnails/screenshots (currently `null` — shows gradient placeholder)
- [ ] Live demo URLs for projects (currently empty)
- [ ] Only 2 projects listed (need 4–6 for impact)
- [ ] Custom favicon (still using default `vite.svg`)
- [ ] OG image (`og-image.png` referenced in SEO but doesn't exist in `/public`)
- [ ] Font preloading in `index.html`

---

## Improvement Suggestions & Roadmap

### HIGH IMPACT — Should Do

| #  | Suggestion                              | Effort  | Details                                                                                                  |
| -- | --------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| 1  | **Add project screenshots**             | Low     | Add real screenshots to `src/assets/images/projects/` and update `thumbnail` in `projects.js`            |
| 2  | **Deploy projects & add live URLs**     | Medium  | Deploy Study Hub & Finance Visualizer to Vercel/Netlify/Render, update `liveUrl` in `projects.js`        |
| 3  | **Add 2–3 more projects**               | Medium  | Add Spotify Clone, QuickPoll India, IP Ranker, this portfolio itself to `projects.js`                    |
| 4  | **Custom favicon + OG image**           | Low     | Create a "NP." favicon and an OG image (1200x630), place in `public/`                                   |
| 5  | **Blog / Articles section**             | High    | Add `/blog` route with articles like "How I built Study Hub", "Lessons from my internship"               |
| 6  | **Visual interactive resume page**      | Medium  | Add `/resume` route rendering resume on-screen with download button (instead of just PDF)                |

### MEDIUM IMPACT — Nice to Have

| #  | Suggestion                              | Effort  | Details                                                                                                  |
| -- | --------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| 7  | **Testimonials section**                | Low     | Add quotes from Trayistats AI colleagues/mentors on Landing Page and About Page                          |
| 8  | **Animated stats counter**              | Low     | Animate the stats (5+, 150+, 20+, 6 mo) on About Page with a counting-up effect on viewport entry       |
| 9  | **Dark/Light theme toggle**             | Medium  | Add toggle in Navbar using Tailwind's `darkMode: 'class'`                                                |
| 10 | **"Currently Learning" section**        | Low     | Show what you're currently exploring (Next.js, TypeScript, Docker, AWS, System Design)                   |
| 11 | **Project filter animations**           | Low     | Add `AnimatePresence` with layout animations when projects appear/disappear after filtering              |
| 12 | **GitHub activity / contributions**     | Medium  | Embed GitHub contribution graph or show recent repos using GitHub API                                    |
| 13 | **Interests / Personality section**     | Low     | Add hobbies, side passions, inspiration to About Page to show personality                                |

### POLISH & UX — Finishing Touches

| #  | Suggestion                              | Effort  | Details                                                                                                  |
| -- | --------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| 14 | **Page transition animations**          | Medium  | Add route-level transitions using Framer Motion `AnimatePresence`                                        |
| 15 | **Skeleton loaders**                    | Low     | Replace full-screen `Spinner` with shimmer/skeleton loaders for lazy-loaded pages                        |
| 16 | **Back-to-top floating button**         | Low     | Floating button appearing after scroll >300px (current ScrollToTop only triggers on route change)        |
| 17 | **Contact form success state**          | Low     | Show a success illustration/state after sending instead of just a toast notification                     |
| 18 | **Font preloading**                     | Low     | Add `<link rel="preconnect">` and `<link rel="preload">` for Google Fonts in `index.html`               |
| 19 | **Accessibility improvements**          | Low     | Add skip-to-content link, ensure keyboard focus, add `alt` text for all images                           |
| 20 | **404 page animation**                  | Low     | Add a fun animation or illustration to make the 404 page memorable                                       |

### BONUS / ADVANCED

| #  | Suggestion                              | Effort  | Details                                                                                                  |
| -- | --------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| 21 | **Interactive hero terminal**           | High    | Typing animation or mini terminal in hero section where visitors can "type commands"                     |
| 22 | **Cursor/mouse follow effect**          | Medium  | Subtle glow or gradient that follows mouse cursor on hero section                                        |
| 23 | **PWA support**                         | Medium  | Add `manifest.json` and service worker to make the portfolio installable                                 |
| 24 | **Analytics**                           | Low     | Add Google Analytics or privacy-friendly alternative (Plausible, Umami) for visitor tracking             |
| 25 | **Map / location embed**               | Low     | Embed a map on Contact Page showing general location (city level, not exact address)                     |
| 26 | **i18n (Hindi + English)**              | High    | Add language toggle for internationalization — shows localization awareness                               |
| 27 | **Results / Outcome on projects**       | Low     | Add measurable stats, user feedback, or recognition to each project detail page                          |

### Priority Quick Wins (Start Here)

| Priority | Task                              | Effort | Impact |
| -------- | --------------------------------- | ------ | ------ |
| 1        | Add project screenshots           | Low    | High   |
| 2        | Deploy projects & add live URLs   | Medium | High   |
| 3        | Add 2–3 more projects             | Medium | High   |
| 4        | Custom favicon + OG image         | Low    | Medium |
| 5        | Preload fonts in `index.html`     | Low    | Low    |
| 6        | Animated stats counter            | Low    | Medium |
| 7        | Back-to-top floating button       | Low    | Medium |
| 8        | Page transition animations        | Medium | Medium |
| 9        | Blog section                      | High   | High   |
| 10       | GitHub activity embed             | Medium | Medium |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Opens at `http://localhost:5173`

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs at `http://localhost:5000`

### Build for Production

```bash
cd frontend
npm run build
npm run preview
```

### Environment Variables

Create a `.env` file in `frontend/`:

```env
VITE_API_URL=http://localhost:5000
```

---

## Design System

### Colors

| Token       | Base Color | Usage                       |
| ----------- | ---------- | --------------------------- |
| `primary`   | `#6366f1`  | Buttons, links, accents     |
| `secondary` | `#a855f7`  | Gradients, highlights       |
| `dark`      | `#020617`  | Background, text, surfaces  |

### Typography

| Usage    | Font Family | Weight Range |
| -------- | ----------- | ------------ |
| Body     | Inter       | 300–800      |
| Headings | Poppins     | 400–800      |

### Custom CSS Utilities

| Class             | Purpose                                          |
| ----------------- | ------------------------------------------------ |
| `.section-padding` | Consistent section spacing                      |
| `.container-custom`| Max-width 7xl centered container                |
| `.gradient-text`   | Indigo-to-purple gradient text                  |
| `.glass-card`      | Glassmorphism card (semi-transparent + blur)    |
| `.hover-card`      | Glass card + hover border glow effect           |

---

## License

This project is for personal/portfolio use by Nishant Panchal.

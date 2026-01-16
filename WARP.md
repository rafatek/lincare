# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Lincare Saúde is a Next.js 16 healthcare website for a home health assistance company. The site is built with React 19, TypeScript, and Tailwind CSS, featuring a modern, responsive design with a turquoise brand theme.

## Development Commands

### Essential Commands
- **Development server**: `pnpm dev` (or `npm run dev` / `yarn dev`)
  - Runs on http://localhost:3000
- **Build**: `pnpm build` (or `npm run build`)
- **Production server**: `pnpm start` (or `npm start`)
- **Lint**: `pnpm lint` (or `npm run lint`)

### Package Manager
This project uses **pnpm** as indicated by `pnpm-lock.yaml`. Use pnpm for consistency.

## Architecture

### Application Structure
- **Next.js App Router** architecture (app directory)
- **Single-page application** with all content on the home page
- **Component-based** modular design with section components

### Key Architectural Patterns

#### Page Composition
The main page (`app/page.tsx`) is composed of distinct section components rendered in sequence:
1. Header (sticky navigation)
2. Hero (banner)
3. About
4. Services
5. Differentials
6. Coverage
7. Testimonials
8. ContactCTA (contact form)
9. Footer

#### Component Organization
- **Section components**: Located in `components/` - self-contained page sections
- **UI components**: Located in `components/ui/` - reusable UI primitives based on shadcn/ui
- **Hooks**: Located in `hooks/` - custom React hooks (use-mobile, use-toast)
- **Utilities**: Located in `lib/` - shared utilities like `cn()` for class merging

#### State Management
- **Client-side state**: Uses React useState for form data and UI state (mobile menu, contact form)
- **No global state management**: Components are independent and self-contained

#### Styling System
- **Tailwind CSS** with custom design tokens defined in `app/globals.css`
- **Design tokens**: Uses CSS custom properties with oklch color space
- **Theme**: Turquoise-based color scheme (primary: `oklch(0.45 0.15 200)`)
- **Utility classes**: Custom `fade-in` animation utility
- **shadcn/ui**: Component library with "new-york" style preset

### Import Aliases
TypeScript path aliases are configured (`@/*` maps to root):
- `@/components/*` - Components
- `@/lib/*` - Utilities
- `@/hooks/*` - Hooks
- `@/components/ui/*` - UI components

### Client vs Server Components
- **Server components**: Default for all components except those with interactivity
- **Client components**: Marked with `"use client"` directive (header, contact-cta, theme-provider, most UI components)

## Configuration Notes

### TypeScript Configuration
- **Strict mode enabled**: All code must adhere to strict TypeScript rules
- **Build errors ignored**: `next.config.mjs` has `ignoreBuildErrors: true` - be cautious of TypeScript errors

### Next.js Configuration
- **Image optimization disabled**: `unoptimized: true` in next.config.mjs
- **Generator tag**: Site is generated with v0.app

### Contact Information
Hard-coded throughout the site:
- Phone: (11) 99295-3786
- Email: contato@lincaresaude.com.br
- WhatsApp: +5511992953786
- Location: São Paulo, SP

## Development Guidelines

### Adding New Sections
1. Create new component in `components/`
2. Import and add to `app/page.tsx` in appropriate order
3. Add anchor ID for navigation (e.g., `id="section-name"`)
4. Update header navigation in `components/header.tsx` if needed

### Working with Forms
- Contact form uses basic React state (no external form library despite react-hook-form being installed)
- Form submission currently logs to console - implement backend integration as needed

### Styling New Components
- Use existing design tokens from `app/globals.css` for consistency
- Primary color: `bg-primary`, `text-primary`
- Follow existing pattern of white cards with `border-border` and `shadow-sm`
- Use `fade-in` utility class for animations

### Adding UI Components
- UI components follow shadcn/ui conventions
- Use `components.json` configuration for generating new shadcn components
- Import from `@/components/ui/*`

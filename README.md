<img src="public/SettleWell-Realty-Logo.svg" alt="SettleWell Realty Logo" width="200"/>

# SettleWell Realty Website

[![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?style=flat&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![Bun](https://img.shields.io/badge/Bun-Runtime-black?style=flat&logo=bun)](https://bun.sh)
[![Biome](https://img.shields.io/badge/Biome-1.9.4-green?style=flat)](https://biomejs.dev)
[![License](https://img.shields.io/badge/License-Private-red?style=flat)](#license)

A modern, performant marketing website for SettleWell Realty, a Denver-based property management and real estate brokerage. Built with cutting-edge technologies and optimized for performance.

## 🌟 Key Features

- 📱 Responsive design optimized for all devices
- 🚀 Fast page loads with Next.js App Router and App Directory
- 📬 Secure contact form integration with Resend
- 🎯 Comprehensive property management service highlights
- 📍 Denver area real estate focus
- 🌙 Dark mode support with next-themes
- 🎨 Beautiful UI components with shadcn/ui
- 🔍 Type-safe development with TypeScript
- 📦 Modern package management with Bun

## 🛠️ Tech Stack

- ⚡️ [Next.js 15](https://nextjs.org) - The React Framework for the Web
- 🎨 [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- ⚛️ [React 19](https://react.dev) - JavaScript library for user interfaces
- 🎯 [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- 🎪 [shadcn/ui](https://ui.shadcn.com/) - Re-usable UI components
- 📧 [Resend](https://resend.com) - Email delivery for form submissions
- 🔍 [Biome](https://biomejs.dev/) - Fast linter and formatter
- 📦 [Bun](https://bun.sh) - Fast all-in-one JavaScript runtime & package manager

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/SettleWell-Realty/web-app.git
cd web-app
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Start the development server:
```bash
bun dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## 📋 Development Commands

```bash
bun dev        # Start development server
bun build      # Create production build
bun start      # Start production server
bun clean      # Clean build artifacts
bun lint       # Run Biome linter
bun format     # Format code with Biome
bun check      # Run all Biome checks
```

## 📁 Project Structure

```
settlewell-realty/
├── app/                # Next.js App Router pages and layouts
│   ├── (routes)/      # Application routes
│   ├── api/           # API endpoints
│   └── globals.css    # Global styles
├── components/        # React components
│   ├── ui/           # Reusable UI components
│   └── sections/     # Page-specific sections
├── lib/              # Utility functions and configurations
│   ├── utils/        # Helper functions
│   └── constants/    # Application constants
├── public/           # Static assets
└── styles/           # Additional styling
```

## 💅 Styling

- Styles are managed through Tailwind CSS
- Global styles and theme configuration are defined in:
  - `tailwind.config.ts` - Theme customization, colors, and design tokens
  - `app/globals.css` - Base styles and CSS variables
- Component-specific styles use Tailwind's utility classes
- Dark mode support via next-themes

## 🚀 Deployment

This site is deployed on [Vercel](https://vercel.com) with automatic deployments from the main branch.

- **Production**: [settlewellrealty.com](https://settlewellrealty.com)
- **Staging**: [staging.settlewellrealty.com](https://staging.settlewellrealty.com)

## 📞 Contact

For inquiries about property management services:
- 📧 [contact@settlewellrealty.com](mailto:contact@settlewellrealty.com)
- 🌐 [settlewellrealty.com](https://settlewellrealty.com)
- 📱 [(303) 123-4567](tel:+13031234567)

## 📄 License

Private - All Rights Reserved  
© SettleWell Realty 

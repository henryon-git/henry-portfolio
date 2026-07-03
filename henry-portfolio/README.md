# Henry Aruna Nelson — Portfolio

A modern, cybersecurity-themed portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Features

- ⚡ **Next.js 14 App Router**
- 🌙 **Dark / Light mode** with `next-themes`
- 📱 **Responsive** with a hamburger navbar on mobile
- 🔗 **Pages open in new tabs** (About, Projects, Experience, Contact)
- 🎨 **Cyber-mint design** — dot grid, glow borders, typing animation
- 🔤 **Space Grotesk + Inter + JetBrains Mono** typography
- ✨ **Scroll-triggered fade animations**

## Project Structure

```
henry-portfolio/
├── app/
│   ├── layout.tsx        # Root layout + Navbar
│   ├── page.tsx          # Homepage (Hero + Skills)
│   ├── globals.css
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── experience/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx        # Hamburger nav + theme toggle
│   ├── ThemeProvider.tsx
│   ├── TypingText.tsx    # Hero typing animation
│   └── FadeSection.tsx   # Scroll-reveal wrapper
├── tailwind.config.ts
└── package.json
```

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open http://localhost:3000
```

## Customization

- **Your info**: Update name, bio, skills, and projects in each page file directly.
- **Colors**: Edit `tailwind.config.ts` — change `mint` and `navy` to your preferred palette.
- **Links**: Update social links in `app/contact/page.tsx`.
- **Projects**: Add/edit entries in the `projects` array in `app/projects/page.tsx`.

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Easiest: push to GitHub → connect on [Vercel](https://vercel.com) → auto-deploys on every push.

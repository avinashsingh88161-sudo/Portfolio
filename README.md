# Avinash Singh — Full Stack Developer Portfolio

A modern, high-performance personal portfolio website for **Avinash Singh**, Full Stack Developer & Software Engineer specializing in the **MERN Stack** (MongoDB, Express, React, Node.js), Next.js, TypeScript, and Scalable Backend Architecture.

Built with a clean engineering aesthetic, live system telemetry simulation, interactive architecture visualizer, searchable skills grid, and responsive design.

---

## 🌟 Highlights & Key Features

- **⚡ Live System Telemetry**: Interactive pipeline simulation (Client Inbound → Express API Gateway → Business Logic Services → Redis Cache & MongoDB/MySQL) with real-time latency calculation and cache hit metrics via the `[Simulate Flow]` feature.
- **🧭 Dynamic Navigation Bar**: Clean sticky header with avatar, branding, animated active section underline indicators, and direct social/theme actions.
- **⏱️ Verified Stat Metrics**: Highlight cards showcasing MERN Stack proficiency, Node.js & Express systems, REST/WebSocket APIs, and production readiness.
- **👤 Architectural About Section**:
  - Detailed bio, career philosophy, and highlight callout.
  - Left profile card featuring current focus items, core stack tags, and quick-connect channels.
  - 2-Column Core Competencies checklist.
  - 4 Core Engineering Pillars: *Performance*, *Scalability*, *Security*, and *Maintainability*.
- **🔍 Searchable Skills & Tooling**: Real-time search filter across Backend, Databases, Frontend & UI, and DevOps/Tools categories with tag categorization (e.g. Runtime, Framework, NoSQL, Cache).
- **🏗️ Interactive System Architecture**: Step-by-step end-to-end request lifecycle visualizer (Presentation Tier → Security Tier → Business Tier → Data Persistence Tier).
- **🚀 Featured Projects**: Showcase of production-ready full stack web applications with tech badges, GitHub repository links, and live demos.
- **⏳ Experience & Journey Timeline**: Chronological milestones tracking academic achievements, internships, and freelance projects.
- **📬 Interactive Contact Form**: Fully validated client-side contact form with regex validation, real-time error feedback, and loading states.

---

## 🛠️ Tech Stack

### Core & Frameworks
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Design Tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

### Testing & Tooling
- **Unit Testing**: [Vitest](https://vitest.dev/)
- **DOM Testing**: [React Testing Library](https://testing-library.com/) & [jsdom](https://github.com/jsdom/jsdom)
- **Code Quality**: ESLint

---

## 📁 Project Structure

```text
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design system, CSS variables & typography
│   │   ├── layout.tsx           # Root metadata and layout configuration
│   │   └── page.tsx             # Entry page rendering the Portfolio
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky navigation with active underline
│   │   ├── Hero.tsx             # Main hero presentation & CTA actions
│   │   ├── HeroTelemetry.tsx    # Live system telemetry & flow simulator
│   │   ├── StatMetrics.tsx      # 4 verified metrics & badges
│   │   ├── About.tsx            # Profile card, competencies & engineering pillars
│   │   ├── Skills.tsx           # Searchable skills & tooling grid
│   │   ├── Architecture.tsx     # Full stack system lifecycle visualizer
│   │   ├── Experience.tsx       # Chronological milestone journey
│   │   ├── Projects.tsx         # Featured project cards
│   │   ├── Contact.tsx          # Validated contact form & direct channels
│   │   ├── Footer.tsx           # Bottom copyright & back-to-top button
│   │   └── ui/                  # Reusable UI primitives
│   ├── data/
│   │   ├── experience.ts        # Career milestones data
│   │   ├── projects.ts          # Featured projects data
│   │   ├── skills.ts            # Skills & tooling categorized data
│   │   └── social.ts            # Social channels and navigation links
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces & types
│   └── __tests__/
│       └── portfolio.test.tsx   # Vitest unit test suite
├── public/                      # Static assets (images, icons, resume)
├── audit.md                     # Code audit & feature documentation
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript compiler config
└── vitest.config.ts             # Vitest test runner configuration
```

---

## 💻 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/avinashsingh88161-sudo/aashi-clinic.git
cd aashi-clinic
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run Unit Tests
```bash
npm run test
```

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## 📧 Connect with Avinash

- **GitHub**: [@avinashsingh88161-sudo](https://github.com/avinashsingh88161-sudo)
- **LinkedIn**: [in/avinash-singh-62a312384](https://linkedin.com/in/avinash-singh-62a312384)
- **Email**: avinashsingh88161@gmail.com

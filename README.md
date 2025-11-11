# 🚀 Nagasa Anandes - Portfolio Website

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel)

Modern and interactive portfolio website powered by **Next.js 16** and **TailwindCSS**, showcasing my projects, skills, and professional profile.

[![Portfolio Preview](https://raw.githubusercontent.com/NagasaAnandes/My_Portfolio/main/public/images/portfolio-preview.png?raw=1)](https://nagasaanandes-portfolio.vercel.app/)

## ✨ Features

- **🎨 Modern UI/UX**: Clean, minimalist design with smooth animations and transitions
- **🌓 Theme Switching**: Dynamic theme system with multiple color schemes (Blue, Red, Green, Purple, Orange)
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **⚡ Performance Optimized**: Built with Next.js 16 for lightning-fast page loads
- **🎭 Smooth Animations**: Powered by Motion (Framer Motion) for fluid interactions
- **♿ Accessible**: Following web accessibility best practices
- **🎯 SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (React 19)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

### Development Tools
- **Package Manager**: npm/yarn/pnpm/bun
- **Linting**: ESLint
- **Fonts**: Geist Sans & Geist Mono

## 📂 Project Structure

```
nextjs-portfolio/
├── public/
│   ├── cv/                    # Resume/CV files
│   ├── icons/                 # Icon assets
│   └── images/                # Project images and screenshots
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── page.tsx           # Main page component
│   ├── components/
│   │   ├── About.tsx          # About section
│   │   ├── Contact.tsx        # Contact form section
│   │   ├── FloatingShapes.tsx # Animated background shapes
│   │   ├── Footer.tsx         # Footer component
│   │   ├── Hero.tsx           # Hero/landing section
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Projects.tsx       # Projects showcase
│   │   ├── Skills.tsx         # Skills and expertise
│   │   ├── TechIcons.tsx      # Technology icons (SVG)
│   │   ├── TechIconsAssets.tsx # Icon asset imports
│   │   ├── TechStrips.tsx     # Animated tech strips
│   │   ├── ThemeContext.tsx   # Theme state management
│   │   └── ThemeToggle.tsx    # Theme switcher component
│   ├── lib/
│   │   ├── imageWithFallback.tsx # Image component with fallback
│   │   └── useThemeColor.tsx     # Theme color hook
│   ├── styles/
│   │   └── globals.css        # Global styles and CSS variables
│   └── types/
│       └── svg.d.ts           # SVG type declarations
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts (implied)
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NagasaAnandes/My_Portfolio.git
   cd My_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Sections

### 1. **Hero Section**
- Eye-catching introduction with animated gradient text
- 3D card visual with hover effects
- Quick stats (years of experience, projects completed)
- CTA buttons for viewing work and getting in touch

### 2. **About Section**
- Personal introduction and background
- Experience and project metrics
- Downloadable CV/Resume
- Professional tags and specializations

### 3. **Skills Section**
- Categorized skill sets (Frontend, Backend, Database, Mobile)
- Interactive technology cards with icons
- Visual technology stack display
- Hover effects and animations

### 4. **Projects Section**
- Filterable project showcase (All, Web, Mobile)
- Featured projects with images
- Project descriptions and tech stacks
- Links to live demos and GitHub repositories

### 5. **Contact Section**
- Contact form for inquiries
- Social media links
- Professional email and communication channels

### 6. **Footer**
- Copyright information
- Additional navigation links

## 🎨 Theme System

The portfolio features a dynamic theme system with 5 color schemes:

- **Blue** (Default): Professional and trustworthy
- **Red**: Bold and energetic
- **Green**: Fresh and natural
- **Purple**: Creative and modern
- **Orange**: Warm and welcoming

Themes can be switched using the theme toggle button in the navigation bar.

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Adding New Projects

Edit `/src/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description",
    tags: ["Tech1", "Tech2", "Tech3"],
    image: "/images/your-project.png",
    color: "from-[#color1] to-[#color2]",
    type: "web", // or "mobile"
    github: "https://github.com/yourusername/repo",
  },
  // Add more projects...
];
```

### Updating Skills

Edit `/src/components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    category: "Category Name",
    icon: IconComponent,
    color: "from-[#color1] to-[#color2]",
    skills: ["Skill1", "Skill2", "Skill3"],
  },
];
```

### Changing Theme Colors

Edit `/src/styles/globals.css` to modify CSS variables for light and dark themes.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Nagasa Anandes Putra Ramadhan**
- GitHub: [@NagasaAnandes](https://github.com/NagasaAnandes)
- Portfolio: [Nagasa Anandes](https://nagasaanandes-portfolio.vercel.app/)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Animated with [Motion](https://motion.dev/)
- Icons from [Lucide](https://lucide.dev/)

---

⭐ If you found this project interesting, please give it a star on GitHub!


import dynamic from "next/dynamic";
import { ThemeProvider } from "../components/ThemeContext";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import FloatingShapes from "../components/FloatingShapes";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import HomeClient from "../components/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Nagasa Anandes",
  description:
    "Portfolio Nagasa Anandes | Front-End Developer React & Flutter with a focus on modern UI/UX and high performance.",
  alternates: {
    canonical: "https://nagasaanandes-portfolio.vercel.app/",
  },
};

export default function App() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nagasa Anandes",
    jobTitle: "Front-End Developer",
    url: "https://nagasaanandes-portfolio.vercel.app/",
    image: "https://nagasaanandes-portfolio.vercel.app/images/portfolio-preview.png",
    description:
      "Front-End Developer experienced in React, Flutter, and modern UI design.",
    sameAs: [
      "https://github.com/NagasaAnandes",
      "www.linkedin.com/in/nagasa-anandes-putra-ramadhan-428895207",
      "https://www.instagram.com/nagasa.anandes/",
    ],
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-hidden transition-colors duration-500" style={{ background: 'linear-gradient(to bottom right, var(--theme-bg-primary), var(--theme-bg-secondary), var(--theme-bg-tertiary))' }}>
        <Navbar />
        <ThemeToggle />
        <FloatingShapes />
        <section id="home">
          <Hero />
        </section>
        <HomeClient />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

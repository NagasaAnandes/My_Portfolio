import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import FloatingShapes from "@/components/FloatingShapes";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { ThemeProvider } from "@/components/ThemeContext";
import { ThemeToggle } from "@/components/ThemeToggle";


export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-hidden transition-colors duration-500" style={{ background: 'linear-gradient(to bottom right, var(--theme-bg-primary), var(--theme-bg-secondary), var(--theme-bg-tertiary))' }}>
        <Navbar />
        <ThemeToggle />
        <FloatingShapes />
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

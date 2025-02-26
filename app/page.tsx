import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import SnapScroll from "./components/SnapScroll";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

const sections = [
  { bgColor: "bg-background", content: <HeroSection /> },
  { bgColor: "bg-background", content: <AboutSection /> },
  { bgColor: "bg-background", content: <SkillSection /> },
  { bgColor: "bg-background", content: <ProjectSection /> },
  { bgColor: "bg-foreground", content: <ContactSection /> },
];

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="fixed inset-0 pointer-events-none border-8 border-white dark:border-white">
      </div>
      <SnapScroll sections={sections} />
    </div>
  );
}

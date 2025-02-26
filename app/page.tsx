import { title } from "process";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import SnapScroll from "./components/SnapScroll";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

const sections = [
  { title: "Hero Section", bgColor: "bg-background", content: <HeroSection /> },
  { title: "About Section", bgColor: "bg-background", content: <AboutSection /> },
  { title: "Skill Section", bgColor: "bg-background", content: <SkillSection /> },
  { title: "Project Section", bgColor: "bg-background", content: <ProjectSection /> },
  { title: "Contact Section", bgColor: "bg-foreground", content: <ContactSection /> },
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

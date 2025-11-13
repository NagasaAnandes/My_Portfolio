'use client';

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../lib/imageWithFallback";

const projects = [
    {
        title: "Revou Software Engineer Training",
        description: "Comprehensive training platform for aspiring software engineers with hands-on projects",
        tags: ["CSS", "JavaScript", "HTML"],
        image: "/images/Revou-Training.png",
        color: "from-[#dc143c] to-[#ff1744]",
        type: "web",
        github: "https://github.com/NagasaAnandes/Revou-Software-Engineer-Training.git",
    },
    {
        title: "Educational App",
        description: "Interactive mobile application for learning languages with gamified lessons",
        tags: ["Flutter"],
        image: "/images/Edu-Prima.png",
        color: "from-[#4169e1] to-[#1e90ff]",
        type: "mobile",
        github: "https://github.com/NagasaAnandes/flutter_eduprima.git",
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio showcasing projects, skills, and experience with a modern design",
        tags: ["Next.js", "TailwindCSS"],
        image: "/images/Portfolio.png",
        color: "from-[#9b59b6] to-[#8e44ad]",
        type: "web",
        github: "https://github.com/NagasaAnandes/My_Portfolio.git",
    },
];

type FilterType = "all" | "web" | "mobile";

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");

    // Filter projects based on active filter
    const filteredProjects = projects.filter((project) => {
        if (activeFilter === "all") return true;
        return project.type === activeFilter;
    });

    return (
        <section id="projects" ref={ref} className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#dc143c] opacity-10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-10 sm:mb-12 md:mb-16"
                >
                    <div className="flex flex-col items-center gap-6 sm:gap-8">
                        <div className="text-center">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl theme-text-primary mb-3 sm:mb-4">
                                Featured{" "}
                                <span
                                    style={{
                                        backgroundImage: "linear-gradient(135deg, #dc143c 0%, #4169e1 100%)",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        color: "transparent",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Projects
                                </span>
                            </h2>
                            <p className="theme-text-tertiary max-w-xl mx-auto text-sm sm:text-base">
                                Showcasing innovative solutions and creative implementations
                            </p>
                        </div>

                        {/* Filter Buttons - Responsive */}
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                            <button
                                onClick={() => setActiveFilter("all")}
                                className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base theme-bg-glass backdrop-blur-sm theme-border rounded-lg transition-all duration-300 ${activeFilter === "all"
                                    ? "theme-text-primary bg-linear-to-r from-[#dc143c]/20 to-[#4169e1]/20 border-[#dc143c] shadow-[0_0_15px_rgba(220,20,60,0.3)]"
                                    : "theme-text-tertiary theme-bg-glass-hover hover:theme-text-primary"
                                    }`}
                                style={{ borderWidth: '1px' }}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setActiveFilter("web")}
                                className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base theme-bg-glass backdrop-blur-sm theme-border rounded-lg transition-all duration-300 ${activeFilter === "web"
                                    ? "theme-text-primary bg-linear-to-r from-[#dc143c]/20 to-[#4169e1]/20 border-[#dc143c] shadow-[0_0_15px_rgba(220,20,60,0.3)]"
                                    : "theme-text-tertiary theme-bg-glass-hover hover:theme-text-primary"
                                    }`}
                                style={{ borderWidth: '1px' }}
                            >
                                Web
                            </button>
                            <button
                                onClick={() => setActiveFilter("mobile")}
                                className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base theme-bg-glass backdrop-blur-sm theme-border rounded-lg transition-all duration-300 ${activeFilter === "mobile"
                                    ? "theme-text-primary bg-linear-to-r from-[#dc143c]/20 to-[#4169e1]/20 border-[#dc143c] shadow-[0_0_15px_rgba(220,20,60,0.3)]"
                                    : "theme-text-tertiary theme-bg-glass-hover hover:theme-text-primary"
                                    }`}
                                style={{ borderWidth: '1px' }}
                            >
                                Mobile
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Responsive Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6">
                        {/* Dynamic Layout based on filtered projects */}
                        {filteredProjects.map((project, index) => {
                            // First project is large on desktop, others are medium/small
                            const isLarge = index === 0 && filteredProjects.length > 3;

                            // Responsive column spans
                            let colSpan = "sm:col-span-1"; // Default for small screens

                            if (isLarge) {
                                // Large featured card on desktop
                                colSpan = "sm:col-span-2 lg:col-span-8";
                            } else {
                                // Regular cards
                                colSpan = "sm:col-span-1 lg:col-span-4";
                            }

                            const rowSpan = isLarge ? "lg:row-span-2" : "";

                            return (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, scale: index === 0 ? 0.9 : 1, y: index === 0 ? 0 : 30 }}
                                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                                    className={`${colSpan} ${rowSpan}`}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onTouchStart={() => setHoveredIndex(index)}
                                    onTouchEnd={() => setHoveredIndex(null)}
                                >
                                    <ProjectCard
                                        project={project}
                                        isHovered={hoveredIndex === index}
                                        large={isLarge}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center py-12 sm:py-16 md:py-20"
                    >
                        <p className="theme-text-tertiary text-lg sm:text-xl">
                            No projects found in this category
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

function ProjectCard({ project, isHovered, large = false }: { project: typeof projects[0], isHovered: boolean, large?: boolean }) {
    return (
        <div className={`group relative overflow-hidden rounded-xl sm:rounded-2xl $${large
            ? "h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]"
            : "h-[300px] sm:h-[350px] md:h-[400px]"
            }`}>
            {/* Background Image with Scale Effect */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                    />
                </motion.div>
            </div>

            {/* Color Overlay - Theme Aware (Lighter to show image) */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-30" : "opacity-50"
                }`}>
                <div className={`absolute inset-0 bg-linear-to-br ${project.color}`} />
            </div>

            {/* Content Overlay - Theme Aware (Gradient from bottom) */}
            <div className={`absolute inset-0 theme-project-overlay transition-opacity duration-500 ${isHovered ? "opacity-90" : "opacity-60"
                }`} />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 transition-transform duration-500">
                <motion.div
                    animate={{ y: isHovered ? -10 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 sm:space-y-3 md:space-y-4"
                >
                    <h3 className={`theme-text-primary leading-tight ${large
                        ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                        : "text-lg sm:text-xl md:text-2xl"
                        }`}>
                        {project.title}
                    </h3>

                    <motion.p
                        animate={{ opacity: isHovered ? 1 : 0.8, y: isHovered ? 0 : 10 }}
                        transition={{ duration: 0.3 }}
                        className="theme-text-secondary text-xs sm:text-sm md:text-base line-clamp-2 sm:line-clamp-none"
                    >
                        {project.description}
                    </motion.p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 sm:px-3 py-0.5 sm:py-1 theme-bg-glass backdrop-blur-sm theme-border rounded-full theme-text-secondary text-xs sm:text-sm"
                                style={{ borderWidth: '1px' }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <motion.div
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-1 sm:pt-2"
                    >
                        <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-linear-to-r from-[#dc143c] to-[#ff1744] text-white rounded-lg hover:shadow-[0_0_20px_rgba(220,20,60,0.5)] transition-shadow duration-300 text-xs sm:text-sm">
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                            View Live
                        </button>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 theme-bg-glass backdrop-blur-sm theme-border theme-text-primary rounded-lg theme-bg-glass-hover transition-colors duration-300 text-xs sm:text-sm"
                            style={{ borderWidth: '1px' }}
                        >
                            <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                            Code
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Neon Border on Hover - Theme Aware */}
            <div
                className={`absolute inset-0 rounded-xl sm:rounded-2xl transition-opacity duration-500 pointer-events-none theme-project-glow ${isHovered ? "opacity-100" : "opacity-0"
                    }`}
            />
        </div>
    );
}

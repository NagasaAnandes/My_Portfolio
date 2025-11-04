'use client';

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Code, Database, Smartphone, Server, Layers } from "lucide-react";
import { TechIcons } from "./TechIcons";
import { techIconsAssets, TechIcon } from "./TechIconsAssets";

const skillCategories = [
    {
        category: "Frontend",
        icon: Code,
        color: "from-[#dc143c] to-[#ff1744]",
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "TailwindCSS"],
    },
    {
        category: "Backend",
        icon: Server,
        color: "from-[#4169e1] to-[#1e90ff]",
        skills: ["PHP", "Laravel", "Python", "Golang"],
    },
    {
        category: "Database",
        icon: Database,
        color: "from-[#16a085] to-[#1abc9c]",
        skills: ["MySQL", "MongoDB"],
    },
    {
        category: "Mobile",
        icon: Smartphone,
        color: "from-[#9b59b6] to-[#8e44ad]",
        skills: ["Flutter", "Kotlin"],
    },
];

const allSkills = [
    { name: "HTML", color: "from-[#e34c26] to-[#f06529]", icon: "HTML" },
    { name: "CSS", color: "from-[#264de4] to-[#2965f1]", icon: "CSS" },
    { name: "JavaScript", color: "from-[#f0db4f] to-[#f7df1e]", icon: "JavaScript" },
    { name: "React.js", color: "from-[#61dafb] to-[#00d8ff]", icon: "React" },
    { name: "Next.js", color: "from-[#ffffff] to-[#e0e0e0]", icon: "NextJS" },
    { name: "TailwindCSS", color: "from-[#06b6d4] to-[#0891b2]", icon: "TailwindCSS" },
    { name: "Laravel", color: "from-[#ff2d20] to-[#dc143c]", icon: "Laravel" },
    { name: "PHP", color: "from-[#777bb4] to-[#8892bf]", icon: "PHP" },
    { name: "Python", color: "from-[#3776ab] to-[#ffd43b]", icon: "Python" },
    { name: "MySQL", color: "from-[#00758f] to-[#f29111]", icon: "MySQL" },
    { name: "MongoDB", color: "from-[#4db33d] to-[#3fa037]", icon: "MongoDB" },
    { name: "Flutter", color: "from-[#02569b] to-[#0468d7]", icon: "Flutter" },
    { name: "Kotlin", color: "from-[#7f52ff] to-[#b125ea]", icon: "Kotlin" },
    { name: "Golang", color: "from-[#00add8] to-[#00a29c]", icon: "Golang" },
];

export function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    return (
        <section ref={ref} className="relative py-32 px-6 md:px-12">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4169e1] opacity-10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl theme-text-primary mb-4">
                        Skills &{" "}
                        <span
                            style={{
                                backgroundImage: "linear-gradient(135deg, #dc143c 0%, #4169e1 100%)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Expertise
                        </span>
                    </h2>
                    <p className="theme-text-tertiary max-w-2xl mx-auto">
                        Mastering modern technologies to build exceptional web experiences
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredCategory(category.category)}
                            onMouseLeave={() => setHoveredCategory(null)}
                            className="group relative"
                        >
                            <div className="relative theme-bg-glass backdrop-blur-sm theme-border rounded-3xl p-8 theme-bg-glass-hover transition-all duration-300 overflow-hidden" style={{ borderWidth: '1px' }}>
                                {/* Hover Gradient */}
                                <div className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                <div className="relative z-10 space-y-6">
                                    {/* Category Header */}
                                    <div className="flex items-center gap-4">
                                        <div className={`w-16 h-16 bg-linear-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                            <category.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="theme-text-primary text-xl">{category.category}</h3>
                                            <p className="theme-text-tertiary text-sm">{category.skills.length} Technologies</p>
                                        </div>
                                    </div>

                                    {/* Skills List */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skillName) => {
                                            const skill = allSkills.find((s) => s.name === skillName);
                                            return (
                                                <motion.span
                                                    key={skillName}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                                                    className={`px-3 py-1.5 bg-linear-to-r ${skill?.color} rounded-lg text-white text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                                                >
                                                    {skillName}
                                                </motion.span>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Neon Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl shadow-[inset_0_0_30px_rgba(220,20,60,0.2)]" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Skills Cloud */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                >
                    <div className="relative bg-linear-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-12 overflow-hidden">
                        {/* Decorative Background */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-[#dc143c] opacity-5 blur-[100px] rounded-full" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#4169e1] opacity-5 blur-[100px] rounded-full" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <Layers className="w-6 h-6 text-[#dc143c]" />
                                <h3 className="theme-text-primary text-2xl">Technology Stack</h3>
                            </div>

                            {/* Interactive Skills Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                                {allSkills.map((skill, index) => {
                                    // Check if icon exists in assets, otherwise use SVG component
                                    const assetIcon = techIconsAssets[skill.icon];
                                    const IconComponent = TechIcons[skill.icon as keyof typeof TechIcons];
                                    const hasAssetIcon = assetIcon && Object.keys(techIconsAssets).length > 0;

                                    return (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.5 + index * 0.03,
                                                type: "spring",
                                                stiffness: 200,
                                            }}
                                            className="group relative"
                                        >
                                            <div className="relative theme-bg-glass backdrop-blur-sm theme-border rounded-xl p-4 theme-bg-glass-hover transition-all duration-300 h-full flex flex-col items-center justify-center gap-3 overflow-hidden" style={{ borderWidth: '1px' }}>
                                                {/* Animated Background */}
                                                <motion.div
                                                    className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                                                    whileHover={{ scale: 1.5 }}
                                                    transition={{ duration: 0.4 }}
                                                />

                                                {/* Icon - Use asset if available, otherwise use SVG component */}
                                                <div className="relative w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                                                    {hasAssetIcon ? (
                                                        <img
                                                            src={assetIcon}
                                                            alt={skill.name}
                                                            className="w-full h-full object-contain drop-shadow-lg"
                                                        />
                                                    ) : IconComponent ? (
                                                        <IconComponent className="w-full h-full text-white drop-shadow-lg" />
                                                    ) : (
                                                        <div className="w-full h-full bg-linear-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                                                            <span className="text-white text-xs">
                                                                {skill.name.slice(0, 2).toUpperCase()}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Skill Name */}
                                                <p className="relative theme-text-primary text-sm text-center group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-[#dc143c] group-hover:to-[#4169e1] group-hover:bg-clip-text transition-all duration-300">
                                                    {skill.name}
                                                </p>

                                                {/* Glow Effect */}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl shadow-[inset_0_0_15px_rgba(220,20,60,0.3)]" />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <p className="theme-text-tertiary">
                        Always learning and exploring new technologies to stay ahead of the curve
                    </p>
                    <div className="flex justify-center gap-2 mt-4">
                        <div className="w-2 h-2 bg-[#dc143c] rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-[#4169e1] rounded-full animate-pulse delay-100" />
                        <div className="w-2 h-2 bg-[#16a085] rounded-full animate-pulse delay-200" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

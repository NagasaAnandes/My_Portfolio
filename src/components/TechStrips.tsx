import { motion } from "motion/react";

const techLogos = [
    // Strip 1
    [
        { name: "React", bg: "from-[#1e3a8a] to-[#1e40af]", icon: "⚛️" },
        { name: "Next.js", bg: "from-[#000000] to-[#1a1a1a]", icon: "▲" },
        { name: "TypeScript", bg: "from-[#1e40af] to-[#3b82f6]", icon: "TS" },
        { name: "Tailwind", bg: "from-[#0891b2] to-[#06b6d4]", icon: "💨" },
        { name: "Node.js", bg: "from-[#15803d] to-[#16a34a]", icon: "🟢" },
    ],
    // Strip 2
    [
        { name: "MongoDB", bg: "from-[#166534] to-[#15803d]", icon: "🍃" },
        { name: "Laravel", bg: "from-[#dc143c] to-[#991b1b]", icon: "L" },
        { name: "MySQL", bg: "from-[#1e3a8a] to-[#1e40af]", icon: "🐬" },
        { name: "Python", bg: "from-[#1e40af] to-[#3b82f6]", icon: "🐍" },
        { name: "PHP", bg: "from-[#4c1d95] to-[#5b21b6]", icon: "🐘" },
    ],
    // Strip 3
    [
        { name: "Flutter", bg: "from-[#0284c7] to-[#0ea5e9]", icon: "F" },
        { name: "Kotlin", bg: "from-[#7c3aed] to-[#8b5cf6]", icon: "K" },
        { name: "Golang", bg: "from-[#0891b2] to-[#06b6d4]", icon: "Go" },
        { name: "Docker", bg: "from-[#0284c7] to-[#0ea5e9]", icon: "🐳" },
        { name: "Git", bg: "from-[#ea580c] to-[#f97316]", icon: "📦" },
    ],
];

export function TechStrips() {
    return (
        <div className="absolute right-0 top-20 w-[500px] h-[400px] overflow-hidden opacity-30 pointer-events-none hidden xl:block">
            <div className="relative w-full h-full">
                {techLogos.map((strip, stripIndex) => (
                    <motion.div
                        key={stripIndex}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.5 + stripIndex * 0.2,
                            duration: 0.8,
                        }}
                        className="absolute w-[600px] h-20 transform -rotate-12"
                        style={{
                            top: `${stripIndex * 120}px`,
                            left: `-${stripIndex * 30}px`,
                        }}
                    >
                        {/* Background Strip */}
                        <div className="absolute inset-0 theme-bg-glass backdrop-blur-sm theme-border rounded-2xl overflow-hidden shadow-xl" style={{ borderWidth: '1px' }}>
                            {/* Animated Gradient Overlay */}
                            <motion.div
                                animate={{
                                    x: ["-100%", "100%"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    ease: "linear",
                                    delay: stripIndex * 0.5,
                                }}
                                className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent"
                            />

                            {/* Tech Cards */}
                            <div className="relative flex items-center gap-6 h-full px-8">
                                {strip.map((tech, index) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{
                                            delay: 0.8 + stripIndex * 0.2 + index * 0.1,
                                            duration: 0.5,
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                        className="shrink-0"
                                    >
                                        <div className={`relative w-24 h-12 bg-linear-to-br ${tech.bg} rounded-lg shadow-lg overflow-hidden group hover:scale-110 transition-transform duration-300`}>
                                            {/* Shine Effect */}
                                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Content */}
                                            <div className="relative h-full flex items-center justify-center gap-2 px-2">
                                                <span className="text-lg">{tech.icon}</span>
                                                <span className="text-white text-xs truncate">{tech.name}</span>
                                            </div>

                                            {/* Glow Effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_10px_rgba(255,255,255,0.3)]" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Stripe Glow */}
                        <div className="absolute inset-0 bg-linear-to-r from-[#dc143c]/20 via-transparent to-[#4169e1]/20 blur-xl rounded-2xl" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

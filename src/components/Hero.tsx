'use client';

import { motion } from "motion/react";
import { ChevronDown, Code2, Award, Users } from "lucide-react";
import { TechStrips } from "./TechStrips";
import { useThemeColors } from "../lib/useThemeColor";
import { useTheme } from "./ThemeContext";

export function Hero() {
    const colors = useThemeColors();
    const { theme } = useTheme();

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#dc143c] opacity-20 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#4169e1] opacity-20 blur-[120px] rounded-full" />
                <TechStrips />
            </div>

            <div className="relative z-10 max-w-7xl w-full">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    {/* Left Side - Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-6 space-y-8"
                    >
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="overflow-visible"
                            >
                                <h1 className="tracking-tight">
                                    <motion.span
                                        key={`name1-${theme}`}
                                        className="block text-5xl md:text-7xl pb-4 mb-2"
                                        style={{
                                            backgroundImage: colors.gradientName1,
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        Nagasa
                                    </motion.span>
                                    <motion.span
                                        key={`name2-${theme}`}
                                        className="block text-5xl md:text-7xl"
                                        style={{
                                            backgroundImage: colors.gradientName2,
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        Anandes
                                    </motion.span>
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="flex items-center gap-4"
                            >
                                <div className="h-0.5 w-16 bg-linear-to-r from-[#dc143c] to-transparent" />
                                <p className="theme-text-secondary tracking-wider">
                                    Web Developer
                                </p>
                            </motion.div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="theme-text-tertiary max-w-md text-lg"
                        >
                            Crafting exceptional digital experiences through
                            modern frontend technologies and creative
                            problem-solving.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="flex gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-linear-to-r from-[#dc143c] to-[#ff1744] text-white rounded-lg transition-shadow duration-300"
                                style={{ boxShadow: `0 0 0 ${colors.glowRed}` }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = `0 0 30px ${colors.glowRed}`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = `0 0 0 ${colors.glowRed}`;
                                }}
                            >
                                View Work
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 border-2 border-[#dc143c] theme-text-primary rounded-lg hover:bg-[#dc143c]/10 transition-colors duration-300"
                            >
                                Get in Touch
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="flex gap-8 pt-4"
                        >
                            <div>
                                <p className="text-3xl theme-text-primary">1+</p>
                                <p className="theme-text-tertiary text-sm">
                                    Years Experience
                                </p>
                            </div>
                            <div className="h-12 w-px theme-border" style={{ backgroundColor: colors.border }} />
                            <div>
                                <p className="text-3xl theme-text-primary">10+</p>
                                <p className="theme-text-tertiary text-sm">
                                    Projects Done
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - 3D Card Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="md:col-span-6 relative hidden md:block"
                    >
                        <div className="relative w-full h-[600px] perspective-1000">
                            {/* Main 3D Card */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotateY: [-5, 5, -5],
                                    rotateX: [5, -5, 5],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-60 transform-gpu"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: "rotateY(-15deg) rotateX(10deg)",
                                }}
                            >
                                <div className="relative w-full h-full rounded-3xl overflow-hidden" style={{ boxShadow: `0 20px 60px ${colors.glowRed}` }}>
                                    {/* Card Background */}
                                    <div className="absolute inset-0 bg-linear-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa]" />

                                    {/* Card Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-white to-transparent rounded-full blur-3xl" />
                                    </div>

                                    {/* Card Content */}
                                    <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                                        {/* Top Section */}
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <div className="w-12 h-12 bg-linear-to-br from-[#fbbf24] to-[#f59e0b] rounded-xl" />
                                            </div>
                                            <div className="text-right">
                                                <p className="text-white/80 text-sm">Portfolio</p>
                                                <p className="text-white">2025</p>
                                            </div>
                                        </div>

                                        {/* Middle Section - Code */}
                                        <div className="space-y-2">
                                            <div className="flex gap-2">
                                                <div className="w-12 h-8 bg-white/20 backdrop-blur-sm rounded" />
                                                <div className="w-12 h-8 bg-white/20 backdrop-blur-sm rounded" />
                                                <div className="w-12 h-8 bg-white/20 backdrop-blur-sm rounded" />
                                                <div className="w-12 h-8 bg-white/20 backdrop-blur-sm rounded" />
                                            </div>
                                            <p className="text-white text-xl tracking-widest">
                                                &lt;/&gt; DEVELOPER
                                            </p>
                                        </div>

                                        {/* Bottom Section */}
                                        <div className="flex items-end justify-between">
                                            <div>
                                                <p className="text-white/80 text-sm">Nagasa Anandes</p>
                                                <p className="text-white">Junior Frontend</p>
                                            </div>
                                            <Code2 className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Shine Effect */}
                                    <motion.div
                                        animate={{
                                            x: ["-100%", "200%"],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatDelay: 2,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                    />
                                </div>
                            </motion.div>

                            {/* Floating Stats Cards */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute top-20 right-0 theme-bg-glass backdrop-blur-md theme-border rounded-2xl p-6 shadow-xl"
                                style={{ backgroundColor: colors.bgGlass, borderWidth: '1px', borderColor: colors.border }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-linear-to-br from-[#dc143c] to-[#ff1744] rounded-xl flex items-center justify-center">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="theme-text-primary text-2xl">126k</p>
                                        <p className="theme-text-secondary text-sm">Lines of Code</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="absolute top-56 right-4 backdrop-blur-md rounded-2xl p-6 shadow-xl"
                                style={{ backgroundColor: colors.bgGlass, borderWidth: '1px', borderColor: colors.border }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-linear-to-br from-[#4169e1] to-[#1e90ff] rounded-xl flex items-center justify-center">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="theme-text-primary text-2xl">1.3M</p>
                                        <p className="theme-text-secondary text-sm">Happy Users</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Background Decorative Elements */}
                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute top-1/4 left-0 w-32 h-32 border-2 rounded-full"
                                style={{ borderColor: colors.border, opacity: 0.3 }}
                            />
                            <motion.div
                                animate={{
                                    rotate: -360,
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute bottom-1/4 right-0 w-24 h-24 border-2 rounded-full"
                                style={{ borderColor: colors.border, opacity: 0.3 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Diagonal Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute inset-0 transform -skew-y-2 origin-bottom-left"
                    style={{
                        background: 'linear-gradient(to bottom right, var(--theme-bg-primary), var(--theme-bg-secondary))',
                        height: "200%"
                    }}
                />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-8 h-8 theme-text-tertiary" />
                </motion.div>
            </motion.div>
        </section>
    );
}

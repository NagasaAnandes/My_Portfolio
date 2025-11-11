'use client';

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Download } from "lucide-react";
import { useThemeColors } from "../lib/useThemeColor";
import { useTheme } from "./ThemeContext";

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const colors = useThemeColors();
    const { theme } = useTheme();

    return (
        <section ref={ref} className="relative py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    {/* Decorative Element */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-5 relative"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-linear-to-r from-[#dc143c] to-[#4169e1] opacity-20 blur-xl rounded-3xl" />
                            <div className="relative backdrop-blur-sm rounded-3xl p-8 space-y-6" style={{ backgroundColor: colors.bgGlass, borderWidth: '1px', borderColor: colors.border }}>
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-[#dc143c] rounded-full animate-pulse" />
                                    <p className="theme-text-secondary">Available for projects</p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-linear-to-br from-[#dc143c] to-[#ff1744] rounded-lg flex items-center justify-center">
                                            <span className="text-white">1+</span>
                                        </div>
                                        <div>
                                            <p className="theme-text-primary">Years</p>
                                            <p className="theme-text-tertiary text-sm">Experience</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-linear-to-br from-[#4169e1] to-[#1e90ff] rounded-lg flex items-center justify-center">
                                            <span className="text-white">50+</span>
                                        </div>
                                        <div>
                                            <p className="theme-text-primary">Projects</p>
                                            <p className="theme-text-tertiary text-sm">Completed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:col-span-7 space-y-6"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <h2 className="text-5xl md:text-6xl theme-text-primary">
                                    About{" "}
                                    <span
                                        key={`about-${theme}`}
                                        style={{
                                            backgroundImage: colors.gradientName2,
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        Me
                                    </span>
                                </h2>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="space-y-4 theme-text-secondary"
                            >
                                <p>
                                    I'm <span className="theme-text-primary">Nagasa Anandes</span>, a passionate Web Developer
                                    specializing in Frontend Development. I thrive on transforming creative ideas into
                                    elegant, functional digital experiences that captivate users and drive results.
                                </p>
                                <p>
                                    With expertise in modern web technologies, I craft pixel-perfect interfaces that
                                    seamlessly blend aesthetics with performance. My journey in web development is
                                    fueled by curiosity, continuous learning, and a relentless pursuit of excellence.
                                </p>
                                <p>
                                    I believe in the power of clean code, intuitive design, and cutting-edge technology
                                    to solve complex problems and create meaningful impact in the digital landscape.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="flex flex-wrap gap-3 pt-4"
                            >
                                {["Frontend Expert", "UI/UX Enthusiast", "Tech Explorer"].map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 backdrop-blur-sm border border-[#dc143c]/30 rounded-full theme-text-secondary text-sm"
                                        style={{ backgroundColor: colors.bgGlass }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="pt-6"
                            >
                                <a
                                    href="/cv/Nagasa_Anandes_Putra_Ramadhan.pdf"
                                    download="CV-Nagasa-Anandes.pdf"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-[#4169e1] to-[#1e90ff] text-white rounded-lg transition-all duration-300 hover:scale-105"
                                    style={{ boxShadow: `0 0 0 ${colors.glowBlue}` }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = `0 0 30px ${colors.glowBlue}`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = `0 0 0 ${colors.glowBlue}`;
                                    }}
                                >
                                    <Download className="w-5 h-5" />
                                    Download CV
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
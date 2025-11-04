'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useThemeColors } from "../lib/useThemeColor";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const colors = useThemeColors();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Detect active section
            const sections = navItems.map((item) => item.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        const targetId = href.substring(1);
        const element = document.getElementById(targetId);

        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"
                    }`}
                style={{
                    backdropFilter: isScrolled ? "blur(16px)" : "none",
                    WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
                }}
            >
                <div
                    className={`absolute inset-0 transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        background: colors.bgGlass,
                        borderBottom: `1px solid ${colors.border}`,
                    }}
                />

                <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.a
                            href="#home"
                            onClick={(e) => handleNavClick(e, "#home")}
                            className="relative z-10"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span
                                className="text-2xl tracking-tight"
                                style={{
                                    backgroundImage: colors.gradientName2,
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    color: "transparent",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                NA
                            </span>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <div className="flex items-center gap-1">
                                {navItems.map((item) => {
                                    const isActive = activeSection === item.href.substring(1);
                                    return (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e) => handleNavClick(e, item.href)}
                                            className="relative px-4 py-2 theme-text-secondary hover:theme-text-primary transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {item.name}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeSection"
                                                    className="absolute bottom-0 left-0 right-0 h-0.5"
                                                    style={{
                                                        background: "linear-gradient(90deg, #dc143c 0%, #4169e1 100%)",
                                                    }}
                                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                />
                                            )}
                                        </motion.a>
                                    );
                                })}
                            </div>

                            {/* CTA Button */}
                            <motion.a
                                href="#contact"
                                onClick={(e) => handleNavClick(e, "#contact")}
                                className="relative px-6 py-2.5 rounded-full overflow-hidden group"
                                style={{
                                    background: colors.bgGlass,
                                    border: `1px solid ${colors.border}`,
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: "linear-gradient(135deg, #dc143c 0%, #4169e1 100%)",
                                    }}
                                />
                                <span className="relative theme-text-primary">Get In Touch</span>
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden items-center gap-4">
                            <motion.button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 theme-text-primary"
                                whileTap={{ scale: 0.95 }}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden pt-20"
                        style={{
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                            background: colors.bgGlass,
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="max-w-md mx-auto px-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div
                                className="rounded-3xl p-8 space-y-6"
                                style={{
                                    background: colors.bgGlass,
                                    border: `1px solid ${colors.border}`,
                                }}
                            >
                                {navItems.map((item, index) => {
                                    const isActive = activeSection === item.href.substring(1);
                                    return (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e) => handleNavClick(e, item.href)}
                                            className="block"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <div
                                                className={`px-6 py-4 rounded-2xl transition-all duration-300 ${isActive ? "theme-text-primary" : "theme-text-secondary"
                                                    }`}
                                                style={{
                                                    background: isActive ? colors.bgGlassHover : "transparent",
                                                    border: `1px solid ${isActive ? colors.borderHover : "transparent"}`,
                                                }}
                                            >
                                                <span className="text-xl">{item.name}</span>
                                            </div>
                                        </motion.a>
                                    );
                                })}

                                <motion.a
                                    href="#contact"
                                    onClick={(e) => handleNavClick(e, "#contact")}
                                    className="block mt-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                                >
                                    <div
                                        className="px-6 py-4 rounded-2xl text-center relative overflow-hidden group"
                                        style={{
                                            background: "linear-gradient(135deg, #dc143c 0%, #4169e1 100%)",
                                        }}
                                    >
                                        <span className="text-xl text-white">Get In Touch</span>
                                    </div>
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

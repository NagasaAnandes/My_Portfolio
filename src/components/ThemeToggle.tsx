'use client';

import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            onClick={toggleTheme}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/20 flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/20 transition-colors duration-300 group shadow-lg"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {theme === "dark" ? (
                    <Sun className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                ) : (
                    <Moon className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
                )}
            </motion.div>

            {/* Glow Effect */}
            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${theme === "dark"
                    ? "shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                    : "shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                }`} />
        </motion.button>
    );
}

'use client';

import { Heart } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-12 px-6 md:px-12 theme-border" style={{ borderTopWidth: '1px' }}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo/Name */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-linear-to-br from-[#dc143c] to-[#4169e1] rounded-lg flex items-center justify-center">
                            <span className="text-white">NA</span>
                        </div>
                        <div>
                            <p className="theme-text-primary">Nagasa Anandes</p>
                            <p className="theme-text-tertiary text-sm">Web Developer</p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="flex items-center gap-2 theme-text-tertiary">
                        <span>© {currentYear} Made with</span>
                        <Heart className="w-4 h-4 text-[#dc143c] fill-current" />
                        <span>by Nagasa Anandes</span>
                    </div>

                    {/* Quick Links */}
                    <div className="flex items-center gap-6">
                        <a href="#projects" className="theme-text-tertiary hover:theme-text-primary transition-colors duration-300">
                            Projects
                        </a>
                        <a href="#contact" className="theme-text-tertiary hover:theme-text-primary transition-colors duration-300">
                            Contact
                        </a>
                        <a
                            href="#"
                            className="theme-text-tertiary hover:theme-text-primary transition-colors duration-300"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            Back to Top
                        </a>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="mt-8 pt-8 theme-border text-center" style={{ borderTopWidth: '1px' }}>
                    <p className="theme-text-tertiary text-sm opacity-60">
                        Thankyou for visiting my portfolio! Feel free to reach out for collaborations or inquiries.
                    </p>
                </div>
            </div>
        </footer>
    );
}

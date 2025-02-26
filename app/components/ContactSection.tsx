'use client';

import React from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const ContactSection = () => {
    return (
        <footer className="bg-foreground text-background w-full">
            <div className="max-w-6xl mx-auto px-4 flex flex-grow flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between mb-10">

                {/* Informasi Kontak */}
                <div className="space-y-2 text-center md:text-left">
                    <p className="text-lg font-semibold">Say Hello</p>
                    <p>
                        <a href="mailto:nagasa.anandes@gmail.com" className="hover:underline">hello@nagasa</a>
                    </p>
                </div>

                {/* Navigasi Cepat */}
                <div className="text-center md:text-left">
                    <p className="text-lg font-semibold mb-2">Navigation</p>
                    <ul className="space-y-1">
                        <li><a href="#section1" className="hover:underline">Home</a></li>
                        <li><a href="#section2" className="hover:underline">About Me</a></li>
                        <li><a href="#section3" className="hover:underline">My Skills</a></li>
                        <li><a href="#section4" className="hover:underline">My Project</a></li>
                    </ul>
                </div>

                {/* Ikon Media Sosial */}
                <div className="text-center md:text-left space-y-2">
                    <p className="text-lg font-semibold mb-2">Let’s Connect</p>
                    <div className="flex justify-center space-x-6 md:justify-end">
                        <Link href="https://github.com/NagasaAnandes" target="_blank" className="hover:text-gray-400">
                            <Github size={24} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/nagasa-anandes-putra-ramadhan-428895207/" target="_blank" className="hover:text-blue-700">
                            <Linkedin size={24} />
                        </Link>
                        <Link href="https://www.instagram.com/nagasa.anandes/" target="_blank" className="hover:text-red-500">
                            <Instagram size={24} />
                        </Link>
                        <Link href="mailto:nagasa.anandes@gmail.com" className="hover:text-green-500">
                            <Mail size={24} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Hak Cipta */}
            <div className="text-center text-sm sm:text-xs">
                <p>
                    © {new Date().getFullYear()} Nagasa Anandes Putra Ramadhan. <br className="" /> All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default ContactSection;

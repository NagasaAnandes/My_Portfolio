'use client';

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contacts = [
        {
            icon: Mail,
            label: "Email",
            value: "nagasa.anandes@gmail.com",
            href: "mailto:nagasa.anandes@gmail.com",
            color: "from-[#dc143c] to-[#ff1744]",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/nagasa-anandes",
            href: "https://www.linkedin.com/in/nagasa-anandes-putra-ramadhan-428895207/",
            color: "from-[#0077b5] to-[#00a0dc]",
        },
        {
            icon: Github,
            label: "GitHub",
            value: "github.com/nagasa-anandes",
            href: "https://github.com/NagasaAnandes",
            color: "from-[#6e5494] to-[#8b5cf6]",
        },
    ];

    return (
        <section id="contact" ref={ref} className="relative py-32 px-6 md:px-12">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#dc143c] opacity-10 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 space-y-6"
                >
                    <h2 className="text-5xl md:text-7xl theme-text-primary">
                        Let's{" "}
                        <span
                            style={{
                                backgroundImage: "linear-gradient(135deg, #dc143c 0%, #4169e1 100%)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Connect
                        </span>
                    </h2>
                    <p className="theme-text-secondary text-lg max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I'm always open to discussing new
                        opportunities and innovative ideas. Let's create something amazing together.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {contacts.map((contact, index) => (
                        <motion.a
                            key={contact.label}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative theme-bg-glass backdrop-blur-sm theme-border rounded-2xl p-6 theme-bg-glass-hover transition-all duration-300 overflow-hidden" style={{ borderWidth: '1px' }}>
                                {/* Hover Gradient */}
                                <div className={`absolute inset-0 bg-linear-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                <div className="relative z-10 space-y-4">
                                    <div className={`w-14 h-14 bg-linear-to-br ${contact.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                        <contact.icon className="w-7 h-7 text-white" />
                                    </div>

                                    <div>
                                        <p className="theme-text-tertiary text-sm mb-1">{contact.label}</p>
                                        <p className="theme-text-primary theme-contact-value-hover transition-colors duration-300">
                                            {contact.value}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 theme-contact-connect opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-sm">Connect</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>

                                {/* Neon Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl theme-contact-glow" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative"
                >
                    <div className="relative theme-contact-cta-bg backdrop-blur-sm theme-border rounded-3xl p-12 overflow-hidden" style={{ borderWidth: '1px' }}>
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc143c] theme-contact-decoration blur-[80px] rounded-full" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4169e1] theme-contact-decoration blur-[80px] rounded-full" />

                        <div className="relative z-10 text-center space-y-6">
                            <h3 className="text-3xl md:text-4xl theme-text-primary">
                                Ready to start your project?
                            </h3>
                            <p className="theme-text-secondary max-w-xl mx-auto">
                                Let's discuss how we can bring your vision to life with cutting-edge web solutions.
                            </p>
                            <button className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#dc143c] to-[#ff1744] text-white rounded-xl hover:shadow-[0_0_40px_rgba(220,20,60,0.5)] transition-shadow duration-300 group">
                                <span>Start a Conversation</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

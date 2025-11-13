"use client";

import dynamic from "next/dynamic";

const About = dynamic(() => import("./About"), { ssr: false });
const Skills = dynamic(() => import("./Skills"), { ssr: false });
const Projects = dynamic(() => import("./Projects"), { ssr: false });
const Contact = dynamic(() => import("./Contact"), { ssr: false });

export default function HomeClient() {
    return (
        <>
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </>
    );
}

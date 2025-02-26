'use client';

import React from "react";
import { projects } from "./Dataset";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = () => {
    return (
        <section className="min-h-screen flex flex-col items-center w-full px-4 sm:px-8 md:px-12 py-12 font-merriweather text-foreground">
            <h1 className="font-black text-3xl sm:text-5xl lg:text-6xl mb-12 text-center">
                Projects.
            </h1>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
                {projects.slice(0, 2).map((project, index) => (
                    <div
                        key={index}
                        className={`bg-background p-6 rounded-lg shadow-lg w-full 
                                    ${index === 1 ? "hidden sm:block" : ""}`} // Sembunyikan project kedua di mobile
                    >
                        {/* Container Gambar */}
                        <div className="w-full h-48 flex justify-center items-center">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={project.type === "mobile" ? 100 : 150}
                                height={project.type === "mobile" ? 300 : 450}
                                className={`rounded-lg object-contain w-full max-h-48 ${project.type === "mobile" ? "aspect-[9/16]" : "aspect-[16/9]"}`}
                            />
                        </div>
                        {/* Judul */}
                        <h2 className="text-xl sm:text-2xl font-semibold mt-4">{project.title}</h2>
                        {/* Deskripsi */}
                        <p className="mt-2 text-sm sm:text-base">{project.description}</p>
                        {/* Teknologi */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="bg-foreground text-background px-2 py-1 text-xs rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {/* Link */}
                        <Link href={project.link} className="text-blue-500 mt-4 block hover:underline">
                            View Project →
                        </Link>
                    </div>
                ))}
            </div>

            {/* Tombol Show More */}
            <Link href="#" className="mt-8 bg-primary text-foreground px-6 py-2 rounded-lg shadow-lg hover:opacity-80 w-full max-w-xs text-center">
                Show More
            </Link>
        </section>
    );
};

export default ProjectSection;

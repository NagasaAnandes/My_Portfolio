'use client';

import React from "react";
import { projects } from "./Dataset";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = () => {
    return (
        <section className="min-h-screen flex flex-col items-center w-full px-6 py-12 font-merriweather text-foreground">
            <h1 className="font-black text-3xl sm:text-5xl lg:text-6xl mb-12 font-merriweather text-center text-foreground">
                Projects.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.slice(0, 2).map((project, index) => (
                    <div key={index} className="bg-background p-6 rounded-lg shadow-lg w-full">
                        {/* Container Gambar */}
                        <div className="w-full h-48 flex justify-center items-center">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={project.type === "mobile" ? 100 : 150} // Lebih kecil untuk mobile
                                height={project.type === "mobile" ? 300 : 450} // Lebih tinggi untuk mobile
                                className={`rounded-lg object-cover ${project.type === "mobile" ? "aspect-[9/16]" : "aspect-[16/9]"}`}
                            />
                        </div>
                        {/* Judul */}
                        <h2 className="text-2xl font-semibold mt-4">{project.title}</h2>
                        {/* Deskripsi */}
                        <p className="mt-2 text-sm">{project.description}</p>
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

            <Link href="#" className="mt-8 bg-primary text-foreground px-6 py-2 rounded-lg shadow-lg hover:opacity-80">
                Show More
            </Link>
        </section>
    );
};

export default ProjectSection;

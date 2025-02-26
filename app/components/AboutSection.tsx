'use client';

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Download } from "lucide-react";
import casualPict from "../../public/assets/CasualPict.webp";

const AboutSection = () => {
    return (
        <section className="min-h-screen flex justify-center items-center w-full px-6 sm:px-12 lg:px-32 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Casual Picture Section */}
                <div className="flex justify-center">
                    <Image
                        src={casualPict}
                        alt="Casual Picture"
                        className="h-48 sm:h-60 md:h-72 lg:h-80 w-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                    />
                </div>

                {/* Description */}
                <div className="flex flex-col text-center lg:text-left font-merriweather text-foreground">
                    <h1 className="font-black text-3xl sm:text-5xl lg:text-6xl mb-6 text-primary">
                        About Me.
                    </h1>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-secondary">
                        <Typewriter
                            words={["Let's get to know about me..."]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h2>
                    <h3 className="text-lg sm:text-xl mb-4">
                        I&apos;m <span className="font-bold">Nagasa Anandes Putra Ramadhan</span>, <br className="hidden md:inline" />
                        a <span className="font-bold">frontend developer</span> based in <span className="font-bold">Indonesia.</span> 💻
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed">
                        I&apos;m a web developer who&apos;s always excited to learn and grow. <br className="hidden md:inline" />
                        I love creating digital solutions that can make a real impact, <br className="hidden md:inline" />
                        and I enjoy working both independently and with a team.
                    </p>
                    {/* Download CV Button */}
                    <a
                        href="/CV_Nagasa_Anandes.pdf"
                        download="CV_Nagasa_Anandes.pdf"
                        className="mt-6 mx-auto lg:mx-0 inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground text-foreground font-medium rounded-md shadow-sm hover:bg-foreground hover:text-background transition-all duration-300 w-56 text-center"
                    >
                        Download CV <Download size={18} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;

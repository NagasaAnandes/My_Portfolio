'use client';

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import profile from "../../public/assets/ProfilePic.webp";

const HeroSection = () => {
    return (
        <section className="h-screen flex flex-col-reverse lg:flex-row justify-center items-center w-full px-6 sm:px-12 lg:px-32 gap-6">
            {/* Name Section */}
            <div className="flex flex-col text-center lg:text-left items-center lg:items-start font-merriweather text-foreground">
                <h1 className="font-normal text-xl sm:text-2xl lg:text-4xl mb-2 sm:mb-4">
                    Hi, I'm <br />
                    <span className="font-black text-2xl sm:text-4xl lg:text-6xl hover:underline transition-all duration-300">
                        Nagasa Anandes.
                    </span>
                </h1>
                <h2 className="text-lg sm:text-2xl lg:text-4xl font-black mb-2 sm:mb-4 text-secground">
                    <Typewriter
                        words={["Web Developer", "Mobile Developer", "Tech Enthusiast"]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
                <p className="text-sm sm:text-base max-w-md">
                    I'm a passionate Web Development student, <br className="hidden sm:inline" />
                    focused on creating interactive and dynamic websites.
                </p>
            </div>

            {/* Profile Section */}
            <div className="flex justify-center items-center">
                <Image
                    src={profile}
                    alt="Profile Picture"
                    className="w-40 sm:w-60 lg:w-80 h-auto object-cover rounded-xl animate-floating"
                    priority
                />
            </div>
        </section>
    );
};

export default HeroSection;

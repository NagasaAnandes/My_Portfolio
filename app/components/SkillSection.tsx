'use client';

import React from "react";
import Image from "next/image";
import SwipeSlide from "./SwipeSlide";
import { SwiperSlide } from "swiper/react";
import { skills } from "./Dataset";

const SkillSection = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center w-full px-6 py-12">
            {/* Judul */}
            <h1 className="font-black text-3xl sm:text-5xl lg:text-6xl mb-6 font-merriweather text-center text-foreground">
                Skills.
            </h1>

            {/* Deskripsi */}
            <p className="text-center text-lg text-foreground font-merriweather max-w-2xl mb-8">
                Here are some tech stacks and tools that I have learned and worked with throughout my journey in web and mobile development.
            </p>

            {/* Swiper Slider */}
            <div className="w-full max-w-5xl">
                <SwipeSlide>
                    {skills.map((skill, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <div className="flex flex-col items-center p-4 mb-4">
                                {/* Icon Skill */}
                                <div className="bg-background rounded-full shadow-lg transition-transform duration-300 hover:scale-105 p-3 sm:p-4">
                                    <Image
                                        src={skill.src}
                                        alt={skill.name}
                                        width={50}
                                        height={50}
                                        loading="lazy"
                                        className="w-14 sm:w-16 h-auto"
                                    />
                                </div>

                                {/* Nama & Level Skill */}
                                <div className="font-merriweather text-foreground text-center mt-3">
                                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                                    <p className="text-sm text-gray-500">{skill.level}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </SwipeSlide>
            </div>
        </section>
    );
};

export default SkillSection;

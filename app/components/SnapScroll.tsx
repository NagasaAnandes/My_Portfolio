'use client';

import React from "react";

// Definisi tipe untuk sections
interface Section {
    bgColor: string;
    content: React.ReactNode;
}

interface SnapScrollProps {
    sections: Section[];
}

const sectionStyles =
    "h-screen flex justify-center items-center snap-start";

const SnapScroll: React.FC<SnapScrollProps> = ({ sections }) => {
    return (
        <div className="h-screen">
            {/* Snap Scroll Area */}
            <div className="w-full ml-auto overflow-y-scroll snap-y snap-mandatory h-screen scroll-smooth flex-grow">
                {sections.map((section, index) => (
                    <section key={index} id={`section${index + 1}`} className={`${sectionStyles} ${section.bgColor}`}>
                        {section.content}
                    </section>
                ))}
            </div>
        </div>
    );
};

export default SnapScroll;

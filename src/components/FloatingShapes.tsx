"use client";

import { motion } from "motion/react";
// import { div } from "motion/react-client";

export default function FloatingShapes() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Floating Shape 1 */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-1/4 left-10 w-32 h-32 border-2 border-[#dc143c]/20 rounded-2xl"
                style={{ transform: "rotate(45deg)" }}
            />

            {/* Floating Shape 2 */}
            <motion.div
                animate={{
                    y: [0, 40, 0],
                    x: [0, -30, 0],
                    rotate: [0, -180, -360],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-1/2 right-20 w-24 h-24 border-2 border-[#4169e1]/20 rounded-full"
            />

            {/* Floating Shape 3 */}
            <motion.div
                animate={{
                    y: [0, -50, 0],
                    x: [0, 30, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-linear-to-br from-[#dc143c]/10 to-[#4169e1]/10 rounded-lg"
                style={{ transform: "rotate(30deg)" }}
            />

            {/* Floating Shape 4 */}
            <motion.div
                animate={{
                    y: [0, 60, 0],
                    x: [0, -20, 0],
                    rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-1/3 right-1/3 w-20 h-20 border-2 border-[#dc143c]/10 rounded-xl"
            />

            {/* Small Dots */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                    }}
                    className="absolute w-2 h-2 bg-[#dc143c]/30 rounded-full"
                    style={{
                        top: `${20 + i * 10}%`,
                        left: `${10 + i * 12}%`,
                    }}
                />
            ))}
        </div>
    );
}
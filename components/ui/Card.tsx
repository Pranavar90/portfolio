"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCursor } from "@/hooks/use-cursor";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    tiltStrength?: number;
}

export function Card({ children, className, onClick, tiltStrength = 15 }: CardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { setCursorType } = useCursor();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [`${tiltStrength}deg`, `-${tiltStrength}deg`]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [`-${tiltStrength}deg`, `${tiltStrength}deg`]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setCursorType("default");
    };

    const handleMouseEnter = () => {
        setCursorType("card");
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onClick={onClick}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:bg-white/10 group cursor-none",
                className
            )}
        >
            <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                {children}
            </div>

            {/* Glossy reflection effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ transform: "translateZ(20px)" }}
            />
        </motion.div>
    );
}

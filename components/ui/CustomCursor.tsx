"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useCursor } from "@/hooks/use-cursor";
import { cn } from "@/lib/utils";
import { Cross, ArrowUpRight, ScanEye } from "lucide-react";

export function CustomCursor() {
    const { cursorType } = useCursor();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isClicking, setIsClicking] = useState(false);

    // Smooth spring physics for the cursor
    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
    const smoothX = useSpring(mouseX, smoothOptions);
    const smoothY = useSpring(mouseY, smoothOptions);

    useEffect(() => {
        const manageMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const manageMouseDown = () => setIsClicking(true);
        const manageMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", manageMouseMove);
        window.addEventListener("mousedown", manageMouseDown);
        window.addEventListener("mouseup", manageMouseUp);

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.removeEventListener("mousedown", manageMouseDown);
            window.removeEventListener("mouseup", manageMouseUp);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999] text-white mix-blend-difference"
            style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
        >
            {/* Outer Ring / Reticle */}
            <motion.div
                className={cn(
                    "relative flex items-center justify-center rounded-full border border-white transition-all duration-300 ease-out",
                    cursorType === "hover" ? "h-12 w-12 border-opacity-50" : "h-8 w-8 border-opacity-100",
                    isClicking && "scale-90"
                )}
                animate={{
                    scale: cursorType === "hover" ? 1.2 : 1,
                }}
            >
                {/* Center Dot */}
                <motion.div
                    className={cn(
                        "h-1 w-1 rounded-full bg-white transition-all duration-300",
                        cursorType === "hover" && "h-0 w-0 opacity-0"
                    )}
                />

                {/* Hover Icon Indicators */}
                <AnimatePresence>
                    {cursorType === "hover" && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <ArrowUpRight className="h-4 w-4 text-white" />
                        </motion.div>
                    )}
                    {cursorType === "card" && (
                        <motion.div
                            initial={{ opacity: 0, rotate: -45 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <ScanEye className="h-4 w-4" />
                            {/* Radar sweep effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-t border-white/50"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Ripple Effect Support (visuals can be expanded) */}
                {isClicking && (
                    <motion.div
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 2 }}
                        className="absolute inset-0 rounded-full border border-white"
                    />
                )}
            </motion.div>
        </motion.div>
    );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { useCursor } from "@/hooks/use-cursor";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const { setCursorType } = useCursor();

    return (
        <Section ref={ref} id="hero" className="p-0 overflow-hidden min-h-screen flex flex-col justify-center items-start px-12 md:px-24">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/IMG_20240509_185939.jpg"
                    alt="Mountains Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-7xl">
                {/* Text - Full Width Left Aligned */}
                <motion.div
                    style={{ y, opacity }}
                    className="flex flex-col justify-center max-w-4xl"
                >
                    {/* NAME */}
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-4 leading-none"
                        onMouseEnter={() => setCursorType("text")}
                        onMouseLeave={() => setCursorType("default")}
                    >
                        Pranav A R
                    </motion.h1>

                    {/* ROLE */}
                    <motion.h2
                        className="text-2xl md:text-4xl font-bold tracking-tight text-accent mb-6"
                    >
                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: "circOut", delay: 0.3 }}
                                className="block"
                            >
                                AI Researcher
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden text-muted-foreground/80">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: "circOut", delay: 0.4 }}
                                className="block text-xl md:text-3xl font-medium"
                            >
                                (Deep Learning & Computer Vision)
                            </motion.span>
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl mt-4"
                    >
                        Specializing in Deep Learning, Geospatial Intelligence, and Robotics. Also, I ride and climb mountains.
                    </motion.p>
                </motion.div>
            </div>

            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
                <ArrowDown className="animate-bounce w-4 h-4 text-white" />
            </motion.div>
        </Section>
    );
}

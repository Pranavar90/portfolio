"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/Section";

export function PersonalityDoodle() {
    return (
        <Section id="personality" className="bg-black px-0 md:px-0 py-0 border-y border-white/5 min-h-[50vh] flex flex-col items-center justify-center">
            <div className="w-full h-[60vh] md:h-screen relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full h-full relative"
                >
                    <Image
                        src="/images/gptdoodle2.png"
                        alt="Personality Doodle"
                        fill
                        className="object-fill"
                        priority
                    />
                </motion.div>
                {/* Removed side gradients to ensure full image visibility */}
            </div>
        </Section>
    );
}

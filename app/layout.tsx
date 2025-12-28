
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Google Fonts via Next.js
import "./globals.css";
import { CursorProvider } from "@/hooks/use-cursor";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "AI Engineer | Portfolio",
    description: "Portfolio of an AI/ML Engineer specializing in Computer Vision and Geospatial Intelligence.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${inter.variable} antialiased overflow-x-hidden bg-background text-foreground`}>
                <CursorProvider>
                    <CustomCursor />
                    {children}
                </CursorProvider>
            </body>
        </html>
    );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-8 z-50 group flex flex-col items-center gap-2 pointer-events-auto"
                    aria-label="Voltar ao início"
                >
                    {/* Label Técnico */}
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] bg-foreground text-background px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        TOP // ▲
                    </span>

                    {/* Botão Industrial */}
                    <div className="relative group">
                        {/* Sombra Sólida */}
                        <div className="absolute inset-0 bg-foreground translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />

                        <div className="relative border-4 border-foreground bg-primary p-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:translate-y-0">
                            <ArrowUp size={24} className="text-primary-foreground" />
                        </div>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}

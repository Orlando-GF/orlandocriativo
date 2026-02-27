"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CookieBannerProps {
    onOpenLegal: (type: "privacidade" | "termos" | "lgpd") => void;
}

export default function CookieBanner({ onOpenLegal }: CookieBannerProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "true");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md pointer-events-auto"
                >
                    <div className="border-4 border-foreground bg-background p-6 shadow-[8px_8px_0px_0px_oklch(0_0_0)]">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em] bg-primary text-primary-foreground px-2 py-1">LGPD_COMPLIANCE</span>
                            </div>

                            <p className="text-sm font-black uppercase leading-tight tracking-tight">
                                Este ambiente digital utiliza cookies para otimizar sua experiência técnica. Ao continuar, você consente com nossas políticas de privacidade de dados.
                            </p>

                            <div className="flex gap-4">
                                <button
                                    onClick={acceptCookies}
                                    className="flex-1 border-2 border-foreground bg-primary py-2 text-sm font-black uppercase text-primary-foreground transition-transform hover:-translate-y-1 hover:translate-x-1 active:translate-y-0 active:translate-x-0"
                                >
                                    Confirmar Consentimento
                                </button>
                                <button
                                    onClick={() => onOpenLegal("privacidade")}
                                    className="inline-flex items-center justify-center px-4 border-2 border-foreground text-xs font-black uppercase hover:bg-foreground hover:text-background transition-colors"
                                >
                                    Políticas
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

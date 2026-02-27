"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LegalPanelProps {
    isOpen: boolean;
    onClose: () => void;
    type: "privacidade" | "termos" | "lgpd" | null;
}

const content = {
    privacidade: {
        title: "Política de Privacidade",
        sections: [
            {
                h: "1. Coleta de Dados",
                p: "Coletamos apenas informações essenciais para a prestação de serviços de design e comunicação, como nome e e-mail via formulários de contato ou DM."
            },
            {
                h: "2. Uso de Informações",
                p: "Seus dados são utilizados exclusivamente para retorno de orçamentos e comunicações diretas sobre projetos solicitados."
            },
            {
                h: "3. Segurança",
                p: "Implementamos protocolos de segurança industrial para garantir que seus dados não sofram acesso não autorizado ou vazamentos."
            }
        ]
    },
    termos: {
        title: "Termos de Uso",
        sections: [
            {
                h: "1. Propriedade Intelectual",
                p: "Todo o conteúdo visual e estrutural deste site é de propriedade exclusiva de Orlando Criativo, protegido por leis de direitos autorais."
            },
            {
                h: "2. Uso Permitido",
                p: "A navegação é livre para fins de portfólio. É proibida a reprodução de elementos técnicos ou visuais sem autorização prévia por escrito."
            },
            {
                h: "3. Limitação de Responsabilidade",
                p: "Este site é uma vitrine técnica. Não nos responsabilizamos por interpretações externas ou uso indevido das informações aqui contidas."
            }
        ]
    },
    lgpd: {
        title: "Conformidade LGPD",
        sections: [
            {
                h: "1. Seus Direitos",
                p: "Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento."
            },
            {
                h: "2. Tratamento Transparente",
                p: "O tratamento de dados é realizado com base no consentimento explícito do usuário, garantindo a transparência total sobre a finalidade da coleta."
            },
            {
                h: "3. Dúvidas e Requisições",
                p: "Para qualquer requisição sobre seus dados pessoais, entre em contato diretamente pelo e-mail institucional ou DM do Instagram."
            }
        ]
    }
};

export default function LegalPanel({ isOpen, onClose, type }: LegalPanelProps) {
    const currentContent = type ? content[type] : null;

    return (
        <AnimatePresence>
            {isOpen && currentContent && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[200] bg-background/80 backdrop-blur-sm"
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-0 right-0 top-0 z-[201] w-full max-w-xl border-l-4 border-foreground bg-background p-8 md:p-12 shadow-[-10px_0px_0px_0px_oklch(0_0_0)]"
                    >
                        <div className="flex h-full flex-col">
                            <div className="mb-12 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="bg-primary px-2 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-primary-foreground">
                                        DOC_REF // {type?.toUpperCase()}
                                    </span>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="group flex h-12 w-12 items-center justify-center border-2 border-foreground transition-all hover:bg-foreground hover:text-background"
                                >
                                    <X size={24} className="transition-transform group-hover:rotate-90" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary">
                                <h2 className="mb-12 text-5xl font-black uppercase italic leading-none tracking-tighter">
                                    {currentContent.title}
                                </h2>

                                <div className="space-y-12 pb-20">
                                    {currentContent.sections.map((section, i) => (
                                        <div key={i} className="space-y-4">
                                            <h3 className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.4em] opacity-40">
                                                <span className="h-[2px] w-8 bg-foreground" />
                                                {section.h}
                                            </h3>
                                            <p className="text-lg font-bold leading-relaxed opacity-90">
                                                {section.p}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 flex items-center gap-4 border-t-2 border-foreground pt-8 opacity-20">
                                <span className="font-mono text-[10px] tracking-widest uppercase">
                                    Authenticated // VR_OC_2026
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

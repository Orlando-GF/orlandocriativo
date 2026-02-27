import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Design Sem Limites | Orlando Criativo",
  description: "Trabalho lado a lado com Lojas Locais, Terapeutas e Empreendedores para criar ambientes digitais que comunicam autoridade extrema.",
  openGraph: {
    title: "Portfólio Orlando Criativo",
    description: "Confira meus projetos de design brutalista e desenvolvimento web.",
    images: [
      {
        url: "/og-image.webp", // Sugestão para o futuro
        width: 1200,
        height: 630,
        alt: "Orlando Criativo Showcase",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Orlando Criativo",
  "image": "https://orlandocriativo.com.br/favicon.ico",
  "description": "Design brutalista e criação de sites de alta autoridade digital em Barreiras, Bahia.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Barreiras",
    "addressRegion": "BA",
    "addressCountry": "BR"
  },
  "url": "https://orlandocriativo.com.br",
  "telephone": "+5577991431111",
  "sameAs": [
    "https://instagram.com/orlando.criativo"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orlandocriativo.com.br"),
  title: "Orlando Criativo | Design Brutalista & Criação de Sites",
  description: "Eleve sua marca com estética brutalista e alta autoridade digital. Design sem limites para empreendedores, e-commerce e profissionais liberais.",
  keywords: ["Design Brutalista", "Criação de Sites", "Portfólio Criativo", "Barreiras Bahia", "Experiência Digital"],
  authors: [{ name: "Orlando Criativo" }],
  openGraph: {
    title: "Orlando Criativo | Design Sem Limites",
    description: "Estética brutalista elevada ao máximo para marcas que não têm medo de se destacar.",
    url: "https://orlandocriativo.com.br",
    siteName: "Orlando Criativo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Criativo | Design Brutalista",
    description: "Eleve sua marca com estética brutalista e alta autoridade digital.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Sendero from "@/components/Sendero";
import RevealObserver from "@/components/RevealObserver";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lizeth Solórzano Lecona — Previsión financiera y beneficios corporativos",
  description:
    "Consultora en previsión financiera y beneficios corporativos. Estrategias que protegen a las personas y fortalecen a las empresas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body>
        <RevealObserver />
        <Nav />
        <Sendero />
        {children}
        <Footer />
      </body>
    </html>
  );
}

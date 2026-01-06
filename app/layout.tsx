import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import NavbarMobile from "@/components/Layout/NavbarMobile";
import { Footer } from "@/components/Layout/footer";
import { PreFooter } from "@/components/Layout/pre-footer";

export const metadata: Metadata = {
  title: "Hippokom | Agence de Communication digitale en Martinique",
  description:
    "Boostez votre présence en ligne avec notre agence de communication. Spécialisés en community management, création de visuels et stratégie digitale, nous vous aidons à captiver votre audience sur les réseaux sociaux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="max-w-[1600px] mx-auto p-4 sm:px-6 md:px-8">
          <Navbar />
          <NavbarMobile />

          {children}
          <PreFooter />
        </div>
        <Footer />
      </body>
    </html>
  );
}

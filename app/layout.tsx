import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import NavbarMobile from "@/components/Layout/NavbarMobile";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <div className="max-w-[1600px] mx-auto p-5 sm:p-6 md:p-8">
          <Navbar />
          <NavbarMobile />

          {children}
        </div>
      </body>
    </html>
  );
}

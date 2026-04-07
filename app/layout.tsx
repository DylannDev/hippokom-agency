import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import NavbarMobile from "@/components/Layout/NavbarMobile";
import { Footer } from "@/components/Layout/footer";
import { PreFooter } from "@/components/Layout/pre-footer";
import { WhatsAppFloating } from "@/components/ui/whatsapp-floating";
import { NavbarProvider } from "@/contexts/NavbarContext";
import {
  ORGANIZATION_SCHEMA,
  PERSON_SCHEMA,
  SITE_URL,
  jsonLdScript,
} from "@/lib/seo";

const thicccboi = localFont({
  src: [
    {
      path: "../public/fonts/THICCCBOI/THICCCBOI-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/THICCCBOI/THICCCBOI-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/THICCCBOI/THICCCBOI-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/THICCCBOI/THICCCBOI-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-thicccboi",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Hippô'kom | Agence de Communication digitale en Martinique",
  description:
    "Agence de communication digitale en Martinique. Community management, création de visuels, productions audiovisuelles, sites web et campagnes publicitaires pour booster votre présence en ligne.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Hippô'kom",
    title: "Hippô'kom | Agence de Communication digitale en Martinique",
    description:
      "Agence de communication digitale en Martinique. Community management, création de visuels, productions audiovisuelles, sites web et campagnes publicitaires.",
    images: [
      {
        url: "/logo.svg",
        alt: "Hippô'kom Agency",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={thicccboi.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(ORGANIZATION_SCHEMA)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(PERSON_SCHEMA)}
        />
        <NavbarProvider>
          <div className="relative">
            <Navbar />
            <NavbarMobile />
            {children}
            <PreFooter />
          </div>
          <Footer />
          <WhatsAppFloating message="Bonjour Aurélie, je souhaite en savoir plus sur vos prestations." />
        </NavbarProvider>
      </body>
    </html>
  );
}

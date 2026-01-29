"use client";

import { ReactNode, useEffect } from "react";
import { useNavbar } from "@/contexts/NavbarContext";

interface LegalLayoutProps {
  children: ReactNode;
}

export const LegalLayout = ({ children }: LegalLayoutProps) => {
  const { setForceDarkNavbar } = useNavbar();

  useEffect(() => {
    setForceDarkNavbar(true);
    return () => setForceDarkNavbar(false);
  }, [setForceDarkNavbar]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-12 max-w-4xl">
        <div className="prose max-w-none">{children}</div>
      </div>
    </div>
  );
};

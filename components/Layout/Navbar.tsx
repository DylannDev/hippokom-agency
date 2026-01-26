"use client";

import Navlinks from "./Navlinks";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useNavbar } from "@/contexts/NavbarContext";

// Pages où la navbar reste toujours en style dark (pas de transition)
const DARK_NAVBAR_PAGES = ["/mentions-legales", "/cgv"];

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const { forceDarkNavbar } = useNavbar();

  // Check if current page should have dark navbar
  const isDarkNavbarPage = DARK_NAVBAR_PAGES.includes(pathname) || forceDarkNavbar;

  useEffect(() => {
    if (isDarkNavbarPage) {
      setScrollProgress(1);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Start transition after 200px
      const progress = scrollY <= 200 ? 0 : Math.min((scrollY - 200) / 20, 1);
      setScrollProgress(progress);
    };

    // Check initial scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDarkNavbarPage]);

  const progress = scrollProgress;

  // Background: white/20 -> blue-dark/90 (#15214B = rgb(21, 33, 75))
  const bgR = Math.round(255 - 234 * progress);
  const bgG = Math.round(255 - 222 * progress);
  const bgB = Math.round(255 - 180 * progress);
  const bgOpacity = 0.2 + 0.7 * progress;

  // Border: white/30 -> blue-dark/90
  const borderR = Math.round(255 - 234 * progress);
  const borderG = Math.round(255 - 222 * progress);
  const borderB = Math.round(255 - 180 * progress);
  const borderOpacity = 0.3 + 0.6 * progress;

  // Top position: 32px -> 20px on scroll
  const topPosition = 32 - 12 * scrollProgress;

  return (
    <div
      className="max-w-7xl mx-auto h-[80px] fixed left-[32px] right-[32px] z-50 hidden lg:flex items-center justify-between backdrop-blur-md px-4 rounded-2xl border transition-all duration-300 ease-in-out"
      style={{
        top: `${topPosition}px`,
        backgroundColor: `rgba(${bgR}, ${bgG}, ${bgB}, ${bgOpacity})`,
        borderColor: `rgba(${borderR}, ${borderG}, ${borderB}, ${borderOpacity})`,
      }}
    >
      <Logo />
      <Navlinks />
    </div>
  );
};

export default Navbar;

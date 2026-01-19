"use client";

import { usePathname } from "next/navigation";
import Navlinks from "./Navlinks";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Only track scroll on homepage
    if (!isHomepage) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Start transition after 500px
      const progress = scrollY <= 500 ? 0 : Math.min((scrollY - 500) / 200, 1);
      setScrollProgress(progress);
    };

    // Check initial scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  // On homepage: white/20 -> blue-dark/90, on other pages: always blue-dark/90
  const progress = isHomepage ? scrollProgress : 1;

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

  // Top position: 32px -> 20px on homepage, always 20px on other pages
  const topPosition = isHomepage ? 32 - 12 * scrollProgress : 20;

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

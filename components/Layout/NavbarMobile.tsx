"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PiCaretRightBold, PiList, PiX } from "react-icons/pi";
import Link from "next/link";
import Logo from "./Logo";
import { navbarLinks } from "@/data";

const NavbarMobile = () => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <>
      {/* Navbar */}
      <div
        className="fixed top-4 left-5 right-5 h-[70px] z-50 flex lg:hidden items-center justify-between backdrop-blur-md border px-3 rounded-2xl transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: `rgba(${bgR}, ${bgG}, ${bgB}, ${bgOpacity})`,
          borderColor: `rgba(${borderR}, ${borderG}, ${borderB}, ${borderOpacity})`,
        }}
      >
        <Logo size={150} />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 rounded-lg text-3xl bg-white text-blue-dark"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <PiX /> : <PiList />}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`fixed top-[95px] left-5 right-5 z-40 bg-blue-dark rounded-2xl transition-all duration-300 lg:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[150%]"
        }`}
      >
        <nav className="p-6">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-blue-light text-lg hover:text-yellow transition-colors flex items-center gap-1"
              >
                Accueil
                <PiCaretRightBold className="text-xs" />
              </Link>
            </li>
            {navbarLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={`/${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="text-blue-light text-lg hover:text-yellow transition-colors flex items-center gap-1 capitalize"
                >
                  {link.label}
                  <PiCaretRightBold className="text-xs" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarMobile;

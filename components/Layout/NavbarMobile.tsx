"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PiCaretDownBold, PiCaretRightBold, PiList, PiX } from "react-icons/pi";
import Link from "next/link";
import Logo from "./Logo";
import { navbarLinks, services } from "@/data";

const NavbarMobile = () => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!isHomepage) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const progress = scrollY <= 500 ? 0 : Math.min((scrollY - 500) / 200, 1);
      setScrollProgress(progress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  const progress = isHomepage ? scrollProgress : 1;

  const bgR = Math.round(255 - 234 * progress);
  const bgG = Math.round(255 - 222 * progress);
  const bgB = Math.round(255 - 180 * progress);
  const bgOpacity = 0.2 + 0.7 * progress;

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
            {navbarLinks.map((link) => {
              if (link.href === "services") {
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="text-blue-light text-lg hover:text-yellow transition-colors flex items-center gap-1 capitalize"
                    >
                      {link.label}
                      <PiCaretDownBold
                        className={`text-xs transition-transform duration-300 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isServicesOpen ? "max-h-[500px] mt-3" : "max-h-0"
                      }`}
                    >
                      <ul className="flex flex-col gap-2 pl-4 border-l border-white/20">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/services/${service.slug}`}
                              onClick={() => {
                                setIsOpen(false);
                                setIsServicesOpen(false);
                              }}
                              className="text-white/70 text-base hover:text-yellow transition-colors flex items-center gap-2"
                            >
                              <PiCaretRightBold className="text-[10px]" />
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
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
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarMobile;

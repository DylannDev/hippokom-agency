"use client";

import { PiCaretRightBold, PiList, PiX } from "react-icons/pi";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import Link from "next/link";
import { navbarLinks } from "@/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
  return (
    <div className="max-w-[1336px] h-[80px] fixed top-10 left-10 right-10 sm:top-12 sm:left-12 sm:right-12 md:top-16 md:left-16 md:right-16 mx-auto z-50 flex lg:hidden items-center justify-between bg-blue-dark px-6 rounded-3xl">
      <Logo size={150} />
      {/* Icone pour ouvrir/fermer le menu */}
      <button
        onClick={toggleMenu}
        className="text-brown-background hover:bg-rose-light cursor-pointer p-1 rounded-md text-3xl focus:outline-none z-50"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isOpen ? (
          <PiX className="text-blue-light" />
        ) : (
          <PiList className="text-white" />
        )}
      </button>

      {/* Menu mobile */}
      <div
        className={`fixed top-0 left-0 right-0 py-16 px-10 sm:px-12 md:px-16 z-40 h-screen bg-blue-dark transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="h-full">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                className="text-blue-light text-lg hover:text-yellow transform transition-all duration-300 ease-in-out flex items-center gap-1 w-fit"
                onClick={toggleMenu}
              >
                Accueil
                <PiCaretRightBold className="text-xs mt-1" />
              </Link>
            </li>
            {navbarLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={`/${link.href}`}
                  className="text-blue-light text-lg hover:text-yellow transform transition-all duration-300 ease-in-out flex items-center gap-1 w-fit capitalize"
                  onClick={toggleMenu}
                >
                  {link.label}
                  <PiCaretRightBold className="text-xs mt-1" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

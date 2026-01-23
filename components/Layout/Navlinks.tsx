"use client";

import { useState } from "react";
import { navbarLinks, services } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppButton } from "../ui/whatsapp-button";
import { PiCaretDownBold } from "react-icons/pi";

const Navlinks = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex items-center gap-4 text-white">
      <nav className="flex font-medium text-base uppercase">
        {navbarLinks.map((link, index) => {
          if (link.label === "services") {
            return (
              <div
                key={index}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                onClick={() => setIsDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className="hover:bg-white hover:text-blue-dark rounded-lg py-1 px-4 transition-all duration-300 ease-in-out flex items-center gap-1"
                >
                  {link.label}
                  <PiCaretDownBold
                    className={`text-sm transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>
              </div>
            );
          }

          return (
            <Link
              key={index}
              href={`/${link.href}`}
              className="hover:bg-white hover:text-blue-dark rounded-lg py-1 px-4 transition-all duration-300 ease-in-out"
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <WhatsAppButton variant="white" size="sm" />

      {/* Dropdown - centré par rapport à la Navbar */}
      <div
        className={`absolute top-10 left-0 right-0 pt-12 flex justify-center transition-all duration-300 ${
          isDropdownOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <div className="bg-white backdrop-blur-lg border border-blue rounded-2xl p-4 w-[800px] text-blue-dark shadow-2xl shadow-blue-dark/10">
          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                onClick={() => setIsDropdownOpen(false)}
                className="group flex items-start gap-3 p-3 rounded-xl hover:bg-yellow-light border border-transparent hover:border-yellow transition-all duration-200"
              >
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-lg bg-blue-light border border-blue">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold transition-colors duration-200 normal-case">
                    {service.title}
                  </span>
                  <span className="text-xs font-normal normal-case line-clamp-3">
                    {service.shortDescription}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navlinks;

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { phoneNumber, contactInfo, navbarLinks } from "@/data";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/hippokom",
    icon: RiInstagramFill,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/hippokom",
    icon: RiFacebookCircleFill,
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${phoneNumber.raw}`,
    icon: RiWhatsappFill,
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white relative z-10 [clip-path:ellipse(350%_100%_at_50%_100%)] sm:[clip-path:ellipse(150%_100%_at_50%_100%)] overflow-hidden pt-40">
      <div className="max-w-7xl mx-auto px-6 pt-16 relative">
        {/* Main Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column - Logo + Socials */}
          <div className="lg:col-span-7 flex flex-col items-center md:items-start">
            <Link href="/" className="block">
              <Image
                src="/logo.svg"
                alt="Hippô'Kom Logo"
                width={200}
                height={50}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-2">L'agence qui booste votre communication.</p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[38px] h-[38px] bg-white rounded-lg text-2xl text-blue-dark flex items-center justify-center hover:text-blue transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col md:flex-row justify-between gap-10">
            {/* Middle Column - Navigation */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-4">Navigation</h3>
              <ul className="flex flex-col gap-3 text-center md:text-left">
                {navbarLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-blue transition-colors capitalize"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Contact */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="flex flex-col gap-3 text-center md:text-left">
                <li>
                  <a
                    href={`tel:${phoneNumber.raw}`}
                    className="hover:text-blue transition-colors"
                  >
                    {phoneNumber.display}
                  </a>
                </li>
                <li>
                  <a
                    href={contactInfo[0].link}
                    className="hover:text-blue transition-colors"
                  >
                    {contactInfo[0].content}
                  </a>
                </li>
                <li>Fort-de-France, Martinique</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 my-10" />

        {/* Bottom */}
        <div className="text-white pb-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Link
                href="/mentions-legales"
                className="hover:text-blue transition-colors"
              >
                Mentions légales
              </Link>
              <Link href="/cgv" className="hover:text-blue transition-colors">
                CGV
              </Link>
            </div>
            <p>
              Réalisé par{" "}
              <a
                href="https://vizionweb.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:text-white transition-colors"
              >
                Vizion Web
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

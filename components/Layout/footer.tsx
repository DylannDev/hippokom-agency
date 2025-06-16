"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PiInstagramLogo,
  PiFacebookLogo,
  PiLinkedinLogo,
  PiWhatsappLogo,
} from "react-icons/pi";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const navigation = {
  services: [
    { name: "Community Management", href: "/services#community" },
    { name: "Création Visuelle", href: "/services#creation" },
    { name: "Stratégie Digitale", href: "/services#strategie" },
    { name: "Web Design", href: "/services#web" },
  ],
  entreprise: [
    { name: "À propos", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/confidentialite" },
    { name: "CGV", href: "/cgv" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://instagram.com/hippokom",
      icon: PiInstagramLogo,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/hippokom",
      icon: PiFacebookLogo,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/hippokom",
      icon: PiLinkedinLogo,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/0696XXXXXX",
      icon: PiWhatsappLogo,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black text-white relative -z-10 rounded-t-5xl">
      <div className="max-w-7xl mx-auto px-5 pb-12 pt-96">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-white text-lg font-bold">HIPPÔ'KOM</h3>
            <p className="text-sm">
              Votre partenaire en communication digitale en Martinique. Nous
              aidons les entreprises à développer leur présence en ligne et à
              atteindre leurs objectifs commerciaux.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-white text-lg font-bold">Nos Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Entreprise */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-white text-lg font-bold">Entreprise</h3>
            <ul className="space-y-2">
              {navigation.entreprise.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-white text-lg font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm">
                <span className="font-medium">Adresse :</span>
                <br />
                Fort-de-France, Martinique
              </li>
              <li className="text-sm">
                <span className="font-medium">Email :</span>
                <br />
                <a
                  href="mailto:contact@hippokom.com"
                  className="hover:text-white transition-colors"
                >
                  contact@hippokom.com
                </a>
              </li>
              <li className="text-sm">
                <span className="font-medium">Téléphone :</span>
                <br />
                <a
                  href="tel:0696XXXXXX"
                  className="hover:text-white transition-colors"
                >
                  06 96 XX XX XX
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Mentions légales */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} HIPPÔ'KOM. Tous droits réservés.
            </p>
            <ul className="flex space-x-6">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

"use client";

import { RiWhatsappFill } from "react-icons/ri";
import { phoneNumber } from "@/data";

interface WhatsAppFloatingProps {
  message?: string;
}

export function WhatsAppFloating({ message = "" }: WhatsAppFloatingProps) {
  const whatsappUrl = message
    ? `https://wa.me/${phoneNumber.raw}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${phoneNumber.raw}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 lg:hidden w-14 h-14 bg-blue-dark hover:bg-blue-dark rounded-full flex items-center justify-center shadow-lg shadow-blue-dark/20 transition-all duration-300 hover:scale-110"
      aria-label="Contacter sur WhatsApp"
    >
      <RiWhatsappFill className="text-white text-3xl" />
    </a>
  );
}

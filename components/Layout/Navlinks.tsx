import { navbarLinks } from "@/data";
import Link from "next/link";
import { WhatsAppButton } from "../ui/whatsapp-button";

const Navlinks = () => {
  return (
    <div className="flex items-center gap-4 text-white">
      <nav className="flex font-medium text-base uppercase">
        {navbarLinks.map((link, index) => (
          <Link
            key={index}
            href={`/${link.href}`}
            className="hover:bg-white hover:text-blue-dark rounded-lg py-1 px-4 transition-all duration-300 ease-in-out"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <WhatsAppButton variant="white" size="sm" />
    </div>
  );
};

export default Navlinks;

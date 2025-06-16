import { navbarLinks } from "@/data";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { PiPaperPlaneTiltDuotone } from "react-icons/pi";

const Navlinks = () => {
  return (
    <div className="flex items-center gap-4 text-white">
      <nav className="flex font-medium text-base uppercase">
        {navbarLinks.map((link, index) => (
          <Link
            key={index}
            href={`/${link.href}`}
            className="hover:bg-blue-medium rounded-full py-1 px-4 transition-all duration-300 ease-in-out"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Button variant="blue" icon={<PiPaperPlaneTiltDuotone />}>
        Contactez-nous
      </Button>
    </div>
  );
};

export default Navlinks;

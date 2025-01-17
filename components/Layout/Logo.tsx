import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  color?: "white" | "blue"; // Couleurs supportées
  size?: number; // Taille personnalisée en pixels
};

const Logo = ({ color = "white", size }: LogoProps) => {
  let logoSrc = "/logo.svg";
  switch (color) {
    case "blue":
      logoSrc = "/logo-square.svg";
      break;
    default:
      logoSrc = "/logo.svg";
  }

  return (
    <Link href={"/"}>
      <Image
        src={logoSrc}
        alt={`Logo Hippokom - ${color}`}
        width={size ? size : 180}
        height={size ? size : 180}
      />
    </Link>
  );
};

export default Logo;

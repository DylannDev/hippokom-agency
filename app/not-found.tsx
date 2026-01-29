"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Typography } from "@/components/ui/typography";
import Button from "@/components/ui/Button";
import { RiArrowRightLine } from "react-icons/ri";
import { useNavbar } from "@/contexts/NavbarContext";

export default function NotFound() {
  const { setForceDarkNavbar } = useNavbar();

  useEffect(() => {
    setForceDarkNavbar(true);
    return () => setForceDarkNavbar(false);
  }, [setForceDarkNavbar]);

  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 pt-32 pb-20">
        <div className="relative w-full aspect-video max-w-[600px]">
          <Image
            src="/404.svg"
            alt="Illustration page non trouvée"
            width={600}
            height={600}
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <Typography
            as="h1"
            weight="semibold"
            className="text-4xl sm:text-5xl md:text-6xl mb-6"
          >
            Oups ! Page non trouvée
          </Typography>

          <Typography
            as="p"
            variant="lg"
            weight="normal"
            className="mb-10 max-w-2xl mx-auto"
          >
            La page que vous recherchez n'est pas disponible ou a été déplacé.{" "}
            <br /> Essayez une autre page ou retournez à l'accueil avec le
            bouton ci-dessous.
          </Typography>

          <Link href="/">
            <Button variant="yellow-medium">
              Retour à l'accueil
              <RiArrowRightLine className="text-xl ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

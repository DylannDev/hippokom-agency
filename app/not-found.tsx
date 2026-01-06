import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import Button from "@/components/ui/button";
import { RiArrowRightLine } from "react-icons/ri";

export default function NotFound() {
  return (
    <main className="relative flex flex-col items-center justify-center px-4 py-40">
      <div className="absolute top-0 md:-top-0 lg:-top-10 xl:top-[40%] left-0 w-full aspect-video -z-1 overflow-hidden">
        <Image
          src="/shape-2.svg"
          alt="Plombier Montpellier TCS Plomberie"
          width={3000}
          height={3000}
          quality={100}
          priority
          className="object-cover object-center scale-105"
        />
      </div>
      <div className="max-w-2xl mx-auto text-center">
        <Typography
          as="h2"
          variant="5xl"
          weight="bold"
          className="text-black mb-4"
        >
          Oups !
        </Typography>
        <Typography
          as="h2"
          variant="6xl"
          weight="bold"
          className="text-black mb-4"
        >
          404 - Page non trouvée
        </Typography>

        <Typography
          as="p"
          variant="xl"
          weight="medium"
          className="text-dark-gray mb-8"
        >
          La page que vous recherchez n'existe pas.
        </Typography>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="flex items-center gap-2">
            <Button variant="blue">
              Retour à l'accueil
              <RiArrowRightLine className="text-xl ml-2" />
            </Button>
          </Link>

          <Link href="/contact" className="flex items-center gap-2">
            <Button variant="yellow">
              Nous contacter
              <RiArrowRightLine className="text-xl ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

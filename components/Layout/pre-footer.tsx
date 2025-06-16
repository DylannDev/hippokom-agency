import { Typography } from "../ui/typography";
import { ButtonArrow } from "../ui/button-arrow";
import Image from "next/image";
import { Badge } from "../ui/badge";

export function PreFooter() {
  return (
    <section className="relative w-full rounded-4xl -mb-[290px]">
      <div className="w-full min-h-[450px] relative -z-1 inset-0 overflow-hidden rounded-5xl">
        <Image
          src="/bg-prefooter.svg"
          alt="hippokom hero background illustration"
          fill
          sizes="100vw"
          className="object-cover object-center rounded-5xl"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-8">
        <div className="text-center w-full text-white max-w-2xl px-5">
          <Badge color="white">une Agence impliquée</Badge>
          <Typography
            as="h2"
            variant="5xl"
            weight="bold"
            lineHeight="tightest"
            className="mb-4 text-balance"
          >
            Prêt à booster votre visibilité ?
          </Typography>
          <Typography as="p" variant="xl" className="mb-0 text-balance">
            Faites briller votre marque avec une communication sur-mesure.
          </Typography>
        </div>

        <div className="flex justify-center w-full px-10">
          <ButtonArrow href="/contact">Contactez-nous</ButtonArrow>
        </div>
      </div>
    </section>
  );
}

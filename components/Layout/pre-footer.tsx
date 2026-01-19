import { Typography } from "../ui/typography";
import Image from "next/image";
import CalendlyButton from "../ui/calendly-button";

export function PreFooter() {
  return (
    <section className="relative z-20 w-full -mb-[150px] max-w-7xl mx-auto px-5">
      <div className="w-full relative overflow-hidden rounded-3xl">
        <Image
          src="/bg-light-blue.svg"
          alt="hippokom hero background illustration"
          fill
          sizes="100vw"
          className="object-cover object-center rounded-3xl"
        />
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 p-8 sm:p-12 lg:p-16">
          <div className="text-center lg:text-left w-full text-white max-w-3xl">
            <Typography
              as="h2"
              weight="semibold"
              lineHeight="tightest"
              className="mb-0 text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-tight lg:leading-none text-balance"
            >
              Passez à la vitesse supérieure avec une communication sur-mesure.
            </Typography>
          </div>

          <div className="flex justify-center flex-shrink-0">
            <CalendlyButton variant="yellow" />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Button from "../ui/button";
import { PiCalendarCheckDuotone } from "react-icons/pi";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] h-[calc(100dvh-64px)] max-h-[1000px] overflow-hidden rounded-5xl">
      {/* Background Image */}
      <Image
        src="/bg-hero.svg"
        alt="hippokom hero background illustration"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Content Container */}
      <div className="relative h-full flex items-center p-5 sm:p-8 md:p-12 lg:p-16">
        <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-center lg:pt-16 xl:pt-0">
          {/* Text Content */}
          <div className="xl:col-span-7 flex flex-col gap-4 text-white text-center xl:text-left">
            <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              L'agence qui booste votre communication.
            </h1>
            <p className="text-base sm:text-xl font-medium max-w-xl mx-auto xl:mx-0">
              Hippô'Kom, c'est une communication qui vous ressemble, pensée pour
              attirer, engager et faire la différence.
            </p>
            <div className="flex justify-center xl:justify-start">
              <Button
                size="default"
                variant="yellow"
                icon={<PiCalendarCheckDuotone />}
              >
                Réserver un appel
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="xl:col-span-5 flex justify-center">
            <Image
              src="/hero-illustration.svg"
              alt="megaphone with social media icons illustration"
              width={500}
              height={400}
              className="w-full max-w-[400px] xl:max-w-none h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

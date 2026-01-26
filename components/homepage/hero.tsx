import Image from "next/image";
import { CalendlyButton } from "../ui/calendly-button";

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] max-h-[900px] overflow-hidden [clip-path:ellipse(150%_100%_at_50%_0%)]">
      {/* Background Image */}
      <Image
        src="/bg-light-blue.svg"
        alt="Hippô'kom hero background illustration"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative min-h-[85dvh] flex items-center p-5 sm:p-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-24">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-white text-center lg:text-left">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-6xl text-balance">
              L'agence qui booste votre communication.
            </h1>
            <p className="text-base sm:text-xl font-medium max-w-xl mx-auto lg:mx-0">
              Hippô'Kom, c'est une communication qui vous ressemble, pensée pour
              attirer, engager et faire la différence.
            </p>
            <div className="flex justify-center gap-2 lg:justify-start">
              <CalendlyButton variant="yellow" />
            </div>
          </div>

          {/* Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <Image
              src="/hero-illustration.svg"
              alt="megaphone with social media icons illustration"
              width={500}
              height={400}
              className="w-full max-w-[350px] lg:max-w-none h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

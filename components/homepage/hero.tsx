import Image from "next/image";
import Button from "../ui/Button";
import { PiCalendarCheckDuotone } from "react-icons/pi";

const Hero = () => {
  return (
    <>
      <div className="w-full max-h-[864px] h-[calc(100dvh-40px)] sm:h-[calc(100dvh-48px)] md:h-[calc(100dvh-64px)] min-[1120px]:aspect-video relative">
        <div className="w-full max-h-[864px] h-[calc(100dvh-40px)] sm:h-[calc(100dvh-48px)] md:h-[calc(100dvh-64px)] min-[1120px]:aspect-video absolute inset-0 overflow-hidden rounded-5xl -z-10">
          <Image
            src="/bg-hero.svg"
            alt="hippokom hero background illustration"
            fill
            sizes="100vw"
            className="object-cover object-center rounded-5xl"
          />
        </div>

        <div className="absolute w-full h-full p-5 sm:p-6 md:p-8 flex items-end min-[1120px]:items-center">
          <div className="flex flex-col gap-8 items-center min-[1120px]:flex-row">
            <div className="flex flex-col justify-center items-center text-center min-[1120px]:items-start min-[1120px]:text-left gap-4 text-white w-full min-[1120px]:w-[55%]">
              <h1 className="font-semibold text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl min-[1360px]:text-7xl">
                Boostez votre présence digitale
              </h1>
              <p className="text-sm sm:text-lg font-medium">
                Hippô'Kom, l’agence qui réinvente votre présence digitale et
                visuelle, pour des projets aussi uniques que votre marque !
              </p>
              <Button variant="yellow" icon={<PiCalendarCheckDuotone />}>
                Réserver un appel
              </Button>
            </div>

            <Image
              src="/hero-illustration.svg"
              alt="megaphone with social media icons illustration"
              width={300}
              height={250}
              className="w-full min-[1120px]:w-[45%] max-h-[350px] min-[1120px]:max-h-[550px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

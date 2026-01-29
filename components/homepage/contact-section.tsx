import { Typography } from "../ui/typography";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/data";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden rounded-3xl"
    >
      <Image
        src="/bg-light-blue.svg"
        alt="background"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="relative max-w-xl mx-auto pt-10 pb-6 px-6">
        {/* Informations de contact */}

        <div className="text-center text-white">
          <Typography
            as="h2"
            variant="4xl"
            weight="semibold"
            lineHeight="tightest"
            className="mb-4 text-balance"
          >
            Contactez-nous pour une offre sur-mesure
          </Typography>
          <Typography
            as="p"
            variant="xl"
            weight="medium"
            className="text-white text-balance"
          >
            On vous accompagne de A à Z.
          </Typography>
        </div>
        <div className="flex flex-col items-center gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="group w-full lg:max-w-[381px]">
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-4 p-[30px] bg-white border border-blue-light rounded-3xl w-full group-hover:-translate-y-1 transition-all duration-300"
                )}
              >
                <Image
                  src={info.icon}
                  alt={`${info.title} icône - hippô'kom agency`}
                  width={32}
                  height={32}
                />
                <div className="text-black lg:text-left text-center">
                  <Typography
                    as="p"
                    variant="lg"
                    weight="medium"
                    className="mb-0"
                  >
                    {info.title}
                  </Typography>
                  <Typography
                    as="p"
                    weight="semibold"
                    className="mb-0 text-base md:text-lg whitespace-nowrap group-hover:text-blue transition-all duration-300"
                  >
                    {info.content}
                  </Typography>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

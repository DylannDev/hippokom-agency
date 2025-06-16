import { ContactForm } from "../forms/contact-form";
import { Badge } from "../ui/badge";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/data";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 flex flex-col-reverse lg:flex-row items-center gap-12 w-full max-w-[800px] lg:max-w-full mx-auto"
    >
      <ContactForm />
      <div className="w-full lg:w-[40%]">
        {/* Informations de contact */}

        <div className="mb-8 lg:mb-0">
          <Badge variant="left">Contact</Badge>
          <Typography
            as="h2"
            variant="5xl"
            weight="semibold"
            lineHeight="tightest"
            className="mb-4 text-balance text-center lg:text-left"
          >
            Contactez-nous pour une offre sur-mesure
          </Typography>
          <Typography
            as="p"
            variant="xl"
            weight="medium"
            className="text-gray text-balance text-center lg:text-left"
          >
            Un besoin en communication digitale ? Parlons-en, on vous accompagne
            de A à Z.
          </Typography>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="group w-full lg:max-w-[380px]">
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-4 p-[30px] bg-yellow-light rounded-3xl w-full group-hover:-translate-y-1 transition-all duration-300",
                  index === 0 && "bg-blue-light"
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
                    className="mb-0 text-base md:text-lg group-hover:text-blue transition-all duration-300"
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

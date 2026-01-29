import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { CalendlyButton } from "@/components/ui/calendly-button";

interface PageHeroProps {
  title: string;
  subtitle: string;
  icon?: string;
  showCta?: boolean;
  variant?: "default" | "small";
}

export function PageHero({
  title,
  subtitle,
  icon,
  showCta = false,
  variant = "default",
}: PageHeroProps) {
  const heightClasses =
    variant === "small" ? "h-[60vh] max-h-[600px]" : "h-[70vh] max-h-[700px]";

  return (
    <section
      className={`relative w-full ${heightClasses} overflow-hidden [clip-path:ellipse(350%_100%_at_50%_0%)] sm:[clip-path:ellipse(150%_100%_at_50%_0%)]`}
    >
      <Image
        src="/bg-light-blue.svg"
        alt="Hippô'kom background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl mx-auto pt-20">
          {icon && (
            <div className="flex justify-center mb-6">
              <Image
                src={icon}
                alt={title}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          )}
          <Typography
            as="h1"
            weight="semibold"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-balance"
          >
            {title}
          </Typography>
          <Typography
            as="p"
            variant="xl"
            weight="medium"
            className={`text-balance ${showCta ? "mb-8" : ""}`}
          >
            {subtitle}
          </Typography>
          {showCta && <CalendlyButton variant="yellow" />}
        </div>
      </div>
    </section>
  );
}

/** @deprecated Use PageHero instead */
export const ServiceHero = PageHero;

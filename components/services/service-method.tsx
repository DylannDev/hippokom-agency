"use client";

import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { CalendlyButton } from "@/components/ui/calendly-button";
import Image from "next/image";
import AnimatedSection from "@/components/ui/animated-section";

interface MethodStep {
  title: string;
  description: string;
  icon: string;
}

interface ServiceMethodProps {
  steps: MethodStep[];
  title?: string;
  badge?: string;
  subtitle?: string;
}

export function ServiceMethod({
  steps,
  title = "Notre méthode",
  badge = "Comment ça marche",
  subtitle = "Une approche structurée et personnalisée pour transformer votre communication digitale.",
}: ServiceMethodProps) {
  return (
    <section className="py-16 md:py-20 bg-blue-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Sticky */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <AnimatedSection
              direction="up"
              delay={0.1}
              className="text-center lg:text-left"
            >
              <Badge variant="left">{badge}</Badge>
              <Typography
                as="h2"
                variant="5xl"
                weight="semibold"
                lineHeight="tightest"
                className="text-balance mb-4"
              >
                {title}
              </Typography>
              <Typography
                as="p"
                variant="xl"
                weight="medium"
                className="text-gray mb-8 text-balance"
              >
                {subtitle}
              </Typography>
              <div className="hidden lg:block">
                <CalendlyButton variant="blue" />
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Scrollable Steps */}
          <AnimatedSection
            direction="up"
            delay={0.2}
            className="flex flex-col gap-6"
          >
            {steps.map((step, index) => {
              const isOdd = index % 2 === 0;
              const stepNumber = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={index}
                  className={`group rounded-3xl text-black p-6 sm:p-8 border transition-all duration-300 hover:-translate-y-1 bg-white border-blue-light`}
                >
                  {/* Mobile: Vertical layout */}
                  <div className="flex flex-col gap-6 md:hidden">
                    {/* Illustration */}
                    <div className="flex justify-center">
                      <div
                        className={`w-24 h-24 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Image
                          src={step.icon}
                          alt={step.title}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="text-center">
                      <Typography
                        as="span"
                        variant="lg"
                        weight="bold"
                        className="text-blue"
                      >
                        Étape {stepNumber}
                      </Typography>
                      <Typography
                        as="h3"
                        variant="2xl"
                        weight="semibold"
                        className="mt-2 mb-3"
                      >
                        {step.title}
                      </Typography>
                      <Typography as="p" variant="base" weight="medium">
                        {step.description}
                      </Typography>
                    </div>
                  </div>

                  {/* Desktop: Alternating layout */}
                  <div
                    className={`hidden md:flex items-center gap-8 ${
                      isOdd ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Text */}
                    <div className="flex-1 text-left">
                      <Typography
                        as="span"
                        variant="lg"
                        weight="bold"
                        className="text-blue"
                      >
                        Étape {stepNumber}
                      </Typography>
                      <Typography
                        as="h3"
                        variant="2xl"
                        weight="semibold"
                        className="mt-2 mb-3"
                      >
                        {step.title}
                      </Typography>
                      <Typography as="p" variant="base" weight="medium">
                        {step.description}
                      </Typography>
                    </div>

                    {/* Illustration */}
                    <div
                      className={`w-28 h-28 flex-shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={70}
                        height={70}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </AnimatedSection>

          {/* Mobile CTA */}
          <div className="lg:hidden flex justify-center mt-4">
            <CalendlyButton variant="blue" />
          </div>
        </div>
      </div>
    </section>
  );
}

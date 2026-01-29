"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";
import AnimatedSection from "@/components/ui/animated-section";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface ServiceFaqProps {
  data: FaqItem[];
  title?: string;
  badge?: string;
  variant?: "default" | "white";
  className?: string;
}

export function ServiceFaq({
  data,
  title = "Questions fréquentes",
  badge = "FAQ",
  variant = "default",
  className,
}: ServiceFaqProps) {
  const sectionBg = variant === "white" ? "bg-white" : "bg-blue-background";
  const itemClassName =
    variant === "white" ? "bg-blue-background border-blue-light" : undefined;

  return (
    <section className={`${sectionBg} py-16 md:py-20 ${className || ""}`}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <AnimatedSection
          direction="up"
          delay={0.1}
          className="text-center mb-10"
        >
          <Badge>{badge}</Badge>
          <Typography
            as="h2"
            variant="5xl"
            weight="semibold"
            lineHeight="tightest"
            className="mb-4 text-balance"
          >
            {title}
          </Typography>
          <Typography as="p" variant="xl" weight="medium" className="text-gray">
            Des réponses concrètes pour vous aider à faire le bon choix.
          </Typography>
        </AnimatedSection>

        <Accordion type="single" collapsible>
          <AnimatedSection
            direction="up"
            delay={0.2}
            staggerChildren={0.2}
            className="flex flex-col gap-6"
          >
            {data.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className={itemClassName}
              >
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </AnimatedSection>
        </Accordion>
      </div>
    </section>
  );
}

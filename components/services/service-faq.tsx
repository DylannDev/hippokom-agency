"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion className="flex flex-col gap-6" type="single" collapsible>
            {data.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={faq.id} className={itemClassName}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

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
import { ContactSection } from "./contact-section";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqProps {
  data: FaqItem[];
  title?: string;
  badge?: string;
  className?: string;
  isRichText?: boolean;
}

export function Faq({
  data,
  title = "Foire Aux Questions",
  badge = "FAQ",
  className,
  isRichText = false,
}: FaqProps) {
  return (
    <section className={`relative bg-blue-background ${className}`}>
      <div className="max-w-7xl mx-auto py-10 md:py-20 px-5">
        {/* FAQ Content - Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left mb-10"
        >
          <Badge variant="left">{badge}</Badge>
          <Typography
            as="h2"
            variant="5xl"
            weight="semibold"
            lineHeight="tightest"
            className="mb-6 text-balance"
          >
            {title}
          </Typography>
          <Typography as="p" variant="xl" weight="medium" className="text-gray">
            Des réponses concrètes pour prendre la meilleure décision.
          </Typography>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Accordion
                className="flex flex-col gap-6"
                type="single"
                collapsible
              >
                {data.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem value={faq.id}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        {isRichText ? (
                          <div
                            className="rich-text"
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                        ) : (
                          faq.answer
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>

          {/* Contact Section - Right (Sticky) */}
          <div className="lg:w-[430px] hidden lg:block">
            <div className="sticky top-8">
              <ContactSection />
            </div>
          </div>
        </div>

        {/* Contact Section - Mobile (below FAQ) */}
        <div className="lg:hidden mt-6 w-full">
          <ContactSection />
        </div>
      </div>
    </section>
  );
}

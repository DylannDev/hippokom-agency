"use client";

import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

interface Benefit {
  icon: string;
  iconSize?: number;
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  benefits: Benefit[];
  title?: string;
  badge?: string;
}

export function ServiceBenefits({
  benefits,
  title = "Pourquoi nous choisir ?",
  badge = "Avantages",
}: ServiceBenefitsProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge>{badge}</Badge>
          <Typography
            as="h2"
            variant="5xl"
            weight="semibold"
            lineHeight="tightest"
            className="max-w-3xl mx-auto text-balance"
          >
            {title}
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group rounded-3xl text-black p-6 border transition-all duration-300 hover:-translate-y-2 ${
                  isEven
                    ? "bg-blue-light border-blue"
                    : "bg-yellow-light border-yellow"
                }`}
              >
                <div
                  className="rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    width: benefit.iconSize || 80,
                    height: benefit.iconSize || 80,
                  }}
                >
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={benefit.iconSize || 80}
                    height={benefit.iconSize || 80}
                    className="object-contain"
                  />
                </div>
                <Typography
                  as="h3"
                  variant="xl"
                  weight="semibold"
                  className="mb-2"
                >
                  {benefit.title}
                </Typography>
                <Typography as="p" variant="base" weight="medium">
                  {benefit.description}
                </Typography>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

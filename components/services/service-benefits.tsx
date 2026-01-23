"use client";

import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  PiTarget,
  PiPencilLine,
  PiUsersThree,
  PiChartLine,
  PiClock,
  PiTrendUp,
  PiVideoCamera,
  PiFilmStrip,
  PiSparkle,
  PiDevices,
  PiGlobe,
  PiPalette,
  PiRocket,
  PiShieldCheck,
  PiArticle,
  PiEye,
  PiCalendarBlank,
  PiMegaphone,
  PiCurrencyDollar,
  PiFunnel,
} from "react-icons/pi";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  target: PiTarget,
  pencil: PiPencilLine,
  users: PiUsersThree,
  chart: PiChartLine,
  clock: PiClock,
  trend: PiTrendUp,
  camera: PiVideoCamera,
  film: PiFilmStrip,
  sparkle: PiSparkle,
  devices: PiDevices,
  globe: PiGlobe,
  palette: PiPalette,
  rocket: PiRocket,
  shield: PiShieldCheck,
  article: PiArticle,
  eye: PiEye,
  calendar: PiCalendarBlank,
  megaphone: PiMegaphone,
  money: PiCurrencyDollar,
  funnel: PiFunnel,
};

interface Benefit {
  icon: string;
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
            const Icon = iconMap[benefit.icon] || PiTarget;
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
                  className={`w-14 h-14 rounded-2xl flex border items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    isEven
                      ? " border-blue bg-blue/30"
                      : " border-yellow bg-yellow/30"
                  }`}
                >
                  <Icon className={`text-3xl text-black`} />
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

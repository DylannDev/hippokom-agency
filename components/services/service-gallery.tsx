"use client";

import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ServiceGalleryProps {
  title?: string;
  badge?: string;
}

export function ServiceGallery({
  title = "Galerie de nos créations",
  badge = "Portfolio",
}: ServiceGalleryProps) {
  return (
    <section className="py-16 md:py-20 bg-blue-background">
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

        {/* Gallery Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-white border border-blue-light rounded-2xl flex items-center justify-center"
            >
              <Typography
                as="span"
                variant="sm"
                weight="medium"
                className="text-gray"
              >
                Image {index + 1}
              </Typography>
            </div>
          ))}
        </motion.div>

        <Typography
          as="p"
          variant="base"
          weight="medium"
          className="text-gray text-center mt-8"
        >
          La galerie sera bientôt disponible avec nos meilleures créations.
        </Typography>
      </div>
    </section>
  );
}

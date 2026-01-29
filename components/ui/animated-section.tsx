// components/AnimatedSection.tsx
"use client";
import { motion } from "framer-motion";
import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  staggerChildren?: number;
}

const directions = {
  up: { y: 50 },
  down: { y: -50 },
  left: { x: 50 },
  right: { x: -50 },
};

export default function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  className,
  staggerChildren = 0.2,
}: Props) {
  if (staggerChildren) {
    const containerVariants = {
      hidden: {},
      visible: {
        transition: {
          delayChildren: delay,
          staggerChildren,
        },
      },
    };

    const childVariants = {
      hidden: { opacity: 0, ...directions[direction] },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };

    return (
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {Children.map(children, (child) => (
          <motion.div variants={childVariants}>{child}</motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

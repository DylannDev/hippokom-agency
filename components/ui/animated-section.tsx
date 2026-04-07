"use client";

import {
  Children,
  ReactNode,
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  staggerChildren?: number;
}

export default function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  className,
  staggerChildren = 0.2,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-100px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const directionClass =
    direction === "down"
      ? "reveal-down"
      : direction === "left"
        ? "reveal-left"
        : direction === "right"
          ? "reveal-right"
          : "";

  if (staggerChildren) {
    return (
      <div ref={ref} className={className}>
        {Children.map(children, (child, i) => {
          const childDelay = delay + i * staggerChildren;
          return (
            <div
              className={cn("reveal", directionClass, visible && "is-visible")}
              style={{ "--reveal-delay": `${childDelay}s` } as CSSProperties}
            >
              {child}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        directionClass,
        visible && "is-visible",
        className
      )}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

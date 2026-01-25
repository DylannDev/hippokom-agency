"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { TimelineEntryDesktop, TimelineEntryMobile } from "./timeline-entry";

interface TimelineEntry {
  title: string;
  description: string;
  icon: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full pt-10 md:pt-20" ref={containerRef}>
      <div className="relative max-w-7xl mx-auto">
        {/* Timeline line container */}
        <div className="absolute inset-0 flex md:justify-center">
          <div className="relative w-[4px] h-full md:h-[85%] lg:h-[90%] left-0 md:left-auto">
            <div className="absolute inset-0 bg-blue-background" />
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-full h-full md:h-[80%] lg:h-[90%] bg-gradient-to-t from-blue via-blue-medium to-blue-light rounded-full"
            />
          </div>
        </div>

        {/* Content container */}
        <div ref={ref} className="relative space-y-10 md:space-y-40">
          {data.map((item, index) => (
            <div key={index} className="relative">
              <TimelineEntryDesktop item={item} index={index} />
              <TimelineEntryMobile item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

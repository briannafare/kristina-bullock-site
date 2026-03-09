"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section, Overline, SectionHeading } from "@/components/ui/Section";

const factors = [
  {
    name: "Location",
    percentage: "40%",
    description:
      "Neighborhood, school district, and proximity to amenities have the biggest impact on your home\u2019s value.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Map pin with house */}
        <path
          d="M32 6C22.06 6 14 13.72 14 23.2C14 36.4 32 58 32 58C32 58 50 36.4 50 23.2C50 13.72 41.94 6 32 6Z"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* House inside pin */}
        <path
          d="M24 26V32H29V28H35V32H40V26"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M22 26L32 17L42 26"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Condition",
    percentage: "35%",
    description:
      "Updated kitchens, bathrooms, and well-maintained systems can add tens of thousands to your sale price.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* House */}
        <path
          d="M12 34V52H27V42H37V52H52V34"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M8 34L32 12L56 34"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Sparkle top-right */}
        <path
          d="M48 8L48 16M44 12L52 12"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Small sparkle */}
        <path
          d="M54 20L54 24M52 22L56 22"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Market Timing",
    percentage: "25%",
    description:
      "Listing at the right time means more buyers, more competition, and a higher sale price.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Clock circle */}
        <circle
          cx="28"
          cy="34"
          r="20"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Clock hands */}
        <path
          d="M28 20V34L37 40"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Upward trend arrow */}
        <path
          d="M46 28L54 14M54 14L54 23M54 14L45 14"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export function HomeValueVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section className="bg-[var(--color-surface-alt)] py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Overline>Home Value</Overline>
        <SectionHeading className="mb-12 md:mb-16">
          What Determines Your Home&rsquo;s Worth?
        </SectionHeading>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {factors.map((factor) => (
            <motion.div
              key={factor.name}
              variants={cardVariants}
              className="bg-white border border-[var(--color-border)] rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <div className="mb-6">{factor.icon}</div>

              <span className="block font-[family-name:var(--font-heading)] text-5xl md:text-6xl font-bold text-[var(--color-primary)] mb-2">
                {factor.percentage}
              </span>

              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-foreground)] mb-3">
                {factor.name}
              </h3>

              <p className="text-[var(--color-muted)] leading-relaxed text-sm md:text-base">
                {factor.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

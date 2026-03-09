"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { Section, Overline, SectionHeading } from "@/components/ui/Section";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 200, suffix: "+", label: "Families Helped" },
  { value: 17, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: ".0", label: "Google Rating" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

function StatCard({ stat }: { stat: Stat }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    stat.value % 1 === 0 ? Math.round(latest) : Math.round(latest * 10) / 10
  );
  const display = useTransform(rounded, (val) => `${val}`);

  useEffect(() => {
    if (isInView) {
      animate(motionValue, stat.value, {
        duration: 2,
        ease: [0.4, 0, 0.2, 1],
      });
    }
  }, [isInView, motionValue, stat.value]);

  return (
    <motion.div
      ref={ref}
      className="group rounded-xl border border-[var(--color-primary)]/10 bg-white px-6 py-8 text-center transition-shadow duration-300 hover:shadow-lg"
    >
      <p className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[var(--color-accent)]">
        <motion.span>{display}</motion.span>
        <span>{stat.suffix}</span>
      </p>
      <p className="mt-2 font-[family-name:var(--font-body)] text-sm md:text-base text-[var(--color-muted-foreground)]">
        {stat.label}
      </p>
    </motion.div>
  );
}

export function AnimatedStats() {
  return (
    <Section className="bg-[var(--color-surface-alt)] py-20 md:py-28 px-4">
      <div className="mx-auto max-w-5xl text-center">
        <Overline>By the Numbers</Overline>
        <SectionHeading className="mb-12">
          Results That Speak for Themselves
        </SectionHeading>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </Section>
  );
}

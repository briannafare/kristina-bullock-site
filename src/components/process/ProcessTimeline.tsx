"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";

interface Step {
  number: string;
  title: string;
  body: string;
}

export function ProcessTimeline({ headline, steps, bg = "cream" }: { headline: string; steps: Step[]; bg?: "white" | "cream" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const bgClass = bg === "cream" ? "bg-[var(--color-surface-alt)]" : "bg-white";

  return (
    <Section className={`${bgClass} py-20 md:py-28`}>
      <div className="mx-auto max-w-[800px] px-5 md:px-8">
        <SectionHeading className="mb-12">{headline}</SectionHeading>
        <div ref={ref} className="relative">
          <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-[var(--color-accent)] opacity-20" />
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex gap-5"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm relative z-10">
                  {step.number}
                </div>
                <div className="pt-2">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-foreground)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-[15px] leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

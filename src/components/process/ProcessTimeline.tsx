"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";

interface Step {
  number: string;
  title: string;
  body: string;
}

interface ProcessTimelineProps {
  headline: string;
  steps: Step[];
  bg?: "white" | "cream";
  icons?: React.ComponentType<{ className?: string }>[];
}

export function ProcessTimeline({
  headline,
  steps,
  bg = "cream",
  icons,
}: ProcessTimelineProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const bgClass =
    bg === "cream" ? "bg-[var(--color-surface-alt)]" : "bg-white";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <Section className={`${bgClass} py-20 md:py-28`}>
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <SectionHeading className="mb-14 md:mb-16">{headline}</SectionHeading>

        {/* Desktop horizontal layout */}
        <div ref={ref} className="hidden md:block">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Connecting line behind circles */}
            <div className="absolute top-7 left-0 right-0 flex items-center px-[calc(100%/(var(--step-count)*2))]"
              style={{ "--step-count": steps.length } as React.CSSProperties}
            >
              <motion.div
                className="h-[2px] w-full origin-left"
                style={{ backgroundColor: "var(--color-accent)" }}
                initial={{ scaleX: 0, opacity: 0.3 }}
                animate={
                  inView
                    ? { scaleX: 1, opacity: 0.3 }
                    : { scaleX: 0, opacity: 0.3 }
                }
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              />
            </div>

            {/* Steps row */}
            <div
              className="grid gap-6"
              style={{
                gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
              }}
            >
              {steps.map((step, i) => {
                const Icon = icons?.[i];
                return (
                  <motion.div
                    key={step.number}
                    variants={itemVariants}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Circle */}
                    <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-sm">
                      {Icon ? (
                        <Icon className="h-5 w-5" />
                      ) : (
                        <span className="text-sm font-bold">
                          {step.number}
                        </span>
                      )}
                    </div>

                    {/* Step number (shown when icon is used) */}
                    {Icon && (
                      <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                        Step {step.number}
                      </span>
                    )}

                    {/* Title */}
                    <h3 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-foreground)]">
                      {step.title}
                    </h3>

                    {/* Body */}
                    <p className="text-[14px] leading-relaxed text-[var(--color-muted)]">
                      {step.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Mobile vertical layout */}
        <div className="md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Animated vertical line */}
            <motion.div
              className="absolute left-[27px] top-4 bottom-4 w-[2px] origin-top"
              style={{ backgroundColor: "var(--color-accent)" }}
              initial={{ scaleY: 0, opacity: 0.2 }}
              animate={
                inView
                  ? { scaleY: 1, opacity: 0.2 }
                  : { scaleY: 0, opacity: 0.2 }
              }
              transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
            />

            <div className="space-y-10">
              {steps.map((step, i) => {
                const Icon = icons?.[i];
                return (
                  <motion.div
                    key={step.number}
                    variants={itemVariants}
                    className="flex gap-5"
                  >
                    {/* Circle */}
                    <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-sm">
                      {Icon ? (
                        <Icon className="h-5 w-5" />
                      ) : (
                        <span className="text-sm font-bold">
                          {step.number}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="pt-2">
                      {Icon && (
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                          Step {step.number}
                        </span>
                      )}
                      <h3 className="mb-2 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-foreground)]">
                        {step.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
                        {step.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

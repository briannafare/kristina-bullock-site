"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function Overline({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)] mb-4">
      {children}
    </span>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-foreground)] leading-[1.15] ${className}`}
    >
      {children}
    </h2>
  );
}

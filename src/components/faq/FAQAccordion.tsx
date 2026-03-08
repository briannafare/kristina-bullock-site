"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section, Overline, SectionHeading } from "@/components/ui/Section";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  overline?: string;
  headline: string;
  items: FAQItem[];
  background?: "white" | "cream";
}

export function FAQAccordion({ overline, headline, items, background = "cream" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const bg = background === "cream" ? "bg-[var(--color-surface-alt)]" : "bg-white";

  return (
    <Section className={`${bg} py-20 md:py-28`}>
      <div className="mx-auto max-w-[800px] px-5 md:px-8">
        {overline && <Overline>{overline}</Overline>}
        <SectionHeading className="mb-10">{headline}</SectionHeading>
        <div className="divide-y divide-[var(--color-border)]">
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className="text-base md:text-lg font-medium text-[var(--color-foreground)] pr-4 group-hover:text-[var(--color-accent)] transition-colors">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--color-muted)] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-[var(--color-muted)] leading-relaxed text-[15px]">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

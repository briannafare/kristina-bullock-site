"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section, Overline, SectionHeading } from "@/components/ui/Section";
import { siteData } from "@/lib/data";

export function TestimonialSection() {
  const [active, setActive] = useState(0);
  const testimonials = siteData.testimonials;

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  return (
    <Section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[900px] px-5 md:px-8 text-center">
        <Overline>What Clients Say</Overline>
        <SectionHeading className="mb-12">Don&apos;t Take My Word for It</SectionHeading>

        <div className="relative min-h-[280px] md:min-h-[220px]">
          <Quote className="w-12 h-12 text-[var(--color-accent)] opacity-20 mx-auto mb-6" />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote className="font-[family-name:var(--font-heading)] text-xl md:text-2xl italic text-[var(--color-foreground)] leading-relaxed max-w-[750px] mx-auto">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                  ))}
                </div>
                <p className="font-semibold text-[var(--color-foreground)]">
                  {testimonials[active].reviewer}
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  {testimonials[active].context} &middot; {testimonials[active].source}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === active ? "bg-[var(--color-accent)]" : "bg-[var(--color-border)]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
